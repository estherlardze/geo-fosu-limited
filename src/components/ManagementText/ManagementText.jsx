import {data, values, objectives} from '.'

const ConstructionText = () => {
  return (
    <section className='w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] mt-[50px]'>
      <h1 className='text-center text-3xl md:4xl lg:text-5xl text-orange font-bold uppercase'>services</h1>
      <ul className='mt-8'>
        {data.map((item, index) => (
          <li className='block my-4 text-lg' key={index}>
            <span className='font-bold mr-1 text-lg'>{item.title}</span>
            <span className='font-semibold text-black/80'>{item?.text}</span>
          </li>
        ))}
      </ul>

    <div className='mt-[50px] text-black/90 text-lg font-semibold'>
      <h4 className='text-orange text-left font-bold mb-1'>Our Aim</h4>
      <p className='mb-3'><q>To excel in delivering comprehensive construction, research, and project 
        management services while contributing to the betterment of society through sustainable 
        practices and knowledge advancement.</q></p>

      <h4 className='text-orange text-left font-bold mb-1'>Goal</h4>
      <p className='mb-3'> To be a leader in fostering sustainable development through innovative
       construction, cutting-edge academic research, and effective project management, with a commitment
        to achieving excellence in every facet of our services.</p>

      <h4 className='text-orange text-left font-bold mb-1'>Slogan</h4>
      <p className='mb-3'>Building Dreams, Nurturing Knowledge, Managing Excellence.</p>

      <h4 className='text-orange text-left font-bold mb-1'>Vision</h4>
      <p className='mb-3'>To be a pioneering force in construction innovation, a beacon of academic
       excellence, and the epitome of project management proficiency.</p>
     
      <h4 className='text-orange text-left font-bold mb-1'>Our Missions</h4>
       <p> Our mission is to deliver superior building construction services, foster academic growth
         through rigorous research, and excel in project management by adhering to the highest 
        standards of integrity, quality, and efficiency</p> <br />
        <p>We are dedicated to empowering our clients through expert construction solutions, contributing 
         to the academic world with impactful research, and ensuring project success through meticulous
         management, all while upholding ethical principles and client-centricity.</p><br />
         <p>At GEO-FOSU LIMITED COMPANY, our mission is to build, research, and manage with a purpose - to
           create enduring structures, advance knowledge, and execute projects flawlessly, enriching the 
           lives of our clients and communities.</p>
      </div>
      
      <h4 className='text-orange text-left font-bold mb-1 text-lg mt-8'>Our Core values</h4>
      <div className='text-black/90 text-lg font-semibold'>
          {values.map((value, index) => (
            <p key={index} className='my-2'>
              <span className='font-bold mr-2'>{value.title}</span>
              {value.text}
            </p>
          ))}
        </div>

        <div className='text-lg mt-8'>
          <h4 className='text-orange text-left mb-1 font-bold'>Our Objectives</h4>
          <div>
          {objectives.map((objective, index) => (
            <div key={index} className='my-2 font-bold'>
              <p >{objective.title}</p>
               <p className='text-black/90 font-semibold'>{objective.text}</p>
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}

export default ConstructionText
