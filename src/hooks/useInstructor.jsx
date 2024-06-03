import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
  
    //axiosSecure
    const [axiosSecure] = useAxiosSecure();

    //authProvider
    const {user, loading} = useAuth();
  
    const { data : isInstructor, isLoading: isInstructorLoading } = useQuery({
      queryKey: ['isInstructor', user?.email],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/instructor/${user.email}`)
        return res.data.instructor
      },
    })
  
    return [isInstructor, isInstructorLoading]


};

export default useInstructor;