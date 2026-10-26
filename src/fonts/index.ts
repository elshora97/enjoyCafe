import localFont from "next/font/local";

/**
 * Brand fonts, self-hosted (SIL Open Font License — see OFL-LICENSE.txt).
 * Each family is split into an Arabic and a Latin file with `unicode-range`,
 * so the browser only downloads the script a page actually uses.
 * Arabic files are preloaded because the site is Arabic-first.
 * (next/font needs literal option values, so the ranges are inlined.)
 */
export const alexandriaArabic = localFont({
  src: "./alexandria-arabic-wght-normal.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-alexandria-ar",
  declarations: [{ prop: "unicode-range", value: "U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0897-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC" }],
});

export const alexandriaLatin = localFont({
  src: "./alexandria-latin-wght-normal.woff2",
  weight: "100 900",
  display: "swap",
  preload: false,
  variable: "--font-alexandria-la",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" }],
});

export const readexArabic = localFont({
  src: "./readex-pro-arabic-wght-normal.woff2",
  weight: "160 700",
  display: "swap",
  variable: "--font-readex-ar",
  declarations: [{ prop: "unicode-range", value: "U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0897-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC" }],
});

export const readexLatin = localFont({
  src: "./readex-pro-latin-wght-normal.woff2",
  weight: "160 700",
  display: "swap",
  preload: false,
  variable: "--font-readex-la",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" }],
});

export const bricolage = localFont({
  src: "./bricolage-grotesque-latin-wght-normal.woff2",
  weight: "200 800",
  display: "swap",
  preload: false,
  variable: "--font-bricolage",
});

export const fontVariables = [alexandriaArabic, alexandriaLatin, readexArabic, readexLatin, bricolage]
  .map((f) => f.variable)
  .join(" ");
