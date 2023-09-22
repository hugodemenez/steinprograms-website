import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const supabase = createRouteHandlerClient({ cookies })

  if(!email){
    return NextResponse.redirect(
      `${requestUrl.origin}?error=Please enter an email`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    )
  }

  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: `${requestUrl.origin}?email=${email}`
    }
  })

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
    `${requestUrl.origin}/?email=${email}`,
    {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    }
  )
}
