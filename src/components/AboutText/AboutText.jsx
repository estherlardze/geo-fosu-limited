import {about} from '../../assets/index'
import {business, values, objectives} from '.'

const AboutText = () => {
  return (
    <section className='w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] mt-[50px]'>
      <h1 className='text-3xl md:4xl lg:text-5xl font-semibold text-center my-3'>
        Welcome to GEO-FOSU LIMITED COMPANY!
      </h1>

      <div className='grid grid-cols-2 mt-[60px] gap-8 justify-center'>
        <div className='col-span-2 lg:col-span-1'>
          <img src={about} alt="about us" />
        </div>
        <div className='col-span-2 lg:col-span-1'>
        <p className='text-orange text-left font-bold text-lg'>About Us</p>
        <p className='mt-4 text-lg font-semibold lg:leading-[2.0] text-black/80'>
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
              <li className='text-lg my-3 font-semibold' key={index}>
                <span className='text-xl font-bold mr-2 '>{data.title}</span>
                 <span className='text-black/80'>{data.text}</span>
              </li>
            ))}
          </ul>
      </div>

      <div className='mt-[50px] font-semibold text-black/90 text-lg'>
        <h4 className='text-orange text-left font-bold'>Our Aim and Vision</h4>
        <p className='my-3'>
          Our aim is simple yet profound: to excel in delivering comprehensive construction, research,
           and project management services while contributing to the betterment of society through 
           sustainable practices and knowledge advancement
        </p>
        <p>
          Our vision drives us forward, aspiring to be a pioneering force in construction innovation,
           a beacon of academic excellence, and the epitome of project management proficiency.
          </p>
      </div>

      <div className='mt-[50px] text-black/90 text-lg font-semibold'>
        <h4 className='text-orange text-left font-bold mb-3'>Our Missions and Core Values</h4>
        <p>Our missions are the foundation of our work. We are dedicated to delivering superior 
          building construction services, fostering academic growth through rigorous research, 
          and excelling in project management while upholding the highest standards of integrity,
           quality, and efficiency.</p>
      </div>

      <div className='mt-[50px] text-black/90 text-lg font-semibold'>
        <h4 className='text-orange text-left font-bold mb-3'>
          Our core values are ingrained in everything we do:
        </h4>
        <div>
          {values.map((value, index) => (
            <p key={index} className='my-2'>
              <span className='font-bold mr-2'>{value.title}</span>
              {value.text}
            </p>
          ))}
        </div>
      </div>

      <div className='mt-[50px] text-black/90 text-lg font-semibold'>
        <h4 className='text-orange text-left font-bold mb-3'>Our Objectives:</h4>
        <p className='text-xl sm:text-2xl font-bold'>We align our objectives with Sustainable Development Goals (SDGs):</p>
        <div>
          {objectives.map((objective, index) => (
            <p key={index} className='my-2'>
              <span className='font-bold mr-2'>{objective.title}</span>
              {objective.text}
            </p>
          ))}
        </div>
        <p className='mt-8'>Thank you for visiting GEO-FOSU LIMITED COMPANY. We invite you to explore our services, share in our commitment 
          to excellence, and join us on our journey to build dreams, nurture knowledge, and manage excellence. 
          We look forward to working with you and enriching the lives of our clients and communities.</p>
      </div>
  </section>
  )
}

export default AboutText
