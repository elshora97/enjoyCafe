import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { QuickActions } from "@/components/quick-actions";
import { site } from "@/data/site";
import "./globals.css";

// Every route is fully prerendered at build time → served as static HTML.
export const ensureStatic = "navigation";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "كافيه انچوي — Enjoy Café | كفر الزيات",
    template: "%s | كافيه انچوي — Enjoy Café",
  },
  description:
    "كافيه انچوي على طريق طنطا الزراعي في كفر الزيات، جنب البنك الأهلي. قهوة، عصير فريش، موهيتو وحلويات — مفتوحين 24 ساعة. قعدة، تيك أواي، ودليفري.",
  applicationName: "Enjoy Café",
  keywords: ["كافيه كفر الزيات", "انچوي", "Enjoy Cafe", "قهوة", "سموزي", "موهيتو", "كافيه 24 ساعة"],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: "Enjoy Café — كافيه انچوي",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#032821",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  alternateName: site.nameAr,
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  email: site.email,
  priceRange: site.priceRange,
  servesCuisine: ["Coffee", "Juices", "Desserts"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [site.social.instagram, site.social.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={fontVariables}>
      {/* Flex column + min-h-dvh: the footer always sits at the bottom, even on short pages. */}
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-smile focus:px-5 focus:py-3 focus:font-bold focus:text-ink"
        >
          تخطّى للمحتوى
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <QuickActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
