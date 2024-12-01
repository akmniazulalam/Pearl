import { Icon } from "@iconify-icon/react";
import "./styles/About.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
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
import LogoCarousel from "./components/LogoCarousel";
import Image from "./components/Image";
import Mission from '../public/assets 2/mission.png'

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const itemsRef = useRef([]);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same item is clicked
    } else {
      setOpenIndex(index); // Open the clicked item and close others
    }
  };
  const faqData = [
    {
      question: "How many times do I have to tell you a few different ways?",
      answer:
        "Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.",
    },
    {
      question: "What is do I have to tell you a few lorem?",
      answer:
        "We use the latest, real-time software to provide clients with all the project information they need, including design, procurement, takeoffs, estimates and more. All of our project managers undergo a rigorous, hands-on training program as field engineers to effectively prepare and equip them for sophisticated project management.",
    },
    {
      question: "I have a technical problem or support issue I need resolved, who do I email?",
      answer:
        "We understand that industry specialty is a crucial aspect for a project manager, and all of our PMs manage projects within their expertise. For example, our food and beverage project managers are highly experienced in hands-on coordination with process equipment.",
    },
    {
      question: "What other services are you compatible with?",
      answer:
        "At start-up, the team reviews and inspects all plumbing, mechanical, fire protection and electrical systems to ensure proper operation. During this turnover phase, Stellar also trains owner representatives in the operation and maintenance of each system.",
    },
  ];
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 3,

    // slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  });
  const logos = [
    "../public/assets 2/logo-consulting.png",
    "../public/assets 2/logo-happychild.png",
    "../public/assets 2/logo-masterstudy.png",
    "../public/assets 2/logo-motors.png",
    "../public/assets 2/logo-smartuniversity.png",
    // Add more logos here
  ];
  return (
    <>
      <section>
        <div className="banner bg-bgImgFour bg-no-repeat  bg-cover py-[150px] position: relative">
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
                <Heading h2Text={'About us'} h2Class={'text-white font-oxygen text-[42px] font-bold mt-9'} />
              </Container>
            </div>
          </div>
        </div>
        <Container>
          <Flex className={'mt-7 ml-3 mb-3'}>
            <Link to="/" className='text-[11px] font-rubik text-[#002040] pr-1 uppercase'>Home </Link>
            <Paragraph ptext={'  / about us'} className={'uppercase text-[11px] font-rubik text-[#888888]'} />
          </Flex>
          <hr />
        </Container>

        <div className="container w-[1040px] m-auto mt-9">
          <div className="about paddingBottom paddingTop">
            <div className="border-t-[6px] max-w-[50px] border-borderColor">
              <h2 id="heading" className="text-dropdownColor font-oxygen mt-3 w-[400px] font-bold text-[36px]">Who we are</h2>
            </div>
            <p className="mt-[15px] font-rubik text-[14px] leading-30 text-servicePColor">
              Logistics Ground’s flexible model, using only quality carriers,
              means you benefit from improved service levels, greater
              flexibility and time-definite deliveries. Our expertise in
              transport management and planning allows us to design a solution
              that meets your needs and also quickly respond to any event
              disruptions, such as weather.
            </p>
            <br />
            <p className="mt-[0px] font-rubik text-[14px] leading-30 text-servicePColor">
              Integrated Road networks, covering the world. Through our global
              network of control towers and state-of-the-art technology, we are
              able to monitor and dynamically react to situations such as
              adverse weather, additional pick ups or drop offs, or heavy
              traffic, meaning that your goods are always travelling the most
              efficient route.
            </p>
            <br />
            <p className="mt-[0px] mb-16 font-rubik text-[14px] leading-30 text-servicePColor">
              Our non-asset based Road network provides you with flexibility,
              improved service levels, accelerated delivery, reduced direct and
              indirect costs and much less complexity.
            </p>
          </div>
          <div className="mission paddingBottom ">
            <div className="border-t-[6px] max-w-[50px] border-borderColor">
              <h2 id="heading" className="text-dropdownColor font-oxygen mt-3 w-[400px] font-bold text-[36px]">Our mission</h2>
            </div>
            <Image src={Mission} alt={Mission} className="mt-5"/>
            <div className="list">
              <ul>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  Deliver Environmentally Responsible Client Services
                </li>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  Provide Employees with an Attractive Working Environment
                </li>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  Be an Active Community Partner
                </li>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  Maintain High Ethical Standards
                </li>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  Drive Continuous Improvement
                </li>
              </ul>
              <ul>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  Freight Security
                </li>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  Air & Ocean Cargo Insurance
                </li>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  Our highly efficient customs brokerage
                </li>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  Clearance and compliance service
                </li>
                <li>
                  <Icon icon="lets-icons:done" className="doneIcon" />
                  We ensure complete security
                </li>
              </ul>
            </div>
          </div>
          <div className="partners paddingBottom mt-9">
            <div className="border-t-[6px] max-w-[50px] border-borderColor">
              <h2 id="heading" className="text-dropdownColor font-oxygen mt-3 w-[400px] font-bold text-[36px]">Our partners</h2>
            </div>
            {/* <div className="partnersImg">
              <Slider {...settings} className="sliderBox">
                {logos.map((logo, index) => (
                  <div key={index}>
                    <img src={logo} alt="logo" />
                  </div>
                ))}
              </Slider>
            </div> */}
            <div className="logoItems mt-9">
              <LogoCarousel />
            </div>
          </div>

          <div className="faq paddingBottom mt-9">
            <div className="border-t-[6px] max-w-[50px] border-borderColor">
              <h2 id="heading" className="text-dropdownColor font-oxygen mt-3 w-[600px] font-bold text-[32px]">Frequently asked questions</h2>
            </div>
            <div className="faqBox">
              {faqData.map((item, index) => (
                <div
                  className="faq-item"
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                >
                  <summary
                    onClick={() => toggleFAQ(index)}
                    style={{
                      backgroundColor:
                        openIndex === index ? "#3bc05c" : "#f5f7fa",
                      color: openIndex === index ? "#ffffff" : "#0c314d",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      fontFamily: "Oxygen",
                    }}
                  >
                    {item.question}
                    <span
                      className={`arrow ${openIndex === index ? "open" : ""}`}
                    >
                      <Icon icon="mingcute:down-line" />
                    </span>
                  </summary>
                  <p
                    style={{
                      maxHeight:
                        openIndex === index
                          ? `${itemsRef.current[index]?.scrollHeight}px`
                          : "0",
                      opacity: openIndex === index ? "1" : "0",
                      transition:
                        "max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease",
                      padding: openIndex === index ? "1.2rem 0" : "0",
                      color: "#999",
                      fontFamily: "Rubik",
                      fontSize: "14px",
                      lineHeight: "30px",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="btnBox ">
              <p>Still open questions?</p>

              <a href="#" className="faqButton">
                <span>Ask now</span>
                <Icon icon="tabler:arrow-right" className="buttonGreenIcon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contactNow mt-9">
          <h3>Not sure which solution fits your business needs?</h3>

          <a href="#" className="contactNowButton">
            <span className="contactText">Contact Now</span>
            <Icon icon="tabler:arrow-right" className="contactNowIcon" />
          </a>
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
    </>
  );
};

export default AboutUs;
