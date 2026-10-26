"use client";

import { Photo } from "@/components/photo";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { MobileNavLinks } from "@/components/nav-links";
import { site } from "@/data/site";
import logoYellow from "@/assets/enjoy-logo-yellow.png";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const trigger = openButton.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={openButton}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="فتح القائمة"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex size-11 items-center justify-center rounded-full bg-smile text-ink md:hidden"
      >
        <MenuIcon size={22} />
      </button>

      {/* Portalled to <body>: the navbar's backdrop-filter would otherwise
          trap a position:fixed overlay inside the navbar's own box. */}
      {open && createPortal(
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="القائمة"
          className="fixed inset-0 z-[60] flex flex-col gap-8 overflow-y-auto bg-forest/92 px-4 pb-8 pt-4 text-cream backdrop-blur-2xl md:hidden"
        >
          <div className="flex items-center justify-between">
            <Photo src={logoYellow} alt="Enjoy life" className="h-10 w-auto" sizes="120px" />
            <button
              ref={closeButton}
              type="button"
              onClick={close}
              aria-label="إغلاق القائمة"
              className="flex size-11 items-center justify-center rounded-full bg-smile text-ink"
            >
              <CloseIcon size={22} />
            </button>
          </div>
          <nav aria-label="القائمة الرئيسية">
            <MobileNavLinks onNavigate={close} />
          </nav>
          <div className="mt-auto flex flex-col gap-1.5 text-[15px] text-cream/80">
            <span>{site.hoursAr}</span>
            <span>{site.address.shortAr}</span>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
