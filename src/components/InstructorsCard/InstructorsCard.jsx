import useAuth from "../../hooks/useAuth";


const InstructorsCard = ({data}) => {

  //authProvider
  const {color} = useAuth();


  return (
    <div className={`${color ? 'bg-white shadow-md shadow-blue-700' : ' shadow-md shadow-red-700 bg-white'} `}>
      {/* content section start */}
      <div className="relative">
        <img src={data.photo} className="h-40 sm:h-52 md:h-48 lg:h-64 xl:h-72 w-full"></img>
        <div>
          <ul className={`${color ? 'bg-[#161618]' : 'bg-red-700'} absolute w-full bottom-0 p-1 sm:p-2 md:p-1 lg:p-2`}>
            <li className="text-[9px] sm:text-[10px] md:text-sm lg:text-base xl:text-base text-white">Name: {data.name}</li>
            <li className="text-[9px] sm:text-[10px] md:text-sm lg:text-base xl:text-base text-white">Email: {data.email}</li>
          </ul>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default InstructorsCard;