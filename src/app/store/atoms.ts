import { atom } from "recoil";

export const darkModeAtom = atom({
  key: "isDarkMode",
  default: true,
});

export const modalAtom = atom({
  key: "isModalOpen",
  default: false,
});
