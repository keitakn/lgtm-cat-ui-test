import Head from 'next/head';

import type { MetaTag } from '../constants/metaTag';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  metaTag: MetaTag;
};

const DefaultLayout: FC<Props> = ({ children, metaTag }) => (
  <>
    <Head>
      <title>{metaTag.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex , nofollow" />
    </Head>
    {children}
  </>
);

export default DefaultLayout;
