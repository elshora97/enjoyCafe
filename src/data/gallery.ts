import type { StaticImageData } from "next/image";

import storefront from "@/assets/images/storefront.jpg";
import smoothie from "@/assets/images/smoothie.jpg";
import brewEspresso from "@/assets/images/brew-espresso.jpg";
import shelves from "@/assets/images/shelves.jpg";
import karkadeh from "@/assets/images/karkadeh.jpg";
import thirsty from "@/assets/images/thirsty.jpg";
import morning from "@/assets/images/morning.jpg";
import aerial from "@/assets/images/aerial.jpg";
import dessert from "@/assets/images/dessert.jpg";
import mojito from "@/assets/images/mojito.jpg";
import windowBar from "@/assets/images/window-bar.jpg";
import sparkling from "@/assets/images/sparkling.jpg";
import underwater from "@/assets/images/underwater.jpg";
import espressoTop from "@/assets/images/espresso-top.jpg";
import counter from "@/assets/images/counter.jpg";

export type GalleryTag = "place" | "drinks" | "coffee" | "food" | "fun";

export type Shot = {
  id: string;
  tag: GalleryTag;
  caption: string;
  date: string;
  image: StaticImageData;
  position?: string;
  wide?: boolean; // spans 2 columns on larger screens
  tall?: boolean; // spans 2 rows
  video?: boolean; // came from a reel
};

export const galleryFilters: { id: GalleryTag | "all" | "video"; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "place", label: "المكان" },
  { id: "drinks", label: "مشروبات" },
  { id: "coffee", label: "قهوة" },
  { id: "food", label: "حلويات" },
  { id: "fun", label: "بوستاتنا" },
  { id: "video", label: "فيديو" },
];

export const shots: Shot[] = [
  { id: "storefront", tag: "place", caption: "الواجهة", date: "فيسبوك", image: storefront, position: "50% 40%", tall: true, video: true },
  { id: "smoothie", tag: "drinks", caption: "سموزي بطيخ وفراولة", date: "11 سبتمبر", image: smoothie, wide: true, tall: true },
  { id: "brew", tag: "coffee", caption: "Brew Espresso", date: "12 أغسطس", image: brewEspresso, position: "50% 45%" },
  { id: "shelves", tag: "place", caption: "رفوف البار", date: "فيسبوك", image: shelves, position: "50% 40%", tall: true, video: true },
  { id: "karkadeh", tag: "drinks", caption: "كركديه", date: "20 أغسطس", image: karkadeh, position: "50% 65%" },
  { id: "thirsty", tag: "fun", caption: "لو عطشانه كلميني", date: "4 سبتمبر", image: thirsty, position: "50% 35%", tall: true },
  { id: "morning", tag: "coffee", caption: "morning", date: "1 سبتمبر", image: morning, position: "50% 55%", tall: true, video: true },
  { id: "aerial", tag: "place", caption: "Wait. — Enjoy life", date: "8 سبتمبر", image: aerial, wide: true, video: true },
  { id: "dessert", tag: "food", caption: "What makes you happy?", date: "27 أغسطس", image: dessert, position: "50% 60%", tall: true },
  { id: "mojito", tag: "drinks", caption: "باشن فروت موهيتو", date: "7 سبتمبر", image: mojito, wide: true },
  { id: "window", tag: "place", caption: "القعدة جنب الشباك", date: "فيسبوك", image: windowBar, position: "50% 55%", video: true },
  { id: "sparkling", tag: "drinks", caption: "مشروب فوار بالتلج", date: "3 سبتمبر", image: sparkling, position: "50% 60%", tall: true, video: true },
  { id: "underwater", tag: "fun", caption: "اهلا بيك ف قاع الهامور", date: "22 أغسطس", image: underwater, wide: true, tall: true },
  { id: "espresso-top", tag: "coffee", caption: "قهوة من فوق", date: "22 أغسطس", image: espressoTop, position: "50% 45%", video: true },
  { id: "counter", tag: "place", caption: "الكاونتر", date: "فيسبوك", image: counter, video: true },
];
