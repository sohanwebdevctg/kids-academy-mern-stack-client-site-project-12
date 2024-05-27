import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../../public/logo/logo.png';
import { FaHome, FaHouseUser, FaUsersCog } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAddChart } from "react-icons/md";
import { BsPersonVideo3, BsPersonVideo2 } from "react-icons/bs";
import { TbKeyboardShow } from "react-icons/tb";
import { FaMoneyBillTrendUp, FaUsersGear } from "react-icons/fa6";
import { LuMonitorDot } from "react-icons/lu";




const DashboardLayout = () => {

  // admin role
  const isAdmin = true;

  // instructor role
  const isInstructors = true;

  //admin links
  const admin = <ul className="space-y-1">
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="adminHome" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><FaHouseUser></FaHouseUser><span>Admin Home</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="manageClasses" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><LuMonitorDot></LuMonitorDot><span>Manage Classes</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="manageUsers" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><FaUsersCog></FaUsersCog><span>Manage Users</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="manageStudents" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><FaUsersGear></FaUsersGear><span>Manage Students</span></NavLink></li>
  </ul>

//instructors links
  const instructors = <ul className="space-y-1">
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="instructorHome" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><FaHouseUser></FaHouseUser><span>Instructor Home</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="addAClass" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><MdAddChart></MdAddChart><span>Add A Class</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="myClasses" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><TbKeyboardShow></TbKeyboardShow><span>My Classes</span></NavLink></li>
  </ul>



// user links
  const user = <ul className="space-y-1">
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="userHome" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><FaHouseUser></FaHouseUser><span>User Home</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="mySelectedClasses" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><BsPersonVideo3></BsPersonVideo3><span>My Selected Classes</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="myEnrollClasses" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><BsPersonVideo2></BsPersonVideo2><span>My Enroll Classes</span></NavLink></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="paymentHistory" className={({ isActive }) => isActive ? "text-white font-medium flex items-center gap-2" : "text-black flex items-center gap-2"}><FaMoneyBillTrendUp></FaMoneyBillTrendUp><span>Payment History</span></NavLink></li>
  </ul>

  //common links
  const common = <ul className="space-y-1">
  <li className="md:text-xs lg:text-sm xl:text-sm"><Link to="/" className= "text-white font-medium flex items-center gap-2"><FaHome></FaHome><span>Home</span></Link></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><Link to="/instructors" className= "text-white font-medium flex items-center gap-2"><IoPerson></IoPerson><span>Instructors</span></Link></li>
  <li className="md:text-xs lg:text-sm xl:text-sm"><NavLink to="/classes" className= "text-white font-medium flex items-center gap-2"><SiGoogleclassroom></SiGoogleclassroom><span>Classes</span></NavLink></li>
  </ul>

  return (
    <div className="h-screen">
      {/* content section start */}
      <div className="lg:flex lg:justify-between lgitems-center h-[100%]">
        {/* sidebar section start */}
        <div className="hidden lg:block lg:w-[15%] bg-red-700 h-[100%] space-y-5 p-5">
        {/* logo section start */}
        <Link to="/">
        <img src={logo} className="w-[45%] h-[7%] mx-auto"></img>
        </Link>
        {/* logo section end */}
        {/* user profile section start */}

        {/* user profile section end */}
        {/* admin link section start */}
        {isAdmin || isInstructors === true ? admin : user}
        {/* admin link section end */}
        {/* instructor link section start */}
        {isInstructors === true ? instructors : user}
        {/* instructor link section end */}
        <ul>
          <div className="divider"></div>
        </ul>
        {/* common link section start */}
        <ul className="space-y-1">
        {common}
        </ul>
        {/* common link section end */}
        </div>
        {/* sidebar section end */}
        {/* content section start */}
        <div className="w-full lg:w-[85%] bg-white h-[100%]">
          <Outlet></Outlet>
        </div>
        {/* content section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default DashboardLayout;