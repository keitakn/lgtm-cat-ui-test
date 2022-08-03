import { ErrorTemplate as OrgErrorTemplate } from '@nekochans/lgtm-cat-ui';

import type { FC } from 'react';

type Props = {
  // eslint-disable-next-line
  type: 404 | 500 | 503;
  language: 'ja' | 'en';
};

export const ErrorTemplate: FC<Props> = ({ type, language }) => (
  <OrgErrorTemplate type={type} language={language} />
);
