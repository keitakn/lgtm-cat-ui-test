import { NextRequest, NextResponse } from 'next/server';

import {
  mightExtractLocaleFromAcceptLanguage,
  mightExtractLocaleFromCookie,
  mightExtractLocaleFromGeo,
} from './edge';

export const config = {
  matcher: ['/', '/upload', '/terms', '/privacy', '/maintenance'],
};

// eslint-disable-next-line max-statements
export const middleware = (req: NextRequest) => {
  const { nextUrl } = req;

  const localeExtractedFromCookie = mightExtractLocaleFromCookie(req);
  if (localeExtractedFromCookie === 'en-US') {
    nextUrl.pathname = `/${localeExtractedFromCookie}${nextUrl.pathname}`;

    return NextResponse.rewrite(nextUrl);
  }

  const localeExtractedFromGeo = mightExtractLocaleFromGeo(req);
  if (localeExtractedFromGeo === 'en-US') {
    nextUrl.pathname = `/${localeExtractedFromGeo}${nextUrl.pathname}`;

    return NextResponse.rewrite(nextUrl);
  }

  const localeExtractedFromAcceptLanguage =
    mightExtractLocaleFromAcceptLanguage(req);
  if (localeExtractedFromAcceptLanguage === 'en-US') {
    nextUrl.pathname = `/${localeExtractedFromAcceptLanguage}${nextUrl.pathname}`;

    return NextResponse.rewrite(nextUrl);
  }

  return NextResponse.next();
};
