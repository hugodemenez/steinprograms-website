import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

async function getUser(){
  'use server';
  const supabase = createServerComponentClient({ cookies })
  
  const {
    data: { user },
  } = await supabase.auth.getUser()


  return user;
}
export default function Page() {
  const user = getUser();
  if (user){
    return (
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black w-full">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">Contact form</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Feel free to reach out, we will get back to you as soon as possible.
          </p>
        </div>
        <form
        action="/email/contact"
        method="post"
        className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-black/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 dark:ring-white/30 focus:ring-2 focus:ring-inset focus:to-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-black/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 dark:ring-white/30 focus:ring-2 focus:ring-inset focus:to-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-black/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 dark:ring-white/30 focus:ring-2 focus:ring-inset focus:to-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                    >
                  <option>FR</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 pl-20  bg-black/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 dark:ring-white/30 focus:ring-2 focus:ring-inset focus:to-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 bg-black/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 dark:ring-white/30 focus:ring-2 focus:ring-inset focus:to-blue-500 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
    )
    }
    return(<div>You're not allowed tro contact without sign in</div>)
}
