import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import useAuth from "../hooks/useAuth";
import useAdmin from './../hooks/useAdmin';


const AdminRoute = ({children}) => {
    // auth provider
    const {user, loading} = useAuth();

    // admin data
    const [isAdmin, isAdminLoading] = useAdmin();

    // navigate the location
    const location = useLocation()
  
    // loading page 
    if(loading || isAdminLoading){
      return <LoadingPage></LoadingPage>
    }
  
    //user
    if(user && isAdmin){
      return children;
    }
  
    return <Navigate to="/" state={{from: location}} replace></Navigate>
  };

export default AdminRoute;