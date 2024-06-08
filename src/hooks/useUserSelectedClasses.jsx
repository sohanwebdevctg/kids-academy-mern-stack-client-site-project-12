import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserSelectedClasses = () => {
     //axiosSecure
     const [axiosSecure] = useAxiosSecure();

     //authProvider
     const {user,loading} = useAuth()
   
      //fetch user data
     const { data : userSelectedClasses = [], refetch, isLoading: isUserClassLoading } = useQuery({
       queryKey: ['selectedClasses', user?.email],
       enabled: !loading,
       queryFn: async () => {
         const res = await axiosSecure.get(`/selectedClass?email=${user?.email}`)
         return res.data
       },
     })
   
     return [userSelectedClasses,refetch,isUserClassLoading]
};

export default useUserSelectedClasses;