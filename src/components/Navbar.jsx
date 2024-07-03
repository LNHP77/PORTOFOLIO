import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
 
  return (
    <nav
    className={'${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}
    >
     <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
       <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Léhann &nbsp;
            <span className='sm:block hidden'> | Portofolio</span>
          </p>
        </Link>

         {/* Menu icon for small screens */}
         <div className="sm:hidden flex items-center">
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)}
          />
        </div>

        
        <ul className="list-none hidden sm:flex 
        flex-row gap-10">
        {navLinks.map((Link) => (
          <li
          key={Link.id}
          className={`text-gray-500 hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(Link.title)}
          >
            <a href={`#${Link.id}`}>{Link.title}</a>
          </li>
              ))}
        </ul>

        {toggle && (
          <ul className="list-none flex flex-col items-center absolute top-20 right-0 mt-2 py-2 px-4 bg-primary sm:hidden z-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-gray-500 hover:text-white text-[18px] font-medium cursor-pointer mb-4`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(false);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </nav>
  )
}

export default Navbar