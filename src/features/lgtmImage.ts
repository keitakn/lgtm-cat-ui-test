import type { AccessToken } from './authToken';
import type {
  LgtmImage as OrgLgtmImage,
  AcceptedTypesImageExtension as OrgAcceptedTypesImageExtension,
} from '@nekochans/lgtm-cat-ui';

export type LgtmImage = OrgLgtmImage;

export type AcceptedTypesImageExtension = OrgAcceptedTypesImageExtension;

export type FetchLgtmImagesDto = {
  accessToken: AccessToken;
};

export type FetchLgtmImages = (dto: FetchLgtmImagesDto) => Promise<LgtmImage[]>;

export const isLgtmImages = (value: unknown): value is LgtmImage[] => {
  if (Array.isArray(value)) {
    // eslint-disable-next-line no-magic-numbers
    if (Object.prototype.toString.call(value[0]) !== '[object Object]') {
      return false;
    }

    // eslint-disable-next-line no-magic-numbers
    const lgtmImage = value[0] as LgtmImage;

    return (
      Object.hasOwn(lgtmImage, 'id') && Object.hasOwn(lgtmImage, 'imageUrl')
    );
  }

  return false;
};
