import { useState } from "react";
import "./styles/Gallery.css";
import Heading from './components/Heading'
import Container from './components/Container'
import Paragraph from './components/Paragraph'
import Header from './components/Header'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { PiClockBold } from "react-icons/pi";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import DropdownWithButton from './components/DropdownWithButton'
import { FaInstagramSquare } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Mobile from './assets/Mobile.png'
import { ImLinkedin } from "react-icons/im";
import { ImVk } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrGooglePlus } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { IoLogoVk } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { ImTwitter } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Logo from './components/Logo'
import logo from './assets/logo-transportation-text@2x.png'
import Flex from './components/Flex'
import Menu from './components/Menu'
import Email from './assets/Email.png'
import Fax from './assets/FAX.png'
import ProjectOne from '../public/assets 2/Fotolia_46046458_Subscription_Monthly_M.jpg'
import ProjectTwo from '../public/assets 2/Fotolia_49123103_Subscription_Monthly_XL.jpg'
import ProjectThree from '../public/assets 2/Fotolia_50072102_Subscription_Monthly_M.jpg'
import ProjectFour from '../public/assets 2/Fotolia_54040023_Subscription_Monthly_M-1.jpg'
import ProjectFive from '../public/assets 2/Fotolia_55534392_Subscription_Monthly_M.jpg'
import ProjectSix from '../public/assets 2/Fotolia_69419317_Subscription_Monthly_L.jpg'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const handleButtonClick = (btnNum) => {
    setActiveTab(btnNum);
  };

  const portfolioItems = [
    {
      id: "1",
      src: ProjectOne,
      title: "Project 1",
      link: "http://charcounter.thapaonlineclass.com/",
    },
    {
      id: "3",
      src: ProjectTwo,
      title: "Project 2",
      link: "https://www.thapatechnical.com/",
    },
    {
      id: "1",
      src: ProjectThree,
      title: "Project 3",
      link: "#",
    },
    {
      id: "1 2",
      src: ProjectFour,
      title: "Project 4",
      link: "#",
    },
    {
      id: "2",
      src: ProjectFive,
      title: "Project 5",
      link: "#",
    },
    {
      id: "1",
      src: ProjectSix,
      title: "Project 6",
      link: "#",
    },
  ];
  return (
    <section className="portfolio-section">
      <div className="banner bg-bgImgSix bg-no-repeat  bg-cover py-[150px] position: relative">
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
                <Heading h2Text={'Gallery'} h2Class={'text-white font-oxygen text-[42px] font-bold mt-9'} />
              </Container>
            </div>
          </div>
        </div>
        <Container>
          <Flex className={'mt-7 ml-3 mb-3'}>
            <Link to="/" className='text-[11px] font-rubik text-[#002040] pr-1 uppercase'>Home </Link>
            <Paragraph ptext={'  / Gallery'} className={'uppercase text-[11px] font-rubik text-[#888888]'} />
          </Flex>
          <hr />
        </Container>

      <div className="container paddingBottom  w-[1040px] m-auto mt-9 mb-9">
        <div className="p-btns">
          <button
            className={`btn p-btn ${activeTab === "ALL" ? "p-btn-active" : ""}`}
            onClick={() => handleButtonClick("ALL")}
          >
            ALL
          </button>
          <button
            className={`btn p-btn ${activeTab === "1" ? "p-btn-active" : ""}`}
            onClick={() => handleButtonClick("1")}
          >
            Websites
          </button>
          <button
            className={`btn p-btn ${activeTab === "2" ? "p-btn-active" : ""}`}
            onClick={() => handleButtonClick("2")}
          >
            Youtube
          </button>
          <button
            className={`btn p-btn ${activeTab === "3" ? "p-btn-active" : ""}`}
            onClick={() => handleButtonClick("3")}
          >
            Design
          </button>
        </div>

        <div className="container grid grid-three-column portfolio-images">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`img-overlay ${
                activeTab === "ALL" || item.id.includes(activeTab)
                  ? ""
                  : "portfolio-image-not-active"
              }`}
            >
              <img src={item.src} loading="lazy" alt="portfolio images" />
              <div className="overlay">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="common-heading"
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
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
    </section>
  );
};

export default Gallery;
