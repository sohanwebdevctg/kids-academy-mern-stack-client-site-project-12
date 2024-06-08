import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from '../../public/logo/logo.png';
import { FaHome, FaHouseUser, FaUsersCog } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAddChart } from "react-icons/md";
import { BsPersonVideo3, BsPersonVideo2 } from "react-icons/bs";
import { TbKeyboardShow } from "react-icons/tb";
import { FaMoneyBillTrendUp, FaUsersGear } from "react-icons/fa6";
import { LuMonitorDot } from "react-icons/lu";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Bounce } from "react-awesome-reveal";


const DashboardLayout = () => {

  // admin role
  const [isAdmin] = useAdmin();

  //instructor role
  const [isInstructor] = useInstructor();

    // authProvider
    const {logOut,user, loading} = useAuth();

    //navigate
    const navigate = useNavigate()
  
    //logOutBtn
    const logOutBtn = () => {
      // logout swal
      Swal.fire({
        title: "Are you sure?",
        text: "You want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logOut"
      }).then((result) => {
        if (result.isConfirmed) {
      logOut()
      .then(() => {
        // navigate
        navigate('/')
        // message
        Swal.fire({
          title: "logOut",
          text: "Your are logout now!",
          icon: "success"
        });
      })
        }
      });
      
    }

  //admin links
  const admin = <ul className="space-y-1 mt-5">
<li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="adminHome" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><FaHouseUser></FaHouseUser></Bounce><span>Admin Home</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="manageClasses" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><LuMonitorDot></LuMonitorDot></Bounce><span>Manage Classes</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="manageUsers" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><FaUsersCog></FaUsersCog></Bounce><span>Manage Users</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="manageStudents" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><FaUsersGear></FaUsersGear></Bounce><span>Manage Students</span></NavLink></li>
  </ul>


//instructors links
  const instructors = <ul className="space-y-1 mt-5">
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="instructorHome" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><FaHouseUser></FaHouseUser></Bounce><span>Instructor Home</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="addAClass" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><MdAddChart></MdAddChart></Bounce><span>Add A Class</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="myClasses" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><TbKeyboardShow></TbKeyboardShow></Bounce><span>My Classes</span></NavLink></li>
  </ul>



// user links
  const users = <ul className="space-y-1 mt-5">
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="userHome" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><FaHouseUser></FaHouseUser></Bounce><span>User Home</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="mySelectedClasses" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><BsPersonVideo3></BsPersonVideo3></Bounce><span>My Selected Classes</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="myEnrollClasses" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><BsPersonVideo2></BsPersonVideo2></Bounce><span>My Enroll Classes</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="paymentHistory" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><Bounce><FaMoneyBillTrendUp></FaMoneyBillTrendUp></Bounce><span>Payment History</span></NavLink></li>
  </ul>

  //common links
  const common = <ul className="space-y-1">
  <li className="md:text-xs lg:text-sm xl:text-sm"><Link to="/" className= "text-white font-medium flex items-center gap-2"><Bounce><FaHome></FaHome></Bounce><span>Home</span></Link></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><Link to="/instructors" className= "text-white font-medium flex items-center gap-2"><Bounce><IoPerson></IoPerson></Bounce><span>Instructors</span></Link></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="/classes" className= "text-white font-medium flex items-center gap-2"><Bounce><SiGoogleclassroom></SiGoogleclassroom></Bounce><span>Classes</span></NavLink></li>
  </ul>

  return (
    <div>
      {/* content section start */}
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* content section start */}
    <div className="bg-white w-full">
          <Outlet></Outlet>
        </div>
        {/* content section end */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="bg-red-700 space-y-5 p-5 w-72 h-full ">
      {/* sidebar section start */}
      <div className="h-full">
        {/* logo section start */}
        <Link to="/">
        <img src={logo} className="w-[45%] h-[7%] mx-auto"></img>
        </Link>
        {/* logo section end */}
        {/* admin link section start */}
        {isAdmin === true ? admin : ''}
        {/* admin link section end */}
        {/* instructor link section start */}
        {isInstructor === true ? instructors : ''}
        {/* instructor link section end */}
        {isAdmin || isInstructor === false && users }
        <ul>
          <div className="divider"></div>
        </ul>
        {/* common link section start */}
        <ul className="space-y-1">
        {common}
        </ul>
        {/* common link section end */}
        <ul>
          <div className="divider"></div>
        </ul>
        <div>
          {/* logout btn start */}
          <button onClick={logOutBtn} className="btn btn-sm btn-neutral"><FiLogOut className="text-white text-xl"></FiLogOut>LogOut</button>
          {/* logout btn end */}
        </div>
        </div>
        {/* sidebar section end */}
    </ul>
  
  </div>
</div>
      {/* content section end */}
    </div>
  );
};

export default DashboardLayout;