import React from 'react'
import LoginImage from '../../assets/loginpageimage.jpg'
import AuthContainer from './AuthContainer'

const Login = () => {
  return (
      <div className='w-full h-screen relative z-20'>
          <h1 className="w-full h-full flex flex-col left-0 absolute text-white text-9xl font-bold items-center font-aquire mt-20">Spaced_Out</h1>
          <div className="w-full h-full flex flex-col absolute justify-center items-center top-16 mt-10">
            <AuthContainer/>
          </div>
          <img src={LoginImage} className='h-full w-full object-fill' alt=""/>
      </div>
  )
}

export default Login