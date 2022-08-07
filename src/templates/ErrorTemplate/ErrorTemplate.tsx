import { ErrorTemplate as OrgErrorTemplate } from '@nekochans/lgtm-cat-ui';

import { NotFoundImage } from './NotFoundImage';

import type { FC } from 'react';
import {InternalServerErrorImage} from "./InternalServerErrorImage";

// eslint-disable-next-line
type ErrorType = 404 | 500 | 503;

type Props = {
  type: ErrorType;
  language: 'ja' | 'en';
};

const catImage = (type: ErrorType): JSX.Element => {
  switch (type) {
    case 404:
      return <NotFoundImage />;
    case 500:
      return <InternalServerErrorImage />;
    default:
      return <InternalServerErrorImage />;
  }
};

export const ErrorTemplate: FC<Props> = ({ type, language }) => (
  <OrgErrorTemplate type={type} language={language} catImage={catImage(type)} />
);
