import {
  ErrorTemplate as OrgErrorTemplate,
  type ErrorType,
} from '@nekochans/lgtm-cat-ui';

import { httpStatusCode } from '../../constants';
import {
  custom404title,
  customErrorTitle,
  metaTagList,
  type Language,
} from '../../features';
import { useSaveSettingLanguage } from '../../hooks';
import { ErrorLayout } from '../../layouts';
import { assertNever } from '../../utils';

import { InternalServerErrorImage } from './InternalServerErrorImage';
import { NotFoundImage } from './NotFoundImage';
import { ServiceUnavailableImage } from './ServiceUnavailableImage';

import type { FC } from 'react';

type Props = {
  type: ErrorType;
  language: Language;
};

const catImage = (type: ErrorType): JSX.Element => {
  switch (type) {
    case httpStatusCode.notFound:
      return <NotFoundImage />;
    case httpStatusCode.internalServerError:
      return <InternalServerErrorImage />;
    case httpStatusCode.serviceUnavailable:
      return <ServiceUnavailableImage />;
    default:
      return assertNever(type);
  }
};

const pageTitle = (type: ErrorType, language: Language) => {
  switch (type) {
    case httpStatusCode.notFound:
      return custom404title(language);
    case httpStatusCode.internalServerError:
      return customErrorTitle(language);
    case httpStatusCode.serviceUnavailable:
      return metaTagList(language).maintenance.title;
    default:
      return assertNever(type);
  }
};

export const ErrorTemplate: FC<Props> = ({ type, language }) => {
  const { saveSettingLanguage } = useSaveSettingLanguage();

  return (
    <ErrorLayout title={pageTitle(type, language)}>
      <OrgErrorTemplate
        type={type}
        language={language}
        catImage={catImage(type)}
        changeLanguageCallback={saveSettingLanguage}
      />
    </ErrorLayout>
  );
};
