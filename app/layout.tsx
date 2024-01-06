import './globals.css'

import { Analytics } from '@vercel/analytics/react';
import {Providers} from "@/components/providers";
import Header from "@/components/header";
import Footer from '@/components/footer';
import Notifications from '@/components/notifications';
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
    <html lang="en" className='dark:dark' >
      <body className="flex flex-col  overflow-x-hidden min-h-screen  max-w-5xl mx-auto dark:dark">
        <Providers>
          <Header></Header>
          <div className='min-h-screen'>

          {children}
          </div>
          <Notifications></Notifications>
          <Toaster/>
          <Footer></Footer>
        </Providers>
      </body>
      <Analytics></Analytics>
    </html>
  )
}
