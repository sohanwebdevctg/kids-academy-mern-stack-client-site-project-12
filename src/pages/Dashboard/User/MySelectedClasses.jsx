import { MdDelete } from "react-icons/md";
import useUserSelectedClasses from "../../../hooks/useUserSelectedClasses";


const MySelectedClasses = () => {

  //selected classes get
  const [userSelectedClasses,refetch] = useUserSelectedClasses();

    //delete user in admin dashboard
    const deleteFund = (data) => {
      console.log(data)
      // fetch user data
      // if(user){
      //   axiosSecure.delete(`/users/admin/${user._id}`)
      // .then((data) => {
      //   if(data.data.status === 200){
      //     refetch();
      //     // success message
      //     Swal.fire({
      //       position: "center",
      //       icon: "success",
      //       title: "This user has been deleted",
      //       showConfirmButton: false,
      //       timer: 1500
      //     });
      //   }
      // })
      // }
      
    }

  return (
    <div>
    {/* content section start */}
    <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
      {/* title section start */}
      <div className="text-center">
        <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">--- My Selected Classes ---</h3>
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        userSelectedClasses.map((data, index) => <tr key={index}>
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
              <div className="text-sm opacity-50">{data.instructorEmail}</div>
            </div>
          </div>
        </td>
        <td>
          {data.className}
        </td>
        <td>${data.price}</td>
        <td>
        <MdDelete onClick={() => deleteFund(data)} className="xl:text-3xl text-white bg-red-600 rounded-sm"></MdDelete>
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

export default MySelectedClasses;