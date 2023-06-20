"use client"; // usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "/", label: "Dashboard" },
  { href: "/slow", label: "Slow" },
  { href: "/error", label: "Error" },
  { href: "/earth", label: "Earth" },
  { href: "/context", label: "Context" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between p-6">
      {links.map(({ href, label }) => {
        const isActive = pathname.startsWith(href);

        return (
          <Link className={isActive ? "underline" : ""} href={href} key={href}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
