import { researchFour } from '../components/ResearchConsult'
import ResearchHero from '../components/ResearchConsult/ResearchHero'
import { Footer } from '../components'


const ResearchTopicFour = () => {

  return (
    <div>
      <ResearchHero title={researchFour.title}/>
       <section className='bg-blue text-white '>
         <div className='mx-[5%] w-[90%] lg:mx-[3%] lg:w-[94%] sm:text-lg  pt-4'>
           <h1 className='font-bold uppercase text-lg sm:text-2xl pb-3'>Abstract</h1>
          <ul>
            {researchFour.abstract.map((abstract, index) => (
            <li key={index} className='my-3' data-aos="fade-up">{abstract}</li>
            ))}
          </ul>
          <p className='pb-10' data-aos="fade-up">
           <span className='font-bold mr-1'>{researchFour.keywords}</span>
           <span>{researchFour.content}</span>
         </p>
         </div>
       </section>
       <Footer/>
    </div>
  )
}

export default ResearchTopicFour
