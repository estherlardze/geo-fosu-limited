import React from 'react'
import Logo from '../../assets/logo.png'


const Header = () => {
  return (
  <div className="bg-header bg-cover bg-no-repeat bg-center h-[50vh]">
    <div className="bg-black/60 w-[100%] h-[50vh] border-b-[5px] border-orange-500">
      <section className='w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] pt-[50px]'>
        <div className='flex flex-col md:flex-row gap-6 md:items-center text-white justify-between'>
          <article className='border-[6px] p-3 border-white/50'>
           <h1 className='text-3xl sm:text-4xl lg:text-5xl'>Geo-Fosu</h1>
           <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Research consult</h1>
          </article>
         <article>
         <div className='flex gap-6 items-center'>
          <img src={Logo} alt="logo" className='w-[40px] h-[40px] bg-white rounded-full'/>
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

export default Header