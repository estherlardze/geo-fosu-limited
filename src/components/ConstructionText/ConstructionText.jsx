import {data} from '.'

const ConstructionText = () => {
  return (
    <section className='w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] mt-[50px]'>
      <h1 className='text-center text-3xl md:4xl lg:text-5xl text-orange font-bold uppercase'>services</h1>
      <ul className='mt-8'>
        {data.map((item, index) => (
          <li className='block my-4 text-lg' key={index}>
            <span className='font-bold mr-1 text-xl'>{item.title}</span>
            <span className='font-semibold text-black/80'>{item?.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ConstructionText
