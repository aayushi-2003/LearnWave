import React from 'react'
import Logo from './assets/Logo.svg';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className=' navbar-container w-full fixed top-0 left-0 bg-primary-blue lg:h-[120px] md:h-[80px] h-[65px] xl:px-[150px] md:px-[100px] px-[50px] flex items-center justify-between z-10'>
        <div className="logo flex items-center space-x-4">
            <img src={Logo} alt="logo" className='mb-3 lg:h-[30px] md:h-[26px] h-[24px]' />
            <h1 className="xl:text-[28px] text-[24px] text-yellow-300 font-medium hidden lg:block">LearnWave</h1>
        </div>

            <div className='absolute right-12 cursor-pointer md:hidden text-white' onClick={()=>setToggleMenu(!toggleMenu)}>
                {toggleMenu?(<IoMdClose className='h-7 w-7'/>):
                <RxHamburgerMenu className='h-7 w-7 '/>}
            </div>

            <ul className={`md:flex md:items-center md:justify-center md:py-0 py-12 md:pl-10 absolute md:static bg-primary-blue md:z-auto z-[-1] left-0 w-full xl:space-x-6 xl:text-[22px] text-[18px] lg:space-x-3 space-y-4 md:space-y-0 font-medium md:w-auto transition-all duration-500 ease-in ${toggleMenu?'top-10':'top-[-490px]'}`}>
                <li className="text-white text-opacity-95 cursor-pointer md:hover:border-b-yellow-300 md:hover:border-b-[3px] px-2">Explore</li>
                <li className="text-white text-opacity-95 cursor-pointer  md:hover:border-b-yellow-300 md:hover:border-b-[3px] px-2">Courses</li>
                <li className="text-white text-opacity-95 cursor-pointer md:hover:border-b-yellow-300 md:hover:border-b-[3px] px-2">Practice</li>
                <li className="text-white text-opacity-95 cursor-pointer md:hover:border-b-yellow-300 md:hover:border-b-[3px] px-2">Blog</li>
            <button className='btn'>
                <span className='xl:text-[20px] lg:text-[18px]  text-[16px] text-nowrap'>Log In</span>
            </button>
            </ul>

    </div>
  )
}

export default Navbar