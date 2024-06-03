
import ClassCard from './../../../components/ClassCard/ClassCard';
import useAllClasses from "../../../hooks/useAllClasses";


const AllClasses = () => {

  //allClasses
  const [allClasses] = useAllClasses();

  // approved classes
  const approvedClasses = allClasses.filter((data) => data.status === 'approved')

  return (
    <div className="h-full md:h-full px-5 py-16 md:py-14">
      {/* content section start */}
      <div className="container mx-auto h-full">
        {/* instructors card section start */}
        <dig className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-10">
        {
          approvedClasses.map((data, index) => <ClassCard key={index} data={data}></ClassCard>)
        }
        </dig>
        {/* instructors card section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default AllClasses;