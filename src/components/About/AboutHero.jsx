import {HeadText, Navbar} from '../index'
import BreadCrumb from '../BreadCrumb'

const AboutHero = () => {
 
  return (
  <div className="bg-retro bg-cover bg-no-repeat bg-center h-[60vh] sm:h-[50vh]">
    <div className="bg-blue/80 w-[100%] h-[60vh] sm:h-[50vh] border-b-[5px] border-orange">
      <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%]'>
        <Navbar/>
        <div className='flex flex-col md:flex-row gap-6 md:items-center mt-6 text-white justify-between'>
         <div>
          <article className='border-[6px] border-white/50'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl uppercase font-bold bg-white/30 p-4'>About</h1>
           </article>
           <BreadCrumb/>
          </div>
         <HeadText/>
        </div>
      </section>
    </div>
  </div>
  )
}

export default AboutHero