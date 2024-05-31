import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";




const useInstructors = () => {

  //axiosSecure
  const [axiosSecure] = useAxiosSecure();

  const { data : instructors = [] } = useQuery({
    queryKey: ['instructor'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructors`)
      const instructor = res.data.filter((data) => data.role === 'instructor')
      return instructor
    }
  })

  return [instructors]
};

export default useInstructors;