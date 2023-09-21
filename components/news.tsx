import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { Database } from '../types/supabase'
import { cookies } from 'next/headers'
import Score from './score'
import { Bitcoin, CryptoLogo } from './logo'


const posts = [
  {
    id: 1,
    title: 'SteinPrograms innovation',
    href: '#',
    description:
      'After years studying fundamentals of computer science and finance, we are proud to announce our first project: SteinPrograms.',
    date: 'Sept 16, 2023',
    datetime: '2023-09-16',
    category: { title: 'Innovation', href: '#' },
    author: {
      name: 'Hugo Demenez',
      role: 'Founder',
      href: '#',
      imageUrl:
        'https://avatars.githubusercontent.com/u/71768413?v=4',
    },
  },
  {
    id: 2,
    title: "Bitcoin's future",
    href: '#',
    description:
      "Bitcoin's price is nearing the $30K level as analysts predict a potential bull market. PayPal's entry into the crypto space is seen as a game-changer. Democrats hold more crypto than Republicans, according to a survey. CoinShares CSO warns of continued uncertainty. Glassnode co-founders discuss Bitcoin's path to $30K. Analysts predict Bitcoin to reach $40K-$60K next year. Ethereum's future looks promising with a potential price of $8000. Bitcoin nodes are making progress towards instant sync.",
    date: 'Sept 15, 2023',
    datetime: '2023-09-15',
    category: { title: 'Crypto', href: '#' },
    author: {
      name: 'SteinPrograms',
      role: 'Bot',
      href: '#',
      imageUrl:
        'logo.png',
    },
  },
]




export default async function News(){
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase.from('marketnews').select()
    return (
      <div className="py-24 sm:py-32 mx-auto max-w-5xl px-6">
          <h2 className="flex items-baseline gap-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 dark:text-white">
              Crypto News
              <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
          </h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              Powered by SteinPrograms&apos; most advanced algorithm
          </p>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data?.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.created_at} className="text-gray-500 dark:text-white">
                    {new Date(post.created_at).toDateString()}
                </time>
                <a
                  href={`/blog/${post.label}`}
                >
                  {<CryptoLogo name={post.label}></CryptoLogo>}
                </a>
              </div>
              
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-400">
                  <a href={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300 mb-3">{post.content}</p>
              </div>
              <Score score={post.score?post.score:0}></Score>
            </article>
          ))}

          {data?.length === 0 && (
            <p className='dark:text-white'>You have to be logged in to access recent news for free</p>
          )}
        </div>
      </div>

            

    )
}

