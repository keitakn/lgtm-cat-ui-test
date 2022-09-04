import NextErrorComponent from 'next/error';

import {
  httpStatusCode,
  type HttpStatusCode,
} from '../constants/httpStatusCode';
import { convertLocaleToLanguage, type Language } from '../features';
import { ErrorTemplate } from '../templates';

import type { NextPage, NextPageContext } from 'next';

type Props = {
  language: Language;
  statusCode: HttpStatusCode;
  err?: Error;
  hasGetInitialPropsRun?: boolean;
};

const CustomErrorPage: NextPage<Props> = ({ language }) => (
  <ErrorTemplate
    type={httpStatusCode.internalServerError}
    language={language}
  />
);

CustomErrorPage.getInitialProps = async (
  context: NextPageContext,
): Promise<Props> => {
  const errorInitialProps = (await NextErrorComponent.getInitialProps(
    context,
  )) as Props;

  const { res, locale } = context;

  errorInitialProps.language = convertLocaleToLanguage(locale);
  errorInitialProps.hasGetInitialPropsRun = true;

  if (res?.statusCode === httpStatusCode.notFound) {
    return errorInitialProps;
  }

  return errorInitialProps;
};

export default CustomErrorPage;
