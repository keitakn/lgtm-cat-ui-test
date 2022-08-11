import { convertLocaleToLanguage } from '../features/locale';
import { UploadTemplate } from '../templates';

import type { Language } from '@nekochans/lgtm-cat-ui';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  language: Language;
};

const UploadPage: NextPage<Props> = ({ language }) => (
  <UploadTemplate language={language} />
);

export const getStaticProps: GetStaticProps = (context) => {
  const { locale } = context;
  const language = convertLocaleToLanguage(locale);

  return {
    props: { language },
  };
};

export default UploadPage;
