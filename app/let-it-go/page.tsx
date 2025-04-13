'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { db } from '@/firebase/client';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';

const LetItGoPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const [thoughts, setThoughts] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [encourageMessage, setEncourageMessage] = useState('You are doing great!');
  
  const encourageMessages = [
    'You are doing great!',
    'Let it all out, it helps!',
    'You\'re so brave for sharing!',
    'Feel the release...',
    'This is healing in action!',
    'Your feelings matter.'
  ];

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setThoughts(e.target.value);
    
    // Change the encouraging message occasionally as user types
    if (e.target.value.length % 50 === 0 && e.target.value.length > 0) {
      const randomIndex = Math.floor(Math.random() * encourageMessages.length);
      setEncourageMessage(encourageMessages[randomIndex]);
    }
  };

  const handleReleaseThoughts = async () => {
    setThoughts(''),
    alert('Your Thoughts has been released')
  };

  return (
    <div className="min-h-screen bg-[#FFF5D6] flex flex-col items-center justify-center p-4 pt-30 relative">
      {/* Stars */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-[#FBE3A2] text-2xl opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'rotate(45deg)'
            }}
          >
            ★
          </div>
        ))}
        
        {/* Clouds */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={`cloud-${i}`}
            className="absolute bg-white opacity-20 rounded-full"
            style={{
              width: `${50 + Math.random() * 100}px`,
              height: `${30 + Math.random() * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-md w-full flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#4A3C32] pb-7">Let it Go</h1>
        
        <div className="flex items-center mb-6">
          {/* Dumpling Character */}
          <Image src='/momo-2.png' alt='momo' height={100} width={100}/>
          
          <div className="bg-white rounded-3xl px-5 py-3 max-w-[200px] border border-[#FBE3A2]">
            <p className="text-[#4A3C32] font-medium">{encourageMessage}</p>
          </div>
        </div>
        
        <div className="w-full bg-white rounded-3xl p-6 shadow-lg relative overflow-hidden border border-[#FBE3A2]">
          <Textarea
            placeholder="Type your feelings..."
            className="border-none outline-none bg-transparent resize-none h-60 placeholder-muted text-[#4A3C32] font-medium w-full p-4"
            value={thoughts}
            onChange={handleTextChange}
          />
          
          {/* Leaf decoration */}
          <div className="absolute bottom-4 right-4 text-muted opacity-40">
            <svg width="40" height="40" viewBox="0 0 24 24">
              <path 
                fill="currentColor" 
                d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" 
              />
            </svg>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
          <Button
            onClick={() => router.push('/appointments')}
            variant="secondary"
            className="px-8 py-3 rounded-4xl border-[#E38E74] text-[#4A3C32] hover:bg-[#FFECD6] font-medium"
          >
            Book an Appointment
          </Button>
          
          <Button
            onClick={handleReleaseThoughts}
            disabled={isSending || !thoughts.trim()}
            className={`px-8 py-3 rounded-4xl font-medium ${
              isSending ? 'bg-blue-400' : 'bg-[#FFB36B] hover:bg-[#FFCB85]'
            } text-white transition-all duration-300`}
          >
            {isSending ? 'Letting go...' : 'Release'}
          </Button>
          
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="px-8 py-3 rounded-4xl border-[#E38E74] text-[#4A3C32] hover:bg-[#FFECD6] font-medium"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LetItGoPage; 