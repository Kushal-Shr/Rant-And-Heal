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
      <div className="relative flex flex-col items-center border-4 border-white w-[350px] h-[420px] rounded-3xl p-6 bg-white/10">
        {isSpeaking && (
          <span className="absolute animate-ping rounded-full w-[270px] h-[270px] bg-gray-800 opacity-30 z-0"></span>
        )}
        <Image
          src="/momo.png"
          alt="AI Psychologist"
          width={250}
          height={250}
          className="object-cover rounded-full z-10"
        />
        <h3 className="mt-4 text-xl font-semibold text-white z-10">MoMoBuddy</h3>
      </div>

      {/* User Card - only if call is active */}
      {callStatus === 'ACTIVE' && (
        <div className="relative flex flex-col items-center border-4 border-white w-[350px] h-[420px] rounded-3xl py-25 bg-white/10 space-y-19">
          
          {profileImage && (
            <Image
              src={profileImage}
              alt={username}
              width={180}
              height={180}
              className="object-cover rounded-full z-10"
            />
          )}
          <h3 className="mt-4 text-xl font-semibold text-white z-10">{username}</h3>
        </div>
      )}
    </div>
  );
};

export default Agent;
