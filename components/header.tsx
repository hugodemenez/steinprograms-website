'use server';
import { useBreakpoints } from "@/hooks/use-media-query";
import AuthenticationButton from "./authentication-button";
import HamburgerMenu from "./hamburger-menu";
import SteinProgramsLogo from "./logo";
import PageLinks from "./pageLinks";
import { getUser } from "./server/database";
import SubscriptionButton from "./subscription-button";


export default async function Header() {

    const user = await getUser()
    // using useEffect to highlight the current page
    return (
        <nav className="w-full flex dark:bg-transparent justify-between sticky top-0 py-4 backdrop-blur-md  z-10 px-6 items-center">
            <div className="flex gap-8 items-center">
                <SteinProgramsLogo></SteinProgramsLogo>
                <div className="flex gap-4">
                    <PageLinks className="hidden lg:flex"/>
                </div>
            </div>

            <div className="flex-end flex gap-4 items-center">
                <HamburgerMenu user={user}/>
                <SubscriptionButton className="hidden sm:block" user={user}/>
                <div className="hidden sm:block">
                    <AuthenticationButton user={user}/> 
                </div>
                {/* Only dispay auth button here on desktop */}
            </div>
        </nav>
    );
}
