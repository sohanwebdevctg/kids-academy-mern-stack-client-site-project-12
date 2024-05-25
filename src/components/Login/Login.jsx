import { Link } from 'react-router-dom';
import loginImg from '../../../public/authenticationImg/loginImg.png';
import Google from '../Google/Google';

const Login = () => {

  
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
          <form className=''>
            {/* email section start */}
            
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        {/* email section end */}
        {/* password section start */}
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"/>
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