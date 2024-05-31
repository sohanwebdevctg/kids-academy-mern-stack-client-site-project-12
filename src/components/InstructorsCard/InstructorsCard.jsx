

const InstructorsCard = ({data}) => {

  return (
    <div className="bg-white shadow-lg">
      {/* content section start */}
      <div className="relative">
        <img src={data.photo} className="h-40 sm:h-52 md:h-48 lg:h-64 xl:h-72 w-full"></img>
        <div>
          <ul className="absolute bg-red-700 w-full bottom-0 p-1 sm:p-2 md:p-1 lg:p-2">
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