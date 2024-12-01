
import '../App.css'
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { RiShip2Fill } from "react-icons/ri";
import { PiFireTruckFill } from "react-icons/pi";
import { FaWarehouse } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { RxLapTimer } from "react-icons/rx";
import { TbPhoneCall } from "react-icons/tb";
import React, { useState, useEffect } from 'react';
window.scrollTo({ top: 0, behavior: 'smooth' });

import Heading from './Heading'
import Container from './Container'
import Paragraph from './Paragraph'
import Header from './Header'
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Mobile from '../assets/Mobile.png'
import { ImLinkedin } from "react-icons/im";
import { ImVk } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrGooglePlus } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { IoLogoVk } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { ImTwitter } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { PiClockBold } from "react-icons/pi";
import { MdPhoneIphone } from "react-icons/md";
import { Link } from 'react-router-dom';
import DropdownWithButton from './DropdownWithButton'
import Navbar from './Navbar'
import Logo from './Logo'
import logo from '../assets/logo-transportation-text@2x.png'
import Flex from './Flex'
import Menu from './Menu'
import Email from '../assets/Email.png'
import Fax from '../assets/FAX.png'


const Service = () => {
    return (
        <>

            <div className="banner bg-bgImgThree bg-no-repeat  bg-cover py-[150px] position: relative">
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
                            <Heading h2Text={'Services'} h2Class={'text-white font-oxygen text-[42px] font-bold mt-9'} />
                        </Container>
                    </div>
                </div>
            </div>
            <Container>
                <Flex className={'mt-7 ml-3 mb-3'}>
                    <Link to="/" className='text-[11px] font-rubik text-[#002040] pr-1 uppercase'>Home </Link>
                    <Paragraph ptext={'  / Services'} className={'uppercase text-[11px] font-rubik text-[#888888]'} />
                </Flex>
                <hr />
            </Container>
            <div className="App">
                <div className=' bg-white '>
                    <div className="section-1 py-12 md:py-10 grid  grid-cols-1  md:grid-cols-3 gap-[40px] mx-auto w-[90%]  md:w-[75%]">
                        <div className='py-4 px-2 font-bold font-rubik flex justify-center text-4xl items-center'>
                            <h2>
                                Quality and Performance at the right price</h2>
                        </div>
                        <div className='pt-4  flex items-center'>
                            <p className=' opacity-25 font-bold'>
                                Transportation Ltd. is one of the world`s leading providers of end-to-end supply chain solutions. We combine intercontinental Air and Ocean Freight with comprehensive Value-Added Logistics Services and Supply Chain Services. The range of Supply Chain Solutions can vary from simple transport or storage up to complex operations.
                            </p>
                        </div>
                        <div className='pt-4 flex items-center'>
                            <p className='opacity-25 font-bold'>
                                We optimize all activities around information, material and financial flow. We provide globally integrated end-to-end solutions tailored to our customers` supply chain management needs with a special commitment to industry specific requirements.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-2  bg-[#002140]">
                    <div className="py-12 text-white text-left md:py-10 grid  grid-cols-1 mx-auto md:grid-cols-2 gap-4 w-[90%]  md:w-[90%]">
                        <div className='sec2-info w-[200px] md:w-[350px]'>
                            <div className="icon">
                                <LiaPlaneDepartureSolid />
                            </div>
                            <div className="head">
                                AIR FREIGHT
                            </div>
                            <div className="para">
                                Setting the standard in air freight. Our global network has the power to help businesses grow — based on years of experience and influenced by the changing needs of our customers. Our Road specialists will ensure operational excellence as well as cost-effective solutions.
                            </div>
                        </div>
                        <div className='sec2-info w-[200px] md:w-[350px]'>
                            <div className="icon">
                                <RiShip2Fill />
                            </div>
                            <div className="head">
                                SEA FREIGHT
                            </div>
                            <div className="para">
                                Transportation is the world’s fourth largest provider of ocean freight services. In 2013, Transportation expedited nearly 1.5 million TEUs via ocean freight. The company’s relationship with customers is moving away from purely transactional business to value-added propositions.
                            </div>
                        </div>
                        <div className='sec2-info w-[200px] md:w-[350px]'>
                            <div className="icon">
                                <PiFireTruckFill />

                            </div>
                            <div className="head">
                                ROAD FREIGHT
                            </div>
                            <div className="para">
                                Transportation  worldwide network is well positioned and qualified to help your company develop efficient and tailor-made domestic and trans-border programs for distributing your goods. Our Road specialists will ensure operational excellence as well as cost-effective solutions that meet your needs in terms of transit time.
                            </div>
                        </div>
                        <div className='sec2-info w-[200px] md:w-[350px]'>
                            <div className="icon">
                                <FaWarehouse />

                            </div>
                            <div className="head">
                                WAREHOUSING
                            </div>
                            <div className="para">
                                Our asset-light operating model allows us the ability to choose the correct qualified subcontractors based on diverse customer requirements with an emphasis on compliance, safety, security, professionalism and environmental leadership.
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section3 bg-[#00CA52] py-[55px]">
                    <div className='flex flex-col gap-4 px-4 md:flex-row justify-around md:items-center '>
                        <div>
                            <h1 className='text-white font-bold text-[36px]'>Not sure which solution fits your business needs?</h1>
                        </div>
                        <div>
                            <button className='flex items-center text-white font-bold gap-2 px-[15px] border-2 border-white py-[10px] hover:bg-[#002140] hover:text-white transition duration-300' >
                                Contact Now
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="section-4 w-[90%]  md:w-[90%] bg-white mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 py-12 md:py-10">
                    <div>
                        <div className='font-rubik flex items-center'>
                            <h1 className='text-[36px] font-bold mb-4 md:mb-0'>
                                Effective solutions
                            </h1>
                        </div>
                        <p className='mb-4 md:mb-0'>
                            You benefit from our experience in delivering effective solutions to the complex global supply chains of some of the world’s biggest corporations. You benefit from every innovation, whether it involves a simple extension to our Air and Ocean Freight products, whether it means a development in warehousing, or whether it requires a completely new integrated supply chain model.
                        </p>
                    </div>
                    <div className='flex justify-end items-center'>
                        <img src="https://pearl.stylemixthemes.com/transportation/wp-content/uploads/sites/3/2017/05/image_1.jpg" alt="" />
                    </div>
                </div>

                <div className="section-5 text-white grid grid-cols-1 md:grid-cols-3 text-center">
                    <div className='bg-[#00CA52] py-[75px] px-[115px] md:py-[40px] md:px-[55px]'>
                        <div className='flex justify-center'>
                            <GrShieldSecurity className='text-[70px] mb-[32px]' />
                        </div>

                        <h1 className='text-[24px] font-bold line-height-[30px] space-[-1px] font-oxygen mb-[20px]'>SAFE & SECURE</h1>
                        <br />
                        <p className='mb-[35px]'>You benefit from our experience in delivering effective solutions to the complex global supply chains of some of the world’s biggest corporations.</p>
                    </div>
                    <div className='bg-[#00B54A] py-[75px] px-[115px] md:py-[40px] md:px-[55px]'>
                        <div className='flex justify-center'>
                            <RxLapTimer className='text-[70px] mb-[32px]' />
                        </div>
                        <h1 className='text-[24px] font-bold line-height-[30px] space-[-1px] font-oxygen mb-[20px]'>FAST DELIVERY</h1>
                        <br />
                        <p className='mb-[35px]'>You benefit from every innovation, whether it involves a simple extension to our Air and Ocean Freight products, whether it means a development in warehousing.</p>
                    </div>
                    <div className='bg-[#00A242] py-[75px] px-[115px] md:py-[40px] md:px-[55px]'>
                        <div className='flex justify-center'>
                            <TbPhoneCall className='text-[70px] mb-[32px]' />
                        </div>
                        <h1 className='text-[24px] font-bold line-height-[30px] space-[-1px] font-oxygen mb-[20px]'>24/7 Support</h1>
                        <br />
                        <p className='mb-[35px]'>All of which explains why you’ll find the team of outstanding support at Transportation ready to apply their passion for solutions in support of your business.</p>
                    </div>
                </div>
            </div>


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

export default Service