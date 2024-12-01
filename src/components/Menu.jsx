import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({className}) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <ul className={`ml-[80px] mt-[11px] flex ${className}`}>
        <li><Link to={'/'} className='text-[17px] pr-9 hover:text-white font-bold font-oxygen text-menuColor'>Home</Link></li>
        <li><Link to={'/Services'} className='text-[17px] pr-9 font-bold hover:text-white font-oxygen text-menuColor'>Services</Link></li>
        <li><Link to={'/News'} className='text-[17px] pr-9 font-bold font-oxygen hover:text-white text-menuColor'>News</Link></li>
        {/* <li><Link to={'#'} className='text-[17px] pr-9 font-bold font-oxygen hover:text-white text-menuColor'>Pages</Link></li> */}
        {/* Link with Submenu */}
        <li
          className="relative"
          onMouseEnter={() => setShowSubmenu(true)}
          onMouseLeave={() => setShowSubmenu(false)}
        >
          <a
            href="#"
            className="text-[17px] pr-9 font-bold font-oxygen hover:text-white text-menuColor"
          >
            Pages
          </a>

          {/* Submenu */}
          {showSubmenu && (
            <ul className="absolute top-full left-0 bg-dropdownColor shadow-md rounded-lg p-2 mt-[0px]">
              <li>
                <a
                  href="/About Us"
                  className="block px-4 py-2 font-bold font-oxygen text-[15px] hover:text-white text-menuColor hover:bg-btnColor rounded"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/Gallery"
                  className="block px-4 py-2 font-bold font-oxygen text-[15px] hover:text-white text-menuColor hover:bg-btnColor rounded"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/Our Team"
                  className="block px-4 py-2 font-bold font-oxygen text-[15px] hover:text-white text-menuColor hover:bg-btnColor rounded"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/Vacancies"
                  className="block px-4 py-2 font-bold font-oxygen text-[15px] hover:text-white text-menuColor hover:bg-btnColor rounded"
                >
                  Vacancies
                </a>
              </li>
            </ul>
          )}
        </li>
        <li><Link to={'/Contacts'} className='text-[17px] pr-9 font-bold font-oxygen hover:text-white text-menuColor'>Contacts</Link></li>
        <li><Link to={'/Elements'} className='text-[17px] pr-9 font-bold font-oxygen hover:text-white text-menuColor'>Elements</Link></li>
    </ul>
  )
}

export default Menu