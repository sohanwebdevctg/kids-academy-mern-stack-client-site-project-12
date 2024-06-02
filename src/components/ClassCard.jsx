

const ClassCard = ({data}) => {
  console.log(data)
  return (
    <div className="bg-white shadow-lg">
      {/* content section start */}
      <div>
        <div className="p-2 sm:p-3 md:p-2 lg:p-5">
        <img src={data.classImage} className="h-32 sm:h-36 md:h-36 lg:h-44 xl:h-48 w-full rounded-lg"></img>
        </div>
        <div className="w-full p-1 sm:p-2 md:p-2 lg:p-5 ">
          <ul className="space-y-2">
            <li className="text-[9px] sm:text-sm md:text-xs lg:text-base xl:text-base"><span className="font-bold">Class Name :</span> {data.className}</li>
            <li className="text-[9px] sm:text-sm md:text-xs lg:text-base xl:text-base"><span className="font-bold">Instructor Name :</span> {data.instructorName}</li>
            <li className="text-[9px] sm:text-sm md:text-xs lg:text-base xl:text-base"><span className="font-bold">availableSeats :</span> {data.availableSeats}</li>
            <li className="text-[9px] sm:text-sm md:text-xs lg:text-base xl:text-base"><span className="font-bold">Price :</span> ${data.price}</li>
            <li>
            <button className="btn btn-xs lg:btn-md w-full bg-red-600 hover:bg-red-600 text-white">Select</button>
            </li>
          </ul>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default ClassCard;