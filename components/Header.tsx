import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-muted shadow-sm px-4 md:px-10 h-30 flex justify-between items-center">
      <nav className="container mx-auto flex flex-wrap items-center justify-between min-h-[60px] py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Rant & Heal Logo"
            height={30}
            width={180}
            className="h-auto w-auto max-w-[150px] md:max-w-[200px]"
          />
        </Link>

        {/* Buttons */}
        <div className="flex items-center space-x-3 md:space-x-5 mt-3 md:mt-0">
          <SignedIn>
            <Link href="/appointment">
              <Button className="flex items-center space-x-2">
                <Image
                  src="/calendar-icon.png"
                  alt="Book an Appointment"
                  width={20}
                  height={20}
                />
                <span className="hidden md:inline">Book an Appointment</span>
              </Button>
            </Link>
            <div className="pt-1">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="cursor-pointer">
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
