
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useUsers = () => {
   //axiosSecure
  const [axiosSecure] = useAxiosSecure();

  //authProvider
  const {loading} = useAuth()

   //fetch user data
  const { data : users = [], refetch } = useQuery({
    queryKey: ['users'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data
    },
  })

  return [users,refetch]
};

export default useUsers;