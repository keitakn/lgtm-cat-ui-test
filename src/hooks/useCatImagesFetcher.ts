import {
  issueAccessToken,
  fetchLgtmImagesInRandom,
  fetchLgtmImagesInRecentlyCreated,
} from '../api';

import type { LgtmImage } from '../features';

const randomCatImagesFetcher = async (): Promise<LgtmImage[]> => {
  const accessToken = await issueAccessToken();

  return fetchLgtmImagesInRandom({ accessToken });
};

const newArrivalCatImagesFetcher = async (): Promise<LgtmImage[]> => {
  const accessToken = await issueAccessToken();

  throw new Error('newArrivalCatImagesFetcher Error!!!!');

  return fetchLgtmImagesInRecentlyCreated({ accessToken });
};

export const useCatImagesFetcher = () => ({
  randomCatImagesFetcher,
  newArrivalCatImagesFetcher,
});
