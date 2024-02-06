'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';

export async function getUser(){
  const supabase = createServerComponentClient({ cookies })
  
  const {data: { user }} = await supabase.auth.getUser()
  return user;
}

export async function isAuthenticated(){
  const user = await getUser();
  const authenticated = user?true:false;

  return authenticated;
}

export async function logout(){
  const supabase = createRouteHandlerClient({ cookies })
  await supabase.auth.signOut()
}