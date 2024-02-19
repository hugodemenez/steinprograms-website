"use server";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function sendOTP(email:string){
  const supabase = createRouteHandlerClient({ cookies })
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
}


export async function validateOTP(email:string,token:string){
    const supabase = createRouteHandlerClient({ cookies })
    const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})

    if (error){
        console.log("ERROR OTP VALIDATION:",error.message)
        const errorMessage = error.message    
        return {data,errorMessage}
    }

    return {data}
}