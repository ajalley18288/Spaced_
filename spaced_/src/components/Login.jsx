import React from 'react'
import LoginImage from '../assets/loginpageimage.jpg'

const Login = () => {
  return (
      <div className='w-full relative'>
          <h1 className="w-full h-full flex flex-col left-0 absolute text-white text-9xl font-bold justify-start items-center">Spaced_</h1>
          <img src={LoginImage} className='object-cover w-full'/>
      </div>
  )
}

export default Login