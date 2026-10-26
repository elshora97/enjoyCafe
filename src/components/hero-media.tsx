"use client";

import type { StaticImageData } from "next/image";
import { Photo } from "@/components/photo";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";

const VIDEO_SRC = "/video/hero-720.mp4";

type Props = {
  poster: StaticImageData;
  caption: string;
  children: ReactNode;
};

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * Hero with the Facebook reel.
 * Speed strategy:
 *  1. The poster frame is a preloaded, optimized <Image> — that's what paints first (LCP).
 *  2. The video file is only requested after the page has fully loaded and the
 *     browser is idle, so it never competes with HTML/CSS/fonts/images.
 *  3. No video at all for data-saver, 2G connections or reduced-motion users.
 *  4. The framed second copy (desktop only) is never created on phones.
 */
export function HeroMedia({ poster, caption, children }: Props) {
  const [load, setLoad] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const bgRef = useRef<HTMLVideoElement>(null);
  const panelRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let idleId: number | undefined;
    // Runs once the page has loaded and the browser is idle.
    const begin = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const net = (navigator as Navigator & { connection?: NetworkInformation }).connection;
      if (reduce || net?.saveData || /(^|-)2g$/.test(net?.effectiveType ?? "")) {
        setPaused(true); // poster only — the user can still press play
        return;
      }
      setDesktop(window.matchMedia("(min-width: 768px)").matches);
      setLoad(true);
    };
    const start = () => {
      const ric = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));
      idleId = ric(begin) as number;
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      if (idleId !== undefined) (window.cancelIdleCallback ?? window.clearTimeout)(idleId);
    };
  }, []);

  useEffect(() => {
    if (!load) return;
    for (const v of [bgRef.current, panelRef.current]) {
      if (!v) continue;
      v.muted = true;
      v.play().catch(() => setPaused(true));
    }
  }, [load, desktop]);

  const toggle = () => {
    const next = !paused;
    setPaused(next);
    if (!load && !next) {
      setDesktop(window.matchMedia("(min-width: 768px)").matches);
      setLoad(true);
    }
    for (const v of [bgRef.current, panelRef.current]) {
      if (!v) continue;
      if (next) v.pause();
      else v.play().catch(() => {});
    }
  };

  const videoProps = {
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none" as const,
    disablePictureInPicture: true,
    onPlaying: () => setReady(true),
    onError: () => setPaused(true), // unsupported/failed video → keep the poster, show "play"
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest text-cream md:min-h-[860px] md:justify-center"
    >
      {/* Background: sharp & full-screen on phones, blurred on desktop. */}
      <div aria-hidden className="absolute inset-0 -z-10 md:-inset-16 md:blur-[36px] md:brightness-50 md:saturate-[1.15]">
        <Photo src={poster} alt="" fill preload sizes="100vw" quality={70} className="object-cover" />
        {load && (
          <video
            ref={bgRef}
            src={VIDEO_SRC}
            {...videoProps}
            tabIndex={-1}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(3_40_33/0.55)_0%,rgb(3_40_33/0)_22%,rgb(3_40_33/0.1)_45%,rgb(3_40_33/0.5)_80%,rgb(3_40_33/0.8)_100%)] md:bg-[linear-gradient(270deg,rgb(3_40_33/0.7)_0%,rgb(3_40_33/0.4)_50%,rgb(3_40_33/0.2)_100%)]" />
      <div aria-hidden className="absolute end-[8%] top-28 -z-10 hidden size-[420px] rounded-full bg-[radial-gradient(circle,rgb(254_217_6/0.35),transparent_70%)] md:block" />
      <div aria-hidden className="absolute -bottom-32 start-[30%] -z-10 hidden size-[520px] rounded-full bg-[radial-gradient(circle,rgb(61_220_132/0.22),transparent_70%)] md:block" />

      {/* Phones: extra bottom padding keeps the card clear of the fixed quick-action bar. */}
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-14 px-3 pb-[88px] pt-[100px] md:px-8 md:pb-20 md:pt-[150px]">
        <div className="glass-frost flex min-w-0 flex-[1_1_480px] flex-col gap-4 rounded-[30px] p-5 pb-4 md:gap-6 md:rounded-[36px] md:p-11">
          {children}
          <div className="flex justify-end md:hidden">
            <PlayToggle paused={paused} onToggle={toggle} />
          </div>
        </div>

        {/* The reel itself, sharp and vertical — desktop only. */}
        <figure className="relative mx-auto hidden w-full max-w-[360px] flex-[0_1_380px] md:block">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[36px] bg-black shadow-[0_30px_80px_rgb(0_0_0/0.45)] outline outline-[6px] -outline-offset-[6px] outline-smile/90">
            <Photo src={poster} alt="" fill sizes="360px" quality={75} className="object-cover" />
            {load && desktop && (
              <video
                ref={panelRef}
                src={VIDEO_SRC}
                {...videoProps}
                aria-label="فيديو من جوه كافيه انچوي: الواجهة، القعدة، والبار"
                className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
              />
            )}
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/65 to-transparent" />
            <figcaption dir="ltr" lang="en" className="absolute inset-x-[18px] bottom-[72px] text-sm leading-normal text-cream">
              {caption}
            </figcaption>
            <div className="absolute bottom-4 left-4">
              <PlayToggle paused={paused} onToggle={toggle} solid />
            </div>
            <span className="glass-dark-soft absolute bottom-[22px] right-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs">
              <PlayIcon size={12} /> ريل فيسبوك
            </span>
          </div>
        </figure>
      </div>
    </section>
  );
}

function PlayToggle({ paused, onToggle, solid }: { paused: boolean; onToggle: () => void; solid?: boolean }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={paused ? "تشغيل الفيديو" : "إيقاف الفيديو"}
      aria-pressed={!paused}
      className={`flex size-11 items-center justify-center rounded-full ${
        solid ? "bg-smile text-ink" : "border-[1.5px] border-cream/50 bg-forest/40 text-cream"
      }`}
    >
      {paused ? <PlayIcon /> : <PauseIcon />}
    </button>
  );
}
