"use server";
import { createServerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

async function getSupabaseClient() {
  // Check if Supabase is configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  try {
    const cookieStore = await cookies();
    return createServerClient(
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

export async function sendOTP(email:string){
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) {
      return { data: null, errorMessage: 'Supabase is not configured' };
    }
    // Redirects the user to OTP modal form
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    })
    if (error){
      console.log("ERROR OTP SENDING:",error.message)
      const errorMessage = error.message    
      return {data,errorMessage}
    }
    console.log(JSON.stringify(data))
    return {data}
  } catch (error) {
    console.warn('Failed to send OTP:', error);
    return { data: null, errorMessage: 'Failed to send OTP' };
  }
}


export async function validateOTP(email:string,token:string){
    try {
        const supabase = await getSupabaseClient()
        if (!supabase) {
            return { data: null, errorMessage: 'Supabase is not configured' };
        }
        const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})

        if (error){
            console.log("ERROR OTP VALIDATION:",error.message)
            const errorMessage = error.message    
            return {data,errorMessage}
        }

        return {data}
    } catch (error) {
        console.warn('Failed to validate OTP:', error);
        return { data: null, errorMessage: 'Failed to validate OTP' };
    }
}