'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { vapi } from '@/lib/vapi.sdk';
import Agent from '@/components/Agent';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { db } from '@/firebase/client'; // your client-side Firestore
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Link from 'next/link';

enum CallStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE'
}

interface SavedMessage {
  role: 'user' | 'system' | 'assistant';
  content: string;
}

const Page = () => {
  
  const router = useRouter();
  const { user } = useUser();

  const username = user?.username || user?.fullName || 'User';
  const firstName = user?.firstName;
  const userId = user?.id;

  const [isSpeaking, setisSpeaking] = useState(false);
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);

  useEffect(() => {
    const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
    const onCallEnd = () => {
      setCallStatus(CallStatus.INACTIVE)
    };

    const onMessage = (message: any) => {
      if (message.type === 'transcript' && message.transcriptType === 'final') {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => setisSpeaking(true);
    const onSpeechEnd = () => setisSpeaking(false);
    const onError = (error: Error) => console.log('Error', error);

    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('message', onMessage);
    vapi.on('speech-start', onSpeechStart);
    vapi.on('speech-end', onSpeechEnd);
    vapi.on('error', onError);

    return () => {
      vapi.off('call-start', onCallStart);
      vapi.off('call-end', onCallEnd);
      vapi.off('message', onMessage);
      vapi.off('speech-start', onSpeechStart);
      vapi.off('speech-end', onSpeechEnd);
      vapi.off('error', onError);
    };
  }, []);

  const handleCall = async () => {
    setCallStatus(CallStatus.ACTIVE);

    await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
      variableValues: {
        firstName,
        userid: userId,
      },
    });
  };

  const handleDisconnect = async () => {
    vapi.stop();
    setCallStatus(CallStatus.INACTIVE);
  
    if (!userId || messages.length === 0) return;
  
    try {
      // Save conversation to Firestore under users/{userId}/sessions
      await addDoc(collection(db, 'users', userId, 'sessions'), {
        messages,
        createdAt: serverTimestamp(),
      });
  
      console.log('✅ Conversation saved to Firebase');
    } catch (error) {
      console.error('❌ Error saving conversation:', error);
    }
  
    setMessages([]);
  };

  const latestMessage = messages[messages.length - 1]?.content;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary pt-30 space-y-6">
      {/* Agent and User Cards */}
      <Agent callStatus={callStatus} isSpeaking={isSpeaking} />

      {/* Message Preview */}
      {latestMessage && callStatus === CallStatus.ACTIVE && (
        <div className="border-2 border-themed bg-highlight px-20 py-6 rounded-4xl text-dark">
          <p>{latestMessage}</p>
        </div>
      )}

      {/* Call Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {callStatus === CallStatus.ACTIVE ? (
          <Button onClick={handleDisconnect} className="bg-red-500 text-white px-10 py-7 rounded-4xl">
            End Call
          </Button>
        ) : (
          <Button onClick={handleCall} className="bg-accent-secondary hover:bg-accent text-white px-10 py-7 rounded-4xl">
            Start Call
          </Button>
        )}
        
        <Link href="/let-it-go">
          <Button 
            variant="outline" 
            className="border-accent text-dark hover:bg-highlight px-10 py-7 rounded-4xl"
          >
            Let It Go
          </Button>
        </Link>

        <Link href="/about">
          <Button 
            variant="outline" 
            className="border-accent text-dark hover:bg-highlight px-10 py-7 rounded-4xl"
          >
            About Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
