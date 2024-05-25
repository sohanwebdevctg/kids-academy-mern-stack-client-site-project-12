import { NavLink } from "react-router-dom";


const Profile = ({user}) => {
  return (
    <>
      {/* with user start */}
      <div className="dropdown dropdown-end z-30">
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
                <li className="block md:hidden">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-red-700 font-medium" : "text-black"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="block md:hidden">
                  <NavLink
                    to="/instructors"
                    className={({ isActive }) =>
                      isActive ? "text-red-700 font-medium" : "text-black"
                    }
                  >
                    Instructor
                  </NavLink>
                </li>
                <li className="block md:hidden">
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
                <button className="bg-red-600 font-semibold px-3 py-1 rounded-md text-white w-24">
                        LogOut
                      </button>
                </li>
              </ul>
            </div>
            {/* with user end */}
    </>
  );
};

export default Profile;