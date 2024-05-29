
import useAuth from './../hooks/useAuth';
import LoadingPage from './../components/LoadingPage/LoadingPage';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  // auth provider
  const {user, loading} = useAuth();

  // navigate the location
  const location = useLocation()

  // loading page 
  if(loading){
    return <LoadingPage></LoadingPage>
  }

  //user
  if(user){
    return children
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;