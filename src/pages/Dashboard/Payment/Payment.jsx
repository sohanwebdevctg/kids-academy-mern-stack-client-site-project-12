import { useParams } from "react-router-dom";
import useUserSelectedClasses from "../../../hooks/useUserSelectedClasses";
import Title from "../../../components/Title/Title";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";



const Payment = () => {

  // class id 
  const {id} = useParams();

  //selected classes get
  const [userSelectedClasses,refetch] = useUserSelectedClasses();
  
  //condition
  useEffect(() => {
    const previousClass = userSelectedClasses.find(item => item._id === id)
    return setCurrentClass(previousClass)
  },[id, userSelectedClasses]);

  // current selected classes
  const [currentClass, setCurrentClass] = useState(null);

  //stripe key
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)


  return (
    <div>
      {/* title section start */}
      <Title data={'Payment'}></Title>
      {/* title section end */}
      {/* content section start */}
      <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
        {/* title section start */}
      <div className="text-center">
        <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">--- Payment ---</h3>
      </div>
      {/* title section end */}
      {/* details section start */}
      <div className="mt-5 w-1/2 bg-slate-100 p-5 mx-auto">
        {
          currentClass && <Elements stripe={stripePromise}>
          <CheckoutForm currentClass={currentClass} refetch={refetch}></CheckoutForm>
        </Elements>
        }
      </div>
      {/* details section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Payment;