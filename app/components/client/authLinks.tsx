'use client';
import { signIn, signOut } from "next-auth/react";
import { NavItem } from "@/app/components/client/navItem";

export const SignInButton = () => {
    return (
        <NavItem type={'button'} method={signIn}>
            Login
        </NavItem>
    );
}

export const SignOutButton = () => {
    return (
        <NavItem type={'button'} method={signOut}>
            Logout
        </NavItem>
    );
}

export const RegisterButton = () => {
    return (
        <NavItem type={'link'} href={'/register'}>
            Register
        </NavItem>
    );
}