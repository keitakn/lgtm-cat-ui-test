/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars0.githubusercontent.com',
      'avatars1.githubusercontent.com',
      'www.mindexer.net',
      'lgtmeow.com',
    ],
  },
  compiler: {
    styledComponents: true,
  },
};
