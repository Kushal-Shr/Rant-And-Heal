'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#FFF8EE]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content */}
        <div 
          className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fadeIn"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3C32] mb-6 leading-tight">
            Rant, Reflect, and Heal Your Mind
          </h1>
          <p className="text-lg md:text-xl text-[#6B5D4D] mb-8 leading-relaxed">
            Your safe space to express emotions, gain insights, and find clarity through AI-guided reflection and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/sign-up">
              <Button 
                size="lg" 
                className="bg-[#E38E74] hover:bg-[#D17A60] text-white w-full sm:w-auto"
              >
                Start Your Journey
              </Button>
            </Link>
            <Link href="#features">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#E38E74] text-[#E38E74] hover:bg-[#FFF0E5] w-full sm:w-auto"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Right Side - Image */}
        <div 
          className="w-full md:w-1/2 animate-fadeIn animate-delay-200"
        >
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image
              src="/hero-image.png"
              alt="Person finding peace through journaling and reflection"
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 