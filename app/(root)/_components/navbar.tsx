"use client";

import ModeToggle from "@/components/shared/mode-toggle";
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import GlobalSearch from "./global-search";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "./mobile-menu";

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background">
      <div className="container max-w-6xl mx-auto h-full w-full flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-3xl md:text-4xl font-bold font-crete-round">Muhiddinov</h1>
        </Link>
        {/* desktop */}
        <nav className="flex gap-2.5 justify-between items-center">
          <div className="gap-2 hidden md:flex">
            {navLinks.map((nav) => (
              <Link
                href={nav.route}
                key={nav.route}
                className={cn(
                  "hover:bg-blue-400/20 font-semibold py-1 px-3 rounded-sm transition-colors",
                  pathname === nav.route && "text-blue-400"
                )}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          {/* search, mode toggle and mobile menu */}
          <div className="flex items-center gap-1">
            <GlobalSearch />
            <ModeToggle />
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
