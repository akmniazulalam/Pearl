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
          <Link
            to={"#"}
            className="text-[17px] pr-9 font-bold font-oxygen hover:text-white text-menuColor"
          >
            Pages
          </Link>

          {/* Submenu */}
          {showSubmenu && (
            <ul className="absolute top-full left-0 bg-dropdownColor shadow-md rounded-lg p-2 mt-[0px]">
              <li>
                <Link
                  to={"/About Us"}
                  className="block px-4 py-2 font-bold font-oxygen text-[15px] hover:text-white text-menuColor hover:bg-btnColor rounded"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/Gallery"}
                  className="block px-4 py-2 font-bold font-oxygen text-[15px] hover:text-white text-menuColor hover:bg-btnColor rounded"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to={"/Our Team"}
                  className="block px-4 py-2 font-bold font-oxygen text-[15px] hover:text-white text-menuColor hover:bg-btnColor rounded"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to={"/Vacancies"}
                  className="block px-4 py-2 font-bold font-oxygen text-[15px] hover:text-white text-menuColor hover:bg-btnColor rounded"
                >
                  Vacancies
                </Link>
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