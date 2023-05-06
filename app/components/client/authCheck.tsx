'use client';

import { useSession } from "next-auth/react";

export const AuthCheck = ({ children, invert }: { children: React.ReactNode, invert: boolean }) => {
    const { status } = useSession();

    // console.log(session, status);

    if(status === "authenticated") {
        if(invert) return <></>
        else return <>{ children }</>
    } else {
        if(invert) return <>{ children }</>
        else return <></>
    }
}