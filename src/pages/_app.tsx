import type { AppProps } from 'next/app';
import '@fontsource/roboto';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default CustomApp;
