import { Footer } from '@nekochans/lgtm-cat-ui';
import React from 'react';

import type { NextPage } from 'next';

const IndexPage: NextPage = () => {
  const termsUrl = 'https://lgtmeow.com/terms';

  const privacyUrl = 'https://lgtmeow.com/privacy';

  const terms = {
    linkText: <a href={termsUrl}>利用規約</a>,
  };

  const privacy = {
    linkText: <a href={privacyUrl}>Privacy Policy</a>,
  };

  return <Footer terms={terms} privacy={privacy} />;
};

export default IndexPage;
