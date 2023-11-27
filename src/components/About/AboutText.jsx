import {about} from '../../assets/index'
import {business, values, objectives} from '.'

const AboutText = () => {
  return (
    <section className='w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] mt-[50px]'>
      <h1  data-aos="fade-right"
        className='text-3xl md:4xl lg:text-5xl font-semibold text-center my-3'>
        Welcome to GEO-FOSU LIMITED COMPANY!
      </h1>

      <div className='grid grid-cols-2 mt-[60px] gap-8 justify-center'>
        <div className='col-span-2 lg:col-span-1' data-aos="fade-right">
          <img src={about} alt="image of employee" className='h-[26rem] w-full lg:w-[90%]'/>
        </div>
        <div className='col-span-2 lg:col-span-1' data-aos="fade-left">
        <p className='text-orange text-left font-bold text-lg'>About Us</p>
        <p className='mt-4 sm:text-lg lg:leading-[2.5] text-black'>
        At GEO-FOSU, we are more than just a company; we are a passionate and purpose-driven 
        organization dedicated to delivering excellence in three distinct areas - Construction
        Consultation, Research Consultation, and Project Management Consultation. As you explore 
        our website, we invite you to discover the essence of our work and the values that drive
          us forward.
        </p>
        </div>
      </div>

      <div className='mt-[70px]'>
        <p className='text-orange text-left font-bold text-lg'>Our Businesses</p>
          <ul>
            {business.map((data, index) => (
              <li className='sm:text-lg my-3 ' key={index} data-aos="fade-up">
                <span className='text-lg sm:text-xl font-bold mr-2 '>{data.title}</span>
                 <span className='text-black'>{data.text}</span>
              </li>
            ))}
          </ul>
      </div>

      <div className='mt-[30px] text-black'>
        <h4 className='text-orange text-left font-bold text-lg' data-aos="fade-up">
          Our Aim
        </h4>
        <p className='my-1 sm:text-lg' data-aos="fade-up"><q>
        To excel in delivering comprehensive construction, research, and project management
        services while contributing to the betterment of society through sustainable practices
        and knowledge advancement.</q>
        </p>
      </div>

      <div className='mt-[30px] text-black sm:font-semibold'>
        <h4 className='text-orange text-left font-bold mb-1 text-lg' data-aos="fade-up">
         Goal
        </h4>
        <p data-aos="fade-up" className='sm:text-lg'>
        To be a leader in fostering sustainable development through innovative construction, 
        cutting-edge academic research, and effective project management, with a commitment to 
        achieving excellence in every facet of our services.</p>
      </div>

      <div className='mt-[30px] text-black' data-aos="fade-up">
        <h4 className='text-orange text-left font-bold mb-1 text-lg'>
        Slogan
        </h4>
         <p className='sm:text-lg'>Building Dreams, Nurturing Knowledge, Managing Excellence.</p>
      </div>
     
      <div className='mt-[30px] text-black' data-aos="fade-up">
        <h4 className='text-orange text-left font-bold mb-1 text-lg'>
        Vision
        </h4>
         <p className='sm:text-lg'>To be a pioneering force in construction innovation, a beacon of academic 
          excellence, and the epitome of project management proficiency.</p>
      </div>

      <div className='mt-[30px] text-black' data-aos="fade-up">
        <h4 className='text-orange text-left font-bold mb-1 text-lg'>
        Our Missions
        </h4>
         <p className='sm:text-lg'> Our mission is to deliver superior building construction services, 
           foster academic growth through rigorous research, and excel in project 
           management by adhering to the highest standards of integrity, quality, 
           and efficiency.
         </p><br />

          <p className='sm:text-lg'>We are dedicated to empowering our clients through expert construction 
            solutions, contributing to the academic world with impactful research, 
            and ensuring project success through meticulous management, all while 
            upholding ethical principles and client-centricity.
          </p><br />

          <p className='sm:text-lg'>At GEO-FOSU LIMITED COMPANY, our mission is to build, research, and manage 
            with a purpose - to create enduring structures, advance knowledge, and 
            execute projects flawlessly, enriching the lives of our clients and
             communities.</p>
       </div> 

       <div className='mt-[30px] text-black'>
         <h4 className='text-orange text-left font-bold mb-1 text-lg' data-aos="fade-up">
          Our Core Values
         </h4>
         {values.map((value, index) => (
           <div key={index} className='my-2' data-aos="fade-up">
             <span className='font-bold mr-2 sm:text-lg'>{value.title}</span>
             <span className='sm:text-lg'>{value.text}</span>
           </div>
         ))}
       </div>

       <div className='mt-[30px] text-black'>
         <h4 className='text-orange text-left font-bold mb-1 text-lg' data-aos="fade-up">
            Our Objectives
         </h4>
         {objectives.map((objective, index) => (
           <div key={index} className='my-3' data-aos="fade-up">
             <p className='font-bold mb-1 sm:text-lg'>{objective.title}</p>
             <p className='sm:text-lg'>{objective.text}</p>
           </div>
         ))}
       </div>
        
      <p  data-aos="fade-up"
        className='my-[30px] sm:text-lg text-black'>
        Thank you for visiting GEO-FOSU LIMITED COMPANY. We invite you to explore our services, 
        share in our commitment to excellence, and join us on our journey to build dreams, 
        nurture knowledge, and manage excellence. We look forward to working with you and 
        enriching the lives of our clients and communities</p>  
  </section>
  )
}

export default AboutText
