
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructorClass = () => {
  // axiosSecure
  const [axiosSecure] = useAxiosSecure();

  //auhProvider
  const {user} = useAuth();

  const { data : instructorClass = [], refetch } = useQuery({
    queryKey: ['instructorClass', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allClass/instructor?email=${user?.email}`)
      return res.data
    },
  })

  return [instructorClass, refetch]
};

export default useInstructorClass;