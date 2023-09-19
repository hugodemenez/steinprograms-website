'use client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import SteinProgramsLogo from "./logo";
import Authentication from "./authentication";


export default function Header(props:{user:any}) {
    return (
        <Navbar className="dark:bg-transparent">
            <NavbarBrand>
                <SteinProgramsLogo></SteinProgramsLogo>
            </NavbarBrand>
            
            <NavbarContent justify="end">
                <NavbarItem >
                    <Authentication user={props.user}></Authentication>
                    
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
    }