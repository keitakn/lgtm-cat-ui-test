import { ErrorTemplate as OrgErrorTemplate } from '@nekochans/lgtm-cat-ui';

import {
  custom404title,
  customErrorTitle,
  metaTagList,
} from '../../features/metaTag';
import { ErrorLayout } from '../../layouts';
import { assertNever } from '../../utils/assertNever';

import { InternalServerErrorImage } from './InternalServerErrorImage';
import { NotFoundImage } from './NotFoundImage';
import { ServiceUnavailableImage } from './ServiceUnavailableImage';

import type { FC } from 'react';

// eslint-disable-next-line
type ErrorType = 404 | 500 | 503;

type Props = {
  type: ErrorType;
  language: 'ja' | 'en';
};

const catImage = (type: ErrorType): JSX.Element => {
  switch (type) {
    // eslint-disable-next-line no-magic-numbers
    case 404:
      return <NotFoundImage />;
    // eslint-disable-next-line no-magic-numbers
    case 500:
      return <InternalServerErrorImage />;
    // eslint-disable-next-line no-magic-numbers
    case 503:
      return <ServiceUnavailableImage />;
    default:
      return assertNever(type);
  }
};

const pageTitle = (type: ErrorType) => {
  switch (type) {
    // eslint-disable-next-line no-magic-numbers
    case 404:
      return custom404title;
    // eslint-disable-next-line no-magic-numbers
    case 500:
      return customErrorTitle;
    // eslint-disable-next-line no-magic-numbers
    case 503:
      return metaTagList().maintenance.title;
    default:
      return assertNever(type);
  }
};

export const ErrorTemplate: FC<Props> = ({ type, language }) => (
  <ErrorLayout title={pageTitle(type)}>
    <OrgErrorTemplate
      type={type}
      language={language}
      catImage={catImage(type)}
    />
  </ErrorLayout>
);
