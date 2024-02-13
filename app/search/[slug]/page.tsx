'use server'
import RealTimeNews from "@/components/realtime-news";
import { getLatestNews } from "@/components/server/api";
import React from "react";

export default async function SearchPage({ params }: { params: any }) {
  // fetch database with blog content using : params.slug as identifier

  const searchResults = await getLatestNews(params.slug)
  return (
      <RealTimeNews searchResults={searchResults.data} error={searchResults.error}></RealTimeNews>
  );
}