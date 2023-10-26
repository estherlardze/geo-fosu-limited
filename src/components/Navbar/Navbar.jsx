import React, { useState, useEffect } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [changeBg, setChangeBg] = useState("bg-orange")

  useEffect(() => {
    const currentPage = window.location.pathname;
    if (currentPage === '/projects') {
       setChangeBg('bg-transparent');
    } 
    else {
      setChangeBg('bg-orange');
    }
  }, []);

  const handleMenuClick = () => {
    setMenu(prev => !prev)
  }

  return (
   <nav>
    <div className='p-4 sm:p-8 flex justify-end'>
      <ul className='hidden sm:flex text-white font-bold uppercase gap-6 justify-end '>
        <li className={`${changeBg} py-[2px] px-4 cursor-pointer hover:bg-transparent transition-all ease-in duration-300`}>
         <Link to='/'>Home</Link>
        </li>
        <li className={`${changeBg} py-[2px] px-4 cursor-pointer hover:bg-transparent transition-all ease-in duration-300`}>
        <Link to='/about'>About</Link>
        </li>
        <li className={`${changeBg} py-[2px] px-4 cursor-pointer hover:bg-transparent transition-all ease-in duration-300`}>
        <Link to='/projects'>Projects</Link>
        </li>
        <li className={`${changeBg} py-[2px] px-4 cursor-pointer hover:bg-transparent transition-all ease-in duration-300`}>
        <Link to='/contact'>Contact</Link>
        </li>
      </ul>   
      <div onClick={handleMenuClick} className='text-white block sm:hidden'>
        {menu ? <AiOutlineClose size={27}/> : <AiOutlineMenu size={27}/>}
      </div>
    </div>

    {
      menu && (
        <ul className='gap-6 justify-start flex flex-col sm:hidden bg-white z-20 h-[100vh] w-[50%] fixed left-0 top-0 py-4 transition-transform duration-300 ease-in-out'>
        <li className='py-[2px] px-4 cursor-pointer hover:bg-orange transition-all ease-in duration-300 text-lg font-semibold'>
         <Link to='/'>Home</Link>
        </li>
        <li className='py-[2px] px-4 cursor-pointer hover:bg-orange transition-all ease-in duration-300 text-lg font-semibold'>
         <Link to='/about'>About</Link>
        </li>
        <li className='py-[2px] px-4 cursor-pointer hover:bg-orange transition-all ease-in duration-300 text-lg font-semibold'>
         <Link to='/projects'>Projects</Link>
        </li>
        <li className='py-[2px] px-4 cursor-pointer hover:bg-orange transition-all ease-in duration-300 text-lg font-semibold'>
         <Link to='/contact'>Contact</Link>
        </li>
      </ul> 
       )
    }
  </nav>
  )
}

export default Navbar
