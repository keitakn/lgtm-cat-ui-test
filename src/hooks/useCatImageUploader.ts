import { issueAccessToken } from '../api/fetch/authToken';
import { uploadCatImage } from '../api/fetch/lgtmImage';
import { UploadCatImageSizeTooLargeError } from '../features/errors/UploadCatImageSizeTooLargeError';
import { UploadCatImageValidationError } from '../features/errors/UploadCatImageValidationError';
import { createSuccessResult, isFailureResult } from '../features/result';

import type { Language } from '../features/language';
import type { AcceptedTypesImageExtension } from '../features/lgtmImage';

const createCatImageSizeTooLargeErrorMessages = (language: Language) =>
  language === 'en'
    ? ['Image size is too large. ', 'Please use images under 4MB.']
    : [
        '画像サイズが大きすぎます。',
        'お手数ですが4MB以下の画像を利用して下さい。',
      ];

const createDisplayErrorMessages = (
  error: Error,
  language: Language,
): string[] => {
  if (error instanceof UploadCatImageSizeTooLargeError) {
    return createCatImageSizeTooLargeErrorMessages(language);
  }

  if (error instanceof UploadCatImageValidationError) {
    return language === 'en'
      ? ['Invalid image format.', 'Sorry, please use another image.']
      : [
          '画像フォーマットが不正です。',
          'お手数ですが別の画像を利用して下さい。',
        ];
  }

  return language === 'en'
    ? [
        'An unexpected Error occurred.',
        'Sorry, please try again after some time has passed.',
      ]
    : [
        '予期せぬエラーが発生しました。',
        'お手数ですが、しばらく時間が経ってからお試し下さい。',
      ];
};

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
        displayErrorMessages: createDisplayErrorMessages(
          uploadCatImageResult.value,
          language,
        ),
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
