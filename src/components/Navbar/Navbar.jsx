import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo/logo.png";
import useAuth from "../../hooks/useAuth";
import Profile from "../Profile/Profile";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Navbar = () => {

  //authProvider
  const {user, color, toggleColor} = useAuth();

  return (
    <>
      {/* desktop section start */}
      <div className={`${color ? 'bg-[#161618]' : 'bg-white'} h-20 hidden md:block`}>
        {/* content section start */}
        <div className="container mx-auto h-full">
          {/* navbar section start */}
          <div className="flex justify-between items-center h-full">
            {/* logo section start */}
            <div>
              <img src={logo} className="w-[42%]"></img>
            </div>
            {/* logo section end */}
            {/* link section start */}
            <ul className="flex gap-8">
              <li className="lg:text-base xl:text-lg">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${color ? 'text-blue-700 font-medium' :'text-red-700 font-medium'}` : `${color ? 'text-white' : 'text-black'}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="lg:text-base xl:text-lg">
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive ? `${color ? 'text-blue-700 font-medium' :'text-red-700 font-medium'}` : `${color ? 'text-white' : 'text-black'}`
                  }
                >
                  Instructor
                </NavLink>
              </li>
              <li className="lg:text-base xl:text-lg">
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? `${color ? 'text-blue-700 font-medium' :'text-red-700 font-medium'}` : `${color ? 'text-white' : 'text-black'}`
                  }
                >
                  Classes
                </NavLink>
              </li>
            </ul>
            {/* link section end */}
            <ul className="flex items-center gap-2">
              <li><input type="checkbox" className={`toggle ${color ? 'toggle-info' : 'toggle-error'}`} onClick={() => toggleColor(!color)} /></li>
              <li>
                {/* profile & login section start */}
            {
              user && user?.email ? <Profile></Profile> : <Link to="/login">
              <button className={`${color ? 'bg-blue-700' : 'bg-red-600'} font-semibold px-4 py-2 rounded-md text-white`}>
                LogIn
              </button>
            </Link>
            }
            {/* profile & login section end */}
              </li>
            </ul>
          </div>
          {/* navbar section end */}
        </div>
        {/* content section end */}
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div className="bg-white h-20 px-5 block md:hidden">
        {/* content section start */}
        <div className="container mx-auto h-full">
          {/* navbar section start */}
          <div className="flex justify-between items-center h-full">
            {/* logo section start */}
            <div>
              <img src={logo} className="w-[45%]"></img>
            </div>
            {/* logo section end */}
            {/* profile & login section start */}
            {/* without user start */}
            <div className="flex justify-end gap-2 items-center">
            <input type="checkbox" className={`toggle ${color ? 'toggle-info toggle-xs' : 'toggle-error toggle-xs'}`} onClick={() => toggleColor(!color)} />
            {user && user?.email ? <Profile></Profile> : <MobileNavbar></MobileNavbar>}
            </div>
            
            {/* without user end */}
            {/* profile & login section end */}
          </div>
          {/* navbar section end */}
        </div>
        {/* content section end */}
      </div>
      {/* mobile section end */}
    </>
  );
};

export default Navbar;
