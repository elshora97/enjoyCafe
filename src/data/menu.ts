import type { StaticImageData } from "next/image";

import espressoTop from "@/assets/images/espresso-top.jpg";
import mojito from "@/assets/images/mojito.jpg";
import smoothie from "@/assets/images/smoothie.jpg";
import karkadeh from "@/assets/images/karkadeh.jpg";
import morning from "@/assets/images/morning.jpg";
import sparkling from "@/assets/images/sparkling.jpg";
import dessert from "@/assets/images/dessert.jpg";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  THE MENU — the only file to edit when prices or items change.
 *
 *  • price: number in EGP (e.g. 45). Leave `null` to hide the price.
 *  • draft: true hides an item from the site (used for items whose real
 *    name we still need). Remove `draft` once the name is filled in.
 *  • image / imagePosition: optional photo + focal point (CSS object-position).
 * ─────────────────────────────────────────────────────────────────────────
 */

export type MenuItem = {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr?: string;
  price: number | null;
  image?: StaticImageData;
  imagePosition?: string;
  draft?: boolean;
};

export type MenuCategory = {
  id: string;
  labelAr: string;
  labelEn: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "coffee",
    labelAr: "قهوة",
    labelEn: "Coffee",
    items: [
      { id: "espresso", nameAr: "إسبريسو", nameEn: "Espresso", price: null, image: espressoTop, imagePosition: "50% 45%" },
      { id: "cappuccino", nameAr: "كابتشينو", nameEn: "Cappuccino", price: null },
      { id: "morning-coffee", nameAr: "[اسم المشروب]", nameEn: "[Item name]", descriptionAr: "مشروب فيديو morning", price: null, image: morning, imagePosition: "50% 60%", draft: true },
    ],
  },
  {
    id: "mojito",
    labelAr: "موهيتو وصودا",
    labelEn: "Mojito & soda",
    items: [
      { id: "passion-mojito", nameAr: "باشن فروت موهيتو", nameEn: "Passion Fruit Mojito", descriptionAr: "نعناع فريش، عصير ليمون، باشن فروت، لايم، ثلج، صودا", price: null, image: mojito, imagePosition: "28% 62%" },
      { id: "sparkling", nameAr: "[اسم المشروب الفوار]", nameEn: "[Item name]", price: null, image: sparkling, imagePosition: "50% 60%", draft: true },
    ],
  },
  {
    id: "juice",
    labelAr: "عصاير وسموزي",
    labelEn: "Juices & smoothies",
    items: [
      { id: "watermelon-smoothie", nameAr: "سموزي بطيخ، فراولة، كريز ونعناع", nameEn: "Watermelon Strawberry Cherry & Mint Smoothie", descriptionAr: "بطيخ، فراولة، كريز، ورق نعناع فريش", price: null, image: smoothie, imagePosition: "30% 60%" },
      { id: "halabeno", nameAr: "حلابينو", nameEn: "Halabeno", descriptionAr: "عصير فريش من انچوي", price: null },
      { id: "karkadeh", nameAr: "كركديه", nameEn: "Hibiscus (Karkadeh)", price: null, image: karkadeh, imagePosition: "50% 70%" },
    ],
  },
  {
    id: "dessert",
    labelAr: "حلويات",
    labelEn: "Desserts",
    items: [
      { id: "red-velvet", nameAr: "ريد فيلفيت", nameEn: "Red Velvet", price: null },
      { id: "molten-cake", nameAr: "مولتن كيك", nameEn: "Molten Cake", price: null },
      { id: "cinnabon", nameAr: "سينابون", nameEn: "Cinnabon", price: null },
      { id: "fig-dessert", nameAr: "[اسم الحلو بالتين]", nameEn: "[Item name]", price: null, image: dessert, imagePosition: "50% 78%", draft: true },
    ],
  },
];

/** Menu as shown on the site (drafts removed, empty categories dropped). */
export const publishedMenu: MenuCategory[] = menu
  .map((c) => ({ ...c, items: c.items.filter((i) => !i.draft) }))
  .filter((c) => c.items.length > 0);

const priceFormat = new Intl.NumberFormat("ar-EG", { maximumFractionDigits: 2 });

export function formatPrice(price: number | null): string | null {
  return price == null ? null : `${priceFormat.format(price)} ج.م`;
}
