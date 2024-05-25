import { Link, NavLink } from "react-router-dom";


const MobileNavbar = () => {
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
    </>
  );
};

export default MobileNavbar;