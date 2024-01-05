'use client';
import SteinProgramsLogo from "./logo/layout";
import Notifications from "./notifications";


export default function Header() {
    return (
        <nav className="w-full flex dark:bg-transparent justify-between sticky top-0 py-4 backdrop-blur-md  z-10 px-6">
            <div>
                <SteinProgramsLogo></SteinProgramsLogo>
            </div>
            
            <div className="flex-end">
                    <Notifications></Notifications>
            </div>
        </nav>
    );
    }
