import Head from 'next/head';

import type { MetaTag } from '../../features/metaTag';
import type { FC, ReactNode } from 'react';

type Props = {
  metaTag: MetaTag;
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ metaTag, children }) => (
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
