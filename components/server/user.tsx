'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';

export async function getUser() {
  const supabase = createServerComponentClient({ cookies })

  const { data: { user } } = await supabase.auth.getUser()
  return user;
}

export async function isAuthenticated() {
  const user = await getUser();
  const authenticated = user ? true : false;

  return authenticated;
}

export async function logout() {
  const supabase = createRouteHandlerClient({ cookies })
  await supabase.auth.signOut()
}

export async function getUserApiKey(user: any) {
  if (!user) return 'UNABLE TO FIND USER';
  const supabase = createServerComponentClient({ cookies })

  let { data: users, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', user.id)

  if (users?.length == 0) {
    return 'GENERATE API KEY'
  }
  return users![0].api_key;
}

export async function updateUserAPIKey(apiKey:string) {
  const supabase = createServerComponentClient({ cookies })

  const { data: { user } } = await supabase.auth.getUser()

  console.log(apiKey)
  const { data, error } = await supabase
    .from('users')
    .insert([
      { api_key: apiKey},
    ])
    .select()

  // If error then try updating
  if (error) {
    const { data, error:updateError } = await supabase
      .from('users')
      .update({ api_key: apiKey })
      .eq('user_id', user!.id)
      .select()
    return {data,updateError};
  }

  return {data}

}