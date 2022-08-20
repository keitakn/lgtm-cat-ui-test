import { httpStatusCode } from '../constants/httpStatusCode';
import { convertLocaleToLanguage } from '../features/locale';
import { ErrorTemplate } from '../templates';

import type { Language } from '../features/language';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  language: Language;
};

const Custom404: NextPage<Props> = ({ language }) => (
  <ErrorTemplate type={httpStatusCode.notFound} language={language} />
);

export const getStaticProps: GetStaticProps = (context) => {
  const { locale } = context;
  const language = convertLocaleToLanguage(locale);

  return {
    props: { language },
  };
};

export default Custom404;
