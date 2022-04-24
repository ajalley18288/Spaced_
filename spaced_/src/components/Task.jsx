import React from 'react'

const Task = ({ task: { name, description, completeTime }}) => {
    return (
        <div className='container bg-slate-900 rounded-md min-h-44 py-3'>
            <div className='text-xl font-bold text-center'>
                <div className='text-white underline'>TASK:</div> <span className='text-md'>{name}</span>
            </div>
            <div className='text-lg font-bold text-center'>
            <div className='text-white underline'>DESCRIPTION:</div> <span className='text-md'>{description}</span>
            </div>
            <div className='text-lg font-bold text-center'>
            <div className='text-white underline'>TIME UNTIL LIFTOFF:</div> <span className='text-md'>{completeTime}</span>
            </div>
            <div className='flex justify-center border-2 border-white pt-2'>
                <div className='btn btn-md btn-primary text-center justify-center text-2xl text-white'>COMPLETE TASK</div>
            </div>
        </div>
    )
}

export default Task