import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import sunshinebg from '../assets/sunshine.png'
import { BiArrowBack } from 'react-icons/bi'
import { HiEye, HiEyeOff } from 'react-icons/hi'


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState();

  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://recipeappserver.onrender.com/auth/login", { username, password });

      if (response.data.userID) {
        setCookies('access_token', response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        window.localStorage.setItem("username", response.data.username);
        navigate("/");
      }
      else {
        alert(response.data.message);
      }

    }
    catch (err) {
      console.log(err);
    }

  }
  function handlePassword() {
    setBtn(!btn);
  }
  return (
    <>
      <div className='w-full h-screen flex sm:flex-row flex-col items-center justify-between'>
        <div>
          <div className='relative'>
            <img src={sunshinebg} alt="sunshine" className='xl:w-[800px] lg:w-[520px] w-full h-screen object-cover' />
          </div>
          <div className='absolute top-5 left-5'>
            <Link to='/'><BiArrowBack size={35} className="bg-white rounded-full p-2 hover:shadow-md duration-75" /></Link>
          </div>
        </div>
        <div className='xl:mr-48 lg:mr-20 sm:mr-5 sm:static absolute top-[25%] bg-white px-5 py-10 rounded-md'>
          <div className='text-2xl font-extrabold mb-10'>
            <p>Welcome back!</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center font-medium">
            <div className='flex flex-col justify-center mb-8'>
              <input type="text" placeholder='Username' className='border-b-2 border-gray-400 placeholder:text-slate-600 px-1 py-1 sm:w-[320px] w-[280px] outline-none focus:border-slate-900 focus:placeholder:text-slate-900' onChange={(e) => { setUsername(e.target.value) }} required />
            </div>
            <div className='mb-10'>
              <div className='relative'>
                {btn ?
                  (
                    <input type="text" placeholder='Password' className='border-b-2 border-gray-400 placeholder:text-slate-600 px-1 py-1 sm:w-[320px] w-[280px] outline-none focus:border-slate-900 focus:placeholder:text-slate-900' onChange={(e) => { setPassword(e.target.value) }} required />
                  ) : (
                    <input type="password" placeholder='Password' className='border-b-2 border-gray-400 placeholder:text-slate-600 px-1 py-1 sm:w-[320px] w-[280px] outline-none focus:border-slate-900 focus:placeholder:text-slate-900' onChange={(e) => { setPassword(e.target.value) }} required />
                  )}
                <div className='absolute top-2 right-2 cursor-pointer' onClick={handlePassword}>
                  {btn ? (
                    <HiEye fontSize={20} />
                  ) : (
                    <HiEyeOff fontSize={20} />
                  )}
                </div>
              </div>
            </div>
            <div>
              <button type='submit' className='hover:bg-red-500 bg-black font-medium duration-150 mb-5 px-4 py-3 sm:w-[320px] w-[280px] text-white rounded-full'>Log in</button>
            </div>
          </form>
          <div className='text-center font-medium'>
            <p>Don't have an account? <span className='font-bold underline hover:text-red-500'><Link to="/register">Register</Link></span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login