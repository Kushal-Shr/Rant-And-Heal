import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rant And Heal",
  description: "Your AI Psychologist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      elements: {
        formButtonPrimary: 'bg-[#E38E74] hover:bg-[#D47A60]',
        card: 'bg-[#FFF8EE]',
        headerTitle: 'text-[#4A3C32]',
        headerSubtitle: 'text-[#7D6958]',
      }
    }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${roboto_condensed.className} antialiased bg-[#FFECD6]`}>
          {/* header */}
          <header className="bg-[#FFF8EE] shadow-sm">
            <Header />
          </header>
          {/* main */}
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
