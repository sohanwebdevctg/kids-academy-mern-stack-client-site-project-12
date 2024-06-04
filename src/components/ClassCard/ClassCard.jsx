import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAdmin from './../../hooks/useAdmin';
import useInstructor from './../../hooks/useInstructor';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const ClassCard = ({data}) => {
  // console.log(data)

  //navigated
  const location = useLocation();
  const navigate = useNavigate();

  // admin role
  const [isAdmin] = useAdmin();

  //instructor role
  const [isInstructor] = useInstructor();

  //axiosSecure
  const [axiosSecure] = useAxiosSecure()

  // authProvider
  const {user, color} = useAuth();

  //select class
  const selectClass = (data) => {

    if(user && user?.email){
      const selectedClasses = {classId: data._id, email: user?.email, instructorEmail: data.instructorEmail, instructorName:data.instructorName,classImage: data.classImage, className: data.className, price: data.price}

      //select this card data from instructor to user
      axiosSecure.post('/selectedClass', selectedClasses)
      .then((data) => {
        if(data.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your data has been inserted",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      
    }else{
      Swal.fire({
        title: "Are you sure?",
        text: "You have an account please login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn"
      }).then((result) => {
        if(result.isConfirmed){
          navigate('/login', {state: {from: location}})
        }
      });
    }
  }

  return (
    <div className={`${color ? 'bg-white shadow-md shadow-blue-700' : ' shadow-md bg-white'} `}>
      {/* content section start */}
      <div className={`${color ? 'bg-[#161619]' : 'bg-white'}`}>
        <div className="p-2 sm:p-3 md:p-2 lg:p-5">
        <img src={data.classImage} className="h-32 sm:h-36 md:h-36 lg:h-44 xl:h-48 w-full rounded-lg"></img>
        </div>
        <div className="w-full p-1 sm:p-2 md:p-2 lg:p-5 ">
          <ul className="space-y-2">
            <li className="text-[9px] sm:text-sm md:text-xs lg:text-base xl:text-base"><span className={`${color ? 'text-blue-700' : 'text-black'} font-bold`}>Class Name :</span> <span className={`${color ? 'text-gray-400' : 'text-black'}`}>{data.className}</span></li>
            <li className="text-[9px] sm:text-sm md:text-xs lg:text-base xl:text-base"><span className={`${color ? 'text-blue-700' : 'text-black'} font-bold`}>Instructor Name :</span> <span className={`${color ? 'text-gray-400' : 'text-black'}`}>{data.instructorName}</span></li>
            <li className="text-[9px] sm:text-sm md:text-xs lg:text-base xl:text-base"><span className={`${color ? 'text-blue-700' : 'text-black'} font-bold`}>availableSeats :</span> <span className={`${color ? 'text-gray-400' : 'text-black'}`}>{data.availableSeats}</span></li>
            <li className="text-[9px] sm:text-sm md:text-xs lg:text-base xl:text-base"><span className={`${color ? 'text-blue-700' : 'text-black'} font-bold`}>Price :</span> <span className={`${color ? 'text-gray-400' : 'text-black'}`}>${data.price}</span></li>
            <li>
            <button onClick={() => selectClass(data)} disabled={isAdmin || isInstructor || data.enroll === 0} className={` ${color ? 'bg-blue-700 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-600'} btn btn-xs lg:btn-md w-full  text-white outline-none border-none`}>Select</button>
            </li>
          </ul>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default ClassCard;