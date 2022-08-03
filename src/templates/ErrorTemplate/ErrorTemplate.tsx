import { ErrorTemplate as OrgErrorTemplate } from '@nekochans/lgtm-cat-ui';

import { NotFoundImage } from './NotFoundImage';

import type { FC } from 'react';

// eslint-disable-next-line
type ErrorType = 404 | 500 | 503;

type Props = {
  type: ErrorType;
  language: 'ja' | 'en';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const catImage = (type: ErrorType): JSX.Element => <NotFoundImage />;

export const ErrorTemplate: FC<Props> = ({ type, language }) => (
  <OrgErrorTemplate type={type} language={language} catImage={catImage(type)} />
);
