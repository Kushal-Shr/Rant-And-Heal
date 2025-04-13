'use client';

import React from 'react';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';

interface AgentProps {
  callStatus: 'ACTIVE' | 'INACTIVE';
  isSpeaking: boolean;
}

const Agent = ({ callStatus, isSpeaking }: AgentProps) => {
  const { user } = useUser();
  const username = user?.username || user?.fullName || 'User';
  const profileImage = user?.imageUrl;

  return (
    <div className="flex gap-10 flex-wrap justify-center">
      {/* Agent Card */}
      <div className="relative flex flex-col items-center border-4 border-white w-[350px] h-[420px] rounded-3xl p-6 bg-[#FFECD6]/10">
        {isSpeaking &&(
          <span className="absolute animate-ping rounded-full w-[150px] h-[150px] mt-22 bg-[#FFCC80] opacity-20 z-0"></span>
        )}
        <Image
          src="/momo.png"
          alt="AI Psychologist"
          width={270}
          height={270}
          className="object-cover rounded-full z-10"
        />
        <h3 className="text-xl font-semibold text-[#4A3C32] z-10">MoMoBuddy</h3>
      </div>

      {/* User Card - only if call is active */}
      {callStatus === 'ACTIVE' && (
        <div className="relative flex flex-col items-center border-4 border-white w-[350px] h-[420px] rounded-3xl py-25 bg-[#FFECD6]/10 space-y-19">
          
          {profileImage && (
            <Image
              src={profileImage}
              alt={username}
              width={180}
              height={180}
              className="object-cover rounded-full z-10"
            />
          )}
          <h3 className="mt-1 text-xl font-semibold text-[#4A3C32] z-10">{username}</h3>
        </div>
      )}
    </div>
  );
};

export default Agent;
