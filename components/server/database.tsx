'use server';
import { Database } from '@/types/supabase';
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { User } from 'lucide-react';
import { cookies } from 'next/headers';

async function getSupabaseClient() {
  // Check if Supabase is configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  try {
    const cookieStore = await cookies();
    return createServerClient<Database>(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          },
        },
      }
    );
  } catch (error) {
    console.warn('Failed to create Supabase client:', error);
    return null;
  }
}

export async function getUser() {
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) {
      return null;
    }

    const { data: { user } } = await supabase.auth.getUser()
    return user;
  } catch (error) {
    console.warn('Failed to get user from Supabase:', error);
    return null;
  }
}

export async function isAuthenticated() {
  try {
    const user = await getUser();
    return user ? true : false;
  } catch (error) {
    console.warn('Failed to check authentication:', error);
    return false;
  }
}

export async function logout() {
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) {
      return;
    }
    await supabase.auth.signOut()
  } catch (error) {
    console.warn('Failed to logout from Supabase:', error);
  }
}

export async function getUserData(user: any): Promise<Database["public"]["Tables"]["users"]["Row"] | undefined> {
  if (!user) return undefined
  
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) {
      return undefined;
    }

    let { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('user_id', user.id)

    if (users?.length == 0) {
      return undefined
    }
    return users![0]
  } catch (error) {
    console.warn('Failed to get user data from Supabase:', error);
    return undefined;
  }
}

export async function updateUserAPIKey(apiKey:string) {
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) {
      return { data: null, error: new Error('Supabase is not configured') };
    }

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
  } catch (error) {
    console.warn('Failed to update user API key:', error);
    return { data: null, error };
  }
}

export async function updateDatabaseSubscription(userId:string, subscriptionId:string, tier:number){
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) {
      return { data: null, error: new Error('Supabase is not configured') };
    }

    const { data, error } = await supabase
      .from('users')
      .update({ subscriptionId: subscriptionId, tier: tier })
      .eq('user_id', userId)
      .select()

    return {data,error}
  } catch (error) {
    console.warn('Failed to update database subscription:', error);
    return { data: null, error };
  }
}

export async function cancelDatabaseSubscription(subscriptionId:string){
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) {
      return { data: null, error: new Error('Supabase is not configured') };
    }

    const { data, error } = await supabase
      .from('users')
      .update({ subscriptionId: null, tier: 0 })
      .eq('subscriptionId', subscriptionId)
      .select()

    return {data,error}
  } catch (error) {
    console.warn('Failed to cancel database subscription:', error);
    return { data: null, error };
  }
}