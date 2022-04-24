import React, { useState } from 'react'

const initialState = {
    name:'',
    email:'',
    password:'',
    verifyPassword:''
}

const AuthContainer = () => {

    const [isUser, setIsUser] = useState(false)
    const [userData, setUserData] = useState(initialState)

    const handleLoginChange = () => {
        setIsUser(!isUser)
    }

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        // handle the user login / registration
    }

    return (
        <div className='container mx-auto max-w-sm bg-violet-600/25 rounded-md border-zinc-200'>
            <div className='text-2xl text-white font-bold text-center py-3'>{isUser ? 'Login' : 'Sign Up'}</div>
            <div onClick={handleLoginChange} className='text-center text-white font-xs font-normal pb-3'>{ isUser ? 'Not a user yet? Sign Up' : 'Already a user? Sign in'}</div>
            { !isUser &&
                (
                    <div className='flex justify-center pt-2 pb-3'>
                        <input name='name' onChange={handleChange} type="text" placeholder="name" className='input w-full max-w-xs text-center bg-white'></input>
                    </div>
                )

            }
            <div className='flex justify-center pt-2 pb-3'>
                <input name='email' onChange={handleChange} type="text" placeholder="email" className='input w-full max-w-xs text-center bg-white'></input>
            </div>
            <div className='flex justify-center pt-2 pb-3'>
                <input name='password' onChange={handleChange} type="password" placeholder="password" className='input w-full max-w-xs text-center bg-white'></input>
            </div>
            { !isUser &&
                (
                    <div className='flex justify-center pt-2 pb-3'>
                        <input name='verifyPassword' onChange={handleChange} type="password" placeholder="re-enter password" className='input w-full max-w-xs text-center bg-white'></input>
                    </div>
                )

            }
            <div className='flex justify-center pt-2 pb-3'>
                <button onClick={handleSubmit} className='btn btn-md text-center btn-wide'>{isUser ? 'Login' : 'Sign Up'}</button>
            </div>
        </div>
    )
}

export default AuthContainer