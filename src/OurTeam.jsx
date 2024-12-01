import { Icon } from "@iconify/react";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import "./styles/OurTeam.css";
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



const OurTeam = () => {

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in the viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section>
      <div className="banner bg-bgImgFive bg-no-repeat  bg-cover py-[150px] position: relative">
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
              <Heading h2Text={'Our team'} h2Class={'text-white font-oxygen text-[42px] font-bold mt-9'} />
            </Container>
          </div>
        </div>
      </div>
      <Container>
        <Flex className={'mt-7 ml-3 mb-3'}>
          <Link to="/" className='text-[11px] font-rubik text-[#002040] pr-1 uppercase'>Home </Link>
          <Paragraph ptext={'  / our team'} className={'uppercase text-[11px] font-rubik text-[#888888]'} />
        </Flex>
        <hr />
      </Container>


      <div className="container w-[1040px] m-auto mt-9">
        <div className="teamBox paddingTop paddingBottom">
          <div className="teamText flex">
            <div className="border-t-[6px] max-w-[50px] border-borderColor">
              <h2 id="heading" className="text-dropdownColor font-oxygen mt-3 w-[300px] font-bold text-[36px]">Meet our brilliant minds</h2>
            </div>
            <div className="teamParagraph w-[990px] pl-[272px]">
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
          </div>
          <div className="team">
            <div className="Member">
              <div className="memberBox">
                <img src="assets 2/member.jpg" alt="" />
                <div className="memberDetails">
                  <div className="memberTitle">
                    <h3>Sultan Malik oglu</h3>
                    <p>Senior Engineer</p>
                  </div>
                  <div className="contacts">
                    <div>
                      <Icon
                        icon="material-symbols:call"
                        style={{ fontSize: "1.3rem", color: "#d66000" }}
                      />
                      <a href="tel:+12122263127" className="contactOption">
                        <span>+1 212-226-3127</span>
                      </a>
                    </div>

                    <div>
                      <Icon
                        icon="foundation:mail"
                        style={{ color: "#d66000", fontSize: "1.3rem" }}
                      />
                      <a
                        href="mailto:sultan.malik@bestlogistic.com"
                        className="contactOption"
                      >
                        <span>sultan.malik@bestlogistic.com</span>
                      </a>
                    </div>
                    <div>
                      <Icon
                        icon="mdi:skype"
                        style={{ color: "#d66000", fontSize: "1.3rem" }}
                      />
                      <a
                        href="skype:sultan.malik?call"
                        className="contactOption"
                      >
                        <span>sultan.malik</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="socials">
                <a href="#">
                  <Icon
                    icon="ic:baseline-facebook"
                    style={{ color: "#0765ff" }}
                    className="memberIcon"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="ant-design:twitter-circle-filled"
                    style={{ color: "black" }}
                    className="memberIcon"
                  />
                </a>

                <a href="#">
                  <Icon
                    icon="entypo-social:linkedin-with-circle"
                    style={{ color: "#2486f0" }}
                    className="memberIcon"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:github"
                    style={{ color: "black" }}
                    className="memberIcon"
                  />
                </a>
              </div>
            </div>
            <div className="Member">
              <div className="memberBox">
                <img src="assets 2/member2.jpg" alt="" />
                <div className="memberDetails">
                  <div className="memberTitle">
                    <h3>Goerge Brolin</h3>
                    <p>Chairman & Chief</p>
                  </div>
                  <div className="contacts">
                    <div>
                      <Icon
                        icon="material-symbols:call"
                        style={{ fontSize: "1.3rem", color: "#d66000" }}
                      />
                      <a href="tel:+12122263127" className="contactOption">
                        <span>+1 212-226-3127</span>
                      </a>
                    </div>

                    <div>
                      <Icon
                        icon="foundation:mail"
                        style={{ color: "#d66000", fontSize: "1.3rem" }}
                      />
                      <a
                        href="mailto:sultan.malik@bestlogistic.com"
                        className="contactOption"
                      >
                        <span>sultan.malik@bestlogistic.com</span>
                      </a>
                    </div>
                    <div>
                      <Icon
                        icon="mdi:skype"
                        style={{ color: "#d66000", fontSize: "1.3rem" }}
                      />
                      <a
                        href="skype:sultan.malik?call"
                        className="contactOption"
                      >
                        <span>sultan.malik</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="socials">
                <a href="#">
                  <Icon
                    icon="ic:baseline-facebook"
                    style={{ color: "#0765ff" }}
                    className="memberIcon"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="ant-design:twitter-circle-filled"
                    style={{ color: "black" }}
                    className="memberIcon"
                  />
                </a>

                <a href="#">
                  <Icon
                    icon="entypo-social:linkedin-with-circle"
                    style={{ color: "#2486f0" }}
                    className="memberIcon"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:github"
                    style={{ color: "black" }}
                    className="memberIcon"
                  />
                </a>
              </div>
            </div>
            <div className="Member">
              <div className="memberBox">
                <img src="assets 2/member3.jpg" alt="" />
                <div className="memberDetails">
                  <div className="memberTitle">
                    <h3>Ethan Portman</h3>
                    <p>President of Finance</p>
                  </div>
                  <div className="contacts">
                    <div>
                      <Icon
                        icon="material-symbols:call"
                        style={{ fontSize: "1.3rem", color: "#d66000" }}
                      />
                      <a href="tel:+12122263127" className="contactOption">
                        <span>+1 212-226-3127</span>
                      </a>
                    </div>

                    <div>
                      <Icon
                        icon="foundation:mail"
                        style={{ color: "#d66000", fontSize: "1.3rem" }}
                      />
                      <a
                        href="mailto:sultan.malik@bestlogistic.com"
                        className="contactOption"
                      >
                        <span>sultan.malik@bestlogistic.com</span>
                      </a>
                    </div>
                    <div>
                      <Icon
                        icon="mdi:skype"
                        style={{ color: "#d66000", fontSize: "1.3rem" }}
                      />
                      <a
                        href="skype:sultan.malik?call"
                        className="contactOption"
                      >
                        <span>sultan.malik</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="socials">
                <a href="#">
                  <Icon
                    icon="ic:baseline-facebook"
                    style={{ color: "#0765ff" }}
                    className="memberIcon"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="ant-design:twitter-circle-filled"
                    style={{ color: "black" }}
                    className="memberIcon"
                  />
                </a>

                <a href="#">
                  <Icon
                    icon="entypo-social:linkedin-with-circle"
                    style={{ color: "#2486f0" }}
                    className="memberIcon"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:github"
                    style={{ color: "black" }}
                    className="memberIcon"
                  />
                </a>
              </div>
            </div>
            <div className="Member">
              <div className="memberBox">
                <img src="assets 2/member4.jpg" alt="" />
                <div className="memberDetails">
                  <div className="memberTitle">
                    <h3>Sultan Malik oglu</h3>
                    <p>Senior Engineer</p>
                  </div>
                  <div className="contacts">
                    <div>
                      <Icon
                        icon="material-symbols:call"
                        style={{ fontSize: "1.3rem", color: "#d66000" }}
                      />
                      <a href="tel:+12122263127" className="contactOption">
                        <span>+1 212-226-3127</span>
                      </a>
                    </div>

                    <div>
                      <Icon
                        icon="foundation:mail"
                        style={{ color: "#d66000", fontSize: "1.3rem" }}
                      />
                      <a
                        href="mailto:sultan.malik@bestlogistic.com"
                        className="contactOption"
                      >
                        <span>sultan.malik@bestlogistic.com</span>
                      </a>
                    </div>
                    <div>
                      <Icon
                        icon="mdi:skype"
                        style={{ color: "#d66000", fontSize: "1.3rem" }}
                      />
                      <a
                        href="skype:sultan.malik?call"
                        className="contactOption"
                      >
                        <span>sultan.malik</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="socials">
                <a href="#">
                  <Icon
                    icon="ic:baseline-facebook"
                    style={{ color: "#0765ff" }}
                    className="memberIcon"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="ant-design:twitter-circle-filled"
                    style={{ color: "black" }}
                    className="memberIcon"
                  />
                </a>

                <a href="#">
                  <Icon
                    icon="entypo-social:linkedin-with-circle"
                    style={{ color: "#2486f0" }}
                    className="memberIcon"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:github"
                    style={{ color: "black" }}
                    className="memberIcon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects" ref={sectionRef}>
        <div className="project">
          <Icon icon="grommet-icons:projects" className="projectIcon" />
          <div className="projectText">
            <h3>
              {startCount ? <CountUp start={0} end={320} duration={2} /> : 0}
            </h3>
            <p className="projectP">Projects Done</p>
          </div>
        </div>
        <div className="project">
          <Icon icon="fluent:globe-28-regular" className="projectIcon" />
          <div className="projectText">
            <h3>
              {startCount ? <CountUp start={0} end={72} duration={2} /> : 0}
            </h3>
            <p className="projectP">Clients Worldwide</p>
          </div>
        </div>
        <div className="project">
          <Icon icon="bitcoin-icons:car-outline" className="projectIcon" />
          <div className="projectText">
            <h3>
              {startCount ? <CountUp start={0} end={320} duration={2} /> : 0}
            </h3>
            <p className="projectP">Owned Vehicles</p>
          </div>
        </div>
        <div className="project">
          <Icon
            icon="fluent:people-community-16-regular"
            className="projectIcon"
          />
          <div className="projectText">
            <h3>
              {startCount ? <CountUp start={0} end={114} duration={2} /> : 0}
            </h3>
            <p className="projectP">People in Team</p>
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
    </section>
  );
};

export default OurTeam;
