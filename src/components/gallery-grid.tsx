"use client";

import { Photo } from "@/components/photo";
import { useState } from "react";
import { PlayIcon } from "@/components/icons";
import { galleryFilters, type Shot } from "@/data/gallery";

export function GalleryGrid({ shots }: { shots: Shot[] }) {
  const [filter, setFilter] = useState<string>("all");
  const visible = shots.filter((s) => filter === "all" || (filter === "video" ? s.video : s.tag === filter));

  return (
    <>
      <div role="toolbar" aria-label="تصنيف الصور" className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0">
        {galleryFilters.map((f) => {
          const on = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f.id)}
              className={`h-11 shrink-0 rounded-full border px-5 md:h-[46px] md:text-base ${
                on ? "border-forest bg-forest font-semibold text-smile" : "border-forest/20 bg-white font-medium text-forest"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid auto-rows-[180px] grid-flow-dense grid-cols-2 gap-2.5 md:auto-rows-[250px] md:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] md:gap-3.5">
        {visible.map((s, i) => (
          <figure
            key={s.id}
            className={`relative m-0 overflow-hidden rounded-[20px] bg-forest md:rounded-3xl ${s.wide ? "col-span-2" : ""} ${s.tall ? "row-span-2" : ""}`}
          >
            <Photo
              src={s.image}
              alt={s.caption}
              fill
              sizes={s.wide ? "(min-width: 768px) 560px, 100vw" : "(min-width: 768px) 280px, 50vw"}
             
              preload={i < 2}
              className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              style={{ objectPosition: s.position }}
            />
            {s.video && (
              <span role="img" aria-label="من فيديو" className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-full border border-cream/40 bg-cream/18 text-cream backdrop-blur-md">
                <PlayIcon />
              </span>
            )}
            <figcaption className="absolute inset-x-2.5 bottom-2.5 flex flex-wrap items-center justify-between gap-1.5 md:inset-x-3 md:bottom-3">
              <span className="glass-light rounded-full px-3 py-1.5 text-xs font-medium md:text-[13px]">{s.caption}</span>
              <span className="glass-dark-soft hidden rounded-full px-2.5 py-1.5 text-xs text-cream md:inline">{s.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
