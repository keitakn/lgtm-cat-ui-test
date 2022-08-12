import { AppPathName, AppUrl, appUrlList } from './url';

type AppName = 'LGTMeow';

const appName: AppName = 'LGTMeow';

const defaultTitle = appName;

export const custom404title = `ページが見つかりません | ${appName}`;
export const customErrorTitle = `エラー | ${appName}`;

const defaultDescription =
  'LGTMeowは可愛い猫のLGTM画像を共有出来るサービスです。';

export type MetaTag = {
  title: string;
  ogpImgUrl: typeof appUrlList.ogpImg;
  ogpTargetUrl: AppUrl;
  appName: AppName;
  description?: string;
};

type MetaTagList = {
  [key in AppPathName]: MetaTag;
};

export const metaTagList = (): MetaTagList => ({
  top: {
    title: `${defaultTitle} | LGTM image share service for cat lovers`,
    ogpImgUrl: appUrlList.ogpImg,
    ogpTargetUrl: appUrlList.top,
    appName,
    description: defaultDescription,
  },
  upload: {
    title: `${defaultTitle} 猫ちゃん画像アップロード`,
    ogpImgUrl: appUrlList.ogpImg,
    ogpTargetUrl: appUrlList.upload,
    appName,
  },
  terms: {
    title: `${defaultTitle} 利用規約`,
    ogpImgUrl: appUrlList.ogpImg,
    ogpTargetUrl: appUrlList.terms,
    appName,
  },
  privacy: {
    title: `${defaultTitle} プライバシーポリシー`,
    ogpImgUrl: appUrlList.ogpImg,
    ogpTargetUrl: appUrlList.privacy,
    appName,
  },
  maintenance: {
    title: `${defaultTitle} メンテナンス`,
    ogpImgUrl: appUrlList.ogpImg,
    ogpTargetUrl: appUrlList.maintenance,
    appName,
  },
});
