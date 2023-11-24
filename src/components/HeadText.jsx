import React from 'react'
import {logo} from '../assets/index'
import { useEffect, useState } from 'react'

const HeadText = () => {

  const [changetext, setChangeText] = useState("")
  const [display, setDisplay] = useState("")

  useEffect(() => {
    const currentPage = window.location.pathname;
    if (currentPage === '/about' || currentPage === '/contact') {
      setChangeText('text-white');
      setDisplay("block")
    }
     else {
      setChangeText('text-blue');
      setDisplay("hidden md:block")
    }
  }, [])

  return (
    <article className={`${display}`} data-aos="fade-up">
    <div className={`${changetext} flex gap-3 items-center `}>
      <img src={logo} alt="Geo Fosu logo" className='w-[40px] h-[40px] rounded-full'/>
      <div>
       <h1 className='font-bold'>GEO-FOSU</h1>
       <h4 className='font-semibold text-xs'>Limited Company</h4>
      </div>
    </div>
     <h4 className='uppercase text-[10px] mt-2 font-semibold'>
       Building dreams, nurturing knowledge, <br />managing excellence
      </h4>
   </article>
  )
}

export default HeadText