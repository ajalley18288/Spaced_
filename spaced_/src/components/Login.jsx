import React from 'react'
import LoginImage from '../assets/loginpageimage.jpg'

const Login = () => {
  return (
      <div className='relative w-40 h-40 rounded-full overflow-hidden'>
          <img src={LoginImage} className='object-cover w-full'/>
          <h1 className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4">Spaced_</h1>
      </div>
  )
}

export default Login