import InstructorsCard from "../../../components/InstructorsCard/InstructorsCard";
import useInstructors from "../../../hooks/useInstructors";



const PopularInstructor = () => {

  // instructors data
  const [instructors] = useInstructors();
  

  return (
    <div className="h-full md:h-full px-5 py-16 md:py-14">
      {/* content section start */}
      <div className="container mx-auto h-full">
        {/* title section start */}
        <div className="mb-10 text-center">
          <h1 className="text-red-600 italic text-xs sm:text-base md:text-base lg:text-xl xl:text-3xl border-y-[2px] border-red-500 w-[60%] sm:w-[45%] md:w-[42%] lg:w-[40%] xl:w-[35%] mx-auto py-2 font-bold">--- Popular Instructors ---</h1>
        </div>
        {/* title section end */}
        {/* instructors card section start */}
        <dig className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-10">
          
        {
          instructors.slice(0,6).map((data, index) => <InstructorsCard key={index} data={data}></InstructorsCard>)
        }
        </dig>
        {/* instructors card section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default PopularInstructor;