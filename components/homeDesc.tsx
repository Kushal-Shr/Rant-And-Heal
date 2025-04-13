import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const HomeDesc = () => {
  return (
    <section className="w-full flex justify-center items-center pt-50 px-4 md:px-0 flex-col space-y-16 bg-[#FFF5D6]">
      <div className="space-y-10 flex justify-center items-center flex-col text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#4A3C32]">RANT AND HEAL</h1>
          <p className="text-lg md:text-2xl mt-4 text-[#7D6958]">Where Every Rant Begins the Journey to Healing</p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <Link href="/dashboard">
            <Button size="lg" className="w-full md:w-48 py-10 text-center bg-[#E38E74] hover:bg-[#D47A60] text-white">
              <div>
                <p className="font-bold">Get Started</p>
                <p className="opacity-75 text-sm">Begin your healing journey</p>
              </div>
            </Button>
          </Link>

          <Link href="/about">
            <Button size="lg" className="w-full md:w-48 py-10 text-center bg-transparent border-2 border-[#E38E74] text-[#E38E74] hover:bg-[#FFECD6]" variant="outline">
              <div>
                <p className="font-bold">About Us</p>
                <p className="opacity-75 text-sm">Learn more</p>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl w-full bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#FBE3A2] mb-8 text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-[#4A3C32]">What is Rant and Heal?</h2>
        <p className="text-[#7D6958] leading-relaxed mb-8">
        Rant and Heal is more than a website — it's your safe haven. A space built with empathy, understanding, and a belief that no one needs to suffer alone. We think that sometimes life becomes too much, too complicated, and just too heavy to carry. We also understand how hard it is to express those feelings — especially in a world that typically asks us to "stay strong" and "keep it together." That's why we created Rant and Heal — a safe corner of the web where you don't have to pretend, put on a show, or swallow things anymore.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#FFFAEB] p-6 rounded-2xl border border-[#FBE3A2]">
            <div className="w-12 h-12 bg-[#FFCB85] rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-[#4A3C32] mb-2">Express Yourself</h3>
            <p className="text-[#7D6958]">
              Use our "Let It Go" feature to express your thoughts without judgment.
            </p>
          </div>
          
          <div className="bg-[#FFFAEB] p-6 rounded-2xl border border-[#FBE3A2]">
            <div className="w-12 h-12 bg-[#FFCB85] rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-[#4A3C32] mb-2">Talk It Through</h3>
            <p className="text-[#7D6958]">
              Have a voice conversation with our AI companion for support.
            </p>
          </div>
          
          <div className="bg-[#FFFAEB] p-6 rounded-2xl border border-[#FBE3A2]">
            <div className="w-12 h-12 bg-[#FFCB85] rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-[#4A3C32] mb-2">Get Help</h3>
            <p className="text-[#7D6958]">
              Book appointments with licensed therapists when needed.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <Link href="/about">
            <Button className="px-6 py-3 bg-transparent border border-[#E38E74] text-[#E38E74] hover:bg-[#FFECD6] rounded-full">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeDesc
