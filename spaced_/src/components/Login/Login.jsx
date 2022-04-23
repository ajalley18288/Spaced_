import React from 'react'
import LoginImage from '../../assets/loginpageimage.jpg'

const Login = () => {
  return (
      <div className='w-full h-screen relative'>
          <h1 className="w-full h-full flex flex-col left-0 absolute text-white text-9xl font-bold justify-center items-center font-aquire">Spaced_</h1>
          <img src={LoginImage} className='h-full w-full object-fill'/>
      </div>
  )
}

export default Login