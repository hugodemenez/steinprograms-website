// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import News from "@/components/news-section";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Blog({ params }: { params: any }) {
  // fetch database with blog content using : params.slug as identifier
  const supabase = createServerComponentClient({ cookies });

  if (params.slug.length < 5) {
    const { data: marketnews } = await supabase
      .from("marketnews")
      .select("*")
      .eq("label", params.slug)
      .order('created_at', { ascending: false })
      ;
    return (
      <>
        <div className="mx-auto max-w-5xl px-6 divide-y gap-8">
          {marketnews?.map((news) => (
            <article className="py-16 sm:py-32 " key={news.id + "focus"}>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
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
      .from("marketnews")
      .select("*")
      .eq("id", params.slug)
      ;
    return (
      <>
        <div className="py-4 sm:py-8 mx-auto max-w-5xl px-6">
          {marketnews?.map((news) => (
            <article key={news.id + "focus"}>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
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
