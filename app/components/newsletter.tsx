'use client';
import Link from "next/link"
import {Button} from "@nextui-org/react";


export default function SubscribeNewsletter() {


  return (
    <div className="relative overflow-hidden max-w-5xl pb-16 sm:py-24 lg:py-32 mx-auto px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">Subscribe to our market updates newsletter.</h2>
          </div>
            <div className="flex max-w-md gap-x-4 gap-y-4 flex-col pt-2">
              <form action="/email/send" className="flex gap-4" method="post">
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    className="min-w-0 flex-1 rounded-md border-0 bg-black/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 dark:ring-white/30 focus:ring-2 focus:ring-inset focus:to-blue-500 sm:text-sm sm:leading-6"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="youremail@domain.com"
                    defaultValue=""
                    required
                />
                <Button type="submit" color="primary" variant="solid" className="bg-blue-500 hover:bg-blue-400">Subscribe</Button>
              </form>
              <p className="dark:text-white">We care about your data. Read our <Link href="legalNotices" className="text-blue-500">privacy policy</Link>.</p>
            </div>
        </div>
    </div>
  )
}
