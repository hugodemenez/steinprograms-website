import './globals.css'

import { Analytics } from '@vercel/analytics/react';
import {Providers} from "../components/providers";
import Header from "../components/header";
import Footer from '../components/footer';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';


export const metadata = {
  title: 'SteinPrograms',
  description: 'Official website of SteinPrograms',
}


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
    <html lang="en">
      <body className="flex flex-col overflow-x-hidden min-h-screen">
        <Providers>
          <Header user={user}></Header>
          <div className='min-h-screen'>
          {children}
          </div>
          <Footer></Footer>
        </Providers>
      </body>
      <Analytics></Analytics>
    </html>
  )
}
