import './globals.css'

import { Analytics } from '@vercel/analytics/react';
import { Providers } from "@/components/providers";
import Header from "@/components/header";
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/sonner"
import { Cantarell } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils';
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './Whyte.woff2' })

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
    <html lang="en" className={cn(myFont.className,'dark:dark bg-background')} >
      <body className="col-start-2 m-0 flex flex-col  overflow-x-hidden min-h-screen   dark:dark scroll-smooth">
        <Providers>
          <div className='min-h-screen max-w-5xl mx-auto'>
          <Header></Header>
          <div className={cn('min-h-screen')}>
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
