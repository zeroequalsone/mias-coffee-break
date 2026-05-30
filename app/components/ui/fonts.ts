import { Nunito, Poppins, Modak } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
export const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
export const modak = Modak({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-modak",
});
export const grifa = localFont({
  src: [
    {
      path: "../../fonts/grifa-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/grifa-bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-grifa",
});
export const knicknack = localFont({
  src: [
    {
      path: "../../fonts/Knicknack Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Knicknack Medium.otf",
      weight: "500",
      style: "medium",
    },
    { path: "../../fonts/Knicknack Bold.otf", weight: "700", style: "bold" },
    {
      path: "../../fonts/Knicknack Black.otf",
      weight: "800",
      style: "extrabold",
    },
    { path: "../../fonts/Knicknack Heavy.otf", weight: "900", style: "black" },
  ],
  variable: "--font-knicknack",
});
export const sundayNotes = localFont({
  src: [
    {
      path: "../../fonts/sunday-notes-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sundayNotes",
});
