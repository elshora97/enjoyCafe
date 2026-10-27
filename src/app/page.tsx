import { Photo } from "@/components/photo";
import Link from "next/link";
import { HeroMedia } from "@/components/hero-media";
import { ArrowIcon, ChatIcon, ClockIcon, FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, PlayIcon, Smile } from "@/components/icons";
import { contactLink, site } from "@/data/site";
import { findItem, formatPrice, startingPrice } from "@/data/menu";

import heroPoster from "@/assets/images/hero-poster.jpg";
import smoothie from "@/assets/images/smoothie.jpg";
import mojito from "@/assets/images/mojito.jpg";
import karkadeh from "@/assets/images/karkadeh.jpg";
import brewEspresso from "@/assets/images/brew-espresso.jpg";
import dessert from "@/assets/images/dessert.jpg";
import shelves from "@/assets/images/shelves.jpg";
import windowBar from "@/assets/images/window-bar.jpg";
import storefront from "@/assets/images/storefront.jpg";
import thirsty from "@/assets/images/thirsty.jpg";
import morning from "@/assets/images/morning.jpg";
import sparkling from "@/assets/images/sparkling.jpg";

export const metadata = { alternates: { canonical: "/" } };

const price = (id: string) => formatPrice(findItem(id)?.price);
const from = (categoryId: string) => {
  const p = formatPrice(startingPrice(categoryId));
  return p && `من ${p}`;
};

const eyebrow = "font-latin text-sm font-semibold uppercase tracking-[0.14em]";
const h2 = "font-display text-[clamp(32px,4.4vw,60px)] font-extrabold leading-[1.15] text-forest";

