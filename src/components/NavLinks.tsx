"use client";

import { links } from "@/constants/data";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Pages, Routes } from "@/constants/enums";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function NavLinks() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="lg:hidden z-10"
        onClick={() => {
          setOpenMenu((prev)=>!prev);
        }}
      >
        <Menu />
      </Button>
      <div
        className={`fixed top-0  p-10 lg:py-0 lg:static flex flex-col lg:flex-row items-start lg:items-center gap-5 w-full lg:w-auto h-full lg:h-auto bg-background lg:bg-transparent transition-all
            ${openMenu ? "left-0" : "-left-full"}`}
      >
        {links.map(({ title, href }, index) => {
          return (
            <Link
              key={index}
              href={href}
              className={`${
                href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? buttonVariants()
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </>
  );
}
