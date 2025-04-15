'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FFF5D6] flex flex-col items-center pt-40 px-4 md:px-8">
      <div className="max-w-4xl w-full">
        <div className="flex items-center mb-10">
          <h1 className="text-5xl font-bold text-[#4A3C32]">About Rant and Heal</h1>
          <div className="ml-4 h-12 w-12 rounded-full bg-[#FFB36B] flex items-center justify-center">
            <span className="text-white text-2xl">♥</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#FBE3A2] mb-8">
          <h2 className="text-2xl font-bold text-[#4A3C32] mb-4">Our Mission</h2>
          <p className="text-[#7D6958] mb-6 leading-relaxed">
          Rant and Heal is more than just a website — it's a soft corner for heavy hearts.  It's a space where you can let it all out, unfiltered and unjudged. Whether you're overwhelmed, anxious, lost, or just need someone to listen, here, your feelings are valid. This is your safe place to rant — to say what you can't say anywhere else — and begin to heal.
          </p>
          <p className="text-[#7D6958] mb-6 leading-relaxed">
          We understand that healing isn't always linear, and sometimes, all it takes is a moment of release and a warm plate of comfort. That's why we pair emotional support with something as grounding as our signature comfort food — momo — to help you feel held, even when the world feels too loud.
          </p>
          <p className="text-[#7D6958] mb-6 leading-relaxed">Most importantly, Rant and Heal is on a mission: <br />
            To break the stigma.<br />
            To remind you that asking for help is not weakness, it's strength.<br />
            That you don't have to “have it all together” all the time.<br />
            And that mental health matters — especially yours.<br />
            <br />
            We're here to remind you:<br />
            You're not “too much.”<br />
            You're not alone.<br />
            You're not broken.<br />

            You're healing — and we're here for every step of it.<br />
            <br />
            So come as you are. Rant it out. Heal a little. And let's rewrite what mental health looks like-together.</p>
          
          <h2 className="text-2xl font-bold text-[#4A3C32] mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#FFFAEB] p-6 rounded-2xl border border-[#FBE3A2]">
              <div className="w-12 h-12 bg-[#FFCB85] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4A3C32] mb-2">Express Yourself</h3>
              <p className="text-[#7D6958]">
                Use our "Let It Go" feature to express your thoughts and feelings without judgment.
              </p>
            </div>
            
            <div className="bg-[#FFFAEB] p-6 rounded-2xl border border-[#FBE3A2]">
              <div className="w-12 h-12 bg-[#FFCB85] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4A3C32] mb-2">Talk It Through</h3>
              <p className="text-[#7D6958]">
                Have a voice conversation with our AI Companion - Momo, who is there to listen and provide support.
              </p>
            </div>
            
            <div className="bg-[#FFFAEB] p-6 rounded-2xl border border-[#FBE3A2]">
              <div className="w-12 h-12 bg-[#FFCB85] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4A3C32] mb-2">Get Professional Help</h3>
              <p className="text-[#7D6958]">
                Book appointments with licensed therapists when you need more personalized support.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-[#4A3C32] mb-4">Our Values</h2>
          <ul className="list-disc pl-5 text-[#7D6958] mb-6 space-y-2">
            <li><span className="font-semibold text-[#4A3C32]">Privacy:</span> Your data is protected and your thoughts remain confidential.</li>
            <li><span className="font-semibold text-[#4A3C32]">Accessibility:</span> Mental health support should be available to everyone.</li>
            <li><span className="font-semibold text-[#4A3C32]">Compassion:</span> We approach every interaction with understanding and empathy.</li>
            <li><span className="font-semibold text-[#4A3C32]">Progress:</span> We believe in the power of small steps toward healing.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#4A3C32] mb-4">Who We Help</h2>
          <p className="text-[#7D6958] mb-6 leading-relaxed">
            Rant and Heal is for anyone who needs an emotional outlet or mental health support. 
            Whether you're dealing with everyday stress, working through complex emotions, or 
            just need someone to talk to, our platform is here for you. We're not a replacement 
            for professional therapy, but we're a supportive first step and complement to your 
            mental health journey.
          </p>
        </div>
        
        {/* Call to action */}
        <div className="bg-[#FBE3A2] p-8 rounded-3xl text-center mb-10 shadow-lg">
          <h2 className="text-2xl font-bold text-[#4A3C32] mb-4">Ready to Start Your Healing Journey?</h2>
          <p className="text-[#7D6958] mb-6">
            Join us to take steps toward better mental health every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <Button className="px-6 py-3 bg-[#E38E74] hover:bg-[#D47A60] text-white rounded-full">
                Get Started Now
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="px-6 py-3 border-[#E38E74] text-[#4A3C32] hover:bg-[#FFECD6] rounded-full"
              onClick={() => router.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 
