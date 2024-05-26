import HomeBanner from "../HomeBanner/HomeBanner";
import OurStudents from "../OurStudents/OurStudents";
import SportsGallery from "../SportsGallery/SportsGallery";


const Home = () => {
  return (
    <div>
      {/* content section start */}
      <HomeBanner></HomeBanner>
      {/* content section end */}
      {/* outStudents section start */}
      <OurStudents></OurStudents>
      {/* outStudents section end */}
      {/* sportsGallery section start */}
      <SportsGallery></SportsGallery>
      {/* sportsGallery section end */}
    </div>
  );
};

export default Home;