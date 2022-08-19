import { NextRequest } from 'next/server';

import { isLanguage } from '../features/language';

import type { Language } from '@nekochans/lgtm-cat-ui';

export const mightExtractLanguage = (
  req: NextRequest,
  // eslint-disable-next-line consistent-return
): Language | undefined => {
  const language = req.cookies.get('language');

  if (isLanguage(language)) {
    return language;
  }
};
