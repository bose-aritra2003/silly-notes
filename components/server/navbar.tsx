import { SignInButton, SignOutButton, RegisterButton } from "@/components/client/authLinks";
import { AuthCheck } from "@/components/client/authCheck";
import { NavItem } from "@/components/client/navItem";
import { Brand } from "@/components/ui/brand";
import { HamburgerMenu } from "@/components/client/hamburgerMenu";

const Navbar = () => {
    return (
        <nav className={"flex md:space-x-10 px-5 md:px-20 py-7 sm:py-11 sm:text-xl shadow-md justify-between items-center"}>
            <Brand className="flex items-center text-2xl font-semibold text-gray-900 transition ease-in-out hover:scale-105" />

            <HamburgerMenu />

            <div className={"hidden xl:flex space-x-3 sm:space-x-10"}>
                <NavItem type={'link'} href={'/'}>Home</NavItem>
                <NavItem type={'link'} href={'/notes'}>Notes</NavItem>
                <AuthCheck invert={true}> <SignInButton /> </AuthCheck>
                <AuthCheck invert={true}> <RegisterButton /> </AuthCheck>
                <AuthCheck invert={false}> <SignOutButton /> </AuthCheck>
            </div>
        </nav>
    );
}
export default Navbar;