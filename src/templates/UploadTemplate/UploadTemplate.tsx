/* eslint-disable @typescript-eslint/no-unused-vars */
import { UploadTemplate as OrgUploadTemplate } from '@nekochans/lgtm-cat-ui';
import Image from 'next/image';
import React from 'react';

import { createSuccessResult } from '../../features/result';

import cat from './images/cat.webp';

const millisecond = 1000;

const defaultWaitSeconds = 1;

export const sleep = (
  waitSeconds: number = defaultWaitSeconds,
): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, waitSeconds * millisecond);
  });

type AcceptedTypesImageExtension = '.png' | '.jpg' | '.jpeg';

const imageValidator = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep();

  return createSuccessResult({
    isAcceptableCatImage: true,
    notAcceptableReason: [],
  });
};

const imageUploader = async (
  image: string,
  imageExtension: AcceptedTypesImageExtension,
) => {
  await sleep();

  return createSuccessResult({
    createdLgtmImageUrl:
      'https://lgtm-images.lgtmeow.com/2022/06/22/11/56ddad8e-08ea-4d28-bd25-7ba11c4ebdc5.webp' as const,
    displayErrorMessages: [],
  });
};

const CatImage = () => (
  <Image src={cat.src} width="302px" height="302px" alt="Cat" priority={true} />
);

export const UploadTemplate = () => (
  <OrgUploadTemplate
    language="ja"
    imageValidator={imageValidator}
    imageUploader={imageUploader}
    catImage={<CatImage />}
  />
);
