import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";




const useInstructors = () => {

  //axiosSecure
  const [axiosSecure] = useAxiosSecure();

  //authProvider
  const {loading} = useAuth()

  const { data : instructors = [], isLoading: isInstructorLoading } = useQuery({
    queryKey: ['instructor'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructors`)
      const instructor = res.data.filter((data) => data.role === 'instructor')
      return instructor
    }
  })

  return [instructors, isInstructorLoading]
};

export default useInstructors;