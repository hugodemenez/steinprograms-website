import './globals.css'

import { Analytics } from '@vercel/analytics/react';
import { Providers } from "@/components/providers";
import Header from "@/components/header";
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
  title: 'SteinPrograms',
  description: 'Next generation crypto trading tools',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en" className='dark:dark bg-background' >
      <body className="col-start-2 m-0 flex flex-col  overflow-x-hidden min-h-screen   dark:dark scroll-smooth">
        <Providers>
          <div className='min-h-screen max-w-5xl mx-auto'>
          <Header></Header>
          <div className='min-h-screen'>
            {children}
          </div>
          <Footer></Footer>
          </div>
          <Toaster />
        </Providers>
      </body>
      <Analytics></Analytics>
    </html>
  )
}
