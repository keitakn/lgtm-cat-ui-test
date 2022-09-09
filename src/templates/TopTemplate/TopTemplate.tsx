import { TopTemplate as OrgTopTemplate } from '@nekochans/lgtm-cat-ui';

import { InternalServerErrorImage } from '../../components';
import {
  metaTagList,
  appBaseUrl,
  type Language,
  LgtmImage,
} from '../../features';
import { useSaveSettingLanguage, useCatImagesFetcher } from '../../hooks';
import { DefaultLayout } from '../../layouts';

import type { FC } from 'react';

const clipboardMarkdownCallback = () =>
  // eslint-disable-next-line no-console
  console.log('clipboardMarkdownCallback executed!');

const fetchRandomCatImagesCallback = () =>
  // eslint-disable-next-line no-console
  console.log('fetchRandomCatImagesCallback executed!');

const fetchNewArrivalCatImagesCallback = () =>
  // eslint-disable-next-line no-console
  console.log('fetchNewArrivalCatImagesCallback executed!');

type Props = {
  language: Language;
  lgtmImages: LgtmImage[];
};

export const TopTemplate: FC<Props> = ({ language, lgtmImages }) => {
  const metaTag = metaTagList(language).top;

  const { saveSettingLanguage } = useSaveSettingLanguage();

  const { randomCatImagesFetcher, newArrivalCatImagesFetcher } =
    useCatImagesFetcher();

  return (
    <DefaultLayout metaTag={metaTag}>
      <OrgTopTemplate
        language={language}
        lgtmImages={lgtmImages}
        randomCatImagesFetcher={randomCatImagesFetcher}
        newArrivalCatImagesFetcher={newArrivalCatImagesFetcher}
        errorCatImage={<InternalServerErrorImage />}
        appUrl={appBaseUrl()}
        fetchRandomCatImagesCallback={fetchRandomCatImagesCallback}
        fetchNewArrivalCatImagesCallback={fetchNewArrivalCatImagesCallback}
        clipboardMarkdownCallback={clipboardMarkdownCallback}
        changeLanguageCallback={saveSettingLanguage}
      />
    </DefaultLayout>
  );
};
