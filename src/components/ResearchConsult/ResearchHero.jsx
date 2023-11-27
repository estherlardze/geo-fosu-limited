import React, { useState, useEffect } from 'react'
import { Navbar, BreadCrumb} from '../index'
import { logo } from '../../assets/index'


const ResearchHero = () => {
  const [changeBg, setChangeBg] = useState("")

  useEffect(() => {
    const currentPage = window.location.pathname;

    if (currentPage === '/projects/research-consult/ai-devive'
        || currentPage === '/projects/research-consult/project-management') {
       setChangeBg('bg-orange/80');
    } 
    else
    {
      setChangeBg('bg-black/70');
    }
    
  }, []);
  

  return (
  <div className="bg-retro bg-cover bg-no-repeat bg-center h-[50vh] sm:h-[60vh]">
    <div className={`${changeBg} w-[100%] h-[50vh] sm:h-[60vh]`}>
      <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] py-6'>
        <Navbar/>
        <div className='flex flex-col md:flex-row gap-6 md:items-center mt-[5vh] text-white justify-between'>
          <div>
            <article className='border-[6px] p-3 border-white/50'>
              <h1 className='text-2xl sm:text-3xl lg:text-[30px] font-bold uppercase'>Research Topic</h1>
             </article>
             <BreadCrumb/>
          </div>
        
          <article className="hidden md:block">
            <div className='flex gap-3 items-center text-white'>
              <img src={logo} alt="Geo Fosu logo" className='w-[40px] h-[40px] rounded-full'/>
              <div >
              <h1 className='font-bold'>GEO-FOSU</h1>
              <h4 className='font-semibold text-xs'>Limited Company</h4>
              </div>
            </div>
            <h4 className='uppercase text-[10px] mt-2 font-semibold'>
              Building dreams, nurturing knowledge, <br />managing excellence
              </h4>
          </article>
        </div>
      </section>
    </div>
  </div>
  )
}

export default ResearchHero