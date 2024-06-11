import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {

  //axiosSecure
  const [axiosSecure] = useAxiosSecure();

  //authProvider
  const {user,loading} = useAuth();

  const { data : isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`)
      return res.data.admin
    },
  })

  return [isAdmin, isAdminLoading]
};

export default useAdmin;