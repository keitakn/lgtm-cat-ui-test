import { LayoutContainer } from '@nekochans/lgtm-cat-ui';
import React from 'react';

import type { NextPage } from 'next';

const IndexPage: NextPage = () => (
  <LayoutContainer useNextLink={true}>
    <h1>ねこ</h1>
    <h2>かわいいねこ</h2>
    <p>ねこたくさん</p>
  </LayoutContainer>
);

export default IndexPage;
