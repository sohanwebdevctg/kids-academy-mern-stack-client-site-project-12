import axios from "axios";
import useAuth from './useAuth';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// get data
const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {

  // navigate user
  const navigate = useNavigate();

  // auth provider
  const {logOut} = useAuth()

  // request interceptor and response interceptor
  useEffect(() => {

    // Add a request interceptor
    axiosSecure.interceptors.request.use((config) => {
      // get token
      const token = localStorage.getItem('token')
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }
      return config;
    });

    // Add a response interceptor
    axiosSecure.interceptors.response.use((response) => response,
    async (error) => {
      // get status
      const status = error.response.status;

      // check status
      if(status === 401 || status === 403){
        await logOut()
        navigate('/login')
      }
      return Promise.reject(error);
    }
  );
  },[logOut, navigate])



  return [axiosSecure]
};

export default useAxiosSecure;