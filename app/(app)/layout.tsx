import { Inter, Gloria_Hallelujah } from 'next/font/google'
import '@/app/globals.css'
import React from "react";
import Navbar from "@/components/server/navbar";
import Footer from "@/components/server/footer";
import { AuthProvider } from "@/components/client/authProvider";

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
    title: "Silly Notes",
    description: "The world's most unnecessarily over-engineered notes keeper",
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://silly-notes.vercel.app',
        title: 'Silly Notes',
        siteName: 'Silly Notes',
        description: "The world's most unnecessarily over-engineered notes keeper",
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
const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <html lang="en" className={`${inter.variable} ${gloria.variable}`}>
                <body>
                    <main className={"flex flex-col min-h-screen"}>
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </body>
            </html>
        </AuthProvider>
    );
}
export default RootLayout;
