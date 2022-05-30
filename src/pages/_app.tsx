import type { AppProps } from 'next/app';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default CustomApp;
