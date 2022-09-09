import * as Sentry from '@sentry/nextjs';
import NextErrorComponent, { type ErrorProps } from 'next/error';

import { httpStatusCode, type HttpStatusCode } from '../constants';
import { convertLocaleToLanguage, type Language } from '../features';
import { ErrorTemplate } from '../templates';

import type { NextPage, NextPageContext } from 'next';

type Props = ErrorProps & {
  language: Language;
  statusCode: HttpStatusCode;
  err?: Error;
  hasGetInitialPropsRun?: boolean;
};

const CustomErrorPage: NextPage<Props> = ({
  language,
  statusCode,
  err,
  hasGetInitialPropsRun,
}) => {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err);
  }

  // eslint-disable-next-line
  console.log(`ステータスは ${statusCode}  言語は${language}`);
  if (statusCode === httpStatusCode.notFound) {
    return <ErrorTemplate type={statusCode} language={language} />;
  }

  if (statusCode === httpStatusCode.serviceUnavailable) {
    return <ErrorTemplate type={statusCode} language={language} />;
  }

  return (
    <ErrorTemplate
      type={httpStatusCode.internalServerError}
      language={language}
    />
  );
};

const defaultTimeout = 2000;

// eslint-disable-next-line max-statements
CustomErrorPage.getInitialProps = async (
  context: NextPageContext,
): Promise<Props> => {
  const errorInitialProps = NextErrorComponent.getInitialProps(
    context,
  ) as Props;

  const { res, err, asPath, locale } = context;

  errorInitialProps.hasGetInitialPropsRun = true;
  errorInitialProps.language = convertLocaleToLanguage(locale);

  if (res?.statusCode === httpStatusCode.notFound) {
    return errorInitialProps;
  }

  if (err) {
    Sentry.captureException(err);

    await Sentry.flush(defaultTimeout);

    return errorInitialProps;
  }

  Sentry.captureException(
    new Error(`_error.tsx getInitialProps missing data at path: ${asPath}`),
  );
  await Sentry.flush(defaultTimeout);

  return errorInitialProps;
};

export default CustomErrorPage;
