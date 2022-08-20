import { assertNever } from '../utils/assertNever';

import type { Language } from './language';

const locales = ['jp-JP', 'en-US'] as const;

export type Locale = typeof locales[number];

const isLocale = (value: unknown): value is Locale => {
  if (typeof value !== 'string') {
    return false;
  }

  return locales.includes(value as Locale);
};

export const convertLocaleToLanguage = (locale: unknown): Language => {
  if (isLocale(locale)) {
    switch (locale) {
      case 'jp-JP':
        return 'ja';
      case 'en-US':
        return 'en';
      default:
        return assertNever(locale);
    }
  }

  return 'ja';
};
