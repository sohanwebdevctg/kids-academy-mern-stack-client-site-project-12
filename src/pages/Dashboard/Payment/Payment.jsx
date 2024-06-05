import { useParams } from "react-router-dom";
import useUserSelectedClasses from "../../../hooks/useUserSelectedClasses";
import Title from "../../../components/Title/Title";
import { useEffect, useState } from "react";


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
      <div className="mt-5">
        <p>payment</p>
      </div>
      {/* details section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Payment;