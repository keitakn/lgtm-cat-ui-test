import type { AppProps } from 'next/app';
import 'ress/ress.css';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default CustomApp;
