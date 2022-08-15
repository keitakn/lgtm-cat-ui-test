import { NextRequest } from 'next/server';

import type { Language } from '@nekochans/lgtm-cat-ui';

const languages = ['en', 'ja'] as const;

const isLanguage = (value: unknown): value is Language => {
  if (typeof value !== 'string') {
    return false;
  }

  return languages.includes(value as Language);
};

export const mightExtractLanguage = (
  req: NextRequest,
  // eslint-disable-next-line consistent-return
): Language | undefined => {
  const language = req.cookies.get('language');

  if (isLanguage(language)) {
    return language;
  }
};
