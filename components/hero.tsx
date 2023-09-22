'use client';

import Link from 'next/link';
import { useState } from 'react'


export default function Hero(){
    return(
        <div className="mx-auto max-w-2xl py-36 sm:py-20 lg:py-24 px-6">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-300 dark:ring-gray-600 dark:hover:ring-gray-700">
                    Announcing our next roadmap for 2024.{' '}
                    <Link href="/roadmap" className="font-semibold text-blue-500">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-300">
                    Accurate news to help you take the right decisions
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-500">
                    We have developed top-notch algorithms to provide most accurate information by tracking news from all over the internet 
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                    href="/news"
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started
                    </Link>
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}