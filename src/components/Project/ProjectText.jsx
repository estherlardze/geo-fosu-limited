import HeadText from "../HeadText"


const AboutText = () => {
  return (
    <div className='w-[90%] mx-[5%] sm:w-[94%] sm:mx-[3%] my-[30px]'>
    
     <h1 data-aos="fade-right"
       className='text-3xl font-bold sm:text-4xl md:text-5xl text-center lg:text-5xl text-blue mb-[60px] uppercase'>
      Geo fosu construction consult
     </h1>

     <div className="flex gap-10 flex-col md:flex-row items-center justify-center">
       <HeadText/>

        <h1 data-aos="fade-up"
          className="text-xl font-bold sm:text-2xl md:text-3xl text-center px-2 lg:text-3xl bg-orange py-2 text-white uppercase h-fit">
          Architectural & structural drawings
        </h1>

        <HeadText/>
       
     </div>
  </div>
  )
}

export default AboutText
