import Link from "next/link";
import React from "react";

import { Logo } from "@/components/shop/Logo";

const navItems = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b px-8 py-4">
      <Logo />
      <nav className="flex space-x-4 font-medium uppercase">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_1px]">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};
