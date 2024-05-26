import HomeBanner from "../HomeBanner/HomeBanner";
import OurStudents from "../OurStudents/OurStudents";


const Home = () => {
  return (
    <div>
      {/* content section start */}
      <HomeBanner></HomeBanner>
      {/* content section end */}
      {/* outStudents section start */}
      <OurStudents></OurStudents>
      {/* outStudents section end */}
    </div>
  );
};

export default Home;