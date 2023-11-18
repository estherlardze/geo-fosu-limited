import React from 'react'
import {logo} from '../assets/index'

const HeadText = () => {
  return (
    <article className="hidden md:block">
    <div className='flex gap-3 items-center'>
      <img src={logo} alt="logo" className='w-[40px] h-[40px] rounded-full'/>
      <div className='text-blue'>
       <h1 className='font-bold'>GEO-FOSU</h1>
       <h4 className='font-semibold text-xs'>Limited Company</h4>
      </div>
    </div>
     <h4 className='uppercase  text-blue text-[10px] mt-2 font-semibold'>
       Building dreams, nurturing knowledge, <br />managing excellence
      </h4>
   </article>
  )
}

export default HeadText