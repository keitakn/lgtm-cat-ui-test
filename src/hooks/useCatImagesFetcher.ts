import { issueAccessToken } from '../api/fetch/authToken';
import { fetchLgtmImagesInRandom } from '../api/fetch/lgtmImage';

import type { LgtmImage } from '../features/lgtmImage';

const randomCatImagesFetcher = async (): Promise<LgtmImage[]> => {
  const accessToken = await issueAccessToken();

  return fetchLgtmImagesInRandom({ accessToken });
};

export const useCatImagesFetcher = () => ({ randomCatImagesFetcher });
