import { setCookie } from '../utils';

import type { Language } from '../features';

const saveSettingLanguage = (language: Language) => {
  // 有効祈願は約1年間に設定する
  // eslint-disable-next-line no-magic-numbers
  const maxAge = 365 * 24 * 60 * 60;

  setCookie('language', language, maxAge);
};

export const useSaveSettingLanguage = () => ({ saveSettingLanguage });
