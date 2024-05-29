import { MdDelete } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {

  // get axiosSecure hook
  const [axiosSecure] = useAxiosSecure();


  //fetch user data
  const { data : users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data
    },
  })

  // create admin from user
  const adminFun = (user) => {
    if(user && user?.email){
      axiosSecure.patch(`/users/admin/${user._id}`, {role : 'admin'})
      .then((data) => {
        if(data.data.status === 200){
          refetch()
          // success message
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You are admin now",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
  }

  // create instructor from user
  const instructorFun = (user) => {
    if(user && user?.email){
      axiosSecure.patch(`/users/instructor/${user._id}`, {role : 'instructor'})
      .then((data) => {
        refetch()
        if(data.data.status === 200){
          // success message
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You are instructor now",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
  }

  //delete user in admin dashboard
  const deleteFund = (user) => {
    // fetch user data
    if(user){
      axiosSecure.delete(`/users/admin/${user._id}`)
    .then((data) => {
      if(data.data.status === 200){
        refetch();
        // success message
        Swal.fire({
          position: "center",
          icon: "success",
          title: "This user has been deleted",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    }
    
  }

  return (
    <div>
      {/* content section start */}
      <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
        {/* title section start */}
        <div className="text-center">
          <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">
            --- Manage Users ---
          </h3>
        </div>
        {/* title section end */}
        {/* details section start */}
        <div className="mt-5">
          <table className="table ">
            {/* head */}
            <thead className="bg-red-600 text-white">
              <tr>
                <th>#</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Active Role</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users.map((user, index) => <tr key={index}>
                <td>{++index}</td>
                <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user && user?.photo}
                          alt={user && user?.name}
                        />
                      </div>
                    </div>
                </td>
                <td>{user && user?.name}</td>
                <td>
                  {user?.role === 'admin' || user?.role === 'instructor' ? <span className="bg-green-500 text-white">{user?.role}</span> : <span className="bg-blue-600 text-white">Users</span>}
                </td>
                <td className="flex items-center gap-2 pt-6">
                  {/* admin start */}
                  <FaUserShield onClick={() => adminFun(user)} className="xl:text-3xl text-white bg-red-600 rounded-sm p-1"></FaUserShield>
                  {/* admin end */}
                  {/* instructor start */}
                  <FaUsersCog onClick={() => instructorFun(user)} className="xl:text-3xl text-white bg-red-600 rounded-sm p-1"></FaUsersCog>
                  {/* instructor end */}
                  
                </td>
                <td><MdDelete onClick={() => deleteFund(user)} className="xl:text-3xl text-white bg-red-600 rounded-sm"></MdDelete></td>
              </tr>)
              }
              
            </tbody>
          </table>
        </div>
        {/* details section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default ManageUsers;
