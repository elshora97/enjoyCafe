import { Photo } from "@/components/photo";
import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { MobileMenu } from "@/components/mobile-menu";
import logoYellow from "@/assets/enjoy-logo-yellow.png";

/**
 * One navbar for every page and screen size: a sticky glass pill.
 * It floats over the top of each page (negative bottom margin), so every
 * page's first section reserves top padding for it (see `pt-header`).
 */
export function SiteHeader() {
  return (
    <header className="sticky top-2.5 z-50 mx-3 mt-3 -mb-[68px] md:top-4 md:mx-6 md:mt-5 md:-mb-[88px]">
      <nav
        aria-label="القائمة الرئيسية"
        className="glass-dark mx-auto flex h-14 max-w-[1240px] items-center gap-5 rounded-full ps-3 pe-1.5 md:h-[68px] md:ps-3.5 md:pe-2.5"
      >
        <Link href="/" aria-label="Enjoy life — الرئيسية" className="flex min-h-11 shrink-0 items-center md:px-2.5">
          <Photo src={logoYellow} alt="Enjoy life" preload className="h-9 w-auto md:h-10" sizes="104px" />
        </Link>

        <NavLinks />

        <div className="ms-auto flex items-center gap-2 md:ms-0">
          <span className="hidden h-10 items-center gap-2 rounded-full border border-cream/20 bg-cream/12 px-3.5 text-sm font-semibold text-cream lg:inline-flex">
            <span aria-hidden className="size-2 rounded-full bg-online shadow-[0_0_10px_var(--color-online)]" />
            24 ساعة
          </span>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
