import Title from "../../../components/Title/Title";


const MyEnrollClasses = () => {
  return (
    <div>
      {/* title section start */}
      <Title data={'My Enroll Classes'}></Title>
      {/* title section end */}
    {/* content section start */}
    <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
      {/* title section start */}
      <div className="text-center">
        <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">--- My Enroll Classes ---</h3>
      </div>
      {/* title section end */}
    </div>
    {/* content section end */}
    
  </div>
  );
};

export default MyEnrollClasses;