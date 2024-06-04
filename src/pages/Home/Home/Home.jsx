import Title from "../../../components/Title/Title";
import HomeBanner from "../HomeBanner/HomeBanner";
import OurStudents from "../OurStudents/OurStudents";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import SportsGallery from "../SportsGallery/SportsGallery";


const Home = () => {
  return (
    <div>
      {/* title section start */}
      <Title data={'Home'}></Title>
      {/* title section end */}
      {/* content section start */}
      <HomeBanner></HomeBanner>
      {/* content section end */}
      {/* popularInstructor section start */}
      <PopularInstructor></PopularInstructor>
      {/* popularInstructor section end */}
      {/* outStudents section start */}
      <OurStudents></OurStudents>
      {/* outStudents section end */}
      {/* popularClasses section start */}
      <PopularClasses></PopularClasses>
      {/* popularClasses section end */}
      {/* sportsGallery section start */}
      <SportsGallery></SportsGallery>
      {/* sportsGallery section end */}
    </div>
  );
};

export default Home;