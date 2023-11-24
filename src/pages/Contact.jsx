import {Navbar, Footer, Form, HeadText, Address} from '../components/index'
import { Helmet } from 'react-helmet';


const Contact = () => {
  return (
    <div>
      <Helmet>
       <title> Contact Us | GEO-FOSU LTD</title>
        <meta name="description" content="We would like to hear from you. Contact us now via email or phone to reach out to us. Our team will be glad to answer your questions."/>
        <link rel="canonical" href="https://www.geofosulimitedcompany.com/contact"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:title" content="GEO-FOSU Limited Company"/>
        <meta property="og:description" content="We would like to hear from you. Contact us now via email or phone to reach out to us. Our team will be glad to answer your questions."/>
        <meta property="og:url" content="https://www.geofosulimitedcompany.com/contact"/>
        <meta property="og:site_name" content="GEO-FOSU Limited Company"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Contact Us | GEO-FOSU LTD"/>
        <meta name="twitter:image" content="../assets/images/WORK.jpg"/>
      </Helmet>

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
</div>
  )
}

export default Contact
