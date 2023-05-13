import Link from "next/link";

interface NavItemProps {
    children: React.ReactNode;
    href?: string;
    method?: object;
    type: 'link' | 'button';
}

export const NavItem = ({ children, type, method, href }: NavItemProps) => {
    // console.log(type, method, href);
    if(type === 'link') {
        return (
            <Link
                className={'cursor-pointer font-medium hover:underline hover:underline-offset-4'}
                // @ts-ignore
                href={ href }
            >
                { children }
            </Link>
        );

    } else {
        return (
            <button
                className={'cursor-pointer font-medium hover:underline hover:underline-offset-4'}
                // @ts-ignore
                onClick={ method }
            >
                { children }
            </button>
        );
    }
}




