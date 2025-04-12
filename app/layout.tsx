import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider"
import { dark } from "@clerk/themes";

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
      baseTheme: dark,
    }}>
      <html lang="en" className="dark" suppressHydrationWarning = {true}>
        <body className={`roboto_condensed.className antialiased bg-black`}>
          {/* header */}
          <header>
            <Header />
          </header>
          {/* main */}
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="py-12 bg-muted">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>
                Made with Love by Kushal Shrestha
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
