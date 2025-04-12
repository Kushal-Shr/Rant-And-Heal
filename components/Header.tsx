import {SignInButton,
    SignedIn,
    SignedOut,
    UserButton} from '@clerk/nextjs'

import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed h-30 flex items-center px-10 w-full bg-muted'>
        <nav className='container h-20 flex items-center justify-between'>
            <Link href = '/'>
                <Image src = "/logo.png" alt = "Rant & Heal Logo" height = {30} width = {200}/>
            </Link>
            <div className='flex items-center space-x-5'>
                <SignedIn>
                    <Link href = {"/appointment"}>
                        <Button>
                            <Image src = "/calendar-icon.png" alt='Book an Appointment' width={20} height={20}/>
                            <span className='hidden md:block'>Book an Appointment</span>
                        </Button>
                    </Link>
                    <div className="scale-120 pt-1"> 
                        <UserButton afterSignOutUrl='/' />
                    </div>
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <Button variant = "outline" className='cursor-pointer'>
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
