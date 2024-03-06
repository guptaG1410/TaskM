import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
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
        <Image src="./logo.svg" alt="LOGO" width={100} height={100} />
      </Link>

      <ul className="flex gap-8 text-xl">
        {links.map((link, i) => (
          <Link
            key={i}
            className="text-white-500 hover:text-indigo-600 transition-colors"
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
