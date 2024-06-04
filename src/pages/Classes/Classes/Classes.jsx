
import Title from '../../../components/Title/Title';
import AllClasses from '../AllClasses/AllClasses';
import ClassesBanner from './../ClassesBanner/ClassesBanner';

const Classes = () => {
  return (
    <div>
      {/* title section start */}
      <Title data={'Classes'}></Title>
      {/* title section end */}
      {/* content section start */}
      {/* banner section start */}
      <ClassesBanner></ClassesBanner>
      {/* banner section end */}
      {/* allClasses section start */}
      <AllClasses></AllClasses>
      {/* allClasses section end */}
      {/* content section end */}
    </div>
  );
};

export default Classes;