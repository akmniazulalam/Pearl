import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Flex from './Flex'
import { Link } from 'react-router-dom';
const ReusableDiv = ({ imageSrc, heading, paragraph}) => {
    return (
        <div className='pr-0' style={{ margin: 0, padding: 0 }}>
            <div className="image-protector">
                <img src={imageSrc} alt={heading} className="w-[268px] h-[160px]" />
            </div>
            <h2 className="font-oxygen font-bold hover:text-btnColor text-[18px] pt-[32px] text-dropdownColor">{heading}</h2>
            <p className="font-rubik mb-9 text-[14px] leading-6 text-servicePColor font-[400] pt-[12px] w-[264px]">{paragraph}</p>
            <Flex className={'group relative mt-[60px]'}>
                <Link to={'#'} className='text-[15px] text-[#b2b2b2] group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-rubik '>Read More </Link>
                <MdOutlineArrowRightAlt className='pt-[0px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
            </Flex>
        </div>
    );
};

export default ReusableDiv;