'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { vapi } from '@/lib/vapi.sdk';
import Agent from '@/components/Agent';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';

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
    setMessages([]);
  };

  const latestMessage = messages[messages.length - 1]?.content;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black pt-30 space-y-6">
      {/* Agent and User Cards */}
      <Agent callStatus={callStatus} isSpeaking={isSpeaking} />

      {/* Message Preview */}
      {latestMessage && callStatus === CallStatus.ACTIVE && (
        <div className="border-2 bg-muted px-20 py-6 rounded-4xl text-white">
          <p>{latestMessage}</p>
        </div>
      )}

      {/* Call Buttons */}
      <div>
        {callStatus === CallStatus.ACTIVE ? (
          <Button onClick={handleDisconnect} className="bg-red-500 text-white px-10 py-7 rounded-4xl">
            End Call
          </Button>
        ) : (
          <Button onClick={handleCall} className="bg-green-500 text-white px-10 py-7 rounded-4xl">
            Start Call
          </Button>
        )}
      </div>
    </div>
  );
};

export default Page;
