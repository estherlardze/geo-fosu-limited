import React from 'react'
import {construction, work, research} from '../../assets/index'
import { Link } from 'react-router-dom'


const Services = () => {
  return (
    <section className='w-[100%] overflow-hidden mb-[50px]'>
     <div className='w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] mt-[50px]'>
      <div className='flex items-center justify-center mb-8'>
        <hr className='border border-orange w-[45%]'/>
        <h1 className='mx-2 text-3xl text-orange text-center font-semibold uppercase '>Services</h1>
        <hr className='border border-orange w-[43%]'/>
      </div>

     <Link to='/research'>
      <div  data-aos="zoom-in"
       className='flex justify-center my-6 relative text-white border-[6px] border-black/80'>
        <img src={research} alt="reserch consult" className='w-full h-[18rem]'/>
         <div className='absolute w-full h-full left-0 top-0 bg-black/50 '>
          <div className='absolute left-[50px] top-[8rem]'>
            <p className='text-2xl uppercase'>Geo-fosu</p>
            <p className='uppercase font-bold text-2xl'>Research Consult</p>
          </div>
         </div>
       </div>
       </Link>

     
     <div className='grid grid-cols-2 gap-6'>
     <Link to='/construction' className='col-span-2 md:col-span-1'>
      <div  data-aos="zoom-in"
       className='my-6 relative text-white border-[6px] border-orange'>
        <img src={construction} alt="construction consult" className='w-full h-[18rem]'/>
         <div className='absolute w-full h-full left-0 top-0 bg-black/40 '>
          <div className='absolute left-[50px] top-[8rem]'>
            <p className='text-2xl uppercase'>Geo-fosu</p>
            <p className='uppercase font-bold text-2xl'>Construction Consult</p>
          </div>
         </div>
       </div> 
      </Link>   

      <Link to='/management' className='col-span-2 md:col-span-1'>
       <div data-aos="zoom-in"
        className='my-6 relative text-white  border-[6px] border-blue/80'>
        <img src={work} alt="management consult" className='w-full h-[18rem]'/>
         <div className='absolute w-full h-full left-0 top-0 bg-black/50 '>
          <div className='absolute left-[50px] top-[8rem]'>
            <p className='text-2xl uppercase'>Geo-fosu</p>
            <p className='uppercase font-bold text-2xl'>Project management Consult</p>
          </div>
         </div>
       </div>
      </Link>
      </div>

   </div>
   </section>
  )
}

export default Services