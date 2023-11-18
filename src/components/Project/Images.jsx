import { useState } from 'react'
import { data } from './index'
import Popup from './Popup'
import Loader from '../Loader'

const Images = () => {
const [showImage, setShowImage] = useState(false)
const [selectedImageData, setSelectedImageData] = useState(null);


const onImageClick = (item) => {
    setShowImage(true)
    setSelectedImageData(item);
}

 if (!data) return <Loader/>

  return (
    <section className='my-[50px] w-[90%] mx-[5%] sm:w-[94%] sm:mx-[3%] mb-[100px]'>
        <div className='flex gap-3 flex-wrap justify-center items-center lg:justify-start'>
            {data.map((item) => (
               <article key={item.id} onClick={() => onImageClick(item)} data-aos="zoom-in">
                 <img 
                   src={item.image} 
                   alt={`item ${item.id}`}
                    className='w-full sm:w-[120px] cursor-pointer'
                   />              
               </article>      
            ))}
        </div>
     
    <Popup showImage={showImage} setShowImage={setShowImage} selectedImageData={selectedImageData} data={data}/>
    </section>
  )
}

export default Images