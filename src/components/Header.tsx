import { Satisfy } from "next/font/google";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

export default function Header() {
  return (
    <header className="container mx-auto px-5 lg:px-44 py-5 flex justify-between items-center">
      <Link href={"/"} className="flex items-center gap-2 text-primary text-2xl font-bold">
        <Image src="/cakeify.svg" alt="Cakeify Icon" width={30} height={30} />
        <span className={satisfy.className}>Cakeify</span>
      </Link>

      <NavLinks />
    </header>
  );
}