import React from "react";
import { SignInButton, SignOutButton, RegisterButton } from "@/app/components/client/authLinks";
import { AuthCheck } from "@/app/components/client/authCheck";
import { NavItem } from "@/app/components/client/navItem";

const Navbar = () => {
    return (
        <nav className={"flex md:space-x-10 px-5 md:px-20 py-7 sm:py-11 sm:text-xl font-bold shadow-md justify-between items-center"}>
            <div className={"flex space-x-3 sm:space-x-10"}>
                <NavItem type={'link'} href={'/'}>Home</NavItem>
                <NavItem type={'link'} href={'/notes'}>Notes</NavItem>
            </div>

            <div className={"flex space-x-3 sm:space-x-10"}>
                <AuthCheck invert={true}> <SignInButton /> </AuthCheck>
                <AuthCheck invert={true}> <RegisterButton /> </AuthCheck>
                <AuthCheck invert={false}> <SignOutButton /> </AuthCheck>
            </div>
        </nav>
    );
}
export default Navbar;