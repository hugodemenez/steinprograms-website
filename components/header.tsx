import Authentication from "./authentication";
import SteinProgramsLogo from "./logo/layout";
import Notifications from "./notifications";
import { Database } from '../types/supabase'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function Header() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {data:user} = await supabase.auth.getUser()
    return (
        <nav className="w-full flex dark:bg-transparent justify-between sticky top-0 py-4 backdrop-blur-md  z-10 px-6">
            <div>
                <SteinProgramsLogo></SteinProgramsLogo>
            </div>
            
            <div className="flex-end">
                    <Notifications></Notifications>
                    <Authentication user={user.user}></Authentication>
            </div>
        </nav>
    );
    }
