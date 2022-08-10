import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/', '/upload', '/terms', '/privacy', '/maintenance'],
};

export const middleware = (req: NextRequest) => {
  const { nextUrl } = req;

  const country = req.geo?.country?.toLowerCase();
  if (country && country !== 'JP') {
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
