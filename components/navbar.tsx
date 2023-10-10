'use client';
import SteinProgramsLogo from "./logo";
import Authentication from "./authentication";
import Messages from "./messages";


export default function Navbar(props:{user:any}) {
    return (
        <nav className="w-full flex dark:bg-transparent justify-between sticky top-0 py-4 backdrop-blur-md  z-10 px-6">
            <div>
                <SteinProgramsLogo></SteinProgramsLogo>
            </div>
            
            <div className="flex-end">
                    <Authentication user={props.user}></Authentication>
                    <Messages></Messages>
            </div>
        </nav>
    );
    }