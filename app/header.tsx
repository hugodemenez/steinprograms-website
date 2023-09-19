'use client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import SteinProgramsLogo from "./components/logo";
import Authentication from "./components/authentication";


export default function Header(props:{user:any}) {
    return (
        <Navbar className="dark:bg-transparent">
            <NavbarBrand>
                <SteinProgramsLogo></SteinProgramsLogo>
            </NavbarBrand>
            {props.user?<NavbarContent className="flex sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                <h2 className="bold">
                    Connected as {props.user.email.split("@")[0]}
                </h2>
                </NavbarItem>
            </NavbarContent>:null}
            <NavbarContent justify="end">
                <NavbarItem >
                    <Authentication user={props.user}></Authentication>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
    }