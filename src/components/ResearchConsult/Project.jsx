import React from 'react'
import HeadText from '../HeadText'


const Project = () => {
  return (
    <section className='w-[90%] mx-[5%] sm:w-[94%] sm:mx-[3%] my-[50px]'>
    <div className="flex gap-10 flex-col md:flex-row items-center justify-center w-full">
       <HeadText/>

        <h1 
          className="text-xl w-full md:w-[60%] font-bold sm:text-2xl md:text-3xl text-center px-2 lg:text-3xl bg-orange py-2 text-white uppercase h-fit">
          Project Management 
        </h1>

       <HeadText/>
       
     </div>

     <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-center my-6'>Coming Soon...</h1>
   </section>
  )
}

export default Project
