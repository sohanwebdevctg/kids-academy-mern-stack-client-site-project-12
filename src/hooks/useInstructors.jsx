import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useInstructors = () => {

   //axiosSecure
   const [axiosSecure] = useAxiosSecure();

  const { data : instructors = [] } = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor`)
      return res.data
    }
  })

  return [instructors]
};

export default useInstructors;