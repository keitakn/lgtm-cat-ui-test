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
    locales: ['jp-JP', 'en-US'],
    defaultLocale: 'jp-JP',
    localeDetection: false,
  },
};
