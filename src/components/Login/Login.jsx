import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../public/authenticationImg/loginImg.png';
import Google from '../Google/Google';
import { useForm } from 'react-hook-form';
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {

  //authProvider
  const {logIn} = useAuth();


  const { register, handleSubmit,formState: { errors },} = useForm()

  //form password toggle
  const [show, setShow] = useState(false)

  //navigate user
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  //form data get
  const onSubmit = (data) => {

    // form data
    const email = data.email;
    const password = data.password;

    //login user
    logIn(email, password)
    .then((res) => {
      const user = res.user;
      if(user){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are logged in now",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, {replace: true})
      }
    })

  }
  
  return (
    <div className='flex items-center h-screen'>
      {/* content section start */}
      <div className="container mx-auto p-3">
        {/* form section start */}
        <div className='md:flex md:justify-around md:items-center bg-white w-full md:w-3/4 lg:w-2/3 mx-auto rounded-md shadow-lg px-5 py-10'>
          {/* image section start */}
          <div className='flex-1 hidden md:block'>
            <img className='w-full h-full' src={loginImg}></img>
          </div>
          {/* image section end */}
          {/* form section start */}
          <div className='flex-1'>
            {/* title section start */}
            <h2 className='text-red-600 text-xl'>LogIn Form</h2>
            {/* title section end */}
          <form className='' onSubmit={handleSubmit(onSubmit)}>
          {/* email section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="enter your email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.email && <span className='text-red-600'>This field is required</span>}
        </div>
        {/* email section end */}
        {/* password section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='relative form-control'>
          <input type={show ? "text" : "password"} placeholder="enter password" className="input input-bordered" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}/>
          <span className='absolute right-5 top-[30%] text-xl' onClick={() => setShow(!show)}>
            {show ? <IoMdEye className='text-green-600'></IoMdEye> : <IoIosEyeOff className='text-red-600'></IoIosEyeOff> }
          </span>
          </div>
          {errors.password?.type === 'required' && <span className='text-red-600'>This field is required</span>}
          {errors.password?.type === 'minLength' && <span className='text-red-600'>minimum 6 character</span>}
          {errors.password?.type === 'maxLength' && <span className='text-red-600'>Maximum 20 character</span>}
          {errors.password?.type === 'maxLength' && <span className='text-red-600'>one (upper & lower case, number and special character) </span>}
        </div>
        {/* password section end */}
        <div className="form-control mt-6">
          <button className="btn bg-red-600 hover:bg-red-600 text-white font-bold">Login</button>
        </div>
      </form>
      {/* login route start */}
      <p className='text-center my-2 text-base'>If you Have no account, <Link className='text-red-600' to="/register">SignUp</Link></p>
      {/* login route end */}
      {/* social section start */}
      <Google></Google>
      {/* social section end */}
          </div>
          {/* form section end */}
        </div>
        {/* form section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Login;