import Title from "../../../components/Title/Title";
import useAuth from "../../../hooks/useAuth";


const UserHome = () => {

      //role details
      const {user} = useAuth();

  return (
    <div>
      {/* title section start */}
      <Title data={'User Home'}></Title>
      {/* title section end */}
    {/* content section start */}
    <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
      {/* title section start */}
      <div className="text-center">
        <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">--- User Home ---</h3>
      </div>
      {/* title section end */}

        {/* profile section start */}
        <div className="flex justify-center items-center gap-10 bg-slate-200 shadow-lg mt-5 py-5 w-2/3 mx-auto">
          {/* image section start */}
          <div className='text-center'>
            <img src={user.photoURL} className='w-44 h-44 rounded-full'></img>
          </div>
          {/* image section end */}
          {/* description section start */}
          <div>
            <ul>
              <li className='text-3xl'><span className='font-bold'>Name:</span> {user.displayName}</li>
              <li className='text-3xl'><span className='font-bold'>Email:</span> {user.email}</li>
            </ul>
          </div>
          {/* description section end */}
        </div>
        {/* profile section end */}
    </div>
    {/* content section end */}
    
  </div>
  );
};

export default UserHome;