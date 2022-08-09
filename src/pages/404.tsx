import { NextPage } from 'next';

import { ErrorTemplate } from '../templates/ErrorTemplate';

// eslint-disable-next-line
const Custom404: NextPage = () => <ErrorTemplate type={404} language="ja" />;

export default Custom404;
