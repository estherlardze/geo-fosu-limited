import {Navbar, Footer, Form} from '../components/index'
import {logo} from '../assets/index'

const Contact = () => {
  return (
    <section className='w-[100%] overflow-hidden'>
    <div className="bg-work bg-cover bg-no-repeat bg-center h-[50vh]">
    <div className="bg-black/70 w-[100%] h-[50vh] border-b-[5px] border-orange">
      <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%]'>
        <Navbar/>
        <div className='flex flex-col md:flex-row gap-6 md:items-center mt-6 text-white justify-between'>
          <article className='border-[6px] border-white/50'>
           <h1 className='text-3xl sm:text-4xl lg:text-5xl uppercase font-bold bg-white/30 p-4'>Contact us</h1>
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

<div className='bg-gray-100'>
   <div className="flex items-center justify-center py-12 w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] ">
      <div className="w-full lg:w-[29rem] p-6 bg-black/10 rounded shadow-lg font-semibold" data-aos="zoom-in">
        <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
        <div className="mb-4">
          <p className='my-2'>ADDRESS: Post Office Box 36.</p>
          <p className='my-2 flex flex-wrap'>Email: Geofosulimitedcompany@gmail.com</p>
          <p className='my-2'>Contact: WhatsApp: 0544803157/ Tel: 0598588294</p>
          <p className='my-2'>Location: Amansie Central-Ashanti Region.</p>
        </div>
      </div>
    </div>
    </div>

 <Form/>
 <Footer/>
</section>
  )
}

export default Contact
