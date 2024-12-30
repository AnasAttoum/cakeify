import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { satisfy } from "./ui/fonts";

export default function Header() {
  return (
    <header className="container px-5 py-5 flex justify-between items-center">
      <Link href={"/"} className="flex items-center gap-2 text-primary text-2xl font-extrabold">
        <Image src="/cakeify.svg" alt="Cakeify Icon" width={30} height={30} />
        <span className={satisfy.className}>Cakeify</span>
      </Link>

      <NavLinks />
    </header>
  );
}