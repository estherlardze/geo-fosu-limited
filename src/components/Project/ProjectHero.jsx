import { Navbar} from '../index'
import { Link } from 'react-router-dom'

const AboutHero = () => {
 
  return (
  <div className="bg-office bg-cover bg-no-repeat bg-center h-[70vh] sm:h-[60vh]">
    <div className="bg-blue/30 w-[100%] h-[70vh] sm:h-[60vh] border-b-[5px] border-blue">
      <section className='md:w-[94%] md:mx-[3%] w-[90%] mx-[5%] overflow-hidden'>
        <div className='flex justify-between items-center pt-4 md:pt-12'>
          <h1 className='text-3xl sm:text-5xl lg:text-6xl uppercase font-bold text-white'>
            Projects
          </h1>
          <Navbar/>
        </div>

        <div className='grid grid-cols-2 gap-12 lg:w-[60%] lg:mx-[20%] md:w-[80%] md:mx-[10%] w-[90%] mx-[5%] mt-8'>
         <Link 
           to="/research-consult"
           className='bg-white py-3 px-4 text-orange col-span-2 sm:col-span-1'
           >
           <p className='text-2xl uppercase'>Geo-fosu</p>
           <p className='uppercase font-bold text-2xl'>Research Consult</p>
         </Link>
         <Link 
           to='/project-consult'
           className='bg-white  py-3 px-4 text-orange col-span-2 sm:col-span-1'
           >
           <p className='text-2xl uppercase'>Geo-fosu</p>
           <p className='uppercase font-bold text-2xl'>Project Management Consult</p>
         </Link>
        </div>       
      </section>
    </div>
  </div>
  )
}

export default AboutHero