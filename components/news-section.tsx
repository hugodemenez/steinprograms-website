import { createServerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database, Tables } from '../types/supabase'
import { CryptoLogo } from '../components/crypto-logos'
import Score from './score'
import Link from 'next/link'
import { getUser } from './server/database'

async function getSupabaseClient() {
  // Check if Supabase is configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  try {
    const cookieStore = await cookies();
    return createServerClient<Database>(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          },
        },
      }
    );
  } catch (error) {
    console.warn('Failed to create Supabase client:', error);
    return null;
  }
}

export default async function NewsSection() {
  const supabase = await getSupabaseClient();
  const user = await getUser()

  // Get types from supabase
  var data: Tables<'marketnews'>[] | null = null;

  if (supabase) {
    if (user) {
      var { data: userData } = await supabase.from('marketnews').select().order('created_at', { ascending: false })
      data = userData;
    }
    else {
      var { data: freeData } = await supabase.from('marketnews_free').select().order('created_at', { ascending: false })
      data = freeData;
    }
  }


  return (
    <div className="py-4 sm:py-8 px-6">
      <h2 className="uppercase flex items-baseline gap-1 text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl mb-2 dark:text-white">
        Crypto News
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </h2>
      <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
        {!user?"Here are news sample, sign in to access latest ones.":""}
      </p>
      <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 relative">
        {data?.map((post) => (
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between transition-opacity animate-in enter:">
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
              <h3 className="mt-3 text-lg uppercase font-normal leading-6 text-gray-900 group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-400">
                <Link href={`/blog/${post.id}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300 mb-3">{post.content}</p>
            </div>
            <Score score={post.score ? post.score : 0}></Score>
          </article>
        ))}
      </div>
    </div>
  )
}

