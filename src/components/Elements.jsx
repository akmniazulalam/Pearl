import React, { useEffect, useState } from 'react';
import './Elements.css';

import { FaCalendarAlt } from "react-icons/fa";
import { VscProject } from "react-icons/vsc";
import { TbWorldPin } from "react-icons/tb";
import { FaTruckFront } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';
import Single from './Single/Single'
import CountUp from 'react-countup';
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



const Elements = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger when it comes into view the first time
        threshold: 1,     // Trigger when 50% of the element is visible
      });
    
    
      const [all, setAll] = useState([]);
      const [buildings, setBuildings] = useState([]);
      const [interior, setInterior] = useState([]);
      const [isolation, setIsolation] = useState([]);
      const [kiki, setKiki] = useState([]);
      const [plumbings, setPlumbings] = useState([]);
      const [tiling, setTiling] = useState([]);
    
    
      useEffect(() => {
        fetch('All.json')
          .then(res => res.json())
          .then(json => setAll(json))
    
        fetch('Buildings.json')
          .then(res => res.json())
          .then(json => setBuildings(json))
    
        fetch('Interior.json')
          .then(res => res.json())
          .then(json => setInterior(json))
    
        fetch('Isolation.json')
          .then(res => res.json())
          .then(json => setIsolation(json))
    
        fetch('Kiki.json')
          .then(res => res.json())
          .then(json => setKiki(json))
    
        fetch('Plumbing.json')
          .then(res => res.json())
          .then(json => setPlumbings(json))
    
        fetch('Tiling.json')
          .then(res => res.json())
          .then(json => setTiling(json))
      }, [])
    
      const [activeTab, setActiveTab] = useState('all');
      const tabhandler = (activeTab) => {
        setActiveTab(activeTab)
      }
    return (
        <>
        <div className="banner bg-dropdownColor py-[78px] position: relative">
                <div className='overlay'>
                    <div className={"bg-dropdownColor h-[50px] w-full position: absolute top-0"}>
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
                            
                        </Container>
                    </div>
                </div>
            </div>
            <div className='header mt-[140px] font-semibold font-rubik flex justify-center text-4xl items-center relative'>
                <h1 className='' >Project Style</h1>
            </div>

            <div className='tab-btn flex flex-wrap justify-center items-center gap-8 mt-[60px] mb-[40px]'>
                <button className={`p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab === 'all' ? 'active' : ''}`} onClick={() => tabhandler('all')}>All</button>
                <button className={`p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab === 'buildings' ? 'active' : ''}`} onClick={() => tabhandler('buildings')}>BUILDING</button>
                <button className={`p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab === 'interior' ? 'active' : ''}`} onClick={() => tabhandler('interior')}>INTERIOR DESIGN</button>
                <button className={`p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab === 'isolation' ? 'active' : ''}`} onClick={() => tabhandler('isolation')}>ISOLATION</button>
                <button className={`p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab === 'kiki' ? 'active' : ''}`} onClick={() => tabhandler('kiki')}>KIKI</button>
                <button className={`p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab === 'plumbings' ? 'active' : ''}`} onClick={() => tabhandler('plumbings')}>PLUMBING</button>
                <button className={`p-4 text-[12px] md:text-[28px] transition duration-300 ease-in ${activeTab === 'tiling' ? 'active' : ''}`} onClick={() => tabhandler('tiling')}>TILING</button>
            </div>

            <div className="tab-content mb-4 md:mb-0">

                {activeTab == 'all' &&
                    <div className='flex flex-wrap items-center justify-center gap-3 w-[75%] mx-auto tab-info'>
                        {
                            all.map((item, index) => <Single key={index} item={item} />)
                        }
                    </div>
                }

                {activeTab == 'buildings' &&
                    <div className='flex flex-wrap items-center justify-center gap-3 w-[75%] mx-auto tab-info'>
                        {
                            buildings.map((item, index) => <Single key={index} item={item} />)
                        }
                    </div>
                }

                {activeTab == 'interior' &&
                    <div className='flex flex-wrap items-center justify-center gap-3 w-[75%] mx-auto tab-info'>
                        {
                            interior.map((item, index) => <Single key={index} item={item} />)
                        }
                    </div>
                }

                {activeTab == 'isolation' &&
                    <div className='flex flex-wrap items-center justify-center gap-3 w-[75%] mx-auto tab-info'>
                        {
                            isolation.map((item, index) => <Single key={index} item={item} />)
                        }
                    </div>
                }

                {activeTab === 'kiki' &&
                    <div className='flex flex-wrap items-center justify-center gap-3 w-[75%] mx-auto tab-info'>
                        {
                            kiki.map((item, index) => <Single key={index} item={item} />)
                        }
                    </div>
                }

                {activeTab == 'plumbings' &&
                    <div className='flex flex-wrap items-center justify-center gap-3 w-[75%] mx-auto tab-info'>
                        {
                            plumbings.map((item, index) => <Single key={index} item={item} />)
                        }
                    </div>
                }

                {activeTab == 'tiling' &&
                    <div className='flex flex-wrap items-center justify-center gap-3 w-[75%] mx-auto tab-info'>
                        {
                            tiling.map((item, index) => <Single key={index} item={item} />)
                        }
                    </div>
                }
                <div className='w-[15%] md:w-[7%] flex justify-center text-[#243742] transition-all duration-300 ease-in-out hover:bg-[#00CA52] font-bold mx-auto mt-[60px] mb-[40px] border-2 border-[#00CA52]'>
                    <button className=' py-2 text-center '>
                        <a href="" >Learn More</a>
                    </button>
                </div>

            </div>

            <div className="recent mt-[60px] flex flex-col md:flex-row flex-wrap justify-evenly px-4 py-4 gap-8">
                <div className="recent-head flex flex-col items-center w-[100%] md:w-[42%]">
                    <h1 className='py-4 px-2 mb-[15px]'>Recent Projects</h1>
                    <p className='mb-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis purus at lectus viverra rutrum ut vel eros.</p>

                </div>

                <div className='flex flex-col gap-4  pb-4 border-b border-[#00CA52] md:pb-0 md:border-none'>
                    <div className="post flex pb-4 border-b border-[#00CA52]">
                        <div>
                            <img src="https://pearl.stylemixthemes.com/transportation/wp-content/uploads/sites/3/2015/11/6-85x85.jpg" alt="" className='w-[80px] h-[80px] mr-[30px]' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='post-title transition-all duration-300 ease-in-out hover:text-[#00CA52]'>
                                Face the challenges <br /> of chain complexity
                            </div>
                            <div className='post-date flex items-center gap-2'>
                                <div className='text-[#00CA52]'><FaCalendarAlt /></div>
                                <div className='text-[15px] text-gray-500 font-medium'>November 26,2015</div>
                            </div>
                        </div>
                    </div>

                    <div className="post flex">
                        <div>
                            <img src="https://pearl.stylemixthemes.com/transportation/wp-content/uploads/sites/3/2015/11/7-85x85.jpg" alt="" className='w-[80px] h-[80px] mr-[30px]' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='post-title transition-all duration-300 ease-in-out hover:text-[#00CA52]'>
                                We join the environmental <br /> organization CCWG
                            </div>
                            <div className='post-date flex items-center gap-2'>
                                <div className='text-[#00CA52]'><FaCalendarAlt /></div>
                                <div className='text-[15px] text-gray-500 font-medium'>November 26,2015</div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className='flex flex-col gap-4 pb-4 border-b border-[#00CA52] md:pb-0 md:border-none'>
                    <div className="post flex pb-4 border-b border-[#00CA52]">
                        <div>
                            <img src="https://pearl.stylemixthemes.com/transportation/wp-content/uploads/sites/3/2015/11/6-85x85.jpg" alt="" className='w-[80px] h-[80px] mr-[30px]' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='post-title transition-all duration-300 ease-in-out hover:text-[#00CA52]'>
                                Face the challenges <br /> of chain complexity
                            </div>
                            <div className='post-date flex items-center gap-2'>
                                <div className='text-[#00CA52]'><FaCalendarAlt /></div>
                                <div className='text-[15px] text-gray-500 font-medium'>November 26,2015</div>
                            </div>
                        </div>
                    </div>

                    <div className="post flex">
                        <div>
                            <img src="https://pearl.stylemixthemes.com/transportation/wp-content/uploads/sites/3/2015/11/7-85x85.jpg" alt="" className='w-[80px] h-[80px] mr-[30px]' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='post-title transition-all duration-300 ease-in-out hover:text-[#00CA52] '>
                                We join the environmental <br /> organization CCWG
                            </div>
                            <div className='post-date flex items-center gap-2'>
                                <div className='text-[#00CA52]'><FaCalendarAlt /></div>
                                <div className='text-[15px] text-gray-500 font-medium'>November 26,2015</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div className="counter bg-[#00CA52] py-[8%] flex flex-wrap mx-auto gap-8">
                <div className="counter1-item flex items-center mx-auto mb-6 md:mb-0 gap-4">
                    <div className="counter-icon">
                        <VscProject className='h-[80px] w-[80px]' />
                    </div>
                    <div className="counter-title">
                        <div>
                            <div ref={ref} className='text-[32px] font-[800] leading-[42px]'>
                                {inView && (
                                    <CountUp start={0} end={320} duration={3} separator="," decimals={0} prefix="" suffix="+" />
                                )}
                            </div>
                            <div>
                                <h1 className='font-[500] text-3xl'>Project Done</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="counter2-item flex items-center  mb-6 md:mb-0 mx-auto gap-4">
                    <div className="counter-icon">
                        <TbWorldPin className='h-[80px] w-[80px]' />
                    </div>
                    <div className="counter-title">
                        <div>
                            <div ref={ref} className='text-[32px] font-[800] leading-[42px]'>
                                {inView && (
                                    <CountUp start={0} end={72} duration={3} separator="," decimals={0} prefix="" suffix="+" />
                                )}
                            </div>
                            <div>
                                <h1 className='font-[500] text-3xl'>Clients Worldwide</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="counter3-item flex items-center  mb-6 md:mb-0 mx-auto gap-4">
                    <div className="counter-icon">
                        <FaTruckFront className='h-[80px] w-[80px]' />
                    </div>
                    <div className="counter-title">
                        <div>
                            <div ref={ref} className='text-[32px] font-[800] leading-[42px]'>
                                {inView && (
                                    <CountUp start={0} end={153} duration={3} separator="," decimals={0} prefix="" suffix="+" />
                                )}
                            </div>
                            <div>
                                <h1 className='font-[500] text-3xl'>Owned Vehicles</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="counter4-item flex items-center  mb-6 md:mb-0 mx-auto gap-4">
                    <div className="counter-icon">
                        <FaPeopleGroup className='h-[80px] w-[80px]' />
                    </div>
                    <div className="counter-title">
                        <div>
                            <div ref={ref} className='text-[32px] font-[800] leading-[42px]'>
                                {inView && (
                                    <CountUp start={0} end={114} duration={3} separator="," decimals={0} prefix="" suffix="+" />
                                )}
                            </div>
                            <div>
                                <h1 className='font-[500] text-3xl'>People in Team</h1>
                            </div>
                        </div>
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
    );
};

export default Elements