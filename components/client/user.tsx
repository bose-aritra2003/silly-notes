'use client';

import {useSession} from "next-auth/react";

export const User = () => {
    const { data: session } = useSession();
    // console.log(session);
    return (
        <div>
            <pre>{JSON.stringify(session)}</pre>
        </div>
    );
}