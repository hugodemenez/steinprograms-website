import { MagicLinkEmail } from '@/app/components/email-template';
import { NextResponse } from 'next/server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = String(formData.get('email'))
    
    try {
        const data = await resend.emails.send({
          from: 'Stein Programs <team@steinprograms.com>',
          to: email,
          subject: 'Newsletter subscription',
          react: MagicLinkEmail({ loginCode: 'ldfkfd-grdftd-sfdtre' }),
          text: "",
        });
        
        if (data.id){
          return NextResponse.redirect(
            `${requestUrl.origin}?message=You've successfully subscribed to our newsletter. Thank you !`,
            {
              // a 301 status is required to redirect from a POST to a GET route
              status: 301,
            }
          )
        }
        return NextResponse.json({ data });
      } catch (error) {
        return NextResponse.json({ error });
      }

  
}
