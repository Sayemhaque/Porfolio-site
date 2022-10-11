import React, { useState } from "react";
import { Link } from 'react-scroll'
const Header = () => {

  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav)

  return (
    <div className="sticky top-0 z-50 w-full py-5 px-8  bg-[#EDf5E1]  bg-opacity-50  ">
      <nav className="flex max-w-[1000px] mx-auto   justify-between items-center">
        <div>
          <h1 className='font-serif text-4xl font-bold'>SaYeM</h1>

        </div>
        {/* menu */}
        <div className="hidden md:flex ">
          <ul className='flex space-x-5 text-[18px] font-bold'>
            <Link to='home' smooth={true} duration={500}>
              <li className='cursor-pointer hover:border-b-4 hover:border-indigo-400 duration-200'>Home</li>
            </Link>
            <Link to='about' smooth={true} duration={500}>
              <li className='cursor-pointer  hover:border-b-4 hover:border-indigo-400'>About Me</li>
            </Link>

            <Link to='skills' smooth={true} duration={500}>
              <li className='cursor-pointer  hover:border-b-4 hover:border-indigo-400'>Skills</li>
            </Link>
            <Link to='works' smooth={true} duration={500}>
              <li className='cursor-pointer  hover:border-b-4 hover:border-indigo-400'>Portfolio</li>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
              <li className='cursor-pointer  hover:border-b-4 hover:border-indigo-400'>Contact</li>
            </Link>

          </ul>
        </div>
        {/* hamburger */}
        <div onClick={handleClick} className="text-zinc-700 text-xl cursor-pointer md:hidden z-10">
          {!showNav ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-times text-white"></i>}
        </div>

        {/* mobile menu */}
        <ul className={!showNav ? "hidden" : 'transition-all duration-200 ease-in-out absolute top-0 left-0 w-full h-screen font-bold text-xl bg-[#203647] text-white flex flex-col justify-center items-center space-y-7 md:hidden'}>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            <li className='cursor-pointer hover:border-b-4 hover:border-indigo-400 duration-200'>Home</li>
          </Link>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            <li className='cursor-pointer  hover:border-b-4 hover:border-indigo-400'>About Me</li>
          </Link>

          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            <li className='cursor-pointer  hover:border-b-4 hover:border-indigo-400'>Skills</li>
          </Link>
          <Link onClick={handleClick} to='works' smooth={true} duration={500}>
            <li className='cursor-pointer  hover:border-b-4 hover:border-indigo-400'>Portfolio</li>
          </Link>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            <li className='cursor-pointer  hover:border-b-4 hover:border-indigo-400'>Contact</li>
          </Link>

        </ul>
      </nav>

    </div>
  );
};

export default Header;
