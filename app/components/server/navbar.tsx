import Link from "next/link";
import React from "react";
import {LoginButton, LogoutButton, RegisterButton} from "@/app/components/client/authLinks";

const Navbar = () => {
    return (
        <nav className={"flex md:space-x-10 px-5 md:px-20 py-7 sm:py-11 sm:text-xl font-bold shadow-md justify-between items-center"}>
            <div className={"flex space-x-3 sm:space-x-10"}>
                <Link className={"delay-100 cursor-pointer underline underline-offset-4 hover:decoration-4"}
                  href={"/"}>Home</Link>
                <Link className={"delay-100 cursor-pointer underline underline-offset-4 hover:decoration-4"}
                      href={"/notes"}>Notes</Link>
            </div>

            <div className={"flex space-x-3 sm:space-x-10"}>
                <LogoutButton className={"delay-100 cursor-pointer underline underline-offset-4 hover:decoration-4"} />
                <LoginButton className={"delay-100 cursor-pointer underline underline-offset-4 hover:decoration-4"} />
                <RegisterButton className={"delay-100 cursor-pointer underline underline-offset-4 hover:decoration-4"} />
            </div>

        </nav>
    );
}
export default Navbar;