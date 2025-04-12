import React from 'react';
import Image from 'next/image';

const Agent = () => {
  const isSpeaking = true;

  return (
    <div className='relative flex flex-col items-center border-4 border-white w-[350px] h-[420px] rounded-3xl p-6 bg-white/10'>
      {/* Speaking animation */}
      {isSpeaking && (
        <span className='absolute animate-ping rounded-full w-[270px] h-[270px] bg-gray-800 opacity-30 z-0'></span>
      )}

      <Image
        src="/momo.png"
        alt="AI Psychologist"
        width={250}
        height={250}
        className='object-cover rounded-full z-10'
      />
      <h3 className='mt-4 text-xl font-semibold text-white z-10'>MoMo</h3>
    </div>
  );
};

export default Agent;
