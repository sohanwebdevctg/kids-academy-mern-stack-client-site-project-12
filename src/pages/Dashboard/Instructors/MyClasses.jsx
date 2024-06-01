import useInstructorClass from "../../../hooks/useInstructorClass";

const MyClasses = () => {
  const [instructorClass, refetch] = useInstructorClass();
  console.log(instructorClass);

  return (
    <div>
      {/* content section start */}
      <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
        {/* title section start */}
        <div className="text-center">
          <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">
            --- My Classes ---
          </h3>
        </div>
        {/* title section end */}

        {/* details section start */}
        <div className="mt-5">
          {instructorClass.length === 0 ? (
            <div>please Add A Class</div>
          ) : (
            <table className="table ">
              {/* head */}
              <thead className="bg-red-600 text-white">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Class Name</th>
                  <th>Available Seats</th>
                  <th>Price</th>
                  <th>Total Enroll</th>
                  <th>Status</th>
                  <th>FeedBack</th>
                </tr>
              </thead>
              <tbody>
                {instructorClass.map((data, index) => (
                  <tr key={index} className="bg-slate-100 shadow-md text-center">
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
                    <td>{data.totalEnroll || 0}</td>
                    <td>
                      <span className="bg-blue-600 text-white p-1 rounded-lg">
                        {data.status}
                      </span>
                    </td>
                    <td>
                      <label htmlFor="my_modal_7" className="btn btn-xs bg-green-600 hover:bg-green-600">
                        See Feedback
                      </label>
                      <input
                        type="checkbox"
                        id="my_modal_7"
                        className="modal-toggle"
                      />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <h3 className="text-lg font-bold">Hello!</h3>
                          <p className="py-4">
                            This modal works with a hidden checkbox!
                          </p>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">
                          Close
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {/* details section end */}
        {/* content section end */}
      </div>
    </div>
  );
};

export default MyClasses;
