import Link from "next/link";
import { Smile } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 pb-20 pt-[140px] text-center md:pt-[190px]">
      <p className="font-latin text-7xl font-extrabold text-forest md:text-8xl">404</p>
      <h1 className="font-display text-3xl font-extrabold text-forest md:text-4xl">الصفحة دي مش موجودة</h1>
      <Smile className="h-8 w-40 text-smile" />
      <p className="text-muted">بس القهوة موجودة دايمًا.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="inline-flex h-14 items-center rounded-full bg-forest px-7 font-semibold text-cream">الرئيسية</Link>
        <Link href="/menu" className="inline-flex h-14 items-center rounded-full bg-smile px-7 font-bold text-ink">المنيو</Link>
      </div>
    </section>
  );
}
