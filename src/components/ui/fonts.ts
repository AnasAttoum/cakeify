import { Roboto, Satisfy } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

export const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});