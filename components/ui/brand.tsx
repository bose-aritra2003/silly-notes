import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export const Brand = ({...props}: any) => {
  return (
    <Link href="/" {...props}>
      <Image className="w-8 h-8 mr-2" src={logo} alt="logo"/>
      <span className="font-gloria">Silly Notes</span>
    </Link>
  )
}