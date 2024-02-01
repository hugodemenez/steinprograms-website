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
    <html lang="en" className='dark:dark bg-background grid grid-cols-[1fr_minmax(232px,1024px)_1fr]' >
      <body className="col-start-2 m-0 flex flex-col  overflow-x-hidden min-h-screen  max-w-5xl dark:dark">
        <Providers>
          <Header></Header>
          <div className='min-h-screen'>
            {children}
          </div>
          <Toaster />
          <Footer></Footer>
        </Providers>
      </body>
      <Analytics></Analytics>
    </html>
  )
}
