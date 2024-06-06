import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title/Title";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {

  //authProvider
  const {user, loading} = useAuth()

  //axiosSecure
  const [axiosSecure] = useAxiosSecure()

  //fetch enrollClasses data
  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymentHistory?email=${user?.email}`)
      return res.data;
    },
  })

  return (
    <div>
      {/* title section start */}
      <Title data={'Payment History'}></Title>
      {/* title section end */}
    {/* content section start */}
    <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
      {/* title section start */}
      <div className="text-center">
        <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">--- Payment History ---</h3>
      </div>
      {/* title section end */}
            {/* details section start */}
            <div className="mt-5">
      <table className="table">
    {/* head */}
    <thead className="bg-red-600 text-white">
      <tr>
        <th>No.</th>
        <th>Class Name</th>
        <th>Price</th>
        <th>EnrollData</th>
        <th>PaymentId</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((data, index) => <tr key={index}>
        <td>
          {++index}
        </td>
        <td>
          {data.className}
        </td>
        <td>${data.price}</td>
        <td>
          {data.date}
        </td>
        <td>
          {data.transactionId}
        </td>
      </tr>)
      }
      

    </tbody>
    {/* foot */}
  </table>
      </div>
      {/* details section end */}
    </div>
    {/* content section end */}
    
  </div>
  );
};

export default PaymentHistory;