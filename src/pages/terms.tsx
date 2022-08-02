import fs from 'fs';

import { TermsOrPrivacyTemplate } from '../templates/TermsOrPrivacyTemplate';

import type { GetStaticProps, NextPage } from 'next';

type Props = {
  language: 'ja' | 'en';
  termsJa: string;
  termsEn: string;
};

const TermsPage: NextPage<Props> = ({ language, termsJa, termsEn }: Props) => (
  <TermsOrPrivacyTemplate
    type="terms"
    language={language}
    jaMarkdown={termsJa}
    enMarkdown={termsEn}
  />
);

export const getStaticProps: GetStaticProps = async () => {
  const fsPromise = fs.promises;

  const termsJa = await fsPromise.readFile(
    `${process.cwd()}/src/docs/terms.ja.md`,
    {
      encoding: 'utf8',
    },
  );

  const termsEn = await fsPromise.readFile(
    `${process.cwd()}/src/docs/terms.en.md`,
    {
      encoding: 'utf8',
    },
  );

  return { props: { language: 'ja', termsJa, termsEn } };
};

export default TermsPage;
