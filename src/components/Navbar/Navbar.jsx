import React, { useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [listBg, setListBg] = useState("")

  useEffect(() => {
    const currentPage = window.location.pathname;

    if (currentPage === '/projects/research-consult/ai-device' 
         || currentPage === '/projects/research-consult/project-management') {
      setListBg('bg-tranparent');
    } 
    else
    {
      setListBg('bg-orange');
    }
    
  }, []);

  const handleMenuClick = () => {
    setMenu(prev => !prev)
  }

  return (
   <nav>
    <div className='p-4 sm:p-8 flex justify-end'>
      <ul className='hidden md:flex text-white font-bold uppercase gap-6 justify-end '>
       <Link to='/'>
         <li className={`${listBg} py-[2px] px-4 cursor-pointer hover:bg-transparent transition-all ease-in duration-300`}> Home </li>
        </Link>
        <Link to='/about'>
         <li className={`${listBg} py-[2px] px-4 cursor-pointer hover:bg-transparent transition-all ease-in duration-300`}>About</li>
        </Link>
        <Link to='/projects'>
         <li className={`${listBg} py-[2px] px-4 cursor-pointer hover:bg-transparent transition-all ease-in duration-300`}> Projects</li>
         </Link> 
         <Link to='/contact'>
          <li className={`${listBg} py-[2px] px-4 cursor-pointer hover:bg-transparent transition-all ease-in duration-300`}>Contact </li>
        </Link>
      </ul>   
      <div onClick={handleMenuClick} className='text-white block md:hidden'>
        {menu ? <AiOutlineClose size={27}/> : <AiOutlineMenu size={27}/>}
      </div>
    </div>

    {
      menu && (
       <ul className='gap-6 justify-start flex flex-col md:hidden bg-white z-20 h-[100vh] w-[70%] sm:w-[50%] fixed left-0 top-0 py-4 transition-transform duration-300 ease-in-out'>
         <Link to='/'>
          <li className='py-[2px] px-4 cursor-pointer hover:bg-orange transition-all ease-in duration-300 text-lg font-semibold'>Home</li>
         </Link>
         <Link to='/about'>
          <li className='py-[2px] px-4 cursor-pointer hover:bg-orange transition-all ease-in duration-300 text-lg font-semibold'>About</li>
          </Link>
          <Link to='/projects'>
           <li className='py-[2px] px-4 cursor-pointer hover:bg-orange transition-all ease-in duration-300 text-lg font-semibold'>Projects</li>
          </Link>
          <Link to='/contact'>
            <li className='py-[2px] px-4 cursor-pointer hover:bg-orange transition-all ease-in duration-300 text-lg font-semibold'>Contact</li>
           </Link>
        </ul> 
       )
    }
  </nav>
  )
}

export default Navbar
