import { convertLocaleToLanguage } from '../features/locale';
import { TopTemplate } from '../templates/TopTemplate/TopTemplate';
import { imageData } from '../utils/imageData';
import { extractRandomImages } from '../utils/randomImages';

import type { Language, LgtmImage } from '@nekochans/lgtm-cat-ui';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  language: Language;
  lgtmImages: LgtmImage[];
};

const IndexPage: NextPage<Props> = ({ language, lgtmImages }) => (
  <TopTemplate language={language} lgtmImages={lgtmImages} />
);

// eslint-disable-next-line require-await
export const getStaticProps: GetStaticProps = async (context) => {
  const revalidate = 3600;

  const { locale } = context;
  const language = convertLocaleToLanguage(locale);

  const imageLength = 9;
  const lgtmImages = extractRandomImages(imageData, imageLength);

  return {
    props: { language, lgtmImages },
    revalidate,
  };
};

export default IndexPage;
