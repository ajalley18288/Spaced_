import React from 'react'

const Dashboard = () => {
  return (
    <div className='h-screen w-screen'>
        <div className="text-3xl text-center font-bold pt-10 text-white mb-4">
              User's Dashboard
        </div>
      <div className="grid grid-cols-8">
        <div className='col-span-5 w-96 mx-auto bg-white/80 rounded-md p-4'>
            <div className="text-xl font-bold text-black">
              User Planets
            </div>
        </div>
        <div className='col-span-3 min-w-lg mx-auto bg-white/80 rounded-md p-4'>
            <div className="text-xl font-bold text-black">
              Create a new Planet
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard