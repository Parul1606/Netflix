import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = () => {
    setIsLogin(!isLogin)
  }

  const getInputData = (e) => {
    e.preventDefault()
    console.log(fullName, email, password)
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
            <button className='bg-red-500 px-4 py-3 text-white font-poppins'> {isLogin ? "Login" : "Signup" } </button>
          </div>
          <p className='text-white font-poppins mt-6 ml-4 md-1 text-center text-xl font-bold'>{isLogin ? "New to Binge?" : "Already have an account?"} <span onClick={loginHandler}  className='ml-1 text-blue-400 font-poppins font-medium cursor-pointer'>{ isLogin ? "Signup" : "Login" }</span> </p>

        </form>
      </div>
    </div>
  )
}

export default Login
