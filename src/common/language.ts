import { Locales } from "./locales";

import en from "@/assets/lang/en.json";
import vi from "@/assets/lang/vi.json";

export const messages = {
  [Locales.EN]: en,
  [Locales.VI]: vi,
};

export const defaultLocale = Locales.EN;
