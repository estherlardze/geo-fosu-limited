import React from 'react'
import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.jpg'


const Services = () => {
  return (
    <section className='w-[100%] overflow-hidden'>
    <div className='w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] mt-[50px]'>
      <div className='flex items-center justify-center mb-8'>
        <hr className='border border-orange-500 w-[20%]'/>
        <h1 className='mx-2 text-3xl text-orange-500 font-semibold uppercase'>Services</h1>
        <hr className='border border-orange-500 w-[20%]'/>
      </div>

      <div className='flex justify-center my-6 relative text-white border-[6px] border-black/80'>
        <img src={service1} alt="service" className='w-full h-[18rem]'/>
         <div className='absolute w-full h-full left-0 top-0 bg-black/40 '>
          <div className='absolute left-[50px] top-[8rem]'>
            <p className='text-2xl uppercase'>Geo-fosu</p>
            <p className='uppercase font-bold text-2xl'>Research Consult</p>
          </div>
         </div>
       </div>

     <div className='grid grid-cols-2 gap-6'>
      <div className='flex justify-center my-6 relative text-white col-span-2 md:col-span-1 border-[6px] border-orange-500'>
        <img src={service2} alt="service" className='w-full h-[18rem]'/>
         <div className='absolute w-full h-full left-0 top-0 bg-black/40 '>
          <div className='absolute left-[50px] top-[8rem]'>
            <p className='text-2xl uppercase'>Geo-fosu</p>
            <p className='uppercase font-bold text-2xl'>Construction Consult</p>
          </div>
         </div>
       </div>    

       <div className='flex justify-center my-6 relative text-white col-span-2 md:col-span-1 border-[6px] border-blue/80'>
        <img src={service3} alt="service" className='w-full h-[18rem]'/>
         <div className='absolute w-full h-full left-0 top-0 bg-black/40 '>
          <div className='absolute left-[50px] top-[8rem]'>
            <p className='text-2xl uppercase'>Geo-fosu</p>
            <p className='uppercase font-bold text-2xl'>Project management Consult</p>
          </div>
         </div>
       </div>
      </div>
    </div>
   </section>
  )
}

export default Services