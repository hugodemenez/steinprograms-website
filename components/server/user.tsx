'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'

export async function getUser(){
  const supabase = createServerComponentClient({ cookies })
  
  const {data: { user }} = await supabase.auth.getUser()
  const authenticated = user?true:false;

  return authenticated;
}

export async function logout(){
  const supabase = createRouteHandlerClient({ cookies })
  await supabase.auth.signOut()
}