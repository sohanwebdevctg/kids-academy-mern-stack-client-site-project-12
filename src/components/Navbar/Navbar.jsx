import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo/logo.png";

const Navbar = () => {
  return (
    <>
      {/* desktop section start */}
      <div className="bg-white h-20 hidden md:block">
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
                    isActive ? "text-red-700 font-medium" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="lg:text-base xl:text-lg">
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive ? "text-red-700 font-medium" : "text-black"
                  }
                >
                  Instructor
                </NavLink>
              </li>
              <li className="lg:text-base xl:text-lg">
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? "text-red-700 font-medium" : "text-black"
                  }
                >
                  Classes
                </NavLink>
              </li>
            </ul>
            {/* link section end */}
            {/* profile & login section start */}
            <Link to="/login">
              <button className="bg-red-600 font-semibold px-4 py-2 rounded-md text-white">
                LogIn
              </button>
            </Link>
            {/* profile & login section end */}
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
            <div className="navbar-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-red-700 font-medium" : "text-black"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/instructors"
                      className={({ isActive }) =>
                        isActive ? "text-red-700 font-medium" : "text-black"
                      }
                    >
                      Instructor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/classes"
                      className={({ isActive }) =>
                        isActive ? "text-red-700 font-medium" : "text-black"
                      }
                    >
                      Classes
                    </NavLink>
                  </li>
                  <li>
                    <Link to="/login">
                      <button className="bg-red-600 font-semibold px-3 py-1 rounded-md text-white">
                        LogIn
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* without user end */}
            {/* with user start */}
            <div className="dropdown dropdown-end hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-red-700 font-medium" : "text-black"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/instructors"
                    className={({ isActive }) =>
                      isActive ? "text-red-700 font-medium" : "text-black"
                    }
                  >
                    Instructor
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classes"
                    className={({ isActive }) =>
                      isActive ? "text-red-700 font-medium" : "text-black"
                    }
                  >
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-red-700 font-medium" : "text-black"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button className="bg-red-600 font-semibold px-3 py-1 rounded-md text-white">
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
            {/* with user end */}
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
