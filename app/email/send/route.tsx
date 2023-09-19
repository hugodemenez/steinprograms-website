import { EmailTemplate } from '@/app/components/email-template';
import { NextResponse } from 'next/server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = String(formData.get('email'))
    
    try {
        const data = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: email,
          subject: 'SteinPrograms : Newsletter subscription confirmation',
          react: EmailTemplate({ firstName: 'John' }),
          text: "",
        });
    
        return NextResponse.json(data);
      } catch (error) {
        return NextResponse.json({ error });
      }

  return NextResponse.redirect(
    `${requestUrl.origin}?message=Check email to continue sign in process`,
    {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    }
  )
}
