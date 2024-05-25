import { Link } from 'react-router-dom';
import registerImg from '../../../public/authenticationImg/registerImg.png'
import Google from '../Google/Google';

const Register = () => {
  return (
    <div className='flex items-center h-screen'>
      {/* content section start */}
      <div className="container mx-auto p-3">
        {/* form section start */}
        <div className='md:flex md:justify-around md:items-center bg-white w-full md:w-3/4 lg:w-2/3 mx-auto rounded-md shadow-lg px-5 py-10'>
          {/* image section start */}
          <div className='flex-1 hidden md:block'>
            <img className='w-full h-full' src={registerImg}></img>
          </div>
          {/* image section end */}
          {/* form section start */}
          <div className='flex-1'>
            {/* title section start */}
            <h2 className='text-red-600 text-xl'>Register Form</h2>
            {/* title section end */}
          <form className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                          {/* name section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        {/* name section end */}
            {/* email section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        {/* email section end */}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      {/* password section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"/>
        </div>
        {/* password section end */}
        {/* confirmPassword section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"/>
        </div>
        {/* confirmPassword section end */}
            </div>
        {/* image section start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" className="file-input file-input-bordered file-input-md w-full" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-600 hover:bg-red-600 text-white font-bold">Register</button>
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