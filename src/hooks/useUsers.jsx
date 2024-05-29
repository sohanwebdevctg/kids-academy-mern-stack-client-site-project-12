
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
   //axiosSecure
  const [axiosSecure] = useAxiosSecure();

   //fetch user data
  const { data : users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data
    },
  })

  return [users,refetch]
};

export default useUsers;