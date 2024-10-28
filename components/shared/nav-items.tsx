"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";

export const NavItems = () => {
  // usePathname is a custom hook that retrieves the current URL's pathname, 
  // which is the part of the URL that comes after the domain name. For example, 
  // in the URL https://example.com/products, the pathname is /products.
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            // show activitated page
            className={cn(
              "flex-center p-medium-16 whitespace-nowrap",
              isActive && "text-primary-500",
            )}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
