import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAllClasses = () => {
   //axiosSecure
  const [axiosSecure] = useAxiosSecure();

  //authProvider
  const {loading} = useAuth()

   //fetch user data
  const { data : allClasses = [], refetch } = useQuery({
    queryKey: ['allClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get('/allClass')
      return res.data
    },
  })

  return [allClasses,refetch]
};

export default useAllClasses;