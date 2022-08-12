import Head from 'next/head';

import type { FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const ErrorLayout: FC<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex , nofollow" />
    </Head>
    {children}
  </>
);
