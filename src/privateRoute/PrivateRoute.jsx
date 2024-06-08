
import useAuth from './../hooks/useAuth';
import LoadingPage from './../components/LoadingPage/LoadingPage';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  // auth provider
  const {user, loading} = useAuth();

  //token
  const token = localStorage.getItem('token')

  // navigate the location
  const location = useLocation()

  // loading page 
  if(loading){
    return <LoadingPage></LoadingPage>
  }

  //user
  if(!user && !token){
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    
    return children
};

export default PrivateRoute;