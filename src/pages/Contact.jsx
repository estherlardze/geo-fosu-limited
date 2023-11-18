import {Navbar, Footer, Form, HeadText, Address} from '../components/index'

const Contact = () => {
  return (
    <section className='w-[100%] overflow-hidden'>
    <div className="bg-work bg-cover bg-no-repeat bg-center h-[60vh] sm:h-[50vh]">
    <div className="bg-black/70 w-[100%] h-[60vh] sm:h-[50vh] border-b-[5px] border-orange">
      <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%]'>
        <Navbar/>
        <div className='flex flex-col md:flex-row gap-6 md:items-center mt-6 text-white justify-between'>
          <article className='border-[6px] border-white/50'>
           <h1 className='text-3xl sm:text-4xl lg:text-5xl uppercase font-bold bg-white/30 p-4'>Contact us</h1>
          </article>
        
        <HeadText/>
        </div>
      </section>
    </div>
  </div>

    <Address/>
   <Form/>
 <Footer/>
</section>
  )
}

export default Contact
