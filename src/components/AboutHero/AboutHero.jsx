import {logo} from '../../assets/index'
import {Navbar} from '../index'


const AboutHero = () => {
 
  return (
  <div className="bg-retro bg-cover bg-no-repeat bg-center h-[50vh]">
    <div className="bg-blue/80 w-[100%] h-[50vh] border-b-[5px] border-orange">
      <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%]'>
        <Navbar/>
        <div className='flex flex-col md:flex-row gap-6 md:items-center mt-6 text-white justify-between'>
          <article className='border-[6px] border-white/50'>
           <h1 className='text-3xl sm:text-4xl lg:text-5xl uppercase font-bold bg-white/30 p-4'>About</h1>
          </article>
         <article>
         <div className='flex gap-6 items-center'>
          <img src={logo} alt="logo" className='w-[50px] h-[50px] bg-white rounded-full'/>
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

export default AboutHero