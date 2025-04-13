'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#FFF8EE] shadow-sm px-3 sm:px-4 md:px-10 h-auto flex justify-between items-center border-b border-[#F3DFC1]">
      <nav className="container mx-auto flex flex-wrap items-center justify-between min-h-[60px] py-2 md:py-3 relative w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Rant & Heal Logo"
            height={30}
            width={180}
            className="h-auto w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[200px]"
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-[#FFF0DC] text-[#7D6958]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Buttons - Desktop */}
        <div className={`${isMenuOpen ? 'flex flex-col w-full pt-4 pb-2 space-y-3' : 'hidden'} md:flex md:items-center md:flex-row md:space-x-5 md:space-y-0 md:w-auto md:pt-0 md:pb-0`}>
          <SignedIn>
            <Link href="/let-it-go" className="w-full md:w-auto">
              <Button 
                variant="outline" 
                className="flex items-center px-3 py-2 md:px-5 md:py-5 space-x-2 border-2 border-[#7D6958] text-[#4A3C32] hover:bg-[#FFF0DC] w-full md:w-auto"
              >
                <Image
                  src="/let-go-icon.png"
                  alt="Let It Go"
                  width={25}
                  height={25}
                />
                <span className="text-sm md:text-base">Let It Go</span>
              </Button>
            </Link>
            <Link href="/appointment" className="w-full md:w-auto">
              <Button className="flex items-center px-3 py-2 md:px-10 md:py-5 space-x-2 bg-[#E38E74] hover:bg-[#D47A60] w-full md:w-auto">
                <Image
                  src="/calendar-icon.png"
                  alt="Book an Appointment"
                  width={18}
                  height={18}
                />
                <span className="text-sm md:text-base">Book an Appointment</span>
              </Button>
            </Link>
            <div className="pt-1 flex justify-center md:block">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="cursor-pointer border-[#E38E74] text-[#E38E74] hover:bg-[#FFECD6] w-full md:w-auto">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  )
}

export default Header
