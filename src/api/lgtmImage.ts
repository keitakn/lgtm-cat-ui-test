import { FetchLgtmImagesError } from '../features/errors/FetchLgtmImagesError';
import { FetchLgtmImages, isLgtmImages } from '../features/lgtmImage';
import { fetchLgtmImagesUrl } from '../features/url';

type FetchImageResponseBody = {
  lgtmImages: {
    id: number;
    url: string;
  }[];
};

// eslint-disable-next-line max-statements
const isFetchImageResponseBody = (
  value: unknown,
): value is FetchImageResponseBody => {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const fetchImageResponseBody = value as FetchImageResponseBody;
  if (!Object.hasOwn(fetchImageResponseBody, 'lgtmImages')) {
    return false;
  }

  if (Array.isArray(fetchImageResponseBody.lgtmImages)) {
    // eslint-disable-next-line no-magic-numbers
    if (fetchImageResponseBody.lgtmImages.length === 0) {
      return false;
    }

    // eslint-disable-next-line prefer-destructuring, no-magic-numbers
    const lgtmImage = fetchImageResponseBody.lgtmImages[0];
    if (Object.prototype.toString.call(lgtmImage) !== '[object Object]') {
      return false;
    }

    return Object.hasOwn(lgtmImage, 'id') && Object.hasOwn(lgtmImage, 'url');
  }

  return false;
};

export const fetchLgtmImagesInRandom: FetchLgtmImages = async (dto) => {
  const options: RequestInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${dto.accessToken.jwtString}`,
    },
  };

  const response = await fetch(fetchLgtmImagesUrl(), options);
  if (!response.ok) {
    throw new FetchLgtmImagesError(response.statusText);
  }

  const responseBody = await response.json();
  if (isFetchImageResponseBody(responseBody)) {
    const lgtmImages = responseBody.lgtmImages.map((value) => ({
      id: Number(value.id),
      imageUrl: value.url,
    }));

    if (isLgtmImages(lgtmImages)) {
      return lgtmImages;
    }
  }

  throw new FetchLgtmImagesError();
};
