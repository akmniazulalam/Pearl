import React, { useState, useEffect } from 'react';
window.scrollTo({ top: 0, behavior: 'smooth' });

import 'react-18-image-lightbox/style.css'; // Default lightbox styles
import 'lightgallery/css/lightgallery.css'; // Styles
import Heading from './Heading'
import Container from './Container'
import Paragraph from './Paragraph'
import Header from './Header'
import { Link } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { PiClockBold } from "react-icons/pi";
import { FaGooglePlus } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { ImVk } from "react-icons/im";
import { GrGooglePlus } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { IoLogoVk } from "react-icons/io5";
import { FaSkype } from "react-icons/fa";
import Mobile from '../assets/Mobile.png'
import Email from '../assets/Email.png'
import Fax from '../assets/FAX.png'
import { FaArrowRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import DropdownWithButton from './DropdownWithButton'
import Navbar from './Navbar'
import Logo from './Logo'
import logo from '../assets/logo-transportation-text@2x.png'
import Flex from './Flex'
import Menu from './Menu'
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import Home from './Home'
import LAptop from '../assets/6-252x158.jpg'
import Car from '../assets/Fotolia_50072102_Subscription_Monthly_M-252x158.jpg'
import ForkLiFt from '../assets/Fotolia_49123103_Subscription_Monthly_XL-252x158.jpg'
import CARS from '../assets/Fotolia_46046458_Subscription_Monthly_M-252x158.jpg'
import WIndow from '../assets/7-252x158.jpg'
import 'react-responsive-modal/styles.css'; // Import styles
window.global = window;
import bIgTruck from '../assets/Fotolia_91953311_Subscription_Monthly_M.jpg'
import CarsPlace from '../assets/Fotolia_54040023_Subscription_Monthly_M-77x77 (1).jpg'
import CarsPlaceBig from '../assets/Fotolia_54040023_Subscription_Monthly_M (1).jpg'
import CarsTrawlee from '../assets/Fotolia_54040023_Subscription_Monthly_M-252x158.jpg'
import CaRS from '../assets/Fotolia_54040023_Subscription_Monthly_M.jpg'
import PeopLe from '../assets/Layer-713-252x158.jpg'
import AirWindow from '../assets/6-85x85.jpg'
import AirLap from '../assets/7-85x85.jpg'
import TRuck from '../assets/Fotolia_91953311_Subscription_Monthly_M-252x158.jpg'
import SearchInput from './SearchInput'
import Download from '../assets/Download.png'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import SingleImageViewer from './SingleImageViewer';
import SecondImage from './SecondImage';
import ThirdImage from './ThirdImage';
import FourImage from './FourImage';
import FiveImage from './FiveImage';
const News = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };
    return (
        <>
            <div className="banner bg-BgImgTwo bg-no-repeat  bg-cover py-[150px] position: relative">
                <div className='overlay'>
                    <div className={"bg-headerColor h-[50px] w-full position: absolute top-0"}>
                        <Container>
                            <Header>
                                <Paragraph ptext={'English'} className={"text-white text-[13px] pt-[15px] font-rubik"}></Paragraph>
                                <MdPhoneIphone className={'text-iconColor ml-[165px] mt-[17px]'} />
                                <Link to={'tel:+1376-226-3126'} className={"text-white text-[13px] pt-[15px] font-rubik pl-[5px] pr-[15px]"}>Call Free: +1376-226-3126</Link>
                                <HiOutlineMail className={"mt-[17px] ml-[10px] text-iconColor"} />
                                <Link to={'mailto:info@transportation.com'} className={"text-white text-[13px] pt-[15px] font-rubik pl-[8px] pr-[15px]"}>info@transportation.com</Link>
                                <PiClockBold className={'text-iconColor ml-[10px] mt-[17px]'} />
                                <Paragraph ptext={'Mon — Sat: 9AM — 6PM'} className={"text-white text-[13px] pt-[15px] font-rubik pl-[8px] pr-[40px]"}></Paragraph>
                                <DropdownWithButton className={'ml-9'} />
                            </Header>
                            <Navbar className={'mt-[30px]'}>
                                <Flex>
                                    <Logo src={logo} alt={logo} className={'h-[45px]'} />
                                    <Menu />
                                    <Link to={'facebook.com'}><FaFacebookF className='text-socialIconColor hover:text-white mt-3 text-[19px] mr-4 ml-9' /></Link>
                                    <Link to={'twitter.com'}><ImTwitter className='text-socialIconColor hover:text-white mt-3 text-[19px] mr-4' /></Link>
                                    <Link to={'linkedin.com'}><FaLinkedinIn className='text-socialIconColor hover:text-white mt-3 text-[19px]' /></Link>
                                </Flex>
                            </Navbar>
                            <hr className='w-[1010px] mt-5 border-socialIconColor' />
                            <Heading h2Text={'NEWS'} h2Class={'text-white font-oxygen text-[42px] font-bold mt-9'} />
                        </Container>
                    </div>
                </div>
            </div>

            <Container>
                <Flex className={'mt-7 ml-3 mb-3'}>
                    <Link to="/" className='text-[11px] font-rubik text-[#002040] pr-1 uppercase'>Home </Link>
                    <Paragraph ptext={'  / News'} className={'uppercase text-[11px] font-rubik text-[#888888]'} />
                </Flex>
                <hr />
                <div className="news mt-16">
                    <div className="threeArticles grid grid-cols-4 gap-7">
                        <div className="firstArticle hover:shadow-xl transition-shadow duration-300 position: relative">
                            <img src={LAptop} alt={LAptop} />
                            <div className="date bg-btnColor py-[10px] px-[20px] position: absolute top-0 left-0">
                                <Heading h5Text={'26'} h5Class={'font-rubik font-bold text-white text-[24px] leading-[26px]'} />
                                <Paragraph ptext={'Nov'} className={'font-rubik text-[14px] text-white pl-[2px] pt-0'} />
                            </div>
                            <div className="textItems px-5 pt-4 pb-9 border">
                                <Heading h3Text={'Face the challenges of chain complexity'} h3Class={'font-oxygen font-bold text-[18px] leading-[26px] text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'Established in 2005, the group has grown to over 30 people and has completed 900 projects'} className={'font-rubik text-[14px] leading-[26px] text-dropdownColor mt-3'} />
                                <Flex className={'group relative mt-[30px]'}>
                                    <Link to={'#'} className='text-[16px] text-dropdownColor group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-oxygen font-bold'>View more </Link>
                                    <MdOutlineArrowRightAlt className='pt-[4px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
                                </Flex>
                            </div>
                        </div>
                        <div className="secondArticle hover:shadow-xl transition-shadow duration-300 position: relative">
                            <img src={WIndow} alt={WIndow} />
                            <div className="date bg-btnColor py-[10px] px-[20px] position: absolute top-0 left-0">
                                <Heading h5Text={'24'} h5Class={'font-rubik font-bold text-white text-[24px] leading-[26px]'} />
                                <Paragraph ptext={'Nov'} className={'font-rubik text-[14px] text-white pl-[2px] pt-0'} />
                            </div>
                            <div className="textItems px-5 pt-4 pb-9 border">
                                <Heading h3Text={'We join the environmental organization CCWG'} h3Class={'font-oxygen font-bold text-[18px] leading-[26px] text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'Global leaders in marine container transport, create and use practical tools'} className={'font-rubik text-[14px] leading-[26px] text-dropdownColor mt-3'} />
                                <Flex className={'group relative mt-[30px]'}>
                                    <Link to={'#'} className='text-[16px] text-dropdownColor group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-oxygen font-bold'>View more </Link>
                                    <MdOutlineArrowRightAlt className='pt-[4px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
                                </Flex>
                            </div>
                        </div>
                        <div className="thirdArticle hover:shadow-xl transition-shadow duration-300 position: relative">
                            <img src={CarsTrawlee} alt={CarsTrawlee} />
                            <div className="date bg-btnColor py-[10px] px-[20px] position: absolute top-0 left-0">
                                <Heading h5Text={'23'} h5Class={'font-rubik font-bold text-white text-[24px] leading-[26px]'} />
                                <Paragraph ptext={'Nov'} className={'font-rubik text-[14px] text-white pl-[2px] pt-0'} />
                            </div>
                            <div className="textItems px-5 pt-4 pb-9 border">
                                <Heading h3Text={'Tianjin Port Came to a Halt after Explosions'} h3Class={'font-oxygen font-bold text-[18px] leading-[26px] text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'The explosion at Binhai Ocean Port in Tianjin caused severe damage to many warehouses'} className={'font-rubik text-[14px] leading-[26px] w-[190px] text-dropdownColor mt-3'} />
                                <Flex className={'group relative mt-[30px]'}>
                                    <Link to={'#'} className='text-[16px] text-dropdownColor group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-oxygen font-bold'>View more </Link>
                                    <MdOutlineArrowRightAlt className='pt-[4px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
                                </Flex>
                            </div>
                        </div>
                        <div className="searchCatagories">
                            <SearchInput />
                            <div className="catagories border border-[3px] mt-9 border-btnColor pt-[40px] pl-[25px] pb-[30px]">
                                <div className="border-t-[6px] max-w-[50px] border-borderColor">
                                    <Heading h2Text="Catagories" h2Class={'text-dropdownColor font-oxygen mt-3 font-bold text-[24px]'} />
                                </div>
                                <ul className='mt-3'>
                                    <Flex className={'group'}>
                                        <MdKeyboardArrowRight className='text-dropdownColor group-hover:text-btnColor mt-[5px]' />
                                        <li className='mb-3  ml-2'><Link to={'#'} className='font-rubik text-[14px] group-hover:text-btnColor transition-all text-dropdownColor'>Air Freight</Link></li>
                                    </Flex>
                                    <Flex className={'group'}>
                                        <MdKeyboardArrowRight className='text-dropdownColor group-hover:text-btnColor mt-[5px]' />
                                        <li className='mb-3  ml-2'><Link to={'#'} className='font-rubik text-[14px] group-hover:text-btnColor transition-all text-dropdownColor'>Contract Logistics</Link></li>
                                    </Flex>
                                    <Flex className={'group'}>
                                        <MdKeyboardArrowRight className='text-dropdownColor group-hover:text-btnColor mt-[5px]' />
                                        <li className='mb-3  ml-2'><Link to={'#'} className='font-rubik text-[14px] group-hover:text-btnColor transition-all text-dropdownColor'>Ground Freight</Link></li>
                                    </Flex>
                                    <Flex className={'group'}>
                                        <MdKeyboardArrowRight className='text-dropdownColor group-hover:text-btnColor mt-[5px]' />
                                        <li className='mb-3  ml-2'><Link to={'#'} className='font-rubik text-[14px] group-hover:text-btnColor transition-all text-dropdownColor'>Ocean Freight</Link></li>
                                    </Flex>
                                    <Flex className={'group'}>
                                        <MdKeyboardArrowRight className='text-dropdownColor group-hover:text-btnColor mt-[5px]' />
                                        <li className='mb-3  ml-2'><Link to={'#'} className='font-rubik text-[14px] group-hover:text-btnColor transition-all text-dropdownColor'>SCS Management</Link></li>
                                    </Flex>
                                    <Flex className={'group'}>
                                        <MdKeyboardArrowRight className='text-dropdownColor group-hover:text-btnColor mt-[5px]' />
                                        <li className='ml-2'><Link to={'#'} className='font-rubik text-[14px] group-hover:text-btnColor transition-all text-dropdownColor'>Special Offers</Link></li>
                                    </Flex>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="threeArticles grid grid-cols-4 gap-7 mt-7">
                        <div className="firstArticle hover:shadow-xl transition-shadow duration-300 position: relative">
                            <img src={Car} alt={Car} />
                            <div className="date bg-btnColor py-[10px] px-[20px] position: absolute top-0 left-0">
                                <Heading h5Text={'21'} h5Class={'font-rubik font-bold text-white text-[24px] leading-[26px]'} />
                                <Paragraph ptext={'Nov'} className={'font-rubik text-[14px] text-white pl-[2px] pt-0'} />
                            </div>
                            <div className="textItems px-5 pt-4 pb-9 border">
                                <Heading h3Text={'Modeling, optimization and simulation rounds'} h3Class={'font-oxygen font-bold text-[18px] leading-[26px] text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'World-class modeling, optimization and simulation rounds out the portfolio'} className={'font-rubik text-[14px] leading-[26px] text-dropdownColor mt-3'} />
                                <Flex className={'group relative mt-[30px]'}>
                                    <Link to={'#'} className='text-[16px] text-dropdownColor group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-oxygen font-bold'>View more </Link>
                                    <MdOutlineArrowRightAlt className='pt-[4px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
                                </Flex>
                            </div>
                        </div>
                        <div className="secondArticle hover:shadow-xl transition-shadow duration-300 position: relative">
                            <img src={ForkLiFt} alt={ForkLiFt} />
                            <div className="date bg-btnColor py-[10px] px-[20px] position: absolute top-0 left-0">
                                <Heading h5Text={'16'} h5Class={'font-rubik font-bold text-white text-[24px] leading-[26px]'} />
                                <Paragraph ptext={'Nov'} className={'font-rubik text-[14px] text-white pl-[2px] pt-0'} />
                            </div>
                            <div className="textItems px-5 pt-4 pb-9 border">
                                <Heading h3Text={'Your short and long range business goals'} h3Class={'font-oxygen font-bold text-[18px] leading-[26px] text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'In addition to the human capital on the Network Solutions team, domain experts from all areas'} className={'font-rubik text-[14px] leading-[26px] text-dropdownColor mt-3'} />
                                <Flex className={'group relative mt-[30px]'}>
                                    <Link to={'#'} className='text-[16px] text-dropdownColor group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-oxygen font-bold'>View more </Link>
                                    <MdOutlineArrowRightAlt className='pt-[4px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
                                </Flex>
                            </div>
                        </div>
                        <div className="thirdArticle hover:shadow-xl transition-shadow duration-300 position: relative">
                            <img src={CARS} alt={CARS} />
                            <div className="date bg-btnColor py-[10px] px-[20px] position: absolute top-0 left-0">
                                <Heading h5Text={'15'} h5Class={'font-rubik font-bold text-white text-[24px] leading-[26px]'} />
                                <Paragraph ptext={'Nov'} className={'font-rubik text-[14px] text-white pl-[2px] pt-0'} />
                            </div>
                            <div className="textItems px-5 pt-4 pb-9 border">
                                <Heading h3Text={'For European sustainable development week'} h3Class={'font-oxygen font-bold text-[18px] leading-[26px] text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'Making an active contribution to the French organization’s efforts to provide meals'} className={'font-rubik text-[14px] leading-[26px]  text-dropdownColor mt-3'} />
                                <Flex className={'group relative mt-[30px]'}>
                                    <Link to={'#'} className='text-[16px] text-dropdownColor group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-oxygen font-bold'>View more </Link>
                                    <MdOutlineArrowRightAlt className='pt-[4px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
                                </Flex>
                            </div>
                        </div>
                        <div className="recentPosts mt-7">
                            <div className="border-t-[6px] max-w-[50px] border-borderColor">
                                <Heading h2Text="Recent posts" h2Class={'text-dropdownColor w-[150px] font-oxygen mt-3 font-bold text-[24px]'} />
                            </div>
                            <Flex>
                                <img src={AirWindow} alt={AirWindow} className='mt-5' />
                                <div>
                                    <Heading h6Text={'Face the challenges of chain complexity'} h6Class={'font-oxygen font-bold text-[14px] leading-[20px] hover:text-btnColor ml-3 mt-6 text-dropdownColor'} />
                                    <Paragraph ptext={'November 26, 2015'} className={'font-rubik text-[12px] text-[#BFBFBF] ml-3 mt-2'} />
                                </div>
                            </Flex>
                            <hr className='mt-5' />
                            <Flex>
                                <img src={AirLap} alt={AirLap} className='mt-5 mb-20' />
                                <div>
                                    <Heading h6Text={'We join the environmental organization CCWG'} h6Class={'font-oxygen font-bold text-[14px] leading-[20px] hover:text-btnColor ml-3 mt-5 text-dropdownColor'} />
                                    <Paragraph ptext={'November 24, 2015'} className={'font-rubik text-[12px] text-[#BFBFBF] ml-3 mt-2'} />
                                </div>
                            </Flex>
                            <Link to={'#'} className='font-oxygen font-bold text-[16px] text-dropdownColor hover:text-[#303540] hover:bg-btnColor pt-4 pb-3 pl-3 pr-7 border border-[2px] border-btnColor'><div className="inline-flex"><img src={Download} alt={Download} className='h-[18px] w-[19px] mt-[2px] mr-5' />Download Brochure</div></Link>
                        </div>
                    </div>


                    <div className="threeArticles grid grid-cols-4 gap-7 mt-7">
                        <div className="firstArticle hover:shadow-xl transition-shadow duration-300 position: relative">
                            <img src={CaRS} alt={CaRS} />
                            <div className="date bg-btnColor py-[10px] px-[20px] position: absolute top-0 left-0">
                                <Heading h5Text={'12'} h5Class={'font-rubik font-bold text-white text-[24px] leading-[26px]'} />
                                <Paragraph ptext={'Nov'} className={'font-rubik text-[14px] text-white pl-[2px] pt-0'} />
                            </div>
                            <div className="textItems px-5 pt-4 pb-9 border">
                                <Heading h3Text={'Customers rely on us to help them'} h3Class={'font-oxygen font-bold text-[18px] leading-[26px] text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'The team coordinated the transport of a terminal built by Van Aalst Bulk Handling and team knows the drill.'} className={'font-rubik text-[14px] leading-[26px] text-dropdownColor mt-3'} />
                                <Flex className={'group relative mt-[30px]'}>
                                    <Link to={'#'} className='text-[16px] text-dropdownColor group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-oxygen font-bold'>View more </Link>
                                    <MdOutlineArrowRightAlt className='pt-[4px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
                                </Flex>
                            </div>
                        </div>
                        <div className="secondArticle hover:shadow-xl transition-shadow duration-300 position: relative">
                            <img src={PeopLe} alt={PeopLe} />
                            <div className="date bg-btnColor py-[10px] px-[20px] position: absolute top-0 left-0">
                                <Heading h5Text={'08'} h5Class={'font-rubik font-bold text-white text-[24px] leading-[26px]'} />
                                <Paragraph ptext={'Nov'} className={'font-rubik text-[14px] text-white pl-[2px] pt-0'} />
                            </div>
                            <div className="textItems px-5 pt-4 pb-9 border">
                                <Heading h3Text={'Diagnostic process, followed by innovation'} h3Class={'font-oxygen font-bold text-[18px] leading-[26px] text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'We begin with an effective diagnostic process, followed by innovation.'} className={'font-rubik text-[14px] leading-[26px] text-dropdownColor mt-3'} />
                                <Flex className={'group relative mt-[30px]'}>
                                    <Link to={'#'} className='text-[16px] text-dropdownColor group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-oxygen font-bold'>View more </Link>
                                    <MdOutlineArrowRightAlt className='pt-[4px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
                                </Flex>
                            </div>
                        </div>
                        <div className="thirdArticle hover:shadow-xl transition-shadow duration-300 position: relative">
                            <img src={TRuck} alt={TRuck} />
                            <div className="date bg-btnColor py-[10px] px-[20px] position: absolute top-0 left-0">
                                <Heading h5Text={'14'} h5Class={'font-rubik font-bold text-white text-[24px] leading-[26px]'} />
                                <Paragraph ptext={'Nov'} className={'font-rubik text-[14px] text-white pl-[2px] pt-0'} />
                            </div>
                            <div className="textItems px-5 pt-4 pb-9 border">
                                <Heading h3Text={'Our goal is to make objective & clever decisions'} h3Class={'font-oxygen font-bold text-[18px] leading-[26px] text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'See what our goal is to enable you to make objective decisions that balance cost'} className={'font-rubik w-[190px] text-[14px] leading-[26px] text-dropdownColor mt-3'} />
                                <Flex className={'group relative mt-[30px]'}>
                                    <Link to={'#'} className='text-[16px] text-dropdownColor group-hover:translate-x-[35px] group-hover:text-btnColor duration-300 font-oxygen font-bold'>View more </Link>
                                    <MdOutlineArrowRightAlt className='pt-[4px] ml-[6px] group-hover:absolute  duration-300 text-btnColor text-[23px]' />
                                </Flex>
                            </div>
                        </div>

                        <div className="btnGallery">
                            <div className="askBtn mt-3 mb-16">
                                <Link to={'#'} className='font-oxygen font-bold text-[16px] text-dropdownColor hover:text-[#303540] hover:bg-btnColor pt-[17px] pb-3 pl-3 pr-[46px] border border-[2px] border-btnColor'><div className="inline-flex"><FaSkype className='h-[19px] w-[19px] mt-[2px] mr-9' />Ask our experts</div></Link>
                            </div>
                            <div className="border-t-[6px] max-w-[50px] border-borderColor">
                                <Heading h2Text="Our gallery" h2Class={'text-dropdownColor font-oxygen mt-3 w-[250px] font-bold text-[24px]'} />
                            </div>
                            <div className="grid grid-cols-3 mt-5 w-[270px]">

                                <SingleImageViewer />
                                <SecondImage />
                                <ThirdImage />
                            </div>
                            <div className="grid grid-cols-3 mt-4 w-[270px]">
                                <FourImage/>
                                <FiveImage/>
                                <div className="relative group w-[86%] cursor-pointer">
                                    <img
                                        src={CarsPlace}
                                        alt="Sample"
                                        className=" object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                        onClick={toggleFullScreen}
                                    >
                                    </div>
                                    {isFullScreen && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
                                            <img
                                                src={CarsPlaceBig}
                                                alt="Fullscreen"
                                            />
                                            <button
                                                onClick={toggleFullScreen}
                                                className="absolute top-4 right-4 text-white text-lg"
                                            >
                                                Close
                                            </button>
                                            <a
                                                href={CarsPlaceBig}
                                                download
                                                className="absolute top-[22px] right-[80px] text-white text-lg"
                                            >
                                                <HiDownload />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Flex className={'mt-7 mb-3'}>
                    <div className="one border border-[#ccc] border-[2px] py-3 px-5"><p className='font-oxygen text-[14px] text-dropdownColor'>1</p></div>
                    <Link to={'/Page2'} className='font-oxygen text-[14px] text-dropdownColor border border-btnColor ml-2 hover:bg-btnColor hover:text-white border-[2px] py-3 px-5'>2</Link>
                    <Link to={'/Page2'} className='font-rubik text-[14px] text-dropdownColor border border-btnColor ml-2 hover:bg-btnColor hover:text-white border-[2px] py-3 px-5'><Flex>NEXT <FaArrowRight className='ml-2 mt-[4px]' /></Flex></Link>
                </Flex>
            </Container>

            <div className="footer bg-dropdownColor pt-[67px] pb-[10px] leading-[0px]">
                <Container>
                    <Flex>
                        <div className="leftItems">
                            <Logo src={logo} alt={logo} className={'h-[40px]'} />
                            <Paragraph className={'pt-[30px] font-rubik text-[14px] text-footerTextColor w-[255px] leading-[26px]'} ptext={`We always strive for growth and development as StylemixThemes. We don't want to have a large team, we want to have a team that works in unity. Our slogan is "Every day is the last day".`} />
                            <div className="socialIcons flex mt-9 mb-[80px]">
                                <FaFacebookF className='text-footerTextColor hover:text-white text-[20px] mr-5' />
                                <FaTwitter className='text-footerTextColor hover:text-white text-[20px] mr-5' />
                                <GrGooglePlus className='text-footerTextColor hover:text-white text-[25px] mr-5' />
                                <IoLogoVk className='text-footerTextColor hover:text-white text-[24px] mr-5' />
                                <FaInstagram className='text-footerTextColor hover:text-white text-[20px] mr-5' />
                                <FaLinkedinIn className='text-footerTextColor hover:text-white text-[20px] mr-5' />
                            </div>
                        </div>
                        <div className="navigation pl-[30px] pt-5">
                            <Heading h4Text={'NAVIGATION'} h4Class={'font-oxygen font-bold text-[14px] text-white'} />
                            <ul className='mt-12'>
                                <Flex>
                                    <MdKeyboardArrowRight className='text-btnColor' />
                                    <li className='mb-8 mt-[6px] ml-2'><Link to={'/'} className='font-rubik text-[14px] hover:text-white transition-all text-footerTextColor'>Front page</Link></li>
                                </Flex>
                                <Flex>
                                    <MdKeyboardArrowRight className='text-btnColor' />
                                    <li className='mb-8 mt-[6px] ml-2'><Link to={'/About Us'} className='font-rubik text-[14px] hover:text-white transition-all text-footerTextColor'>About us</Link></li>
                                </Flex>
                                <Flex>
                                    <MdKeyboardArrowRight className='text-btnColor' />
                                    <li className='mb-8 mt-[6px] ml-2'><Link to={'/Our Team'} className='font-rubik text-[14px] hover:text-white transition-all text-footerTextColor'>Our team grid</Link></li>
                                </Flex>
                                <Flex>
                                    <MdKeyboardArrowRight className='text-btnColor' />
                                    <li className='mb-8 mt-[6px] ml-2'><Link to={'/News'} className='font-rubik text-[14px] hover:text-white transition-all text-footerTextColor'>News</Link></li>
                                </Flex>
                                <Flex>
                                    <MdKeyboardArrowRight className='text-btnColor' />
                                    <li className='mb-8 mt-[6px] ml-2'><Link to={'/Services'} className='font-rubik text-[14px] hover:text-white transition-all text-footerTextColor'>Services Grid</Link></li>
                                </Flex>
                                <Flex>
                                    <MdKeyboardArrowRight className='text-btnColor' />
                                    <li className='mt-[6px] ml-2'><Link to={'/Contacts'} className='font-rubik text-[14px] hover:text-white transition-all text-footerTextColor'>Contacts</Link></li>
                                </Flex>
                            </ul>
                        </div>
                        <div className="getInTouch pl-[150px] pt-5">
                            <Heading h4Text={'Get in touch'} h4Class={'font-oxygen uppercase font-bold text-[14px] text-white'} />
                            <div className="office pb-3 pt-11">
                                <Flex>
                                    <MdLocationPin className='text-[19px] text-iconColor' />
                                    <Paragraph ptext={'1010 Berkler avenue, Brooklyn, New York City, NY 10018 US'} className={'font-rubik pl-5 leading-[20px] w-[237px] text-[14px] text-footerTextColor'} />
                                </Flex>
                            </div>
                            <div className="phone pb-5">
                                <Flex>
                                    <img src={Mobile} alt={Mobile} className='h-[17px] mt-[2px] ml-[2px]' />
                                    <Paragraph ptext={'Central Office: 212 386 5575'} className={'font-rubik pl-6 pt-3 text-[14px] text-footerTextColor'} />
                                </Flex>
                            </div>
                            <div className="fax pb-3">
                                <Flex>
                                    <img src={Fax} alt={Fax} className='h-[16px] mt-2' />
                                    <Paragraph ptext={'FAX: 212 376 5575'} className={'font-rubik pl-5 pt-4 text-[14px] text-footerTextColor'} />
                                </Flex>
                            </div>
                            <div className="email pb-3">
                                <Flex>
                                    <img src={Email} alt={Email} className='h-[15px] mt-2' />
                                    <Link to={'mailto:info@stylemixthemes.com'} className='font-rubik pl-5 pt-4 hover:text-white text-[14px] text-footerTextColor'>info@stylemixthemes.com</Link>
                                </Flex>
                            </div>
                        </div>
                        <div className="latestTweet pl-[30px] pt-5">
                            <Heading h4Text={'Latest Tweets'} h4Class={'font-oxygen font-bold uppercase text-[14px] text-white'} />
                            <Paragraph ptext={'Could not authenticate you.'} className={'font-rubik font-bold text-[14px] text-footerTextColor pt-[60px]'} />
                        </div>
                    </Flex>
                    <hr className='border-1 border-footerTextColor' />
                    <div className="copyright">
                        <div className="copyrightTextIcons flex">
                            <Paragraph ptext={'Copyright © 2024 Pearl Multipurpose WordPress Theme by StylemixThemes.'} className={'pt-[30px] pb-[20px] font-rubik text-[14px] text-footerTextColor'} />
                            <div className="socialMediaIcon pl-[300px] pt-3">
                                <Flex>
                                    <FaFacebook className='text-[32px] mr-[10px] text-gray-500 hover:text-counterBgColor' />
                                    <AiFillTwitterCircle className='text-[34px] mr-[10px] text-gray-500 hover:text-counterBgColor' />
                                    <FaGooglePlus className='text-[32px] mr-[10px] text-gray-500 hover:text-counterBgColor' />
                                    <ImVk className='text-[32px] mr-[10px] text-gray-500 hover:text-counterBgColor rounded-full' />
                                    <FaInstagramSquare className='text-[32px] mr-[10px] text-gray-500  hover:text-counterBgColor' />
                                    <ImLinkedin className='text-[32px] text-gray-500 hover:text-counterBgColor rounded-full' />
                                </Flex>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default News