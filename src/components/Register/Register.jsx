import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../../public/authenticationImg/registerImg.png'
import Google from '../Google/Google';
import { useForm } from 'react-hook-form';
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';



const Register = () => {


  //authProvider
  const {signUp, updateUserProfile} = useAuth();

  const { register, handleSubmit,formState: { errors },} = useForm()

  //form password toggle
  const [showPas, setShowPas] = useState(false)
  const [showConPas, setShowConPas] = useState(false)
  const [correct, setCorrect] = useState(null)

  // navigate user
  const navigate = useNavigate()

  //form data get
  const onSubmit = (data) => {
    
    // form data
    const name = data.name;
    const email = data.email;
    const prePassword = data.prePassword;
    const conPassword = data.conPassword;
    
    if(prePassword === conPassword){
      setCorrect('')
    }else{
      setCorrect('password cannot match')
    }

    const image = data.photo[0];
    const formData = new FormData();
    formData.append('image', image)

    // image validation start
    const image_link = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGLINK}`;


    fetch(image_link,{
      method: 'POST',
      body : formData
    })
    .then((res) => res.json())
    .then((data) => {
      // get imageUrl link from imageBB
      const imageUrl = data.data.display_url;
      
      // create User
      signUp(email, prePassword)
      .then((result) => {
        const user = result.user
        // update user profile
        updateUserProfile(name, imageUrl)
        .then(() => {
          
          //create user backend
          axios.post("https://kids-academy-server.vercel.app/users", {name:name, email: email, photo: imageUrl})
          .then((data) => {
            // success message
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your data has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          //navigate
          navigate('/login')
          })
          
        })
      })
    })


  }



  return (
    <div className='flex items-center h-screen'>
      {/* content section start */}
      <div className="container mx-auto p-3">
        {/* form section start */}
        <div className='md:flex md:justify-around md:items-center bg-white w-full md:w-3/4 lg:w-3/4 xl:2/3 mx-auto rounded-md shadow-lg px-5 py-10'>
          {/* image section start */}
          <div className='flex-1 hidden md:block'>
            <img className='w-full h-full' src={registerImg}></img>
          </div>
          {/* image section end */}
          {/* form section start */}
          <div className='flex-1'>
            {/* title section start */}
            <h2 className='text-red-600 text-xl'>SignUp Form</h2>
            {/* title section end */}
          <form className='' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {/* name section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="enter your name" className="input input-bordered" {...register("name", { required: true })} />
          {errors.name && <span className='text-red-600'>This field is required</span>}
        </div>
        {/* name section end */}
            {/* email section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="enter your email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.email && <span className='text-red-600'>This field is required</span>}
        </div>
        {/* email section end */}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {/* password section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='relative form-control'>
          <input type={showPas ? "text" : "password"} placeholder="enter password" className="input input-bordered" {...register("prePassword", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}/>
          <span className='absolute right-5 top-[30%] text-xl' onClick={() => setShowPas(!showPas)}>
            {showPas ? <IoMdEye className='text-green-600'></IoMdEye> : <IoIosEyeOff className='text-red-600'></IoIosEyeOff> }
          </span>
          </div>
          {errors.prePassword?.type === 'required' && <span className='text-red-600'>This field is required</span>}
          {errors.prePassword?.type === 'minLength' && <span className='text-red-600'>minimum 6 character</span>}
          {errors.prePassword?.type === 'maxLength' && <span className='text-red-600'>Maximum 20 character</span>}
          {errors.prePassword?.type === 'maxLength' && <span className='text-red-600'>one (upper & lower case, number and special character) </span>}
        </div>
        {/* password section end */}
        {/* confirmPassword section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <div className='relative form-control'>
          <input type={showConPas ? "text" : "password"} placeholder="confirm password" className="input input-bordered" {...register("conPassword", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}/>
          <span className='absolute right-5 top-[30%] text-xl' onClick={() => setShowConPas(!showConPas)}>
            {showConPas ? <IoMdEye className='text-green-600'></IoMdEye> : <IoIosEyeOff className='text-red-600'></IoIosEyeOff> }
          </span>
          </div>
          {errors.conPassword?.type === 'required' && <span className='text-red-600'>This field is required</span>}
          {errors.conPassword?.type === 'minLength' && <span className='text-red-600'>minimum 6 character</span>}
          {errors.conPassword?.type === 'maxLength' && <span className='text-red-600'>Maximum 20 character</span>}
          {errors.conPassword?.type === 'maxLength' && <span className='text-red-600'>one (upper & lower case, number and special character) </span>}
        </div>
        {/* confirmPassword section end */}
        <span className='text-red-600'>{correct}</span>
        </div>
        {/* image section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" className="file-input file-input-bordered file-input-md w-full" {...register("photo", { required: true })}/>
          {errors.photo && <span className='text-red-600'>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-600 hover:bg-red-600 text-white font-bold">SignUp</button>
        </div>
      </form>
      {/* login route start */}
      <p className='text-center my-2 text-base'>Have an account, <Link className='text-red-600' to="/login">Login</Link></p>
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

export default Register;