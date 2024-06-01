import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllClasses = () => {
   //axiosSecure
  const [axiosSecure] = useAxiosSecure();

   //fetch user data
  const { data : allClasses = [], refetch } = useQuery({
    queryKey: ['allClasses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/allClass')
      return res.data
    },
  })

  return [allClasses,refetch]
};

export default useAllClasses;