export default function HomePage() {
  const contact = contactLink();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <HeroMedia poster={heroPoster} caption="Happy Thursday from ur favourite cafe">
        <span className="inline-flex items-center gap-2 self-start rounded-full border border-cream/30 bg-cream/16 px-3 py-1.5 text-[13px] font-semibold md:hidden">
          <span aria-hidden className="size-2 rounded-full bg-online" /> 24 ساعة
        </span>
        <h1 id="hero-title" className="font-display text-[54px] font-extrabold leading-[1.1] md:text-[clamp(56px,7vw,108px)] md:leading-[1.08]">
          <span className="block">ابدأ يومك</span>
          <span className="relative inline-block text-smile">
            بقهوة
            <Smile className="absolute inset-x-0 -bottom-3 h-5 w-full md:-bottom-4 md:h-7" />
          </span>
        </h1>
        <p className="mt-1 max-w-[36ch] text-base leading-[1.8] text-cream/90 md:text-xl">
          كل كوباية معاها ابتسامة. قهوة، عصير فريش، وحلو — على طريق طنطا الزراعي في كفر الزيات.
        </p>
        <div className="flex gap-2.5 md:flex-wrap md:gap-3">
          <Link href="/menu" className="inline-flex h-14 flex-1 items-center justify-center gap-2.5 rounded-full bg-smile px-7 text-[17px] font-bold text-ink md:flex-none md:text-lg">
            شوف المنيو <ArrowIcon className="hidden md:block" />
          </Link>
          <Link href="/visit" className="inline-flex h-14 flex-1 items-center justify-center gap-2.5 rounded-full border-2 border-cream/55 px-7 text-[17px] font-semibold text-cream md:flex-none md:text-lg">
            <PinIcon className="hidden md:block" /> تعالى زورنا
          </Link>
        </div>
        <ul className="hidden flex-wrap gap-2.5 text-[15px] md:flex">
          {["24 ساعة", "قعدة · تيك أواي · دليفري", "جنب البنك الأهلي"].map((t) => (
            <li key={t} className="rounded-full border border-cream/30 bg-cream/14 px-3.5 py-2 backdrop-blur-md">{t}</li>
          ))}
        </ul>
      </HeroMedia>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <div aria-hidden className="overflow-hidden border-y-2 border-forest bg-smile text-forest">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap py-3.5 font-display text-xl font-extrabold motion-reduce:animate-none md:py-[18px] md:text-[28px]">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10">
              <span>قهوة</span><span>◡</span><span dir="ltr" className="font-latin">Coffee</span><span>◡</span>
              <span>راحة</span><span>◡</span><span dir="ltr" className="font-latin">Comfort</span><span>◡</span>
              <span>استمتاع</span><span>◡</span><span dir="ltr" className="font-latin">Enjoy</span><span>◡</span>
              <span>24 ساعة</span><span>◡</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SIGNATURE DRINKS ─────────────────────────────────── */}
      <section aria-labelledby="sig-title" className="mx-auto max-w-7xl py-14 md:px-8 md:py-[104px]">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-6 px-4 md:mb-12 md:px-0">
          <div className="flex flex-col gap-3">
            <p dir="ltr" lang="en" className={`${eyebrow} hidden self-start text-leaf md:block`}>Signature drinks</p>
            <h2 id="sig-title" className={h2}>اللي الكل بيطلبه</h2>
          </div>
          <Link href="/menu" className="inline-flex min-h-11 items-center gap-2 font-semibold text-forest md:text-[17px]">
            المنيو كامل <ArrowIcon size={18} />
          </Link>
        </div>

        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:flex-wrap md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          <article className="relative flex h-[420px] w-[280px] shrink-0 snap-start items-end overflow-hidden rounded-[28px] bg-[#E0463B] md:h-auto md:min-h-[560px] md:w-auto md:flex-[1.5_1_520px] md:rounded-[32px]">
            <Photo src={smoothie} alt="سموزي بطيخ وفراولة وكريز ونعناع في كوباية Enjoy" fill sizes="(min-width: 768px) 60vw, 280px" className="object-cover object-[30%_60%] md:object-[70%_50%]" />
            <div className="glass-light relative m-3 flex w-full flex-col gap-1.5 rounded-[20px] p-4 md:m-5 md:max-w-[440px] md:gap-2 md:rounded-3xl md:p-[26px]">
              <span className="hidden self-start rounded-full bg-forest px-3 py-1 text-[13px] font-semibold text-smile md:inline">سموزي</span>
              <h3 className="font-display text-[19px] font-extrabold leading-snug text-forest md:text-[28px]">سموزي فريش</h3>
              <p dir="ltr" lang="en" className="hidden text-end font-latin text-sm font-semibold text-muted md:block">Fresh smoothies</p>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] text-muted md:text-[15px]">مانجا · فراولة · باشون فروت · كولادا</span>
                <Price value={from("smoothie")} />
              </div>
            </div>
          </article>

          <article className="flex h-[420px] w-[280px] shrink-0 snap-start flex-col gap-3 rounded-[28px] bg-smile p-3.5 md:h-auto md:min-h-[560px] md:w-auto md:flex-[1_1_340px] md:gap-[18px] md:rounded-[32px] md:p-6">
            <div className="relative h-[210px] overflow-hidden rounded-[20px] md:h-[250px] md:rounded-[22px]">
              <Photo src={mojito} alt="موهيتو باشون فروت" fill sizes="(min-width: 768px) 30vw, 250px" className="object-cover object-[28%_62%]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-[22px] font-extrabold text-forest md:text-[28px]">موهيتو باشون فروت</h3>
              <p dir="ltr" lang="en" className="hidden text-end font-latin text-[15px] font-semibold text-forest md:block">Passion Fruit Mojito</p>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-[15px]">
              {["نعناع فريش", "عصير ليمون", "باشن فروت", "لايم", "ثلج", "صودا"].map((x) => <li key={x}>— {x}</li>)}
            </ul>
            <div className="mt-auto flex items-center justify-between border-t-2 border-forest pt-3">
              <span className="text-sm font-semibold text-forest md:text-base">موهيتو وصودا</span>
              <Price value={price("mojito-passion")} dark />
            </div>
          </article>

          {[
            { img: sparkling, alt: "مشروب فوار بالتلج", title: "كوكتيل صودا", cat: "بلو هاواوي · بينا كولادا", pos: "object-[50%_55%]", value: from("soda") },
            { img: brewEspresso, alt: "إسبريسو بينزل في الكوباية", title: "إسبريسو", cat: "قهوة", pos: "object-[50%_45%]", value: price("espresso") },
            { img: dessert, alt: "طبق حلو بالتين والفستق", title: "حلويات و وافل", cat: "مولتن كيك · وافل · بان كيك", pos: "object-[50%_78%]", value: from("dessert") },
          ].map((c) => (
            <article key={c.title} className="flex h-[420px] w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-forest/12 bg-white md:h-auto md:w-auto md:flex-[1_1_300px]">
              <div className="relative min-h-0 flex-1 md:h-[280px] md:flex-none">
                <Photo src={c.img} alt={c.alt} fill sizes="(min-width: 768px) 30vw, 280px" className={`object-cover ${c.pos}`} />
              </div>
              <div className="flex flex-col gap-1.5 px-6 pb-6 pt-5">
                <h3 className="font-display text-xl font-bold text-forest md:text-2xl">{c.title}</h3>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[15px] text-muted">{c.cat}</span>
                  <Price value={c.value} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── THE PLACE ────────────────────────────────────────── */}
      <section aria-labelledby="story-title" className="bg-sand">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-10 px-4 py-14 md:gap-14 md:px-8 md:py-[104px]">
          <div className="relative grid min-w-0 flex-[1_1_460px] grid-cols-2 gap-2.5 md:gap-4">
            <div className="relative row-span-2 min-h-[320px] overflow-hidden rounded-[20px] md:min-h-[480px] md:rounded-[28px]">
              <Photo src={shelves} alt="رفوف البار وحيطة الخط العربي جوه انچوي" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative h-[155px] overflow-hidden rounded-[20px] md:h-[232px] md:rounded-[28px]">
              <Photo src={windowBar} alt="الترابيزات جنب الشباك الكبير" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-[50%_55%]" />
            </div>
            <div className="relative h-[155px] overflow-hidden rounded-[20px] md:h-[232px] md:rounded-[28px]">
              <Photo src={storefront} alt="واجهة كافيه انچوي واليافطة" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-[50%_35%]" />
            </div>
            <div className="glass-light absolute bottom-6 end-[52%] start-6 hidden flex-col gap-1 rounded-[22px] px-5 py-4 md:flex">
              <span className="font-display text-[30px] font-extrabold text-forest">24 ساعة</span>
              <span className="text-sm">قعدة · تيك أواي · دليفري</span>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5 md:gap-[22px]">
            <p dir="ltr" lang="en" className={`${eyebrow} self-start text-leaf`}>The place</p>
            <h2 id="story-title" className={h2}>قهوة. راحة. استمتاع.</h2>
            <p className="text-base leading-[1.9] text-muted md:text-lg">
              {site.nameAr} على طريق طنطا الزراعي في كفر الزيات، جنب البنك الأهلي. فاتحين 24 ساعة — تقعد معانا، تاخد طلبك تيك أواي، أو يوصلك دليفري.
            </p>
            <ul className="mt-1 flex flex-col gap-3.5">
              {[
                ["قهوة", "من الإسبريسو للكابتشينو."],
                ["راحة", "شباك كبير، نور شمس، وقعدة مريحة."],
                ["استمتاع", "كل كوباية معاها ابتسامة."],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline gap-3.5">
                  <span className="min-w-[92px] font-display text-xl font-extrabold text-forest">{k}</span>
                  <span className="text-muted md:text-[17px]">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PLAYFUL CTA (their own caption) ──────────────────── */}
      <section aria-labelledby="cta-title" className="bg-forest text-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-10 px-4 py-14 md:gap-14 md:px-8 md:py-24">
          <div className="relative order-first h-[360px] min-w-0 flex-[1_1_320px] overflow-hidden rounded-[28px] md:order-none md:aspect-[4/5] md:h-auto md:max-w-[400px] md:rotate-3 md:rounded-[32px] md:shadow-[0_24px_60px_rgb(0_0_0/0.35)]">
            <Photo src={thirsty} alt="بوست: لو عطشانه كلميني — كوباية Enjoy" fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover object-[50%_30%]" />
          </div>
          <div className="flex min-w-0 flex-[2_1_520px] flex-col gap-6 md:-order-1 md:gap-7">
            <h2 id="cta-title" className="font-display text-[42px] font-black leading-[1.15] text-smile md:text-[clamp(44px,6.2vw,92px)] md:leading-[1.12]">
              لو عطشانه او جعانه… كلميني
            </h2>
            <p className="text-lg text-cream/85 md:text-[19px]">دليفري وتيك أواي — في أي وقت، إحنا فاتحين 24 ساعة.</p>
            <div className="flex flex-wrap gap-3">
              <a href={contact.href} className="inline-flex h-14 flex-1 items-center justify-center gap-2.5 rounded-full bg-smile px-6 text-lg font-bold text-ink md:flex-none">
                {contact.kind === "facebook" ? <FacebookIcon /> : <ChatIcon />} {contact.label}
              </a>
              {site.phone && contact.kind !== "phone" && (
                <a href={`tel:+${site.phone}`} className="inline-flex h-14 items-center gap-2.5 rounded-full border-2 border-cream/50 px-6 text-lg font-semibold">
                  <PhoneIcon /> اتصل بينا
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MATCHES ──────────────────────────────────────────── */}
      <section aria-labelledby="match-title" className="mx-auto max-w-7xl px-4 pt-12 md:px-8 md:pt-24">
        <div className="relative flex min-h-[300px] items-center overflow-hidden rounded-[28px] p-4 md:min-h-[320px] md:rounded-[36px] md:p-10">
          <Photo src={windowBar} alt="" fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover object-[50%_45%]" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(270deg,rgb(3_40_33/0.55),rgb(3_40_33/0.1))]" />
          <div className="glass-dark-soft relative flex w-full max-w-[720px] flex-wrap items-center justify-between gap-6 rounded-3xl px-6 py-6 text-cream md:rounded-[28px] md:px-9 md:py-8">
            <div className="flex flex-[1_1_300px] flex-col gap-2">
              <h2 id="match-title" className="font-display text-[26px] font-extrabold text-smile md:text-[34px]">الماتشات عندنا</h2>
              <p className="leading-[1.8] text-cream/92 md:text-[17px]">بننزل جدول ماتشات الليلة على صفحتنا — تعالى اتفرج معانا.</p>
            </div>
            <a href={site.social.facebook} className="inline-flex h-[52px] items-center rounded-full bg-smile px-6 font-bold text-ink md:text-[17px]">
              جدول الماتشات
            </a>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ────────────────────────────────────────── */}
      <section aria-labelledby="ig-title" className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-6 md:mb-9">
          <div className="flex flex-col gap-2.5">
            <h2 id="ig-title" dir="ltr" className="text-end font-latin text-[32px] font-extrabold text-forest md:text-[clamp(36px,4.4vw,60px)]">
              {site.social.instagramHandle}
            </h2>
            <p className="text-muted md:text-lg">تابعنا — كل جديد بينزل هناك الأول.</p>
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
        <div className="grid grid-cols-3 gap-1.5 md:grid-cols-6 md:gap-3">
          {[
            { img: smoothie, label: "سموزي" },
            { img: morning, label: "morning", video: true },
            { img: thirsty, label: "لو عطشانه كلميني" },
            { img: karkadeh, label: "كركديه" },
            { img: dessert, label: "Dessert" },
            { img: sparkling, label: "مشروب فوار", video: true },
          ].map((p) => (
            <Link key={p.label} href="/gallery" aria-label={`صورة من الجاليري: ${p.label}`} className="relative block aspect-square overflow-hidden rounded-xl md:rounded-[20px]">
              <Photo src={p.img} alt="" fill sizes="(min-width: 768px) 200px, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              {p.video && <PlayIcon size={20} className="absolute left-3 top-3 text-cream drop-shadow" />}
            </Link>
          ))}
        </div>
      </section>

      {/* ── VISIT STRIP ──────────────────────────────────────── */}
      <section aria-labelledby="visit-title" className="mx-auto max-w-7xl px-4 pb-14 md:px-8 md:pb-[104px]">
        <div className="relative flex min-h-[560px] items-end overflow-hidden rounded-[28px] bg-forest p-3 md:min-h-[660px] md:items-center md:rounded-[36px] md:p-10">
          <Photo src={storefront} alt="واجهة كافيه انچوي من الشارع" fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover object-[50%_35%]" />
          <span className="glass-dark-soft absolute bottom-6 left-6 hidden rounded-full px-4 py-2.5 text-sm font-medium text-cream md:block">هتعرفنا من اليافطة</span>
          <div className="relative z-10 flex w-full max-w-[560px] flex-col gap-5 rounded-3xl border border-white/55 bg-smile/80 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.7),0_30px_70px_rgb(0_0_0/0.3)] backdrop-blur-xl md:gap-6 md:rounded-[30px] md:p-10">
            <h2 id="visit-title" className="font-display text-[28px] font-extrabold leading-tight text-forest md:text-[clamp(34px,4vw,52px)]">تعالى، مستنيينك</h2>
            <dl className="flex flex-col gap-4">
              <InfoRow icon={<PinIcon size={22} />} term="العنوان" value={site.address.shortAr} />
              <InfoRow icon={<ClockIcon size={22} />} term="المواعيد" value={site.hoursAr} />
              {site.phone && <InfoRow icon={<PhoneIcon size={22} />} term="تليفون" value={<span dir="ltr">+{site.phone}</span>} />}
            </dl>
            <a href={site.mapsUrl} className="inline-flex h-[52px] items-center justify-center gap-2.5 self-stretch rounded-full bg-forest px-6 font-semibold text-cream md:self-start md:text-[17px]">
              افتح في جوجل ماب <ArrowIcon size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Price({ value, dark }: { value: string | null; dark?: boolean }) {
  if (!value) return null;
  return (
    <span className={`shrink-0 rounded-md px-2 py-0.5 text-lg font-bold ${dark ? "bg-forest/12" : "bg-smile/40"}`}>{value}</span>
  );
}

function InfoRow({ icon, term, value }: { icon: React.ReactNode; term: string; value: React.ReactNode }) {
  return (
    // A <dl> group may only hold <dt>/<dd>, so the icon lives inside the <dt>.
    <div className="grid grid-cols-[auto_1fr] items-start gap-x-3.5 text-forest">
      <dt className="contents font-bold">
        <span className="row-span-2 mt-0.5">{icon}</span>
        <span>{term}</span>
      </dt>
      <dd className="col-start-2 mt-0.5 leading-relaxed text-ink md:text-[17px]">{value}</dd>
    </div>
  );
}
