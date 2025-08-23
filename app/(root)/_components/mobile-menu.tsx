import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="max-md:block hidden mr-2">
        <Button size={"icon"} variant={"ghost"}>
          <MenuIcon className="!size-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-2 items-start p-2">
        {/* hidden component */}
        <SheetHeader className="hidden">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            reprehenderit aliquam placeat repellat corrupti eveniet cum
            provident, doloremque debitis cumque!
          </SheetDescription>
        </SheetHeader>
        {/* navbar */}
        <div className="w-full flex flex-col gap-2 mt-10">
          {navLinks.map((nav) => (
            <Link
              href={nav.route}
              key={nav.route}
              className={cn(
                "hover:bg-blue-400/20 inline-flex gap-2 py-1 px-3 rounded-sm transition-colors",
                pathname === nav.route && "text-blue-400"
              )}
            >
              <nav.icon className="size-5" />
              {nav.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
