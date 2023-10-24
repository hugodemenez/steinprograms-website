import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const token = String(formData.get('otp'))
  const supabase = createRouteHandlerClient({ cookies })
  
  // If the form has been submitted from OTP one
  if (token && email){
    const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})
    if (error) {
      return NextResponse.redirect(
        `${requestUrl.origin}?error=Could not authenticate user`,
        {
          // a 301 status is required to redirect from a POST to a GET route
          status: 301,
        }
      )
    }
    return NextResponse.redirect(
      `${requestUrl.origin}?message=Logged in successfully`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    )
  }
  return NextResponse.redirect(
    `${requestUrl.origin}?message=You forgot to enter your OTP, try again`,
    {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    }
  )
}
