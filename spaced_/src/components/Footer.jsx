import React from 'react'

const Footer = () => {
  return (
    <div className='container max-w-screen h-36 bg-slate-900'>
        <div className="grid grid-cols-2 gap-2">
            <div className='text-2xl font-semibold text-right text-white pt-5 pr-10'>Spaced_</div>
            <div className='text-sm font-bold text-left pt-6'>
                <div>Created by</div>
                <div className='font-thin'>Alyissa Sanders</div>
                <div className='font-thin'>Massimiliano Celant</div>
                <div className='font-thin'>Malcom Morton</div>
                <div className='font-thin'>Estephania Santos</div>
            </div>
        </div>
    </div>
  )
}

export default Footer