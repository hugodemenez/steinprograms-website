import './globals.css'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Analytics } from '@vercel/analytics/react';
import {Providers} from "@/components/providers";
import Header from "@/components/header";
import Footer from '@/components/footer';
import Messages from '@/components/messages';


export const metadata = {
  title: 'SteinPrograms',
  description: 'Next generation crypto trading tools',
}

export const dynamic = 'force-dynamic'

async function getUser(){
  'use server';
  const supabase = createServerComponentClient({ cookies })
  
  const {
    data: { user },
  } = await supabase.auth.getUser()


  return user;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  const user = await getUser();
  
  return (
    <html lang="en" className='bg-white dark:bg-black'>
      <body className="flex flex-col  overflow-x-hidden min-h-screen  max-w-5xl mx-auto">
        <Providers>
          <Header user={user}></Header>
          <div className='min-h-screen'>
          {children}
          </div>
          <Messages></Messages>
          <Footer></Footer>
        </Providers>
      </body>
      <Analytics></Analytics>
    </html>
  )
}
