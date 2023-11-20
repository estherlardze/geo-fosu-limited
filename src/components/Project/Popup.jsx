import { AiOutlineClose, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const Popup = ({ showImage, setShowImage, selectedImageData }) => {

  const handleImage = () => {
    setShowImage(false);
  };

  const preventRightClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {showImage && selectedImageData && (
        <section className='bg-black/95 w-full h-screen fixed left-0 top-0 z-50 flex flex-col justify-center items-center mb-10'>
          <div
            className='flex flex-col-reverse sm:flex-row justify-center items-center sm:items-start w-[92%] mx-[4%] sm:w-full sm:mx-10 gap-10'
            onContextMenu={preventRightClick} 
          >
            <img
              src={selectedImageData.image}
              alt={`item ${selectedImageData.id}`}
              className='w-full sm:w-[80%] h-[330px] sm:h-[70] md:h-[80vh]'
              onContextMenu={preventRightClick}
            />

            <AiOutlineClose
              size={25}
              className='cursor-pointer text-white font-bold'
              onClick={handleImage}
            />
          </div>

        </section>
      )}
    </>
  );
};

export default Popup;
