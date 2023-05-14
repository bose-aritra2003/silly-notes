'use client';

import { useState } from "react";
import { SignInButton, SignOutButton, RegisterButton } from "@/components/client/authLinks";
import { AuthCheck } from "@/components/client/authCheck";
import { NavItem } from "@/components/client/navItem";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export const HamburgerMenu = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col space-y-5 xl:hidden items-end">
            <div
                className="cursor-pointer w-fit transition ease-in-out hover:scale-110 p-2 border border-gray-300 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {
                    isOpen ? ( <GrClose /> ) : ( <AiOutlineMenu /> )
                }
            </div>
            <div className={`${isOpen ? 'flex flex-col space-y-1 items-end': 'hidden'} xl:hidden`}>
                <NavItem type={'link'} href={'/'}>Home</NavItem>
                <NavItem type={'link'} href={'/notes'}>Notes</NavItem>
                <AuthCheck invert={true}> <SignInButton /> </AuthCheck>
                <AuthCheck invert={true}> <RegisterButton /> </AuthCheck>
                <AuthCheck invert={false}> <SignOutButton /> </AuthCheck>
            </div>
        </div>
    );
}