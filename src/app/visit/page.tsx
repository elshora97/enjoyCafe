import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { ChatIcon, ClockIcon, FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, Smile } from "@/components/icons";
import { contactLink, site } from "@/data/site";
import storefront from "@/assets/images/storefront.jpg";
import windowBar from "@/assets/images/window-bar.jpg";
import shelves from "@/assets/images/shelves.jpg";
import counter from "@/assets/images/counter.jpg";

export const metadata: Metadata = {
  title: "زورنا",
  description: "عنوان كافيه انچوي: طريق طنطا الزراعي، بجوار البنك الأهلي المصري — كفر الزيات. مفتوحين 24 ساعة.",
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  const contact = contactLink();
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-14 pt-[100px] md:gap-12 md:px-8 md:pb-24 md:pt-[150px]">
      <div className="flex flex-col gap-2.5">
        <p dir="ltr" lang="en" className="hidden self-start font-latin text-sm font-semibold uppercase tracking-[0.14em] text-leaf md:block">
          Visit us · Kafr El Zayat
        </p>
        <h1 className="font-display text-[44px] font-extrabold leading-[1.15] text-forest md:text-[clamp(48px,6vw,88px)] md:leading-[1.1]">
          تعالى، مستنيينك
        </h1>
        <Smile className="h-6 w-[140px] text-smile md:h-9 md:w-[220px]" strokeWidth={8} />
      </div>

      <div className="flex flex-wrap items-stretch gap-4 md:gap-6">
        <div className="relative min-h-[380px] min-w-0 flex-[1.4_1_520px] overflow-hidden rounded-[28px] bg-forest md:min-h-[600px] md:rounded-[36px]">
          <Photo src={storefront} alt="واجهة كافيه انچوي على طريق طنطا الزراعي" fill preload sizes="(min-width: 768px) 60vw, 100vw" className="object-cover object-[50%_40%]" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-forest/90 to-transparent" />
          <div className="glass-dark-soft absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-4 rounded-3xl p-5 text-cream md:inset-x-6 md:bottom-6 md:rounded-[28px] md:px-6 md:py-[22px]">
            <div className="flex flex-col gap-1">
              <span className="font-display text-xl font-extrabold md:text-[26px]">هتعرفنا من اليافطة</span>
              <span className="text-[15px] text-cream/85">جنب البنك الأهلي المصري مباشرة</span>
            </div>
            <a href={site.mapsUrl} className="inline-flex h-[52px] flex-1 items-center justify-center gap-2 rounded-full bg-smile px-5 font-bold text-ink md:flex-none">
              <PinIcon size={18} /> الاتجاهات على جوجل ماب
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-4">
          <section aria-labelledby="addr-h" className="flex flex-col gap-3 rounded-3xl bg-forest p-6 text-cream md:rounded-[28px] md:p-7">
            <h2 id="addr-h" className="flex items-center gap-2.5 font-display text-xl font-bold text-smile md:text-[22px]"><PinIcon size={22} /> العنوان</h2>
            <p className="leading-[1.8] md:text-lg">
              {site.address.lineAr}
              <br />— {site.address.cityAr}
            </p>
          </section>

          <section aria-labelledby="hours-h" className="flex flex-col gap-2 rounded-3xl border border-forest/12 bg-white p-6 md:gap-3 md:rounded-[28px] md:p-7">
            <div className="flex items-center justify-between gap-3">
              <h2 id="hours-h" className="flex items-center gap-2.5 font-display text-xl font-bold text-forest md:text-[22px]"><ClockIcon size={22} /> المواعيد</h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf/12 px-3 py-1 text-sm font-semibold text-leaf">
                <span aria-hidden className="size-2 rounded-full bg-[#1B8A55]" /> مفتوح دلوقتي
              </span>
            </div>
            <p className="font-display text-[34px] font-extrabold text-forest md:text-[40px]">24 ساعة</p>
            <p className="text-muted">كل يوم — صبح، ضهر، وبالليل.</p>
            <ul className="mt-1 flex flex-wrap gap-2 text-sm">
              {site.servicesAr.map((s) => <li key={s} className="rounded-full bg-sand px-3 py-1.5">{s}</li>)}
            </ul>
          </section>

          <section aria-labelledby="contact-h" className="flex flex-col gap-3.5 rounded-3xl bg-smile p-6 md:rounded-[28px] md:p-7">
            <h2 id="contact-h" className="font-display text-xl font-bold text-forest md:text-[22px]">كلّمنا</h2>
            <div className="flex flex-wrap gap-2.5">
              <a href={contact.href} className="inline-flex h-[52px] flex-[1_1_160px] items-center justify-center gap-2 rounded-full bg-forest font-semibold text-cream">
                {contact.kind === "facebook" ? <FacebookIcon size={18} /> : <ChatIcon size={18} />} {contact.label}
              </a>
              {site.phone && contact.kind !== "phone" && (
                <a href={`tel:+${site.phone}`} className="inline-flex h-[52px] flex-[1_1_160px] items-center justify-center gap-2 rounded-full border-2 border-forest font-semibold text-forest">
                  <PhoneIcon size={18} /> اتصل
                </a>
              )}
            </div>
            <a href={`mailto:${site.email}`} dir="ltr" className="min-h-9 text-end font-semibold text-forest">{site.email}</a>
            <div className="flex gap-4">
              <a href={site.social.instagram} className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-forest"><InstagramIcon size={18} /> إنستجرام</a>
              <a href={site.social.facebook} className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-forest"><FacebookIcon size={18} /> فيسبوك</a>
            </div>
          </section>
        </div>
      </div>

      <section aria-labelledby="inside-h" className="flex flex-col gap-4">
        <h2 id="inside-h" className="font-display text-[26px] font-extrabold text-forest md:text-[32px]">من جوه</h2>
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-3.5">
          {[
            { img: windowBar, alt: "القعدة جنب الشباك الكبير" },
            { img: shelves, alt: "رفوف البار وحيطة الخط العربي" },
            { img: counter, alt: "الكاونتر والكراسي العالية" },
          ].map((p, i) => (
            <div key={p.alt} className={`relative h-[200px] overflow-hidden rounded-[20px] md:h-[300px] md:rounded-3xl ${i === 2 ? "hidden md:block" : ""}`}>
              <Photo src={p.img} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
