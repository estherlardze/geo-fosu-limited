import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import {PiPhoneCallFill} from 'react-icons/pi'

const Footer = () => {
  return (
    <footer className='mt-[50px] w-[100%] overflow-hidden'>
      <div className='flex flex-col sm:flex-row bg-black/90 text-white py-2 text-sm sm:text-lg items-center justify-center gap-4 sm:gap-8'>
        <div className='flex items-center gap-2'>
         <BsWhatsapp size={24}/>
         <p className='font-bold text-xl'>0544803157</p>
        </div>
        <div className='flex items-center gap-2'>
         <PiPhoneCallFill size={26}/>
         <p className='font-bold text-xl'>0598588294</p>
       </div>
      </div>

      <div className='bg-white items-center font-bold  justify-center py-2 flex flex-col sm:flex-row text-sm sm:text-lg'>
        <span className='text-orange mr-2'>Email:</span>
        <span className='text-sm sm:text-lg text-black/90'>
         Geofosulimitedcompany@gmail.com
        </span>
      </div>
      <div className='bg-orange py-4'>
      </div>
    </footer>
  )
}

export default Footer
