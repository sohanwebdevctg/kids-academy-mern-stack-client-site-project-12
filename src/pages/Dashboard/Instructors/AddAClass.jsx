const AddAClass = () => {
  return (
    <div>
      {/* content section start */}
      <div className="container mx-auto py-20 px-5 sm:px-6 md:px-10 lg:px-10 xl:px-14">
        {/* title section start */}
        <div className="text-center">
          <h3 className="text-sm sm:text-lg md:text-lg lg:text-xk xl:text-2xl text-red-500 border-y-[1px] border-red-500 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[32%] mx-auto py-2 italic">
            --- Add A Classes ---
          </h3>
        </div>
        {/* title section end */}
        {/* form section start */}
        <div className="card shrink-0 w-full shadow-2xl bg-base-100 mt-10">
          <form className="card-body">
            <div className="grid grid-cols-3 gap-5">
              {/* instructor name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  placeholder="enter user name"
                  className="input input-bordered"
                />
              </div>
              {/* instructor name */}
              {/* instructor email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="email"
                  placeholder="enter user email"
                  className="input input-bordered"
                />
              </div>
              {/* instructor email */}
              {/* class name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="enter class name"
                  className="input input-bordered"
                />
              </div>
              {/* class name */}
              {/* available seats */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="number"
                  placeholder="enter seats number"
                  className="input input-bordered"
                />
              </div>
              {/* available seats */}
              {/* price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="enter price"
                  className="input input-bordered"
                />
              </div>
              {/* price */}
              {/* class image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
              </div>
              {/* class image */}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
        {/* form section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default AddAClass;
