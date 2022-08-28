import { issueAccessToken } from '../api/fetch/authToken';
import { isAcceptableCatImage } from '../api/fetch/lgtmImage';
import { Language } from '../features/language';
import {
  AcceptedTypesImageExtension,
  IsAcceptableCatImageNotAcceptableReason,
} from '../features/lgtmImage';
import { createSuccessResult, isFailureResult } from '../features/result';
import { assertNever } from '../utils/assertNever';

const createNotAcceptableReasons = (
  notAcceptableReason: IsAcceptableCatImageNotAcceptableReason,
  language: Language,
): string[] => {
  switch (notAcceptableReason) {
    case 'not an allowed image extension':
      return language === 'en'
        ? ['Sorry, only png, jpg, jpeg images can be uploaded.']
        : ['png, jpg, jpeg の画像のみアップロード出来ます。'];
    case 'not moderation image':
      return language === 'en'
        ? [
            'Sorry, This image is not available because it shows something inappropriate.',
          ]
        : ['この画像は不適切なものが写っているので利用出来ません。'];
    case 'person face in the image':
      return language === 'en'
        ? ["Sorry, please use images that do not show people's faces."]
        : ['申し訳ありませんが人の顔が写っていない画像をご利用ください。'];
    case 'not cat image':
      return language === 'en'
        ? ['Sorry, but please use images that clearly show the cat.']
        : ['申し訳ありませんがはっきりと猫が写っている画像をご利用ください。'];
    case 'an error has occurred':
      return language === 'en'
        ? [
            'An unexpected Error occurred.',
            'Sorry, please try again after some time has passed.',
          ]
        : [
            '予期せぬエラーが発生しました。',
            'お手数ですが、しばらく時間が経ってからお試し下さい。',
          ];
    default:
      return assertNever(notAcceptableReason);
  }
};

const createCatImageSizeTooLargeErrorMessages = (language: Language) =>
  language === 'en'
    ? ['Image size is too large. ', 'Please use images under 4MB.']
    : [
        '画像サイズが大きすぎます。',
        'お手数ですが4MB以下の画像を利用して下さい。',
      ];

const createImageValidator =
  (language: Language) =>
  async (image: string, imageExtension: AcceptedTypesImageExtension) => {
    const accessToken = await issueAccessToken();

    const isAcceptableCatImageResult = await isAcceptableCatImage({
      accessToken,
      image,
      imageExtension,
    });

    if (isFailureResult(isAcceptableCatImageResult)) {
      return createSuccessResult({
        isAcceptableCatImage: false,
        notAcceptableReason: createCatImageSizeTooLargeErrorMessages(language),
      });
    }

    if (isAcceptableCatImageResult.value.isAcceptableCatImage) {
      return createSuccessResult({
        isAcceptableCatImage:
          isAcceptableCatImageResult.value.isAcceptableCatImage,
        notAcceptableReason: [],
      });
    }

    return createSuccessResult({
      isAcceptableCatImage:
        isAcceptableCatImageResult.value.isAcceptableCatImage,
      notAcceptableReason: createNotAcceptableReasons(
        isAcceptableCatImageResult.value.notAcceptableReason,
        language,
      ),
    });
  };

export const useCatImageValidator = (language: Language) => ({
  imageValidator: createImageValidator(language),
});
