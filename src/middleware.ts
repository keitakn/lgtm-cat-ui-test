import { NextRequest, NextResponse } from 'next/server';

import { mightExtractLanguage } from './edge/language';

export const config = {
  matcher: ['/', '/upload', '/terms', '/privacy', '/maintenance'],
};

// eslint-disable-next-line max-statements
export const middleware = (req: NextRequest) => {
  const { nextUrl } = req;

  const language = mightExtractLanguage(req);
  if (language && language !== 'ja') {
    nextUrl.pathname = `/en-us${nextUrl.pathname}`;

    return NextResponse.rewrite(nextUrl);
  }

  const country = req.geo?.country?.toLowerCase();
  if (country && country !== 'jp') {
    nextUrl.pathname = `/en-us${nextUrl.pathname}`;

    return NextResponse.rewrite(nextUrl);
  }

  // eslint-disable-next-line no-magic-numbers
  const locale = req.headers.get('accept-language')?.split(',')?.[0];
  if (locale && locale !== 'ja') {
    nextUrl.pathname = `/en-us${nextUrl.pathname}`;
  }

  return NextResponse.rewrite(nextUrl);
};
