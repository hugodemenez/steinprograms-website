import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function PoliticsPage(){
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: user } = await supabase.auth.getUser();
    return (
    <div className="py-4 sm:py-8 px-6">
      <h2 className="flex items-baseline gap-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 dark:text-white">
        Politics News
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </h2>
      <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
      </p>
      {!user.user &&
        <h2 className='text-2xl mt-6'>Access to politics news requires authentication</h2>
      }
    </div>
  )
}