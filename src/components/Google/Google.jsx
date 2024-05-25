import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const Google = () => {

  //authProvider
  const {googleSignIn} = useAuth();

  return (
    <div className="mx-auto text-center mt-3">
      {/* content section start */}
      <button onClick={googleSignIn} className="btn btn-circle btn-outline">
        <FaGoogle ></FaGoogle>
    </button>
    {/* content section end */}
    </div>
  );
};

export default Google;