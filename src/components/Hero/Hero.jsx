import React, { useState, useEffect } from 'react'
import {logo} from '../../assets/index'
import {Navbar} from '../index'


const Hero = ({title}) => {
  const [changeBg, setChangeBg] = useState("bg-office")

  useEffect(() => {
    const currentPage = window.location.pathname;
    if (currentPage === '/construction') {
       setChangeBg('bg-workers');
    } 
    else if(currentPage === '/research')
    {
      setChangeBg('bg-office');
    }
    else if(currentPage === '/management')
    {
      setChangeBg('bg-work');
    }
  }, []);
  

  return (
  <div className={`${changeBg} bg-cover bg-no-repeat bg-center h-[60vh]`}>
    <div className="bg-black/60 w-[100%] h-[60vh] border-b-[5px] border-orange-500">
      <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%]'>
        <Navbar/>
        <div className='flex flex-col md:flex-row gap-6 md:items-center mt-6 text-white justify-between'>
          <article className='border-[6px] p-3 border-white/50'>
           <h1 className='text-3xl sm:text-4xl lg:text-5xl mb-2'>Geo-Fosu</h1>
           <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold uppercase'>{title}</h1>
          </article>
         <article>
         <div className='flex gap-6 items-center'>
          <img src={logo} alt="logo" className='w-[40px] h-[40px] bg-white rounded-full'/>
          <div className='text-white '>
           <h1 className='text-2xl font-bold'>GEO-FOSU</h1>
           <h4 className='font-semibold'>Limited Company</h4>
          </div>
         </div>
         <h4 className='uppercase  text-white text-sm mt-4 font-semibold'>
           Building dreams, nurturing knowledge, <br />managing excellence
          </h4>
         </article>
        </div>
      </section>
    </div>
  </div>
  )
}

export default Hero