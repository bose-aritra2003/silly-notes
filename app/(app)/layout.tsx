import { Inter, Gloria_Hallelujah } from 'next/font/google'
import '@/app/globals.css'
import React from "react";
import Navbar from "@/app/components/server/navbar";
import Footer from "@/app/components/server/footer";
import { Providers } from "@/app/components/client/providers";

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
}

/* Main */
const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={`${inter.variable} ${gloria.variable}`}>
            <body>
                <Providers>
                    <main className={"flex flex-col min-h-screen"}>
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </Providers>

            </body>
        </html>
    );
}
export default RootLayout;
