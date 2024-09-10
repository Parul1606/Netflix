/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { API_END_POINT } from '../utils/constant'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setUser } from '../redux/userSlice'


const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const isLoading = useSelector(store=>store.app.isLoading)

  const loginHandler = () => {
    setIsLogin(!isLogin)
  }

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    if(isLogin){
      //login 
      const user = {email, password}
      console.log(user);
      
      try{
        const res = await axios.post(`${API_END_POINT}/login`, user,{
          headers:{
            "Content-Type": 'application/json'
          },
          withCredentials: true
        })
        console.log(res);      
        if(res.data.success){
          toast.success(res.data.message)
        }  
        dispatch(setUser(res.data.user))
        navigate('/browse')
      } catch (error){
        toast.error(error.response.data.message)
        console.log(error);        
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //register
      dispatch(setLoading(true));
      const user = {fullName, email, password}
      try{
        const res = await axios.post(`${API_END_POINT}/register`, user,{
          headers:{
            "Content-Type": 'application/json'
          },
          withCredentials: true
        })
        console.log(res)
        if(res.data.success){
          toast.success(res.data.message)
        }
        setIsLogin(true)
      } catch (error){
        toast.error(error.response.data.message)
        console.log(error)
      } finally {
        dispatch(setLoading(false))
      }
    }
    setFullName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className='relative w-full h-screen'>
      <Header />
      <div className='absolute inset-0'>
        <img 
          className='w-full h-full object-cover' 
          src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" 
          alt="banner"
        />
      </div>
      <div className='flex items-center justify-center h-full shadow-4xl'>
        <form onSubmit={getInputData} className='z-10 bg-gray p-8  w-2/6 rounded-md bg-opacity-70 backdrop-blur-md'>
          <div className='flex flex-col space-y-4'>
            <p className='text-white font-poppins text-center text-2xl font-extrabold'> {isLogin ? "Login" : "Signup"} </p>
            { !isLogin && 
              <>
                <label className='font-poppins text-lg'>Full Name</label>
                <input 
                  value={fullName} onChange={(e) => setFullName(e.target.value)}
                  type='text' 
                  className='p-2 border border-gray-300 rounded' 
                  placeholder='Enter your full name'
                />
              </>
            }
            <label className='font-poppins text-lg'>Email</label>
            <input
              value = {email} onChange={(e) => setEmail(e.target.value)}
              type='email' 
              className='p-2 border border-gray-300 rounded' 
              placeholder='Enter your email'
            />
            <label className='font-poppins text-lg'>Password</label>
            <input 
              value = {password} onChange={(e) => setPassword(e.target.value)}
              type='password' 
              className='p-2 border border-gray-300 rounded' 
              placeholder='Enter your password'
            />
          </div>
          <div className='flex justify-center mt-6'>
            <button className='bg-red-500 px-4 py-3 text-white font-poppins'> {`${isLoading ? 'Loading...' : (isLogin ? "Login" : "Signup")}` } </button>
          </div>
          <p className='text-white font-poppins mt-6 ml-4 md-1 text-center text-xl font-bold'>{isLogin ? "New to Binge?" : "Already have an account?"} <span onClick={loginHandler}  className='ml-1 text-blue-400 font-poppins font-medium cursor-pointer'>{ isLogin ? "Signup" : "Login" }</span> </p>

        </form>
      </div>
    </div>
  )
}

export default Login
