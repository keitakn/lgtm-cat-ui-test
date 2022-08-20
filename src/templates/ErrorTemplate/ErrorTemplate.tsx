import {
  ErrorTemplate as OrgErrorTemplate,
  type ErrorType,
} from '@nekochans/lgtm-cat-ui';

import { httpStatusCode } from '../../constants/httpStatusCode';
import {
  custom404title,
  customErrorTitle,
  metaTagList,
} from '../../features/metaTag';
import { useSaveSettingLanguage } from '../../hooks/useSaveSettingLanguage';
import { ErrorLayout } from '../../layouts';
import { assertNever } from '../../utils/assertNever';

import { InternalServerErrorImage } from './InternalServerErrorImage';
import { NotFoundImage } from './NotFoundImage';
import { ServiceUnavailableImage } from './ServiceUnavailableImage';

import type { Language } from '../../features/language';
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
