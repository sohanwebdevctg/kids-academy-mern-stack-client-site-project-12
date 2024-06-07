import InstructorsCard from "../../../components/InstructorsCard/InstructorsCard";
import useAuth from "../../../hooks/useAuth";
import useInstructors from "../../../hooks/useInstructors";


const AllInstructors = () => {

    // instructors data
    const [instructors] = useInstructors();

    //authProvider
    const {color} = useAuth()

  return (
    <div className={`${color ? 'bg-[#070709]' : 'bg-white'} h-full md:h-full px-5 py-16 md:py-14`}>
      {/* content section start */}
      <div className="container mx-auto h-full">
        {/* instructors card section start */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-10">
          
        {
          instructors.map((data, index) => <InstructorsCard key={index} data={data}></InstructorsCard>)
        }
        </div>
        {/* instructors card section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default AllInstructors;