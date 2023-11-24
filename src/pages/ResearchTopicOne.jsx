import { researchOne } from '../components/ResearchConsult'
import ResearchHero from '../components/ResearchConsult/ResearchHero'
import { Footer } from '../components'


const ResearchTopicOne = () => {
  console.log(researchOne.title)
  return (
    <div>
      <ResearchHero/>
       <section className='bg-blue text-white '>
         <div className='mx-[5%] w-[90%] lg:mx-[3%] lg:w-[94%] sm:text-lg'>
          <h1 className='font-bold text-lg sm:text-2xl py-5'>{researchOne.title}</h1>
           <h1 className='font-bold uppercase text-lg sm:text-2xl pb-3'>Abstract</h1>
          <ul>
            {researchOne.abstract.map((abstract, index) => (
            <li key={index} className='my-3' data-aos="fade-up">{abstract}</li>
            ))}
          </ul>
          <p className='pb-10' data-aos="fade-up">
           <span className='font-bold mr-1'>{researchOne.keywords}</span>
           <span>{researchOne.content}</span>
         </p>
         </div>
       </section>
       <Footer/>
    </div>
  )
}

export default ResearchTopicOne
