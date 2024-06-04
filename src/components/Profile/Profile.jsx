import { NavLink, useNavigate } from "react-router-dom";
import useAuth from './../../hooks/useAuth';
import Swal from "sweetalert2";


const Profile = () => {

  // authProvider
  const {user,logOut, color} = useAuth();

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
                    src={ user && user?.email ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                  />
                </div>
              </div>
              
              <ul
                tabIndex={0}
                className={`${color ? 'bg-[#161618]' : 'bg-base-100'} mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-60 overflow-hidden`}
              >
                <li>
                <p><strong className={`${color ? 'text-blue-700' : 'text-black'}`}>Name:</strong><span className={`${color ? 'text-gray-400' : 'text-black'}`}>{user?.displayName}</span></p>
                <p><strong className={`${color ? 'text-blue-700' : 'text-black'}`}>Email:</strong><span className={`${color ? 'text-gray-400' : 'text-black'}`}>{user?.email}</span></p>
              </li>
                <li className="block md:hidden">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? `${color ? 'text-blue-700 font-medium' :'text-red-700 font-medium'}` : `${color ? 'text-white' : 'text-black'}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="block md:hidden">
                  <NavLink
                    to="/instructors"
                    className={({ isActive }) =>
                      isActive ? `${color ? 'text-blue-700 font-medium' :'text-red-700 font-medium'}` : `${color ? 'text-white' : 'text-black'}`
                    }
                  >
                    Instructor
                  </NavLink>
                </li>
                <li className="block md:hidden">
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
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? `${color ? 'text-blue-700 font-medium' :'text-red-700 font-medium'}` : `${color ? 'text-white' : 'text-black'}`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                <button onClick={logOutBtn} className={`${color ? 'bg-blue-700 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-600'}  font-semibold px-3 py-1 rounded-md text-white w-24`}>
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