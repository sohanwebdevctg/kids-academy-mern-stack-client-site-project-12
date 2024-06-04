import { Helmet } from 'react-helmet-async';

const Title = ({data}) => {
  return (
    <div>
      <Helmet>
        <title>Kids-Academy | {data}</title>
      </Helmet>
    </div>
  );
};

export default Title;