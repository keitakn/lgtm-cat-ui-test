import { Language } from '@nekochans/lgtm-cat-ui';
import { GetStaticProps, NextPage } from 'next';

import { httpStatusCode } from '../constants/httpStatusCode';
import { convertLocaleToLanguage } from '../features/locale';
import { ErrorTemplate } from '../templates';

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
