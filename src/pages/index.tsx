import { LgtmImage } from '@nekochans/lgtm-cat-ui';

import { TopTemplate } from '../templates/TopTemplate/TopTemplate';
import { imageData } from '../utils/imageData';
import { extractRandomImages } from '../utils/randomImages';

import type { GetStaticProps, NextPage } from 'next';

type Props = {
  lgtmImages: LgtmImage[];
};

const IndexPage: NextPage<Props> = ({ lgtmImages }) => (
  <TopTemplate lgtmImages={lgtmImages} />
);

// eslint-disable-next-line require-await
export const getStaticProps: GetStaticProps = async () => {
  const revalidate = 3600;

  const imageLength = 9;
  const lgtmImages = extractRandomImages(imageData, imageLength);

  return {
    props: { lgtmImages },
    revalidate,
  };
};

export default IndexPage;
