import Title from "../../../components/Title/Title";
import { useQuery } from '@tanstack/react-query';
import useAuth from './../../../hooks/useAuth';
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import LoadingPage from "../../../components/LoadingPage/LoadingPage";


const MyEnrollClasses = () => {

  //authProvider
  const {user,loading} = useAuth()

  //axiosSecure
  const [axiosSecure] = useAxiosSecure()

  //fetch enrollClasses data
  const { data: enrollClasses = [], isLoading: isEnrollClassLoading } = useQuery({
    queryKey: ['enrollClasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrollClass?email=${user?.email}`)
      return res.data;
    },
  })

  if(isEnrollClassLoading){
    return <LoadingPage></LoadingPage>
  }

  return (
    <div>
      {/* title section start */}
      <Title data={'My Enroll Classes'}></Title>
      {/* title section end */}
    {/* content section start */}
    <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
      {/* title section start */}
      <div className="text-center">
        <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">--- My Enroll Classes ---</h3>
      </div>
      {/* title section end */}
      {/* details section start */}
      <div className="mt-5">
      <table className="table">
    {/* head */}
    <thead className="bg-red-600 text-white">
      <tr>
        <th>No.</th>
        <th>Image/instructor</th>
        <th>Class Name</th>
        <th>Price</th>
        <th>EnrollData</th>
      </tr>
    </thead>
    <tbody>
      {
        enrollClasses.map((data, index) => <tr key={index}>
        <td>
          {++index}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.classImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.instructorName}</div>
            </div>
          </div>
        </td>
        <td>
          {data.className}
        </td>
        <td>${data.price}</td>
        <td>
          {data.date}
        </td>
      </tr>)
      }
      

    </tbody>
    {/* foot */}
  </table>
      </div>
      {/* details section end */}
    </div>
    {/* content section end */}
    
  </div>
  );
};

export default MyEnrollClasses;