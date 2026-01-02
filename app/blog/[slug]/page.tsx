// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import News from "@/components/news-section";
import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";

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

export const dynamic = "force-dynamic";

export default async function Blog({ params }: { params: any }) {
  // fetch database with blog content using : params.slug as identifier
  const supabase = await getSupabaseClient();

  if (!supabase) {
    return (
      <>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-gray-600 dark:text-gray-400">Supabase is not configured. Please set up your environment variables.</p>
        </div>
        <News></News>
      </>
    );
  }

  const {data:user} = await supabase.auth.getUser();
  const database: "marketnews" | "marketnews_free" = user.user ? "marketnews" : "marketnews_free";

  if (params.slug.length < 5) {
    const { data: marketnews } = await supabase
      .from(database)
      .select("*")
      .eq("label", params.slug)
      .order('created_at', { ascending: false })
      ;
    return (
      <>
        <div className="mx-auto max-w-5xl px-6 divide-y gap-8">
          {marketnews?.map((news) => (
            <article className="py-16 sm:py-32 " key={news.id + "focus"}>
              <h1 className="mt-2 text-3xl font-normal uppercase tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
                {news.title}
              </h1>
              <time
                dateTime={news.created_at}
                className="text-gray-500 dark:text-gray-400"
              >
                {new Date(news.created_at).toDateString()}
              </time>
              <p className="dark:text-white  mt-4">{news.content}</p>
            </article>
          ))}
        </div>
        <News></News>
      </>
    );
  } else {
    const { data: marketnews } = await supabase
      .from(database)
      .select("*")
      .eq("id", params.slug)
      ;
    const newsArray = marketnews ? (Array.isArray(marketnews) ? marketnews : [marketnews]) : [];
    return (
      <>
        <div className="py-4 sm:py-8 mx-auto max-w-5xl px-6">
          {newsArray.map((news) => (
            <article key={news.id + "focus"}>
              <h1 className="mt-2 text-3xl font-normal uppercase tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
                {news.title}
              </h1>
              <time
                dateTime={news.created_at}
                className="text-gray-500 dark:text-gray-400"
              >
                {new Date(news.created_at).toDateString()}
              </time>
              <p className="dark:text-white  mt-4">{news.content}</p>
            </article>
          ))}
        </div>
        <News></News>
      </>
    );
  }
}
