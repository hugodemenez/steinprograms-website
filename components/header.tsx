'use server';
import AuthenticationButton from "./authentication-button";
import HamburgerMenu from "./hamburger-menu";
import SteinProgramsLogo from "./logo/layout";
import PageLinks from "./pageLinks";
import { getUser } from "./server/user";
import SubscriptionButton from "./subscription-button";


export default async function Header() {

    const user = await getUser()
    // using useEffect to highlight the current page
    return (
        <nav className="w-full flex dark:bg-transparent justify-between sticky top-0 py-4 backdrop-blur-md  z-10 px-6">
            <div className="flex gap-8 items-center">
                <SteinProgramsLogo></SteinProgramsLogo>
                <div className="flex gap-4">
                    <PageLinks className="hidden lg:flex"/>
                </div>
            </div>

            <div className="flex-end flex gap-4 items-center">
                <HamburgerMenu/>
                <SubscriptionButton/>
                <AuthenticationButton user={user}/>
            </div>
        </nav>
    );
}
