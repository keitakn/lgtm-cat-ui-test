import {
  TopTemplate as OrgTopTemplate,
  type LgtmImage,
} from '@nekochans/lgtm-cat-ui';

import { metaTagList } from '../../features/metaTag';
import { appBaseUrl } from '../../features/url';
import { useCatImagesFetcher } from '../../hooks/useCatImagesFetcher';
import { useSaveSettingLanguage } from '../../hooks/useSaveSettingLanguage';
import { DefaultLayout } from '../../layouts';

import type { Language } from '../../features/language';
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
        appUrl={appBaseUrl()}
        fetchRandomCatImagesCallback={fetchRandomCatImagesCallback}
        fetchNewArrivalCatImagesCallback={fetchNewArrivalCatImagesCallback}
        clipboardMarkdownCallback={clipboardMarkdownCallback}
        changeLanguageCallback={saveSettingLanguage}
      />
    </DefaultLayout>
  );
};
