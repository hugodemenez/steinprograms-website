'use client'
import Link from "next/link";
import Post from "./post";
import { toast } from "sonner";

export default function RealTimeNews({searchResults,error}:{searchResults:any,error:any}) {
    error && toast.error(error)
    return(
      <div className="flex flex-col mx-auto divide-y gap-8 mt-10">
        {searchResults?.map((news:any) => (
          <article className="py-4 border-b border-gray-300" key={news.title + "focus"}>
            <h1 className="text-3xl font-normal uppercase tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
              {news.title}
            </h1>
            <time
              dateTime={news.date}
              className="text-gray-500 dark:text-gray-400"
            >
              {new Date(news.date).toDateString()}
            </time>
            <div className="dark:text-white  mt-4">{news.content == ""?<p>{news.description}</p>:<Post content={news.content}></Post>}</div>
            <Link href={news.link} className="underline hover:text-green-500">Source</Link>
          </article>
        ))}
      </div>
    )
}