
import { useQuery } from "@tanstack/react-query";
import ClassCard from "../../../components/ClassCard/ClassCard";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PopularClasses = () => {

  const [axiosSecure] = useAxiosSecure()

  //authProvider
  const {color, loading} = useAuth()

    // approved classes
    const { data: approvedClasses = [] } = useQuery({
      queryKey: ['approvedClasses'],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure.get('/popularClass')
        return res.data;
      },
    })

  return (
    <div className={`${color ? 'bg-[#070709]' : 'bg-white'} h-full md:h-full px-5 py-16 md:py-14`}>
      {/* content section start */}
      <div className="container mx-auto h-full">
        {/* title section start */}
        <div className="mb-10 text-center">
          <h1 className={`${color ? 'text-blue-700 border-blue-700' : 'text-red-600 border-red-500' }  italic text-xs sm:text-base md:text-base lg:text-xl xl:text-3xl border-y-[2px]  w-[60%] sm:w-[45%] md:w-[42%] lg:w-[40%] xl:w-[35%] mx-auto py-2 font-bold`}>--- Popular Classes ---</h1>
        </div>
        {/* title section end */}
        {/* instructors card section start */}
        <dig className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-10">
        {
          approvedClasses.slice(0,6).map((data, index) => <ClassCard key={index} data={data}></ClassCard>)
        }
        </dig>
        {/* instructors card section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default PopularClasses;