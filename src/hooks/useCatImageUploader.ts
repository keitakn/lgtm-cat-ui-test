import { issueAccessToken } from '../api/fetch/authToken';
import { uploadCatImage } from '../api/fetch/lgtmImage';
import { Language } from '../features/language';
import { AcceptedTypesImageExtension } from '../features/lgtmImage';
import { createSuccessResult, isFailureResult } from '../features/result';

const createCatImageUploader =
  (language: Language) =>
  async (image: string, imageExtension: AcceptedTypesImageExtension) => {
    const accessToken = await issueAccessToken();

    const uploadCatImageResult = await uploadCatImage({
      accessToken,
      image,
      imageExtension,
    });
    if (isFailureResult(uploadCatImageResult)) {
      return createSuccessResult({
        displayErrorMessages: [`${language} Errorが発生。`],
      });
    }

    return createSuccessResult({
      displayErrorMessages: [],
      createdLgtmImageUrl: uploadCatImageResult.value.createdLgtmImageUrl,
    });
  };

export const useCatImageUploader = (language: Language) => ({
  imageUploader: createCatImageUploader(language),
});
