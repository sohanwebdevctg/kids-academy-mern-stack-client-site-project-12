import InstructorsCard from "../../../components/InstructorsCard/InstructorsCard";
import useAuth from "../../../hooks/useAuth";
import useInstructors from "../../../hooks/useInstructors";
import { motion } from "framer-motion"
import {fadeIn} from '../../../variants'



const PopularInstructor = () => {

  // instructors data
  const [instructors] = useInstructors();

  // authProvider
  const {color} = useAuth()
  

  return (
    <div className={`${color ? 'bg-[#070709]' : 'bg-white'} h-full md:h-full px-5 py-16 md:py-20`}>
      {/* content section start */}
      <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.7}}
      className="container mx-auto h-full">
        {/* title section start */}
        <div className="mb-10 text-center">
          <h1 className={`${color ? 'text-blue-700 border-blue-700' : 'text-red-600 border-red-500'} italic text-xs sm:text-base md:text-base lg:text-xl xl:text-3xl border-y-[2px]  w-[60%] sm:w-[45%] md:w-[42%] lg:w-[40%] xl:w-[35%] mx-auto py-2 font-bold`}>--- Popular Instructors ---</h1>
        </div>
        {/* title section end */}
        {/* instructors card section start */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-10">
        {
          instructors.slice(0,6).map((data, index) => <InstructorsCard key={index} data={data}></InstructorsCard>)
        }
        </div>
        {/* instructors card section end */}
      </motion.div>
      {/* content section end */}
    </div>
  );
};

export default PopularInstructor;