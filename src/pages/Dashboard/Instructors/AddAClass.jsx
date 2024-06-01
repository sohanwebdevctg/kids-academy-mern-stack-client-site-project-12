import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/useAuth';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const AddAClass = () => {

  // axiosSecure
  const [axiosSecure] = useAxiosSecure();

  // authProvider
  const {user} = useAuth();

  // navigate user
  const navigate = useNavigate()

  //form data
  const {register,handleSubmit, reset,formState: { errors }} = useForm()

  // form data
  const onSubmit = (data) => {
    
    const instructorName = data.instructorName;
    const instructorEmail = data.instructorEmail;
    const className = data.className;
    const availableSeats = parseInt(data.availableSeats);
    const price = parseInt(data.price);


    //class image
    const image = data.classImage[0]
    const formData = new FormData();
    formData.append('image', image)

    // image validation start
    const image_link = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGLINK}`;

    // image fetching data
    fetch(image_link,{
      method: 'POST',
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      // get imageUrl link from imageBB
      const imageUrl = data.data.display_url;
      const addData = {instructorName: instructorName, instructorEmail: instructorEmail, className: className, classImage: imageUrl, availableSeats: availableSeats, price: price, status: 'pending'};
      // post data in the server
      axiosSecure.post('/classes', addData)
      .then((data) => {
        
        if(data.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
        reset()
        navigate('/dashboard/myClasses')
      })
    })

  }


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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  defaultValue={user.displayName}
                  {...register("instructorName", { required: true })}
                />
                {errors.instructorName && <span>This field is required</span>}
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
                  defaultValue={user.email}
                  {...register("instructorEmail", { required: true })}
                />
                {errors.instructorEmail && <span>This field is required</span>}
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
                  {...register("className", { required: true })}
                />
                {errors.className && <span>This field is required</span>}
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
                  {...register("availableSeats", { required: true })}
                />
                {errors.availableSeats && <span>This field is required</span>}
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
                  {...register("price", { required: true })}
                />
                {errors.price && <span>This field is required</span>}
              </div>
              {/* price */}
              {/* class image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input type="file" className="file-input file-input-bordered file-input-md w-full" {...register("classImage", { required: true })}/>
                {errors.classImage && <span>This field is required</span>}
              </div>
              {/* class image */}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-red-600 hover:bg-red-600 text-white font-bold">Add Class</button>
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
