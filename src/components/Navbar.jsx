import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='md:bg-white md:rounded-md md:navbar-container md:shadow-md'>
    <div className='flex rounded-t-md md:flex w-full justify-between  items-center h-20 px-4 absolute  '>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>Aloha</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Surfing</li>
        <li>Hula</li>
        <li>Volcanos</li>
      </ul>
      <div className='hidden md:flex'>
      <button className='my-6 backdrop:to-blue-500'>Book a Trip</button>
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          
          <li className='border-b'>Home</li>
          <li className='border-b'>Surfing</li>
          <li className='border-b'>Hula</li>
          <li className='border-b'>Volcano</li>
          
          <div className='flex flex-col'>
            <button className='my-6 backdrop:to-blue-500'>Book a Trip</button>
           
          </div>
          
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
