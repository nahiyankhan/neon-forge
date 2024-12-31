"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ThemeToggle } from "./themeToggle";

export const Header = () => {
  // const currentPath = usePathname();

  return (
    <div className="w-full border-r border-borderSubtle fixed top-0 z-50 bg-bg h-[80px]">
      <div className="px-8 h-full flex justify-self-end items-center">
        {/* <Link
          href="/"
          className="flex w-12 h-12 rounded-full border border-divider transition-all justify-center items-center"
        >
          wtf
        </Link> */}

        <div className="w-auto items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
