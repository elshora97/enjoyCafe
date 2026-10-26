"use client";

import { Photo } from "@/components/photo";
import { useState } from "react";
import { formatPrice, type MenuCategory } from "@/data/menu";

export function MenuBrowser({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState<string>("all");
  const shown = active === "all" ? categories : categories.filter((c) => c.id === active);
  const chips = [{ id: "all", labelAr: "الكل" }, ...categories];

  return (
    <>
      {/* Sticky glass category bar — sits just under the sticky navbar. */}
      <div className="glass-light sticky top-[76px] z-30 mx-3 -mt-[26px] rounded-full md:top-[100px] md:mx-auto md:-mt-[34px] md:max-w-[1240px]">
        <div role="toolbar" aria-label="أقسام المنيو" className="flex gap-1.5 overflow-x-auto p-1.5 [scrollbar-width:none] md:gap-2 md:p-2.5">
          {chips.map((c) => {
            const on = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(c.id)}
                className={`h-11 shrink-0 rounded-full border px-4 text-[15px] md:h-[46px] md:px-5 md:text-base ${
                  on ? "border-forest bg-forest font-semibold text-smile" : "border-forest/20 bg-white font-medium text-forest"
                }`}
              >
                {c.labelAr}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-9 px-4 pb-10 pt-6 md:gap-16 md:px-8 md:pb-16 md:pt-12">
        {shown.map((cat) => (
          <section key={cat.id} aria-labelledby={`cat-${cat.id}`} className="flex flex-col gap-3 md:gap-6">
            <div className="flex items-baseline justify-between gap-4 border-b-2 border-forest pb-2 md:justify-start md:pb-3">
              <h2 id={`cat-${cat.id}`} className="font-display text-[26px] font-extrabold text-forest md:text-4xl">{cat.labelAr}</h2>
              <span dir="ltr" lang="en" className="font-latin text-xs font-semibold uppercase tracking-widest text-leaf md:text-[15px]">{cat.labelEn}</span>
            </div>
            <div className="grid gap-3 md:grid-cols-[repeat(auto-fill,minmax(min(100%,520px),1fr))] md:gap-4">
              {cat.items.map((item) => {
                const price = formatPrice(item.price);
                return (
                  <article key={item.id} className="flex items-start gap-3.5 rounded-[20px] border border-forest/12 bg-white p-3 md:items-center md:gap-5 md:rounded-3xl md:p-3.5">
                    {item.image ? (
                      <div className="relative size-[88px] shrink-0 overflow-hidden rounded-[14px] md:size-[132px] md:rounded-[18px]">
                        <Photo
                          src={item.image}
                          alt={item.nameAr}
                          fill
                          sizes="(min-width: 768px) 132px, 88px"
                         
                          className="object-cover"
                          style={{ objectPosition: item.imagePosition }}
                        />
                      </div>
                    ) : (
                      <div aria-hidden className="flex size-[88px] shrink-0 items-center justify-center rounded-[14px] bg-sand md:size-[132px] md:rounded-[18px]">
                        <svg viewBox="0 0 200 40" className="w-12 text-forest/30 md:w-16"><path d="M6 8 Q100 44 194 8" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /></svg>
                      </div>
                    )}
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <h3 className="font-display text-[17px] font-bold leading-snug text-forest md:text-[21px]">{item.nameAr}</h3>
                      <span dir="ltr" lang="en" className="text-end font-latin text-xs font-semibold text-muted md:text-sm">{item.nameEn}</span>
                      {item.descriptionAr && <p className="mt-0.5 text-[13px] leading-relaxed text-muted md:text-[15px]">{item.descriptionAr}</p>}
                      {price && (
                        <span className="mt-1.5 self-start rounded-md bg-smile/40 px-2 py-0.5 text-[15px] font-bold md:hidden">{price}</span>
                      )}
                    </div>
                    {price && (
                      <span className="hidden shrink-0 self-start rounded-lg bg-smile/40 px-2.5 py-1 text-[17px] font-bold md:block">{price}</span>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
