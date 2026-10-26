import Link from "next/link";
import { contactLink, site } from "@/data/site";

/** Fixed bottom bar on phones: menu, contact, directions — always one tap away. */
export function QuickActions() {
  const contact = contactLink();
  return (
    <nav
      aria-label="إجراءات سريعة"
      className="glass-dark fixed inset-x-3 bottom-3 z-40 flex gap-1.5 rounded-full p-2 md:hidden"
    >
      <Link href="/menu" className="flex h-12 flex-1 items-center justify-center rounded-full bg-smile text-[15px] font-bold text-ink">
        المنيو
      </Link>
      <a href={contact.href} className="flex h-12 flex-1 items-center justify-center rounded-full text-[15px] font-semibold text-cream">
        {contact.kind === "facebook" ? "كلّمنا" : contact.label}
      </a>
      <a href={site.mapsUrl} className="flex h-12 flex-1 items-center justify-center rounded-full text-[15px] font-semibold text-cream">
        الطريق
      </a>
    </nav>
  );
}
