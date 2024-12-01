import IconButton from './IconButton';
import React, { useState } from 'react';
import { HiMiniGlobeAmericas } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
function DropdownWithButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <div className="relative inline-block">
      {/* Main Button */}
      <button
        onClick={toggleDropdown}
        
      >
        <IconButton><HiMiniGlobeAmericas className={'text-white mt-[2px] mr-4 text-[20px]'} />London office<RiArrowDropDownLine className={'text-white ml-[7px] text-[24px]'} /></IconButton>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-[10px]  mt-0 w-[192px] pt-2 pb-2 bg-dropdownColor shadow-lg z-10">
          <ul>
            <li className="px-3 py-3 hover:bg-btnColor text-white cursor-pointer font-rubik pl-7">London office</li>
            <li className="px-3 py-3 hover:bg-btnColor text-white cursor-pointer font-rubik pl-7">Madrid office</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownWithButton