import { issueAccessToken } from '../api/fetch/authToken';
import {
  fetchLgtmImagesInRandom,
  fetchLgtmImagesInRecentlyCreated,
} from '../api/fetch/lgtmImage';

import type { LgtmImage } from '../features/lgtmImage';

const randomCatImagesFetcher = async (): Promise<LgtmImage[]> => {
  const accessToken = await issueAccessToken();

  return fetchLgtmImagesInRandom({ accessToken });
};

const newArrivalCatImagesFetcher = async (): Promise<LgtmImage[]> => {
  const accessToken = await issueAccessToken();

  return fetchLgtmImagesInRecentlyCreated({ accessToken });
};

export const useCatImagesFetcher = () => ({
  randomCatImagesFetcher,
  newArrivalCatImagesFetcher,
});
