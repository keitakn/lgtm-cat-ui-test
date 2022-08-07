import type { NextPage } from 'next';
import {ErrorTemplate} from "../templates/ErrorTemplate";

const CustomError: NextPage = () => {
  return (
    <ErrorTemplate type={500} language="ja" />
  );
};

export default CustomError;
