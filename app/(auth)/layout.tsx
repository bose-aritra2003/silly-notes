import { Inter, Gloria_Hallelujah } from 'next/font/google'
import '@/app/globals.css'
import React from "react";
import {AuthProvider} from "@/components/client/authProvider";


/* Fonts */
const inter = Inter({
    variable: '--font-inter',
    display: 'swap',
    subsets: ['latin'],
});

const gloria = Gloria_Hallelujah({
    weight: '400',
    variable: '--font-gloria-hallelujah',
    display: 'swap',
    subsets: ['latin'],
});

/* Metadata */
export const metadata = {
    title: "Silly Notes - Auth",
    description: "Authentication page for Silly Notes",
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://silly-notes.vercel.app',
        title: "Silly Notes - Auth",
        siteName: 'Silly Notes',
        description: "Authentication page for Silly Notes",
        images: [
            {
                url: 'logo.png',
                width: 512,
                height: 512,
            }
        ],
    }
}

/* Main */
const AuthLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={`${inter.variable} ${gloria.variable}`}>
            <body>
                <AuthProvider>
                    <main className={"flex flex-col min-h-screen bg-gray-50"}>
                        {children}
                    </main>
                </AuthProvider>

            </body>
        </html>
    );
}
export default AuthLayout;
