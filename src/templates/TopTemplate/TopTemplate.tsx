import {
  TopTemplate as OrgTopTemplate,
  type LgtmImage,
  Language,
} from '@nekochans/lgtm-cat-ui';

import { metaTagList } from '../../features/metaTag';
import { appBaseUrl } from '../../features/url';
import { useSaveSettingLanguage } from '../../hooks/useSaveSettingLanguage';
import { DefaultLayout } from '../../layouts';

import type { FC } from 'react';

// eslint-disable-next-line max-lines-per-function, require-await
const randomCatImagesFetcher = async () => {
  const lgtmImagesList: LgtmImage[] = [
    {
      id: 11,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/03/16/23/5947f291-a46e-453c-a230-0d756d7174cb.webp',
    } as const,
    {
      id: 12,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/8dc0dfd0-bb86-4d03-ad1d-e541c1a5d3ec.webp',
    } as const,
    {
      id: 13,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/93646290-d9cd-41e7-a136-8942ebf6bc12.webp',
    } as const,
    {
      id: 14,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/b459c655-dabd-4423-b437-362bb8b68471.webp',
    } as const,
    {
      id: 15,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/d462b567-7427-422a-a860-762b5296ab5a.webp',
    } as const,
    {
      id: 16,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/dba3ed18-1664-4d09-b20a-0a5033b6e93f.webp',
    } as const,
    {
      id: 17,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2021/11/16/22/fe780d70-9f04-4a41-a840-cdd990fb75b3.webp',
    } as const,
    {
      id: 18,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/04/16/22/e3968a00-d190-412f-8a27-5acd54feff12.webp',
    } as const,
    {
      id: 19,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/22/11/56ddad8e-08ea-4d28-bd25-7ba11c4ebdc5.webp',
    } as const,
  ];

  return lgtmImagesList;
};

// eslint-disable-next-line max-lines-per-function, require-await
const newArrivalCatImagesFetcher = async () => {
  const lgtmImagesList: LgtmImage[] = [
    {
      id: 21,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/07/26/13/2071d87f-3950-4ec3-94eb-3d116451329e.webp',
    } as const,
    {
      id: 22,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/07/24/18/18f8abdb-c4c5-44f7-82ca-e7550eda0780.webp',
    } as const,
    {
      id: 23,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/07/01/08/2141b748-d1ba-4d15-a9de-04d9f36e5518.webp',
    } as const,
    {
      id: 24,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/30/14/041e978e-787c-4b45-a0a9-55702b4f2875.webp',
    } as const,
    {
      id: 25,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/30/14/e1d0518c-00c5-4bb0-b5ad-fce05012c8d1.webp',
    } as const,
    {
      id: 26,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/23/02/4f2f6098-6167-4a99-8026-fbeafcea3012.webp',
    } as const,
    {
      id: 27,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/23/02/7052fd12-4007-45a7-9932-18d645397605.webp',
    } as const,
    {
      id: 28,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/06/23/02/ffbadd8d-8d9d-4eae-9bd3-af11b330d8d6.webp',
    } as const,
    {
      id: 29,
      imageUrl:
        'https://lgtm-images.lgtmeow.com/2022/02/24/22/ed78dd80-9bfc-456c-a474-917e5c311633.webp',
    } as const,
  ];

  return lgtmImagesList;
};

const appUrl = appBaseUrl();

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

  return (
    <DefaultLayout metaTag={metaTag}>
      <OrgTopTemplate
        language={language}
        lgtmImages={lgtmImages}
        randomCatImagesFetcher={randomCatImagesFetcher}
        newArrivalCatImagesFetcher={newArrivalCatImagesFetcher}
        appUrl={appUrl}
        fetchRandomCatImagesCallback={fetchRandomCatImagesCallback}
        fetchNewArrivalCatImagesCallback={fetchNewArrivalCatImagesCallback}
        clipboardMarkdownCallback={clipboardMarkdownCallback}
        changeLanguageCallback={saveSettingLanguage}
      />
    </DefaultLayout>
  );
};
