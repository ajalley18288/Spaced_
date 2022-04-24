import React from 'react'
import Login from '../components/Login/Login'
import Footer from '../components/Footer'

export const LoginScreen = () => {
    return (
        <div>
            <div className='h-screen bg-black z-20'>
                <Login />
            </div>
            <Footer/>
        </div>
    )
}

export default LoginScreen
