import { GetServerSideProps, NextPage } from 'next';

type Props = {
  myName: string;
};

const SamplePage: NextPage<Props> = ({ myName }) => (
  <div>あなたの名前は {myName} です。</div>
);

// eslint-disable-next-line require-await
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const { name } = query;
  if (name === 'e') {
    throw new Error('SamplePage getServerSideProps Error');
  }

  return {
    props: {
      myName: name,
    },
  };
};

export default SamplePage;
