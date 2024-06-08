import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from './../hooks/useInstructor';
import LoadingPage from "../components/LoadingPage/LoadingPage";



const InstructorRoute = ({children}) => {

    // auth provider
    const {user, loading} = useAuth();

    // admin data
    const [isInstructor, isInstructorLoading] = useInstructor();

    // token
    const token = localStorage.getItem('token');

    // navigate the location
    const location = useLocation()
  
    // loading page 
    if(loading || isInstructorLoading){
      return <LoadingPage></LoadingPage>
    }
  
    //user
    if(!user && !isInstructor && !token){
      return <Navigate to="/" state={{from: location}} replace></Navigate>
    }
    
    return children;



};

export default InstructorRoute;