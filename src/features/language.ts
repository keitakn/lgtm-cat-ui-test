import { Language as OrgLanguage } from '@nekochans/lgtm-cat-ui';

export type Language = OrgLanguage;

export const languages = ['en', 'ja'] as const;

export const isLanguage = (value: unknown): value is Language => {
  if (typeof value !== 'string') {
    return false;
  }

  return languages.includes(value as Language);
};
