import * as Sentry from '@sentry/nextjs';
import NextErrorComponent, { type ErrorProps } from 'next/error';

import { httpStatusCode, type HttpStatusCode } from '../constants';
import { convertLocaleToLanguage, type Language } from '../features';
import { ErrorTemplate } from '../templates';

import type { NextPage, NextPageContext } from 'next';

type Props = ErrorProps & {
  language: Language;
  statusCode: HttpStatusCode;
};

const CustomErrorPage: NextPage<Props> = ({ language, statusCode }) => (
  <NextErrorComponent statusCode={statusCode}>
    <ErrorTemplate
      type={httpStatusCode.internalServerError}
      language={language}
    />
  </NextErrorComponent>
);

CustomErrorPage.getInitialProps = async (
  context: NextPageContext,
): Promise<Props> => {
  await Sentry.captureUnderscoreErrorException(context);

  const { locale } = context;

  const errorInitialProps = NextErrorComponent.getInitialProps(
    context,
  ) as Props;

  errorInitialProps.language = convertLocaleToLanguage(locale);

  return errorInitialProps;
};

export default CustomErrorPage;
