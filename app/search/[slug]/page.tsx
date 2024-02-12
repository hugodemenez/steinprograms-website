import { getLatestNews } from "@/components/server/api";
import Link from "next/link";
import React from "react";

export default async function SearchPage({ params }: { params: any }) {
  // fetch database with blog content using : params.slug as identifier

  const searchResults = await getLatestNews(params.slug)
  return (
      <div className="flex flex-col mx-auto divide-y gap-8 mt-10">
        {searchResults?.map((news:any) => (
          <article className="py-4" key={news.title + "focus"}>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
              {news.title}
            </h1>
            <time
              dateTime={news.date}
              className="text-gray-500 dark:text-gray-400"
            >
              {new Date(news.date).toDateString()}
            </time>
            <p className="dark:text-white  mt-4">{news.content == ""?news.description:news.content}</p>
            <Link href={news.link} className="underline hover:text-green-500">Source</Link>
          </article>
        ))}
      </div>
  );
}