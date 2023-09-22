import ContactEmail from '@/components/contact-email';
import { NextResponse } from 'next/server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = String(formData.get('email'))
    const firstName = String(formData.get('first-name'))
    const lastName = String(formData.get('last-name'))
    const phoneNumber = String(formData.get('phone-number'))
    const message = String(formData.get('message'))
    
    try {
        const data = await resend.emails.send({
          from: 'Stein Programs <team@steinprograms.com>',
          to: email,
          subject: 'Contact from Stein Programs',
          react: ContactEmail({ message, firstName, lastName, phoneNumber, email }),
          text: "",
        });
        
        if (data.id){
          return NextResponse.redirect(
            `${requestUrl.origin}?message=We've received your message and will get in touch soon !`,
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