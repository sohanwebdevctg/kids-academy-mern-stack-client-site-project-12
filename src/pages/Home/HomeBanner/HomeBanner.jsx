import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useAuth from "../../../hooks/useAuth";



const HomeBanner = () => {

  // slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // authProvider
  const {color} = useAuth()
  

  return (
    <div className='h-full sm:h-full md:h-80 lg:h-96 bgImage slider-container overflow-hidden'>
      <div className="container mx-auto h-full py-10">
      {/* content section start */}
      <Slider {...settings}>
        {/* item 1 start */}
        <div className="p-5 lg:p-10 space-y-3">
          {/* title section start */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">Choice your favourite<br></br>Instructor classes</h1>
          {/* title section end */}
          {/* description section start */}
          <p className="w-full sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[50%] text-sm sm:text-base md:text-base lg:text-lg xl:text-base text-gray-300 italic">Instructory is the Online teaching marketplace in Bangladesh to earn money. And best E-Learning platform to learn online courses from the top instructors</p>
          {/* description section end */}
          {/* service section start */}
          <ul className="flex gap-8 items-center">
            <li className="">
              <p className={`${color ? 'text-blue-600' : 'text-red-600'}  text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center`}>+200</p>
              <p className="text-white text-xs sm:text-base md:text-base lg:text-base xl:text-xs text-center">Our Services</p>
            </li>
            <li className="">
              <p className={`${color ? 'text-blue-600' : 'text-red-600'}  text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center`}>+49</p>
              <p className="text-white text-xs sm:text-base md:text-base lg:text-base xl:text-xs text-center">Favourite Instructor</p>
            </li>
            <li className="">
              <p className={`${color ? 'text-blue-600' : 'text-red-600'}  text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center`}>+1000</p>
              <p className="text-white text-xs sm:text-base md:text-base lg:text-base xl:text-xs text-center">Our Students</p>
            </li>
          </ul>
          {/* service section end */}
        </div>
        {/* item 1 end */}
        {/* item 2 start */}
        <div className="p-5 lg:p-10 space-y-3">
          {/* title section start */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">We Provide your Clients<br></br>Best services</h1>
          {/* title section end */}
          {/* description section start */}
          <p className="w-full sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[50%] text-sm sm:text-base md:text-base lg:text-lg xl:text-base text-gray-300 italic">Instructory is the Online teaching marketplace in Bangladesh to earn money. And best E-Learning platform to learn online courses from the top instructors</p>
          {/* description section end */}
          {/* service section start */}
          <ul className="flex gap-8 items-center">
            <li className="">
              <p className={`${color ? 'text-blue-600' : 'text-red-600'}  text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center`}>+200</p>
              <p className="text-white text-xs sm:text-base md:text-base lg:text-base xl:text-xs text-center">Our Services</p>
            </li>
            <li className="">
              <p className={`${color ? 'text-blue-600' : 'text-red-600'}  text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center`}>+49</p>
              <p className="text-white text-xs sm:text-base md:text-base lg:text-base xl:text-xs text-center">Favourite Instructor</p>
            </li>
            <li className="">
              <p className={`${color ? 'text-blue-600' : 'text-red-600'}  text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center`}>+1000</p>
              <p className="text-white text-xs sm:text-base md:text-base lg:text-base xl:text-xs text-center">Our Students</p>
            </li>
          </ul>
          {/* service section end */}
        </div>
        {/* item 2 end */}
        {/* item 3 start */}
        <div className="p-5 lg:p-10 space-y-3">
          {/* title section start */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">Our Students are very<br></br>satisfied</h1>
          {/* title section end */}
          {/* description section start */}
          <p className="w-full sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[50%] text-sm sm:text-base md:text-base lg:text-lg xl:text-base text-gray-300 italic">Instructory is the Online teaching marketplace in Bangladesh to earn money. And best E-Learning platform to learn online courses from the top instructors</p>
          {/* description section end */}
          {/* service section start */}
          <ul className="flex gap-8 items-center">
            <li className="">
              <p className={`${color ? 'text-blue-600' : 'text-red-600'}  text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center`}>+200</p>
              <p className="text-white text-xs sm:text-base md:text-base lg:text-base xl:text-xs text-center">Our Services</p>
            </li>
            <li className="">
              <p className={`${color ? 'text-blue-600' : 'text-red-600'}  text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center`}>+49</p>
              <p className="text-white text-xs sm:text-base md:text-base lg:text-base xl:text-xs text-center">Favourite Instructor</p>
            </li>
            <li className="">
              <p className={`${color ? 'text-blue-600' : 'text-red-600'}  text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center`}>+1000</p>
              <p className="text-white text-xs sm:text-base md:text-base lg:text-base xl:text-xs text-center">Our Students</p>
            </li>
          </ul>
          {/* service section end */}
        </div>
        {/* item 3 end */}
        </Slider>
      {/* content section end */}
      </div>
    </div>
  );
};

export default HomeBanner;