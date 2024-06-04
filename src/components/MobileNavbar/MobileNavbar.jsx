import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const MobileNavbar = () => {

  // authProvider
  const {color} = useAuth()

  return (
    <>
      <div className="navbar-center z-30">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${color ? 'text-gray-400' : 'text-black'}`}
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
                  className={`${color ? 'bg-[#161618]' : 'bg-base-100'} menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52`}
                >
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? `${color ? 'text-blue-700 font-medium' :'text-red-700 font-medium'}` : `${color ? 'text-white' : 'text-black'}`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/instructors"
                      className={({ isActive }) =>
                        isActive ? `${color ? 'text-blue-700 font-medium' :'text-red-700 font-medium'}` : `${color ? 'text-white' : 'text-black'}`
                      }
                    >
                      Instructor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/classes"
                      className={({ isActive }) =>
                        isActive ? `${color ? 'text-blue-700 font-medium' :'text-red-700 font-medium'}` : `${color ? 'text-white' : 'text-black'}`
                      }
                    >
                      Classes
                    </NavLink>
                  </li>
                  <li>
                    <Link to="/login">
                      <button className={`${color ? 'bg-blue-700' : 'bg-red-600' }  font-semibold px-3 py-1 rounded-md text-white`}>
                        LogIn
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
    </>
  );
};

export default MobileNavbar;