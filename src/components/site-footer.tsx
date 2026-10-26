import { Photo } from "@/components/photo";
import Link from "next/link";
import { nav, site } from "@/data/site";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import logoYellow from "@/assets/enjoy-logo-yellow.png";

export function SiteFooter() {
  return (
    // `mt-auto` + the flex column on <body> keep the footer at the bottom
    // of the viewport even on short pages. Extra bottom padding on mobile
    // leaves room for the fixed quick-action bar.
    <footer className="mt-auto bg-forest text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pt-14 pb-28 md:px-8 md:pt-[72px] md:pb-10">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex max-w-sm flex-col gap-4">
            <Photo src={logoYellow} alt="Enjoy life" className="h-auto w-40 md:w-[200px]" sizes="200px" />
            <p className="leading-loose text-cream/80">
              {site.nameAr} — {site.address.shortAr}. {site.hoursAr}.
            </p>
          </div>
          <div className="flex flex-wrap gap-14">
            <nav aria-label="روابط الموقع" className="flex flex-col gap-2.5">
              <span className="font-bold text-smile">الموقع</span>
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="py-1 text-cream hover:text-smile">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2.5">
              <span className="font-bold text-smile">تابعنا</span>
              <a href={site.social.instagram} className="inline-flex items-center gap-2 py-1 hover:text-smile">
                <InstagramIcon size={18} /> Instagram
              </a>
              <a href={site.social.facebook} className="inline-flex items-center gap-2 py-1 hover:text-smile">
                <FacebookIcon size={18} /> Facebook
              </a>
              <a href={`mailto:${site.email}`} dir="ltr" className="py-1 text-end hover:text-smile">
                {site.email}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-cream/18 pt-6 text-sm text-cream/70">
          <span>© Enjoy Café · {site.address.cityAr}</span>
          <span dir="ltr" lang="en" className="font-latin">Enjoy UR life</span>
        </div>
      </div>
    </footer>
  );
}
