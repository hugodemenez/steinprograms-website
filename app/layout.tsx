import './globals.css'

import { Analytics } from '@vercel/analytics/react';
import {Providers} from "@/components/providers";
import Header from "@/components/header";
import Footer from '@/components/footer';
import Notifications from '@/components/notifications';

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
    <html lang="en" className='bg-white dark:bg-black'>
      <body className="flex flex-col  overflow-x-hidden min-h-screen  max-w-5xl mx-auto">
        <Providers>
          <Header></Header>
          <div className='min-h-screen'>
          {children}
          </div>
          <Notifications></Notifications>
          <Footer></Footer>
        </Providers>
      </body>
      <Analytics></Analytics>
    </html>
  )
}
