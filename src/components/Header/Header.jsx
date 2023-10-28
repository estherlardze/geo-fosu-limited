import React from 'react'
import {logo} from '../../assets/index'

const Header = () => {
  return (
    <header className='w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] mt-[60px]'>
      <div className='flex gap-6 items-start sm:items-center' data-aos="fade-right">
        <img src={logo} alt="logo" className='w-[80px] h-[80px] rounded-full'/>
        <div className='text-white'>
         <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>GEO-FOSU</h1>
         <h4 className='font-semibold text-xl sm:text-2xl'>Limited Company</h4>
        </div>
      </div>
      <h4 data-aos="fade-right" data-aos-duration="2500"
        className='uppercase text-lg sm:text-xl md:text-2xl font-semibold text-white mt-[30px]'>
        Building dreams, nurturing knowledge, <br />managing excellence
      </h4>
     {/*} <div className='flex mt-6' data-aos="fade-right" data-aos-duration="3000">
        <button className='text-white bg-orange py-1 px-6 font-semibold rounded-l-full'>Search</button>
        <input type="text" className='rounded-r-full py-2 outline-none px-3 w-full sm:w-[50%]'/>
  </div>*/}
    </header>
  )
}

export default Header