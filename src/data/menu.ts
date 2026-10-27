import type { StaticImageData } from "next/image";

import espressoTop from "@/assets/images/espresso-top.jpg";
import mojito from "@/assets/images/mojito.jpg";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  THE MENU — the only file to edit when prices or items change.
 *  Transcribed from the printed Enjoy menu.
 *
 *  • price: number in EGP. `priceDouble` = the "D" (double) column for coffee.
 *  • note: small text shown under the name (options, flavours).
 *  • image / imagePosition: optional photo + focal point (CSS object-position).
 *  • draft: true hides an item from the site.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type MenuItem = {
  id: string;
  nameAr: string;
  note?: string;
  price: number | null;
  priceDouble?: number;
  image?: StaticImageData;
  imagePosition?: string;
  draft?: boolean;
};

export type MenuCategory = {
  id: string;
  labelAr: string;
  labelEn: string;
  /** Shown once at the top of the category when some items have two sizes. */
  sizesNote?: string;
  items: MenuItem[];
};

/** Short helper to keep the list readable. */
const i = (id: string, nameAr: string, price: number, extra: Partial<MenuItem> = {}): MenuItem => ({
  id,
  nameAr,
  price,
  ...extra,
});

export const menu: MenuCategory[] = [
  {
    id: "hot",
    labelAr: "مشروبات سخنة",
    labelEn: "Hot drinks",
    sizesNote: "سينجل / دبل",
    items: [
      i("tea", "شاي", 15),
      i("fruit-tea", "شاي فاكهة", 30),
      i("milk-tea", "شاي حليب", 30),
      i("karak", "شاي كرك", 40),
      i("pot-small", "براد صغير", 35),
      i("pot-medium", "براد وسط", 45),
      i("pot-large", "براد كبير", 55),
      i("enjoy-herbs", "أعشاب انچوي", 40),
      i("herbs", "أعشاب", 25),
      i("cinnamon", "قرفة سادة", 25),
      i("cinnamon-milk", "قرفة حليب", 30),
      i("ginger", "جنزبيل سادة", 25),
      i("ginger-milk", "جنزبيل حليب", 30),
      i("cinnamon-ginger-milk-honey", "قرفة جنزبيل حليب بالعسل", 40),
      i("cinnamon-ginger-milk", "قرفة جنزبيل حليب سادة", 35),
      i("cinnamon-ginger", "قرفة جنزبيل", 30),
      i("coffee", "قهوة", 30, { priceDouble: 35 }),
      i("french-coffee", "قهوة فرنساوي", 45, { priceDouble: 50 }),
      i("hazelnut-coffee", "قهوة بندق", 50, { priceDouble: 60 }),
      i("nutella-coffee", "قهوة نوتيلا", 45),
      i("espresso", "إسبريسو", 35, { priceDouble: 45, image: espressoTop, imagePosition: "50% 45%" }),
      i("macchiato", "إسبريسو ميكاتو", 45, { priceDouble: 55 }),
      i("cortado", "كورتادو", 65),
      i("affogato", "إسبريسو أفوكادو", 65),
      i("americano", "أمريكان كوفي", 50),
      i("cappuccino", "كابتشينو", 70),
      i("latte", "لاتيه", 60),
      i("nescafe", "نسكافيه", 60),
      i("nescafe-black", "نسكافيه بلاك", 45),
      i("flat-white", "فلات وايت", 70),
      i("spanish-latte", "اسبانيش لاتيه", 75),
      i("mocha", "موكا", 75),
      i("hot-cider", "هوت سيدر", 45),
      i("caramel-macchiato", "كراميل ميكاتو", 75),
      i("sahlab", "سحلب سادة", 50),
      i("sahlab-nuts", "سحلب مكسرات", 60),
      i("sahlab-fruit", "سحلب فواكه", 70),
      i("sahlab-enjoy", "سحلب انچوي", 80),
    ],
  },
  {
    id: "hot-chocolate",
    labelAr: "هوت شوكليت",
    labelEn: "Hot chocolate",
    items: [
      i("hot-choc", "هوت شوكليت", 50),
      i("hot-white", "هوت وايت", 60),
      i("hot-nutella", "هوت نوتيلا", 60),
      i("hot-lotus", "هوت لوتس", 65),
      i("hot-oreo", "هوت أوريو", 65),
      i("hot-pistachio", "هوت فسدق", 65),
      i("hot-caramel", "هوت كراميل", 60),
      i("hot-kinder", "هوت كيندر", 65),
      i("hot-white-coffee", "هوت وايت كوفي", 75),
      i("hot-nutella-coffee", "هوت نوتيلا كوفي", 75),
      i("hot-lotus-coffee", "هوت لوتس كوفي", 75),
    ],
  },
  {
    id: "ice-corner",
    labelAr: "آيس كوفي",
    labelEn: "Ice corner",
    items: [
      i("ice-mocha", "آيس موكا كوفي", 70),
      i("ice-americano", "آيس أمريكان كوفي", 55),
      i("ice-caramel", "آيس كراميل كوفي", 70),
      i("ice-white", "آيس وايت كوفي", 70),
      i("ice-nutella", "آيس نوتيلا كوفي", 70),
      i("ice-lotus", "آيس لوتس كوفي", 73),
      i("ice-pistachio", "آيس فسدق كوفي", 80),
      i("ice-spanish", "آيس اسبانيش لاتيه", 75),
    ],
  },
  {
    id: "frappe",
    labelAr: "فرابيه",
    labelEn: "Frappé",
    items: [
      i("frappe-caramel", "فرابيه كراميل", 70),
      i("frappe-coffee", "فرابيه كوفي", 65),
      i("frappe-choc", "فرابيه شوكليت", 70),
      i("frappe-peach", "فرابيه خوخ", 75),
      i("frappe-berry", "فرابيه توت", 75),
    ],
  },
  {
    id: "milkshake",
    labelAr: "ميلك شيك",
    labelEn: "Milkshake",
    items: [
      i("ms-vanilla", "فانيليا", 60),
      i("ms-choc", "شوكليت", 60),
      i("ms-caramel", "كراميل", 70),
      i("ms-strawberry", "فراولة", 70),
      i("ms-berry", "توت", 70),
      i("ms-mango", "مانجا", 70),
      i("ms-green-apple", "تفاح أخضر", 70),
      i("ms-peach", "خوخ", 70),
      i("ms-hohos", "هوهوز", 75),
      i("ms-oreo", "أوريو", 75),
      i("ms-twix", "تويكس", 75),
      i("ms-kiwi", "كيوي", 70),
      i("ms-nutella", "نوتيلا", 70),
      i("ms-lotus", "لوتس", 75),
      i("ms-pistachio", "فسدق", 85),
      i("ms-kinder", "كيندر", 80),
      i("ms-kitkat", "كيت كات", 85),
      i("ms-galaxy", "جلاكسي", 85),
      i("ms-dates", "بلح", 75),
      i("ms-brownies", "براونيز", 85),
      i("ms-red-velvet", "ريد فيلفت", 85),
      i("ms-cheesecake", "تشيز كيك", 85),
      i("ms-mocha", "موكا", 80),
      i("ms-snickers", "سنيكرز", 85),
      i("ms-enjoy", "انچوي", 100),
      i("ms-choc-coffee", "شوكليت كوفي", 80),
      i("ms-nutella-coffee", "نوتيلا كوفي", 80),
    ],
  },
  {
    id: "smoothie",
    labelAr: "سموزي",
    labelEn: "Smoothie",
    items: [
      i("sm-mango", "مانجا", 65),
      i("sm-berry", "توت", 60),
      i("sm-strawberry", "فراولة", 65),
      i("sm-kiwi", "كيوي", 85),
      i("sm-pineapple", "أناناس", 60),
      i("sm-watermelon", "بطيخ", 60),
      i("sm-peach", "خوخ", 60),
      i("sm-lemon-mint", "ليمون نعناع", 60),
      i("sm-lemon", "ليمون", 55),
      i("sm-passion", "باشون فروت", 70),
      i("sm-mixed-berry", "ميكس بيري", 65),
      i("sm-green-apple", "تفاح أخضر", 60),
      i("sm-watermelon-colada", "بطيخ كولادا", 80),
      i("sm-mango-colada", "مانجا كولادا", 80),
    ],
  },
  {
    id: "juice",
    labelAr: "عصير فريش",
    labelEn: "Fresh juice",
    items: [
      i("j-mango", "مانجا", 60),
      i("j-strawberry", "فراولة", 60),
      i("j-kiwi", "كيوي", 85),
      i("j-dates", "بلح", 70),
      i("j-banana", "موز", 60),
      i("j-watermelon", "بطيخ", 60),
      i("j-guava", "جوافة", 60),
      i("j-lemon-mint", "ليمون نعناع", 55),
      i("j-lemon", "ليمون", 50),
      i("j-paradise", "براديس", 75, { note: "جوافة – نعناع" }),
      i("j-pink-rose", "بينك روز", 80),
      i("j-avocado", "أفوكادو", 110),
      i("j-avocado-enjoy", "أفوكادو انچوي", 130),
      i("j-florida", "فلوريدا", 80),
      i("j-yogurt-honey", "زبادي عسل", 60),
      i("j-yogurt-fruit", "زبادي فاكهة", 75, { note: "فراولة – توت" }),
      i("j-strawberry-banana", "فراولة موز حليب بالعسل", 80),
      i("j-fruit-salad", "فروت سلاط", 80),
      i("j-cocktail", "كوكتيل عصير", 80),
      i("j-kiwi-banana", "كيوي موز", 90),
      i("j-watermelon-mint", "بطيخ نعناع", 65),
      i("j-watermelon-kiwi", "بطيخ كيوي", 80),
      i("j-sobia", "عناب ساقع", 40),
      i("j-kiwi-mango", "كيوي مانجا", 90),
    ],
  },
  {
    id: "soda",
    labelAr: "كوكتيل صودا",
    labelEn: "Cocktail soda",
    items: [
      i("mojito-classic", "موهيتو كلاسيك", 60),
      i("mojito-berry", "موهيتو توت", 65),
      i("mojito-strawberry", "موهيتو فراولة", 65),
      i("mojito-passion", "موهيتو باشون فروت", 75, { image: mojito, imagePosition: "28% 62%" }),
      i("soda-mint", "صودا منت", 55),
      i("sunshine", "صن شاين", 60),
      i("hawaii", "هاواوي", 60),
      i("blue-hawaii", "بلو هاواوي", 65),
      i("tropical-soda", "تروبيكال صودا", 65),
      i("mixed-berry-soda", "ميكس بيري صودا", 70),
      i("mango-colada", "مانجا كولادا", 75),
      i("pina-colada", "بينا كولادا", 70),
      i("watermelon-colada", "بطيخ كولادا", 75),
      i("mango-passion", "مانجا باشون فروت", 75),
      i("redbull-soda", "ريدبول صودا", 105),
    ],
  },
  {
    id: "dessert",
    labelAr: "حلويات و وافل",
    labelEn: "Dessert & waffle",
    items: [
      i("molten-cake", "مولتن كيك", 95),
      i("cheesecake", "تشيز كيك", 90, { note: "كراميل – شوكليت – توت – فراولة" }),
      i("red-velvet", "ريد فيلفت", 90),
      i("chocolate-cake", "شوكليت كيك", 85),
      i("brownies", "براونيز", 90),
      i("cinnabon", "سينابون", 90),
      i("om-ali", "أم علي", 80),
      i("waffle-nutella", "وافل نوتيلا", 95),
      i("waffle-lotus", "وافل لوتس", 95),
      i("waffle-pistachio", "وافل فسدق", 105),
      i("waffle-kinder", "وافل كيندر", 105),
      i("waffle-nutella-banana", "وافل نوتيلا موز", 100),
      i("waffle-white-choc", "وافل وايت شوكليت", 95),
      i("waffle-classic", "وافل كلاسيك", 90, { note: "دارك – وايت" }),
      i("waffle-berry", "وافل توت", 90),
      i("waffle-strawberry", "وافل فراولة", 90),
      i("waffle-fruit", "وافل فاكهة", 110, { note: "صوص – تفاح – موز" }),
      i("waffle-enjoy", "وافل انچوي", 120, { note: "نوتيلا – لوتس – وايت – فسدق" }),
      i("pancake-classic", "بان كيك كلاسيك", 95),
      i("pancake-nutella", "بان كيك نوتيلا", 100),
      i("pancake-mix", "بان كيك ميكس", 120, { note: "نوتيلا – لوتس – كيندر – فسدق" }),
    ],
  },
  {
    id: "ice-cream",
    labelAr: "آيس كريم",
    labelEn: "Ice cream",
    items: [
      i("ice-cream-classic", "آيس كريم كلاسيك", 55, { note: "3 بولة" }),
      i("ice-cream-mix", "آيس كريم ميكس", 70),
    ],
  },
  {
    id: "extra",
    labelAr: "إضافات",
    labelEn: "Extra",
    items: [
      i("extra-ice-cream", "آيس كريم", 15),
      i("extra-birthday", "عيد ميلاد", 50),
      i("extra-honey", "عسل", 10),
      i("extra-milk-nuts-sauce", "حليب / مكسرات / صوص", 15),
    ],
  },
];

/** Menu as shown on the site (drafts removed, empty categories dropped). */
export const publishedMenu: MenuCategory[] = menu
  .map((c) => ({ ...c, items: c.items.filter((item) => !item.draft) }))
  .filter((c) => c.items.length > 0);

const allItems = menu.flatMap((c) => c.items);

export function findItem(id: string): MenuItem | undefined {
  return allItems.find((item) => item.id === id);
}

/** Lowest price in a category — for "من ٥٥ ج.م" teasers. */
export function startingPrice(categoryId: string): number | null {
  const prices = menu.find((c) => c.id === categoryId)?.items.flatMap((x) => (x.price == null ? [] : [x.price])) ?? [];
  return prices.length ? Math.min(...prices) : null;
}

const priceFormat = new Intl.NumberFormat("ar-EG", { maximumFractionDigits: 2 });

export function formatNumber(n: number): string {
  return priceFormat.format(n);
}

export function formatPrice(price: number | null | undefined): string | null {
  return price == null ? null : `${priceFormat.format(price)} ج.م`;
}
