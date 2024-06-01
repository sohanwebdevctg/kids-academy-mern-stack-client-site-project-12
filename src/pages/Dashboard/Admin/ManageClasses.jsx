import useAllClasses from "../../../hooks/useAllClasses";

const ManageClasses = () => {
  //allClasses data
  const [allClasses, refetch] = useAllClasses();

  return (
    <div>
      {/* content section start */}
      <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
        {/* title section start */}
        <div className="text-center">
          <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">
            --- Manage Classes ---
          </h3>
        </div>
        {/* title section end */}
        {/* details section start */}
        <div className="mt-5">
          <table className="table ">
            {/* head */}
            <thead className="bg-red-600 text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Active Status</th>
                <th>Action</th>
                <th>FeedBack</th>
              </tr>
            </thead>
            <tbody>
              {allClasses.map((data, index) => (
                <tr key={index} className="bg-slate-100 shadow-md">
                  <td>{++index}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data.classImage} />
                        </div>
                      </div>
                      <div>
                        <h2 className="font-bold">{data.instructorName}</h2>
                        <h3 className="text-sm opacity-50">
                          {data.instructorEmail}
                        </h3>
                      </div>
                    </div>
                  </td>
                  <td>{data.className}</td>
                  <td>{data.availableSeats}</td>
                  <td>$ {data.price}</td>
                  <td>
                    <span className="bg-blue-600 text-white p-1 rounded-lg">
                      {data.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn text-white bg-green-600 hover:bg-green-600 btn-xs">
                      Approve
                    </button>
                    <br></br>
                    <button className="btn text-white bg-red-600 hover:bg-red-600 btn-xs">
                      Deny
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-xs bg-yellow-600 hover:bg-hover-600"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      FeedBack
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <form>
                        <textarea placeholder="enter my feed back" className="textarea textarea-bordered textarea-lg w-full"></textarea>
                        </form>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* details section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default ManageClasses;
