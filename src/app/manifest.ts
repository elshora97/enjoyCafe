import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Enjoy Café — كافيه انچوي",
    short_name: "Enjoy",
    lang: "ar",
    dir: "rtl",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF6E9",
    theme_color: "#032821",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
