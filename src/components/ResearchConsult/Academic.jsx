import { Link } from 'react-router-dom'
import HeadText from '../HeadText'

const Academic = () => {
  return (
    <section className='w-[90%] mx-[5%] sm:w-[94%] sm:mx-[3%] mt-[50px] mb-[100px]'>
    <div className="flex gap-10 flex-col md:flex-row justify-center items-center w-full">
       <HeadText/>
        <h1
          className="text-xl w-full md:w-[60%] tracking-wider font-bold sm:text-2xl md:text-3xl text-center px-2 lg:text-3xl bg-orange py-2 text-white uppercase h-fit"
        >
          Academic Research
        </h1>
       <HeadText/>
     </div>

     <div className="grid grid-cols-4 gap-6 text-white my-6">
       <Link 
          to="/projects/research-consult/ai-device"
          className="col-span-4 sm:col-span-2 xl:col-span-1 bg-blue px-4 py-2 rounded-md shadow-lg font-semibold"
          data-aos="fade-up"
        >
         INTEGRATING GREEN PRACTICES INTO PROJECT MANAGEMENT USING MOBILE PHONES AS AI DEVICE
       </Link>
       <Link 
         to="/projects/research-consult/real-estates"
         className="col-span-4 sm:col-span-2 xl:col-span-1 rounded-md shadow-lg bg-blue px-4 py-2 font-semibold"
         data-aos="fade-up"
        >
         EXAMINING WORKPLACE SAFETY CULTURE IN REAL ESTATE COMPANIES: A PROJECT MANAGEMENT PERSPECTIVE IN ACCRA, GHANA
       </Link>
       <Link 
          to="/projects/research-consult/project-management"
          className="col-span-4 sm:col-span-2 xl:col-span-1 rounded-md shadow-lg bg-blue px-4 py-2 font-semibold"
          data-aos="fade-up"
        >
         EXPLORING THE IMPACT OF ORGANIZATIONAL CULTURE ON PROJECT MANAGEMENT SUCCESS IN THE CONSTRUCTION INDUSTRY
       </Link>
       <Link 
         to="/projects/research-consult/green-supply-chain"
         className="col-span-4 sm:col-span-2 xl:col-span-1 rounded-md shadow-lg bg-blue px-4 py-2 font-semibold"
         data-aos="fade-up"
        >
         THE IMPACT OF STRATEGIC ORGANIZATIONAL ORIENTATION ON GREEN SUPPLY CHAIN PERFORMANCE AND FIRM PERFORMANCE.
       </Link>
     </div>
 </section>
  
  )
}

export default Academic