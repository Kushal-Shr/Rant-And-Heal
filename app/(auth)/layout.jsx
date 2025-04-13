import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-[#FBE3A2] py-10'>
      <div className='w-full max-w-md px-4'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
