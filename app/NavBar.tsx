"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
    const currPath = usePathname();
    

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/tasks",
      label: "Tasks",
    },
  ];

  return (
    <nav className="flex gap-8 items-center border-b mb-5 px-8 h-20">
      <Link href="/">
        <Image src="./logo.svg" alt="LOGO" width={60} height={60} />
      </Link>

      <ul className="flex gap-8 text-xl">
        {links.map((link, i) => (
          <Link
            key={i}
            className={`${link.href === currPath ? 'text-violet-800' : 'text-black'} hover:text-violet-800 transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
