import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Google = () => {
  //authProvider
  const { googleSignIn } = useAuth();

  //routing path
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //googleLogInBtn
  const googleLogInBtn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        //create user backend
        axios
          .post("http://localhost:5000/users", {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
          .then((data) => {
            // success message
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your data has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="mx-auto text-center mt-3">
      {/* content section start */}
      <button onClick={googleLogInBtn} className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
      {/* content section end */}
    </div>
  );
};

export default Google;
