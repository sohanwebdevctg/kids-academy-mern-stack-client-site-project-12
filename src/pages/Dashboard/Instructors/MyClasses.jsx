import { useState } from "react";
import useInstructorClass from "../../../hooks/useInstructorClass";
import Title from "../../../components/Title/Title";
import LoadingPage from './../../../components/LoadingPage/LoadingPage';

const MyClasses = () => {
  const [instructorClass, isInstructorLoading] = useInstructorClass();

  // toggle data
  const [open, setOpen] = useState(false);

  // feedback data
  const [feedBack, setFeedBack] = useState(null)

  // feedback function
  const clickFun = (data) => {
    const feedbackData = instructorClass.find((value) => value._id === data._id)
    setFeedBack(feedbackData.feedback)
  };

  if(!isInstructorLoading){
    return <LoadingPage></LoadingPage>
  }

  return (
    <div>
      {/* title section start */}
      <Title data={'My Classes'}></Title>
      {/* title section end */}
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
                  <tr
                    key={index}
                    className="bg-slate-100 shadow-md text-center"
                  >
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
                      {data.status === "pending" && (
                        <span className="bg-blue-600 text-white p-1 rounded-lg">
                          {data.status}
                        </span>
                      )}
                      {data.status === "approved" && (
                        <span className="bg-green-600 text-white p-1 rounded-lg">
                          {data.status}
                        </span>
                      )}
                      {data.status === "deny" && (
                        <span className="bg-yellow-600 text-white p-1 rounded-lg">
                          {data.status}
                        </span>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          clickFun(data), setOpen(!open);
                        }}
                        className="btn btn-xs bg-yellow-600 text-white hover:bg-yellow-600"
                      >
                        feedback
                      </button>
                      <div
                        className={`w-[80%] bg-black bg-opacity-25  ${
                          open
                            ? "visible fixed top-[20%] left-[10%] bottom-[20%] flex items-center justify-center"
                            : "hidden"
                        }`}
                      >
                        <div className="card w-1/2 h-1/2 bg-base-100 relative">
                        <button onClick={() => setOpen(!open)} className="absolute right-5 top-3 btn btn-sm btn-circle btn-outline">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                          <div className="mt-10 h-full">
                            <h1 className="font-bold">Admin Feedback</h1>
                            <p>{feedBack || 'no feedback for admin'}</p>
                          </div>
                        </div>
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
