import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const HomeDesc = () => {
  return (
    <section className='w-full flex justify-center items-center pt-55 flex-col space-y-20'>
        <div className='space-y-10 flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-7xl font-extrabold'>RANT AND HEAL</h1>
                <br />
                <p className='text-2xl'>A safe place to Heal</p>
            </div>
            <div className='space-x-5'>
                <Link href = '/dashboard'>
                    <Button size="lg" className = "py-12 w-50 cursor-pointer">
                        <div>
                            <p className='font-bold'>Get Started</p>
                            <br />
                            <p className='opacity-75'>Begin your healing journey</p>
                        </div>
                    </Button>
                </Link>

                <Link href= "#">
                    <Button size="lg" className = "w-50 py-12 cursor-pointer" variant = "outline">
                        <div>
                            <p className='font-bold'>Watch Demo</p>
                            <br />
                            <p className='opacity-75'>See how it works</p>
                        </div>
                    </Button>
                </Link>
            </div>
        </div>

        <div className='text-center w-[50%] space-y-7'>
            <h2 className='text-4xl font-extrabold'>What is Rant and Heal?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aspernatur, unde quas reprehenderit voluptatibus illo inventore ut non facere, a culpa. Earum sint et officia obcaecati! Similique illum saepe error impedit ab dolore, ipsum est facilis non provident ducimus enim tempore, veniam aperiam blanditiis ullam!</p>
        </div>
    </section>
  )
}

export default HomeDesc