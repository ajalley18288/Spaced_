import React, { useState } from 'react'

const initialState = {
    name: '',
    description: '',
    completeTime: '',
}

export const ToDoList = () => {

    const [ taskData, setTaskData ] = useState(initialState)

    const handleTaskChange = (e) => {
        console.log(taskData)
        setTaskData({...taskData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // submit
    }

    return (
        <div className='h-screen w-screen pt-10'>
            <div className='grid grid-cols-10 gap-5'>
                <div className='col-span-6 col-start-2 bg-white/90 m-5 rounded-md font-aquire'>
                <div className='text-xl text-black font-bold font-aquire text-center'>
                        Tasks
                    </div>
                </div>
                <div className='col-span-3 bg-white/90 m-5 rounded-md'>
                    <div className='text-xl text-black font-bold text-center font-aquire py-3'>
                        Create a Task
                    </div>
                    <div className='flex justify-center pt-2 pb-3'>
                        <input name='name' onChange={handleTaskChange} type="text" placeholder="name" className='input w-full max-w-xs text-center bg-white'></input>
                    </div>
                    <div className='flex justify-center pt-2 pb-3'>
                        <input name='description' onChange={handleTaskChange} type="text" placeholder="description" className='input w-full max-w-xs text-center bg-white'></input>
                    </div>
                    <div className='flex justify-center pt-2 pb-3'>
                        <input name='completeTime' onChange={handleTaskChange} type="text" placeholder="countdown" className='input w-full max-w-xs text-center bg-white'></input>
                    </div>
                    <div className='flex justify-center pt-2 pb-3'>
                        <button onClick={handleSubmit} className='btn btn-md text-center btn-wide'>Lift off</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList;