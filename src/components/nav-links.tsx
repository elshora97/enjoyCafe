"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/** Desktop links inside the glass navbar. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="hidden flex-1 items-center justify-center gap-1 md:flex">
      {nav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "block rounded-full bg-cream/92 px-[18px] py-3 font-semibold text-forest"
                  : "block rounded-full px-[18px] py-3 font-medium text-cream transition-colors hover:bg-cream/12"
              }
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Large links inside the mobile full-screen menu. */
export function MobileNavLinks({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-1.5">
      {nav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`block py-1.5 font-display text-[44px] font-extrabold ${active ? "text-smile" : "text-cream"}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
