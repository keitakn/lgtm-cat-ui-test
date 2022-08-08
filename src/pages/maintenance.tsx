import { NextPage } from 'next';

import { ErrorTemplate } from '../templates';

const MaintenancePage: NextPage = () => (
  <ErrorTemplate type={503} language="ja" />
);

export default MaintenancePage;
