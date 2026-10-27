/**
 * Business details shown across the site.
 * Everything here is verified from the café's Facebook / Instagram pages.
 * Fill in `phone` and `whatsapp` when ready — the call / WhatsApp buttons
 * appear automatically once they are set.
 */
export const site = {
  name: "Enjoy Café",
  nameAr: "كافيه انچوي",
  tagline: "Coffee. Comfort. Enjoy.",
  taglineAr: "كل كوباية معاها ابتسامة",
  url: "https://enjoycafe.example", // TODO: replace with the real domain before launch
  locale: "ar_EG",

  address: {
    lineAr: "طريق طنطا الزراعي (القاهرة – إسكندرية الزراعي)، بجوار البنك الأهلي المصري",
    cityAr: "كفر الزيات",
    shortAr: "طريق طنطا الزراعي، جنب البنك الأهلي — كفر الزيات",
    street: "Tanta Agricultural Road, next to National Bank of Egypt",
    city: "Kafr El Zayat",
    region: "Gharbia",
    country: "EG",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Enjoy+Cafe+Kafr+El+Zayat",

  hoursAr: "24 ساعة، كل يوم",
  open24h: true,
  servicesAr: ["قعدة في المحل", "تيك أواي", "دليفري"],
  priceRange: "££",

  /** Egyptian number with country code, digits only, e.g. "201001234567". */
  phone: "201035567023" as string | null, // 01035567023 — from the printed menu
  whatsapp: "201035567023" as string | null, // same number as the phone
  email: "mokhaled015@gmail.com",

  social: {
    instagram: "https://www.instagram.com/enjoycafe11/",
    instagramHandle: "@enjoycafe11",
    facebook: "https://www.facebook.com/profile.php?id=61560919213745",
  },
} as const;

export const nav = [
  { href: "/", label: "الرئيسية" },
  { href: "/menu", label: "المنيو" },
  { href: "/gallery", label: "الصور" },
  { href: "/visit", label: "زورنا" },
] as const;

/** Best way to reach the café right now: WhatsApp → phone → Facebook. */
export function contactLink() {
  if (site.whatsapp) return { href: `https://wa.me/${site.whatsapp}`, label: "واتساب", kind: "whatsapp" as const };
  if (site.phone) return { href: `tel:+${site.phone}`, label: "اتصل بينا", kind: "phone" as const };
  return { href: site.social.facebook, label: "كلّمنا على فيسبوك", kind: "facebook" as const };
}
