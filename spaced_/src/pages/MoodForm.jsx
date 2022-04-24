import React from 'react'
import './MoodForm.css'

const MoodTracker = () => {
    return (
        <div className='h-screen w-screen pt-10'>
            <div className='grid grid-cols-10 gap-5'>
                <div className='col-span-6 col-start-2 bg-white/90 m-5 rounded-md font-aquire'>
                    <div className='text-xl text-black font-bold font-aquire text-center'>
                        How are you feeling?
                    </div>
                    <form className='text-xl grid grid-cols-2 p-4'>
                        <input className='p-2' type='checkbox' />Happy
                        <input className='p-2' type='checkbox' />Sad
                        <input className='p-2' type='checkbox' />Curious
                        <input className='p-2' type='checkbox' />Tired
                        <input className='p-2' type='checkbox' />Cheerful
                        <input className='p-2' type='checkbox' />Gloomy

                        <button className='pt-0 decoration-indigo-500 text-indigo-500 hover:text-indigo-500/50 '>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default MoodTracker;