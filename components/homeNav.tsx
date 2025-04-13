'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';

const HomeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-[#FFF8EE] shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#4A3C32]">RANT AND HEAL</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li>
              <Link 
                href="/" 
                className="text-[#4A3C32] hover:text-[#E38E74] font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#features" 
                className="text-[#4A3C32] hover:text-[#E38E74] font-medium"
              >
                Features
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-[#4A3C32] hover:text-[#E38E74] font-medium"
              >
                About Us
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button 
                  variant="ghost" 
                  className="bg-[#E38E74] text-white hover:bg-[#D17A60]"
                >
                  Dashboard
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button variant="ghost" className="text-[#4A3C32] hover:text-[#E38E74]">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button 
                  className="bg-[#E38E74] text-white hover:bg-[#D17A60]"
                >
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#4A3C32]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFF8EE] p-4">
          <ul className="flex flex-col gap-4 mb-4">
            <li>
              <Link 
                href="/" 
                className="text-[#4A3C32] hover:text-[#E38E74] font-medium block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#features" 
                className="text-[#4A3C32] hover:text-[#E38E74] font-medium block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-[#4A3C32] hover:text-[#E38E74] font-medium block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-2">
            <SignedIn>
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  className="w-full bg-[#E38E74] text-white hover:bg-[#D17A60]"
                >
                  Dashboard
                </Button>
              </Link>
              <div className="py-2 flex justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  className="w-full text-[#4A3C32] hover:text-[#E38E74]"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className="w-full bg-[#E38E74] text-white hover:bg-[#D17A60]"
                >
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HomeNav; 