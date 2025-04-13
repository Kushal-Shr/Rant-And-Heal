import { SignIn } from "@clerk/nextjs"

const Page = () => {
  return (
    <SignIn 
      forceRedirectUrl={'dashboard'} 
      appearance={{
        elements: {
          formButtonPrimary: 'bg-[#E38E74] hover:bg-[#D47A60]',
          card: 'bg-[#FFF8EE] shadow-md',
          headerTitle: 'text-[#4A3C32]',
          headerSubtitle: 'text-[#7D6958]',
          formFieldInput: 'border-[#F3DFC1]',
          footerActionLink: 'text-[#E38E74] hover:text-[#D47A60]'
        }
      }}
    />
  )
}

export default Page
