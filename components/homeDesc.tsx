import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const HomeDesc = () => {
  return (
    <section className="w-full flex justify-center items-center pt-60 px-4 md:px-0 flex-col space-y-16">
      <div className="space-y-10 flex justify-center items-center flex-col text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold">RANT AND HEAL</h1>
          <p className="text-lg md:text-2xl mt-4">Where Every Rant Begins the Journey to Healing</p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <Link href="/dashboard">
            <Button size="lg" className="w-full md:w-48 py-10 text-center">
              <div>
                <p className="font-bold">Get Started</p>
                <p className="opacity-75 text-sm">Begin your healing journey</p>
              </div>
            </Button>
          </Link>

          <Link href="#">
            <Button size="lg" className="w-full md:w-48 py-10 text-center" variant="outline">
              <div>
                <p className="font-bold">Watch Demo</p>
                <p className="opacity-75 text-sm">See how it works</p>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className="text-center w-full md:w-1/2 space-y-6 px-2">
        <h2 className="text-2xl md:text-4xl font-extrabold">What is Rant and Heal?</h2>
        <p className="text-base md:text-lg text-gray-700 pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aspernatur, unde quas reprehenderit voluptatibus illo inventore ut non facere, a culpa. Earum sint et officia obcaecati! Similique illum saepe error impedit ab dolore, ipsum est facilis non provident ducimus enim tempore, veniam aperiam blanditiis ullam!
        </p>
      </div>
    </section>
  )
}

export default HomeDesc
