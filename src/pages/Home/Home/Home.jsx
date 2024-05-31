import HomeBanner from "../HomeBanner/HomeBanner";
import OurStudents from "../OurStudents/OurStudents";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import SportsGallery from "../SportsGallery/SportsGallery";


const Home = () => {
  return (
    <div>
      {/* content section start */}
      <HomeBanner></HomeBanner>
      {/* content section end */}
      {/* popularInstructor section start */}
      <PopularInstructor></PopularInstructor>
      {/* popularInstructor section end */}
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