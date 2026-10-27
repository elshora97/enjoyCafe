"use client";

import { Photo } from "@/components/photo";
import { useState } from "react";
import { formatNumber, type MenuCategory, type MenuItem } from "@/data/menu";

function PriceTag({ item, hasDouble }: { item: MenuItem; hasDouble: boolean }) {
  if (item.price == null) return null;
  return (
    <span className="flex shrink-0 items-baseline gap-1.5 font-bold text-forest">
      <span className="min-w-[2.2ch] text-center text-[17px] md:text-lg">{formatNumber(item.price)}</span>
      {hasDouble && (
        <>
          <span aria-hidden className={item.priceDouble ? "text-forest/30" : "invisible"}>/</span>
          <span className={`min-w-[2.2ch] text-center text-[17px] md:text-lg ${item.priceDouble ? "" : "invisible"}`}>
            {item.priceDouble ? formatNumber(item.priceDouble) : <span aria-hidden>٠٠</span>}
          </span>
        </>
      )}
    </span>
  );
}

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

      <p className="mx-auto mt-5 max-w-7xl px-4 text-sm text-muted md:mt-8 md:px-8 md:text-base">كل الأسعار بالجنيه المصري.</p>

      <div className="mx-auto max-w-7xl gap-6 px-4 pb-10 pt-4 md:columns-2 md:px-8 md:pb-16 md:pt-6 xl:columns-3">
        {shown.map((cat) => {
          const hasDouble = cat.items.some((x) => x.priceDouble != null);
          return (
            <section
              key={cat.id}
              aria-labelledby={`cat-${cat.id}`}
              className="mb-5 flex break-inside-avoid flex-col rounded-[24px] border border-forest/12 bg-white p-4 md:mb-6 md:rounded-[28px] md:p-6"
            >
              <div className="flex items-baseline justify-between gap-3 border-b-2 border-forest pb-2.5">
                <h2 id={`cat-${cat.id}`} className="font-display text-2xl font-extrabold text-forest md:text-[28px]">{cat.labelAr}</h2>
                <span dir="ltr" lang="en" className="font-latin text-xs font-semibold uppercase tracking-widest text-leaf">{cat.labelEn}</span>
              </div>
              {hasDouble && (
                <div className="flex justify-end gap-1.5 pt-2 text-xs font-semibold text-muted">
                  <span className="min-w-[2.2ch] text-center">سينجل</span>
                  <span aria-hidden className="opacity-0">/</span>
                  <span className="min-w-[2.2ch] text-center">دبل</span>
                </div>
              )}
              <ul className="flex flex-col">
                {cat.items.map((item) => (
                  <li key={item.id} className="flex items-center gap-3 border-b border-dashed border-forest/15 py-2.5 last:border-b-0 md:py-3">
                    {item.image && (
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-xl md:size-16">
                        <Photo src={item.image} alt="" fill sizes="64px" className="object-cover" style={{ objectPosition: item.imagePosition }} />
                      </div>
                    )}
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="text-[16px] font-semibold leading-snug text-ink md:text-[17px]">{item.nameAr}</span>
                      {item.note && <span className="text-[13px] leading-snug text-muted">{item.note}</span>}
                    </div>
                    <PriceTag item={item} hasDouble={hasDouble} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
