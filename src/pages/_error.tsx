import { ErrorTemplate } from '../templates/ErrorTemplate';

import type { NextPage } from 'next';

// eslint-disable-next-line no-magic-numbers
const CustomError: NextPage = () => <ErrorTemplate type={500} language="ja" />;

export default CustomError;
