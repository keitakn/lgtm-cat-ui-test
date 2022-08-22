/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lgtm-images.lgtmeow.com', 'stg-lgtm-images.lgtmeow.com'],
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['ja-JP', 'en-US'],
    defaultLocale: 'ja-JP',
    localeDetection: false,
  },
};
