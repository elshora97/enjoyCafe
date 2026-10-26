import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { shots } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "الصور",
  description: "صور وفيديوهات من جوه كافيه انچوي في كفر الزيات — المكان، المشروبات، القهوة والحلويات.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 pb-14 pt-[100px] md:gap-9 md:px-8 md:pb-24 md:pt-[150px]">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-2.5">
          <p dir="ltr" lang="en" className="self-start font-latin text-sm font-semibold uppercase tracking-[0.14em] text-leaf">The feed</p>
          <h1 className="font-display text-[44px] font-extrabold leading-[1.1] text-forest md:text-[clamp(48px,6vw,88px)]">من جوه انچوي</h1>
        </div>
        <div className="flex w-full gap-2.5 md:w-auto">
          <a href={site.social.instagram} className="inline-flex h-[52px] flex-1 items-center justify-center gap-2.5 rounded-full bg-forest px-6 font-semibold text-cream md:flex-none">
            <InstagramIcon /> إنستجرام
          </a>
          <a href={site.social.facebook} className="inline-flex h-[52px] flex-1 items-center justify-center gap-2.5 rounded-full border-2 border-forest px-6 font-semibold text-forest md:flex-none">
            <FacebookIcon /> فيسبوك
          </a>
        </div>
      </div>

      <GalleryGrid shots={shots} />

      <section aria-labelledby="more-title" className="mt-4 flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-forest p-6 text-cream md:mt-6 md:rounded-[36px] md:px-12 md:py-10">
        <div className="flex flex-[1_1_420px] flex-col gap-2">
          <h2 id="more-title" className="font-display text-[28px] font-extrabold text-smile md:text-4xl">زباين مبسوطين</h2>
          <p className="leading-[1.8] text-cream/85 md:text-[17px]">
            صوّر قعدتك واعمل منشن لـ <span dir="ltr">{site.social.instagramHandle}</span> — ممكن تطلع هنا.
          </p>
        </div>
        <a href={site.social.instagram} className="inline-flex h-[52px] items-center rounded-full bg-smile px-6 font-bold text-ink">
          شوف الهايلايت
        </a>
      </section>
    </div>
  );
}
