import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#FFF8EE] border-t border-[#F3DFC1] py-6 md:py-8 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-0 sm:px-2 md:px-1 lg:px-20">
          {/* Logo and description */}
          <div className="col-span-1 text-center sm:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Rant & Heal Logo"
                height={30}
                width={180}
                className="h-auto w-auto max-w-[120px] sm:max-w-[150px] mb-3 md:mb-4 mx-auto sm:mx-0"
              />
            </Link>
            <p className="text-[#7D6958] text-xs sm:text-sm max-w-xs mx-auto sm:mx-0">
              A safe space to express yourself and find guidance from professional therapists.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1 text-center">
            <h3 className="font-medium text-[#4A3C32] mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/" className="text-[#7D6958] hover:text-[#E38E74] text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/let-it-go" className="text-[#7D6958] hover:text-[#E38E74] text-xs sm:text-sm">
                  Let It Go
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-[#7D6958] hover:text-[#E38E74] text-xs sm:text-sm">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1 text-center sm:text-right">
            <h3 className="font-medium text-[#4A3C32] mb-3 md:mb-4">Connect With Us</h3>
            <div className="flex justify-center sm:justify-end space-x-4 mb-3 md:mb-4">
              <Link href="https://instagram.com" className="text-[#7D6958] hover:text-[#E38E74]">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link href="https://facebook.com" className="text-[#7D6958] hover:text-[#E38E74]">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link href="https://twitter.com" className="text-[#7D6958] hover:text-[#E38E74]">
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </Link>
            </div>
            <p className="text-[#7D6958] text-xs sm:text-sm">
              Email: kushalshrestha@webster.edu
            </p>
            <p className="text-[#7D6958] text-xs sm:text-sm">
              Phone: +1 (314) 358-2358
            </p>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[#F3DFC1] text-center text-[#7D6958] text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Rant & Heal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 