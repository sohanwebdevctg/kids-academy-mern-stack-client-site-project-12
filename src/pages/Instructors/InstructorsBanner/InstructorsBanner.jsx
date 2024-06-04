import instructorImg from '../../../../public/instructors/instructor.png'
import useAuth from '../../../hooks/useAuth';

const InstructorsBanner = () => {

  // authProvider
  const {color} = useAuth()

  return (
    <div className="bg-black py-10 lg:py-0">
      {/* content section start */}
      <div className="h-full lg:h-[600px] flex items-center container mx-auto p-5">
        <div className="md:flex md:justify-between md:items-center gap-10 h-full">
          {/* left section start */}
          <div className='space-y-4'>
            {/* title section start */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">Our Favourite All<br></br>Instructors List</h1>
          {/* title section end */}
          {/* description section start */}
          <p className="w-full sm:w-[75%] md:w-[65%] lg:w-[60%] xl:w-[65%] text-sm sm:text-base md:text-base lg:text-lg xl:text-base text-gray-300 italic">Instructory is the Online teaching marketplace in Bangladesh to earn money. And best E-Learning platform to learn online courses from the top instructors</p>
          {/* description section end */}
          {/* button section start */}
          <ul className='flex items-center gap-5'>
            <li><button className={` ${color ? 'bg-blue-700 hover:bg-blue-700 border-blue-700 hover:border-blue-700' : 'bg-red-600 hover:bg-red-600 border-red-600 hover:border-red-600'} btn   text-white btn-md  `}>See More</button></li>
            <li><button className={` ${color ? 'hover:bg-blue-700 border-blue-700 text-blue-700' : 'hover:bg-red-600 border-red-600 text-red-600'} btn btn-outline  hover:text-white`}>Watch More</button></li>
          </ul>
          {/* button section end */}
          </div>
          {/* left section end */}
          {/* right section start */}
          <div className='mt-10'>
            {/* image section start */}
            <div className={`${color ? 'bg-blue-700' : 'bg-red-600' }  rounded-full overflow-hidden w-full h-full sm:w-96 sm:h-96 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:h-full xl:w-[450px] mx-auto`}>
            <img className='w-full h-full sm:w-96 sm:h-96 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:h-full xl:w-[450px] mx-auto' src={instructorImg}></img>
            </div>
            
            {/* image section end */}
          </div>
          {/* right section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default InstructorsBanner;