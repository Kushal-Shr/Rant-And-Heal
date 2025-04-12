'use client';

import React, { useState } from 'react';
import Agent from '@/components/AgentCard';
import UserCard from '@/components/UserCard';
import { Button } from '@/components/ui/button';

enum CallStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE'
}

const Page = () => {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const messages = [
    "What's your name?",
    "My Name is Shubhangi.",
  ]
  const lastMessage = messages[messages.length - 1]

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black pt-30 space-y-6'>
      <div className='flex flex-row gap-10 flex-wrap justify-between'>
        <Agent />
        {callStatus === CallStatus.ACTIVE && <UserCard />}
      </div>

      {messages.length > 0 && callStatus === CallStatus.ACTIVE && 
        <div className='border-2 bg-muted px-20 py-6 rounded-4xl'>
          <p>
            {lastMessage}
          </p>
        </div>
        }

      <div className="">
        {callStatus === CallStatus.ACTIVE ? (
          <Button onClick={() => setCallStatus(CallStatus.INACTIVE)}className='bg-red-500 text-white px-10 py-7 rounded-4xl'>
            End Call
          </Button>
        ) : (
          <Button onClick={() => setCallStatus(CallStatus.ACTIVE)} className="bg-green-500 text-white px-10 py-7 rounded-4xl">
            Start Call
          </Button>
        )}
      </div>
    </div>
  );
};

export default Page;
