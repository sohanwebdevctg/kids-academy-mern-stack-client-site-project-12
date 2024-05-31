import students1 from "../../../../public/ourStudents/img1.png";
import students2 from "../../../../public/ourStudents/img2.png";
import students3 from "../../../../public/ourStudents/img3.png";
import students4 from "../../../../public/ourStudents/img4.png";

const OurStudents = () => {
  return (
    <div className="bg-red-700 h-full md:h-full px-5 py-16 md:py-14">
      {/* content section start */}
      <div className="container mx-auto h-full">
        {/* title section start */}
        <div className="mb-10">
          <h1 className="text-white text-base sm:text-lg md:text-base lg:text-lg xl:text-2xl font-semibold">--- Our Best Students ---</h1>
          <p className="text-slate-200 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base italic w-full sm:w-[75%] md:w-[70%] lg:w-[55%] xl:w-[50%]">Learning happens slowly and consistently. Take for example the process we went through when we learned to read.  There were steps, from holding a book the right way up, to recognising letters to phonetics, years of practising and finally fluency.</p>
        </div>
        {/* title section end */}
        <dig className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 lg:gap-6 xl:gap-10">
          {/* item1 start */}
          <div>
            {/* img start */}
            <img
              src={students1}
              className="h-24 w-24 sm:h-28 sm:w-28 md:w-20 md:h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full text-center mx-auto mb-3"
            ></img>
            {/* img end */}
            {/* description section start */}
            <div className="text-center space-y-2">
              <h3 className="font-bold text-white text-lg sm:text-xl md:text-base lg:text-lg xl:text-xl">
                Ali
              </h3>
              <p className="text-gray-300 italic text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base">
                On-Demand Skill Courses. <br></br>Easy Learning Anywhere.
                Courses: Spoken English at Home, Kid’s English
              </p>
            </div>
            {/* description section end */}
          </div>
          {/* item1 end */}
          {/* item2 start */}
          <div>
            {/* img start */}
            <img
              src={students2}
              className="h-24 w-24 sm:h-28 sm:w-28 md:w-20 md:h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full text-center mx-auto mb-3"
            ></img>
            {/* img end */}
            {/* description section start */}
            <div className="text-center space-y-2">
              <h3 className="font-bold text-white text-lg sm:text-xl md:text-base lg:text-lg xl:text-xl">
                Osman
              </h3>
              <p className="text-gray-300 italic text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base">
                On-Demand Skill Courses. <br></br>Easy Learning Anywhere.
                Courses: Spoken English at Home, Kid’s English
              </p>
            </div>
            {/* description section end */}
          </div>
          {/* item2 end */}
          {/* item3 start */}
          <div>
            {/* img start */}
            <img
              src={students3}
              className="h-24 w-24 sm:h-28 sm:w-28 md:w-20 md:h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full text-center mx-auto mb-3"
            ></img>
            {/* img end */}
            {/* description section start */}
            <div className="text-center space-y-2">
              <h3 className="font-bold text-white text-lg sm:text-xl md:text-base lg:text-lg xl:text-xl">
                Abbubakar
              </h3>
              <p className="text-gray-300 italic text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base">
                On-Demand Skill Courses. <br></br>Easy Learning Anywhere.
                Courses: Spoken English at Home, Kid’s English
              </p>
            </div>
            {/* description section end */}
          </div>
          {/* item3 end */}
          {/* item4 start */}
          <div>
            {/* img start */}
            <img
              src={students4}
              className="h-24 w-24 sm:h-28 sm:w-28 md:w-20 md:h-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36 rounded-full text-center mx-auto mb-3"
            ></img>
            {/* img end */}
            {/* description section start */}
            <div className="text-center space-y-2">
              <h3 className="font-bold text-white text-lg sm:text-xl md:text-base lg:text-lg xl:text-xl">
                Omar
              </h3>
              <p className="text-gray-300 italic text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base">
                On-Demand Skill Courses. <br></br>Easy Learning Anywhere.
                Courses: Spoken English at Home, Kid’s English
              </p>
            </div>
            {/* description section end */}
          </div>
          {/* item4 end */}
        </dig>
      </div>
      {/* content section end */}
    </div>
  );
};

export default OurStudents;
