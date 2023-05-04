'use client';

import { signIn, signOut } from "next-auth/react";
import {useSession} from "next-auth/react";
import Link from "next/link";

export const LoginButton = ({ className }: any) => {
    const { status } = useSession();
    if(status !== 'authenticated') {
        return <button className={ className } onClick={() => signIn()}>Login</button>
    } else {
        return null;
    }
}

export const RegisterButton = ({ className }: any) => {
    const { status } = useSession();
    if(status !== 'authenticated') {
        return <Link className={ className } href={"/register"}>Register</Link>
    } else {
        return null;
    }
}

export const LogoutButton = ({ className }: any) => {
    const { status } = useSession();
    if(status === 'authenticated') {
        return <button className={ className } onClick={() => signOut()}>Logout</button>
    } else {
        return null;
    }
}