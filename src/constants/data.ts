import { Pages, Routes } from "./enums";

export const links = [
  { title: "Menu", href: Routes.MENU },
  { title: "About", href: Routes.ABOUT },
  { title: "Contact", href: Routes.CONTACT },
  { title: "Login", href: `${Routes.AUTH}/${Pages.LOGIN}` },
];