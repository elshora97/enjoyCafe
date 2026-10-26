import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { MenuBrowser } from "@/components/menu-browser";
import { Smile } from "@/components/icons";
import { publishedMenu } from "@/data/menu";
import { contactLink } from "@/data/site";
import shelves from "@/assets/images/shelves.jpg";

export const metadata: Metadata = {
  title: "المنيو",
  description: "منيو كافيه انچوي: قهوة، موهيتو وصودا، عصاير وسموزي، وحلويات. قعدة، تيك أواي، أو دليفري — 24 ساعة.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  const contact = contactLink();
  return (
    <>
      <section aria-labelledby="menu-title" className="relative overflow-hidden bg-forest text-cream">
        <div aria-hidden className="absolute inset-y-0 left-0 hidden w-[46%] opacity-35 md:block">
          <Photo src={shelves} alt="" fill sizes="46vw" className="object-cover" />
        </div>
        <div aria-hidden className="absolute inset-0 hidden bg-[linear-gradient(270deg,#032821_50%,rgb(3_40_33/0.4)_100%)] md:block" />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-4 pb-11 pt-[100px] md:px-8 md:pb-[72px] md:pt-[150px]">
          <div className="flex flex-col gap-3">
            <p dir="ltr" lang="en" className="hidden self-start font-latin text-sm font-semibold uppercase tracking-[0.14em] text-smile md:block">The menu</p>
            <h1 id="menu-title" className="font-display text-[52px] font-extrabold leading-[1.1] md:text-[clamp(56px,7vw,104px)]">المنيو</h1>
            <Smile className="h-6 w-[130px] text-smile md:h-[34px] md:w-[200px]" strokeWidth={8} />
          </div>
          <p className="hidden max-w-[40ch] text-lg leading-[1.8] text-cream/88 md:block">
            قهوة، عصير فريش، موهيتو، وحلو. قعدة، تيك أواي، أو دليفري — 24 ساعة.
          </p>
        </div>
      </section>

      <MenuBrowser categories={publishedMenu} />

      <div className="mx-auto max-w-7xl px-4 pb-14 md:px-8 md:pb-24">
        <aside className="flex flex-wrap items-center justify-between gap-5 rounded-[28px] bg-smile p-6 md:p-8">
          <p className="font-display text-[22px] font-extrabold text-forest md:text-[28px]">عايز تطلب دليفري؟ كلّمنا على طول.</p>
          <a href={contact.href} className="inline-flex h-[52px] items-center rounded-full bg-forest px-6 font-semibold text-cream md:text-[17px]">
            {contact.label}
          </a>
        </aside>
      </div>
    </>
  );
}
