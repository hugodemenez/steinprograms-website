import { ContactEmailClient, ContactEmailTeam } from '@/components/contact-email';
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
    

    try{
      // Send message to team inbox
      if (process.env.TEAM_EMAIL){
        const teamSummary = await resend.emails.send({
          from: `Stein Programs <${process.env.CONTACT_EMAIL}>`,
          to: process.env.TEAM_EMAIL,
          subject: 'Contact from website',
          react: ContactEmailTeam({ message, firstName, lastName, phoneNumber, email }),
          text: "",
        });
      }

  } catch (error) {
    return NextResponse.json({ error });
  }

    try {
      // Send a summary email to the user
        const data = await resend.emails.send({
          from: `Stein Programs <${process.env.TEAM_EMAIL}>`,
          to: email,
          subject: 'Summary of your contact',
          react: ContactEmailClient({ message, firstName, lastName, phoneNumber, email }),
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