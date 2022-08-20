import { NextRequest } from 'next/server';

import { isLanguage, type Language } from '../features/language';

export const mightExtractLanguage = (
  req: NextRequest,
  // eslint-disable-next-line consistent-return
): Language | undefined => {
  const language = req.cookies.get('language');

  if (isLanguage(language)) {
    return language;
  }
};
