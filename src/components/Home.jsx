import React, { useState } from 'react';
window.scrollTo({ top: 0, behavior: 'smooth' });

import Heading from './Heading'
import Container from './Container'
import Paragraph from './Paragraph'
import Header from './Header'
import { HiOutlineMail } from "react-icons/hi";
import { HiMiniGlobeAmericas } from "react-icons/hi2";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Mobile from '../assets/Mobile.png'
import { ImLinkedin } from "react-icons/im";
import { ImVk } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrGooglePlus } from "react-icons/gr";
import Weight from '../assets/Weight.png'
import FreightType from '../assets/FreightType.png'
import Deliver from '../assets/Deliver.png'
import Departure from '../assets/Departure.png'
import { FaInstagram } from "react-icons/fa";
import { IoLogoVk } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { ImTwitter } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { PiClockBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import Button from './Button'
import { FaStar } from 'react-icons/fa';
import IconButton from './IconButton';
import DropdownWithButton from './DropdownWithButton'
import Navbar from './Navbar'
import Logo from './Logo'
import logo from '../assets/logo-transportation-text@2x.png'
import Flex from './Flex'
import Menu from './Menu'
import ImageSlider from './ImageSlider'
import ImageContentSlider from './ImageContentSlider'
import Image from './Image'
import Email from '../assets/Email.png'
import Package from '../assets/Screenshot (46).png'
import ForkliftTwo from '../assets/forklift 2.png'
import Two from '../assets/2.jpg'
import TruckTwo from '../assets/truck 2.png'
import Ship from '../assets/ship.png'
import Warehousing from '../assets/3-1-265x170.jpg'
import SeaFreight from '../assets/4-1-265x170.jpg'
import Window from '../assets/7-255x190.jpg'
import Laptop from '../assets/6-255x190.jpg'
import Fax from '../assets/FAX.png'
import Clients from '../assets/staff_1-64x64.jpg'
import AirFreight from '../assets/5-265x170.jpg'
import SlideShow from './SlideShow'
import MySlider from './MySlider'
import { AiFillCaretDown } from "react-icons/ai";
import CounterComponent from './CounterComponent'
import LogoCarousel from './LogoCarousel'
import MapComponent from './MapComponent'
const Home = () => {
    const [options] = useState(['Freight Type', 'Road Transportation', 'Air Transportation', 'Sea Transportation', 'Warehousing']);
    const [selectedOption, setSelectedOption] = useState(''); // Store the selected option
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const defaultColor = '#b2b2b2'; // Default color for text and options
    const placeholderColor = '#b2b2b2'; // Color for the placeholder text

    const handleOptionClick = (option) => {
        setSelectedOption(option); // Set the selected option
        setDropdownOpen(false); // Close the dropdown menu
    };

    const getDisplayText = () => {
        // Return the selected option if one is chosen, otherwise the default placeholder text
        return selectedOption === '' ? 'Freight Type' : selectedOption;
    };
    return (
        <>
            <div className="banner">
                <ImageContentSlider className={'position: relative'} />
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
                                <Link to={'facebook.com'}><FaFacebookF className='text-socialIconColor hover:text-white mt-3 text-[19px] mr-4 ml-7' /></Link>
                                <Link to={'twitter.com'}><ImTwitter className='text-socialIconColor hover:text-white mt-3 text-[19px] mr-4' /></Link>
                                <Link to={'linkedin.com'}><FaLinkedinIn className='text-socialIconColor hover:text-white mt-3 text-[19px]' /></Link>
                            </Flex>
                        </Navbar>
                        <hr className='w-[1010px] mt-5 border-socialIconColor' />
                    </Container>
                </div>
            </div>

            <div className="service bg-serviceBgColor pt-[150px]">
                <Container>
                    <div className="border-t-[6px] max-w-[50px] border-borderColor">
                        <Heading h2Text="What makes us special" h2Class={'text-dropdownColor font-oxygen w-[500px] mt-3 font-bold text-[42px]'} />
                    </div>
                    <Paragraph ptext={'Over 42,000 dedicated employees, working in 17 regional clusters around the globe, deliver operational excellence.'} className={'w-[690px] mt-[25px] mb-[50px] font-rubik text-[16px] leading-30 text-servicePColor'} />
                    <Flex>
                        <Flex>
                            <div className="packageAndtransport">
                                <Flex>
                                    <Image src={Package} alt={Package} className={'h-[42px] mr-5 w-[35px]'} />
                                    <div className="packageTexts">
                                        <div className="border-t-[6px] max-w-[50px] border-servicePColor">
                                            <Heading h3Text={'Packaging and Storage'} h3Class={'font-oxygen pt-4 font-bold w-[204px] text-[18px] text-dropdownColor'} />
                                        </div>
                                        <Paragraph ptext={'Receive premium pricing from Top Tier financial institutions. Premium pricing from Top Tier financial institutions.'} className={'font-rubik mt-[10px] text-[14px] leading-24 w-[250px] text-servicePColor'} />
                                    </div>
                                </Flex>
                                <Flex className={'mt-9'}>
                                    <Image src={TruckTwo} alt={TruckTwo} className={'h-[26px] mr-5 w-[35px]'} />
                                    <div className="packageTexts">
                                        <div className="border-t-[6px] max-w-[50px] border-servicePColor">
                                            <Heading h3Text={'Ground Transport'} h3Class={'font-oxygen pt-4 font-bold w-[204px] text-[18px] text-dropdownColor'} />
                                        </div>
                                        <Paragraph ptext={'Land transport or land transportation, also referred to as ground transport or ground transportation'} className={'font-rubik mt-[10px] text-[14px] leading-24 w-[280px] text-servicePColor'} />
                                    </div>
                                </Flex>
                            </div>
                            <div className="services ml-[70px]">
                                <Flex>
                                    <Image src={ForkliftTwo} alt={ForkliftTwo} className={'h-[42px] mr-5 w-[40px]'} />
                                    <div className="servicesTexts">
                                        <div className="border-t-[6px] max-w-[50px] border-servicePColor">
                                            <Heading h3Text={'Warehousing Service'} h3Class={'font-oxygen pt-4 w-[204px] font-bold text-[18px] text-dropdownColor'} />
                                        </div>
                                        <Paragraph ptext={'Our team’s EPCM experience includes both domestic and international projects, where our highly skilled construction project.'} className={'font-rubik mt-[9px] text-[14px] leading-24 w-[365px] pr-[84px] text-servicePColor'} />
                                    </div>
                                </Flex>
                                <Flex className={'mt-9'}>
                                    <Image src={Ship} alt={Ship} className={'h-[26px] mr-5 w-[35px]'} />
                                    <div className="packageTexts">
                                        <div className="border-t-[6px] max-w-[50px] border-servicePColor">
                                            <Heading h3Text={'Logistic Services'} h3Class={'font-oxygen pt-4 w-[204px] font-bold text-[18px] text-dropdownColor'} />
                                        </div>
                                        <Paragraph ptext={'Water transportation is the intentional movement by water over large distances. Methods of transportation fall into three categories:'} className={'font-rubik mt-[10px] text-[14px] leading-24 w-[300px] text-servicePColor'} />
                                    </div>
                                </Flex>
                            </div>
                            <Image src={Two} alt={Two} className={'h-[410px] w-[426px]'} />
                        </Flex>
                    </Flex>
                </Container>
            </div>

            <div className="specialService mt-[110px] mb-[120px]">
                <Container>
                    <Flex>
                        <div className="specialServiceText pr-3">
                            <div className="border-t-[6px] max-w-[50px] border-borderColor">
                                <Heading h2Text="Special Services" h2Class={'text-dropdownColor font-oxygen w-[300px] mt-5 font-bold text-[42px] leading-[47px]'} />
                            </div>
                            <Paragraph ptext={'Globally known for our ability to handle every last detail of our customers’ particular logistics and forwarding needs, Transportation Special Services team takes care of all your logistics.'} className={'w-[260px] mt-[37px] mb-[50px] font-rubik text-[14px] leading-30 text-servicePColor'} />
                        </div>
                        <SlideShow />
                    </Flex>
                </Container>
            </div>
            <div className='fixedImg bg-FixedBgImg bg-cover bg-center bg-no-repeat bg-fixed  mb-[120px]'>
                <div className="py-[95px] bg-backColor">
                    <Container>
                        <div className="overlay flex">
                            <div className="fixedImgText">
                                <Heading h2Text={'Reach your destination 100% sure and safe'} h2Class={'font-oxygen font-bold text-[30px] text-white'} />
                                <Paragraph ptext={'We designed a detailed homepage layouts that will fit any transportation industry size. We will take care of your cargo or your passenger and deliver them safe and on time!'} className={'font-rubik text-[14px] leading-30 text-white mt-3 w-[640px]'} />
                            </div>
                            <div className="button mt-[52px] ml-[200px]">
                                <Flex>
                                    <Link to={'#'} className='py-[14px] pl-[22px] pr-[15px] text-white font-oxygen hover:bg-dropdownColor font-bold text-[16px] bg-btnColor '>Contact now</Link>
                                    <div className='bg-white py-[14px] px-[16px]'><FaArrowRight className='text-btnColor mt-1 text-[19px]' /></div>
                                </Flex>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            <Container>
                <Flex>
                    <div className="latestNews mb-[140px]">
                        <div className="border-t-[6px] max-w-[50px] border-borderColor">
                            <Heading h2Text="Latest News" h2Class={'text-dropdownColor font-oxygen w-[300px] mt-5 font-bold text-[42px] leading-[47px]'} />
                        </div>
                        <Flex className={'mt-9'}>
                            <div className="laptop pr-7">
                                <Image src={Laptop} alt={Laptop} />
                                <Heading h4Text={'Face the challenges of chain complexity'} h4Class={'pt-5 w-[250px] font-oxygen font-bold text-[18px] leading-24 text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'November 26, 2015'} className={'font-rubik text-[13px] text-linkColor pt-2'} />
                            </div>
                            <div className="window">
                                <Image src={Window} alt={Window} />
                                <Heading h4Text={'We join the environmental organization CCWG'} h4Class={'pt-5 w-[250px] font-oxygen font-bold text-[18px] leading-24 text-dropdownColor hover:text-btnColor'} />
                                <Paragraph ptext={'November 24, 2015'} className={'font-rubik text-[13px] text-linkColor pt-2'} />
                            </div>
                        </Flex>
                    </div>
                    <div className="testimonials pl-7">
                        <div className="border-t-[6px] max-w-[50px] border-borderColor">
                            <Heading h2Text="Testimonials" h2Class={'text-dropdownColor font-oxygen w-[300px] mt-5 font-bold text-[42px] leading-[47px]'} />
                        </div>
                        <MySlider />
                    </div>
                </Flex>
            </Container>

            <div className="Counter pt-[30px] pb-[50px] bg-counterBgColor">
                <Container>
                    <CounterComponent />
                </Container>
            </div>

            <div className='requestImg bg-requestBgImg bg-cover bg-center bg-no-repeat bg-fixed  mb-[70px]'>
                <div className="py-[95px] bg-backColor">
                    <Container>
                        <div className="overlay flex">
                            <div className="fixedImgText">
                                <div className="border-t-[6px] max-w-[50px] border-borderColor">
                                    <Heading h2Text="Request a Free Quote" h2Class={'text-white font-oxygen w-[300px] mt-5 font-bold text-[42px] leading-[50px]'} />
                                </div>
                                <Paragraph ptext={'Would you like to speak to one of our specialists over the phone? Just submit your details and we’ll be in touch shortly.'} className={'font-rubik text-[14px] leading-30 text-white mt-[50px] w-[340px]'} />
                            </div>
                            <div className="inputForm pl-9 pt-11">
                                <form action="#" method='post'>

                                    <div style={{ position: 'relative', display: 'inline-block' }}>

                                        <img src={FreightType} alt={FreightType}
                                            style={{
                                                position: 'absolute',
                                                left: '10px',
                                                top: '35%',
                                                transform: 'translateY(-50%)',
                                                height: '14px',
                                            }}
                                        />
                                        {/* Input Field */}
                                        <input
                                            type="text"
                                            value={getDisplayText()} // Display either the placeholder or the selected option
                                            onFocus={() => setDropdownOpen(true)}
                                            onBlur={() => setDropdownOpen(false)}

                                            style={{
                                                paddingLeft: '35px',
                                                paddingTop: '26px',
                                                paddingBottom: '26px',
                                                height: '35px',
                                                marginBottom: '20px',
                                                fontSize: '14px',
                                                fontFamily: "Rubik",
                                                color: '#b2b2b2',
                                                width: '319px',
                                                cursor: 'pointer',
                                                color: selectedOption === '' ? placeholderColor : defaultColor, // Change color based on selection
                                            }}
                                            readOnly // Make the input non-editable
                                        />
                                        {/* Dropdown Icon */}
                                        <AiFillCaretDown
                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                top: '37%',
                                                transform: 'translateY(-50%)',
                                                pointerEvents: 'none',
                                                color: defaultColor, // Default color for the icon
                                            }}
                                        />
                                        {/* Dropdown Menu */}
                                        {isDropdownOpen && (
                                            <ul
                                                style={{
                                                    position: 'absolute',
                                                    top: '40px',
                                                    left: '0',
                                                    width: '100%',
                                                    backgroundColor: '#fff',
                                                    listStyle: 'none',
                                                    padding: '0',
                                                    margin: '0',
                                                    borderTop: '1px solid aliceblue',
                                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                    zIndex: 1000,
                                                    color: defaultColor, // Default color for the options
                                                }}
                                            >
                                                {options.map((option, index) => (
                                                    <li
                                                        key={index}
                                                        onMouseDown={() => handleOptionClick(option)}
                                                        style={{
                                                            padding: '10px',
                                                            paddingLeft: '35px',
                                                            cursor: 'pointer',
                                                            fontSize: '14px',
                                                            fontFamily: "Rubik",
                                                            color: '#b2b2b2',
                                                            transition: 'background-color 0.2s', // Smooth transition for hover effec
                                                        }}
                                                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#eee')} // Hover effect
                                                        onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')} // Reset on hover out
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        {/* Icon */}
                                        <img src={Departure} alt={Departure}
                                            style={{
                                                position: 'absolute',
                                                left: '10px',
                                                top: '35%',
                                                transform: 'translateY(-50%)',
                                                height: '16px',
                                            }}
                                        />
                                        {/* Input Field */}
                                        <input
                                            type="text"
                                            placeholder="City of departure"
                                            style={{
                                                paddingLeft: '35px', // Adjust padding to make room for the icon
                                                paddingTop: '26px',
                                                paddingBottom: '26px',
                                                height: '35px',
                                                marginBottom: '20px',
                                                fontSize: '14px',
                                                fontFamily: "Rubik",
                                                color: '#b2b2b2',
                                                width: '319px',
                                            }}
                                        />
                                    </div>
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        {/* Icon */}
                                        <img src={Deliver} alt={Deliver}
                                            style={{
                                                position: 'absolute',
                                                left: '10px',
                                                top: '35%',
                                                transform: 'translateY(-50%)',
                                                height: '16px',
                                            }}
                                        />
                                        {/* Input Field */}
                                        <input
                                            type="text"
                                            placeholder="Delivery city"
                                            style={{
                                                paddingLeft: '35px', // Adjust padding to make room for the icon
                                                paddingTop: '26px',
                                                paddingBottom: '26px',
                                                height: '35px',
                                                marginBottom: '20px',
                                                fontSize: '14px',
                                                fontFamily: "Rubik",
                                                color: '#b2b2b2',
                                                width: '319px',
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="inputForm pl-3 pt-11">
                                <form action="#" method='post'>
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        {/* Icon */}
                                        <img src={Weight} alt={Weight}
                                            style={{
                                                position: 'absolute',
                                                left: '10px',
                                                top: '35%',
                                                transform: 'translateY(-50%)',
                                                height: '15px',
                                            }}
                                        />
                                        {/* Input Field */}
                                        <input
                                            type="number"
                                            placeholder="Total Gross Weight (KG)"
                                            style={{
                                                paddingLeft: '35px', // Adjust padding to make room for the icon
                                                paddingTop: '26px',
                                                paddingBottom: '26px',
                                                height: '35px',
                                                marginBottom: '20px',
                                                fontSize: '14px',
                                                fontFamily: "Rubik",
                                                color: '#b2b2b2',
                                                width: '319px',
                                            }}
                                        />
                                    </div>
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        {/* Icon */}
                                        <img src={Email} alt={Email}
                                            style={{
                                                position: 'absolute',
                                                left: '10px',
                                                top: '35%',
                                                transform: 'translateY(-50%)',
                                                height: '11px',
                                            }}
                                        />
                                        {/* Input Field */}
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            style={{
                                                paddingLeft: '35px', // Adjust padding to make room for the icon
                                                paddingTop: '26px',
                                                paddingBottom: '26px',
                                                height: '35px',
                                                marginBottom: '20px',
                                                fontSize: '14px',
                                                fontFamily: "Rubik",
                                                color: '#b2b2b2',
                                                width: '319px',
                                            }}
                                        />
                                    </div>
                                    <Flex>
                                        <Link to={'#'} className='py-[14px] pl-[22px] pr-[22px] text-white font-oxygen hover:bg-dropdownColor font-bold text-[16px] bg-btnColor '>Get a Quote</Link>
                                        <div className='bg-white py-[14px] px-[16px]'><FaArrowRight className='text-btnColor mt-1 text-[19px]' /></div>
                                    </Flex>
                                </form>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <LogoCarousel />
            <div className='mt-[100px] leading-[0px]'>
                <MapComponent />
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
export default Home