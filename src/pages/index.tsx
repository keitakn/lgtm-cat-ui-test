import { issueAccessTokenOnServer } from '../api/authToken';
import { fetchLgtmImagesInRandom } from '../api/lgtmImage';
import { convertLocaleToLanguage } from '../features/locale';
import { TopTemplate } from '../templates';
import { imageData } from '../utils/imageData';
import { extractRandomImages } from '../utils/randomImages';

import type { Language } from '../features/language';
import type { LgtmImage } from '../features/lgtmImage';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  language: Language;
  lgtmImages: LgtmImage[];
};

const IndexPage: NextPage<Props> = ({ language, lgtmImages }) => (
  <TopTemplate language={language} lgtmImages={lgtmImages} />
);

// eslint-disable-next-line max-statements
export const getStaticProps: GetStaticProps = async (context) => {
  const revalidate = 3600;

  const { locale } = context;
  const language = convertLocaleToLanguage(locale);

  try {
    const accessToken = await issueAccessTokenOnServer();

    const lgtmImages = await fetchLgtmImagesInRandom({ accessToken });

    return {
      props: { language, lgtmImages },
      revalidate,
    };
  } catch (error) {
    // TODO ここに到達した場合、APIでエラーが起きているので通知を送るようにしたい
    // APIから取得に失敗した場合は静的ファイルに記載されたデータを取得する
    // 理由としてはエラー表示がCacheされる事を避ける為
    const imageLength = 9;
    const lgtmImages = extractRandomImages(imageData, imageLength);

    return {
      props: { language, lgtmImages },
      revalidate,
    };
  }
};

export default IndexPage;
