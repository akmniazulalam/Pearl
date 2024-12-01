import { useState } from "react";
import "./styles/Contact.css";
// import "./styles/styles.css";
import { Icon } from "@iconify-icon/react";
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
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Contact = () => {
  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6647583030735!2d-122.08674142575678!3d37.421398032439924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb1cd91f8617%3A0x1c8432b9340fdff!2s1600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2sbd!4v1731063969670!5m2!1sen!2sbd"
  );

  const addresses = [
    {
      country: "United States",
      address: "1600 Parkway, Mountain, CA 94043",
      phone: "+1 650-253-0000",
      email: "contact@companyusa.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6647583030735!2d-122.08674142575678!3d37.421398032439924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb1cd91f8617%3A0x1c8432b9340fdff!2s1600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2sbd!4v1731063969670!5m2!1sen!2sbd",
    },
    {
      country: "United Kingdom",
      address: "1-13 St Giles High St, London WC2H 8AG",
      phone: "+44 20 7946 0958",
      email: "contact@companyuk.co.uk",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.846312931951!2d-0.1296840247256625!3d51.516035510074104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b32c3168d39%3A0xa1792e96e815a206!2s1-13%20St%20Giles%20High%20St%2C%20London%20WC2H%208AB%2C%20UK!5e0!3m2!1sen!2sbd!4v1731065573046!5m2!1sen!2sbd",
    },
    {
      country: "Canada",
      address: "151 Charles St W, Kitchener, ON N2G 1H6",
      phone: "+1 519-576-2010",
      email: "contact@companyca.ca",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.4495629074886!2d-80.50077352535006!3d43.451210765473796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f565d4a1f1%3A0x6fd2b429b5b7aef5!2s151%20Charles%20St%20W%2C%20Kitchener%2C%20ON%20N2G%201H6%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731065626026!5m2!1sen!2sbd",
    },
    {
      country: "Australia",
      address: "48 Pirrama Road, Pyrmont NSW 2009, Sydney",
      phone: "+61 2 9374 4000",
      email: "contact@companyaus.com.au",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8914213208354!2d151.19321487429835!3d-33.866689018947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af45223457c3%3A0xd169529a1b9ece5a!2s48%20Pirrama%20Rd%2C%20Pyrmont%20NSW%202009%2C%20Australia!5e0!3m2!1sen!2sbd!4v1731065660650!5m2!1sen!2sbd",
    },
    {
      country: "Germany",
      address: "Unter den Linden 1, 10117 Berlin",
      phone: "+49 30 123456",
      email: "kontakt@companyde.de",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.8962116570488!2d13.395245475357719!3d52.5172173364372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851dc7a217857%3A0x4cba92b27725ea20!2sUnter%20den%20Linden%201%2C%2010117%20Berlin%2C%20Germany!5e0!3m2!1sen!2sbd!4v1731065694771!5m2!1sen!2sbd",
    },
    {
      country: "Japan",
      address: "Marunouchi, Chiyoda City, Tokyo 100-0005",
      phone: "+81 3-1234-5678",
      email: "info@companyjp.jp",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8237798529062!2d139.76468027413614!3d35.68134082997068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfebaa7df03%3A0x1b61338cc92c3b75!2s1-ch%C5%8Dme-9-1%20Marunouchi%2C%20Chiyoda%20City%2C%20Tokyo%20100-0005%2C%20Japan!5e0!3m2!1sen!2sbd!4v1731066089398!5m2!1sen!2sbd",
    },
  ];

  const handleAddressClick = (mapUrl) => {
    setMapUrl(mapUrl);
  };
  return (
    <section>
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
              <Heading h2Text={'Contacts'} h2Class={'text-white font-oxygen text-[42px] font-bold mt-9'} />
            </Container>
          </div>
        </div>
      </div>
      <Container>
        <Flex className={'mt-7 ml-3 mb-3'}>
          <Link to="/" className='text-[11px] font-rubik text-[#002040] pr-1 uppercase'>Home </Link>
          <Paragraph ptext={'  / Contacts'} className={'uppercase text-[11px] font-rubik text-[#888888]'} />
        </Flex>
        <hr />
      </Container>
      <div className="container w-[1130px] m-auto">
        <div className="formContainer">
          <div className="textArea">
            <div className="border-t-[6px] max-w-[50px] border-borderColor">
            <h2 id="heading" className="text-dropdownColor font-oxygen mt-3 w-[400px] font-bold text-[36px]">Get in touch</h2>
            </div>
            <p className="w-[400px] mt-[25px] mb-[50px] font-rubik text-[16px] leading-30 text-servicePColor">
              If you have any question about us or how we can support your
              business, please contact us directly by selecting from one of the
              below categories that is the most relevant to your inquiry and
              fill our short feedback form.
            </p>
          </div>
          <form action="#" method="post">
            <div className="inputBox">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name *"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail *"
                required
              />
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Message *"
                required
              />
            </div>
            <div className="buttonBox">
              <label>
                <input type="checkbox" name="subscribe" />
                Subscribe to our newsletter
              </label>
              <button type="submit" className="submitButton">
                <span className="hover:bg-[#002040]">Submit</span>
                <Icon icon="tabler:arrow-right" className="buttonWhiteIcon " />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="addressContainer">
        {/* Google Map Embed */}
        <iframe
          title="Google Map"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="swiperContainer">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              500: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {addresses.map((address, index) => (
              <SwiperSlide
                key={index}
                onClick={() => handleAddressClick(address.mapUrl)}
              >
                <h4>{address.country}</h4>
                <div>
                  <Icon icon="mi:location" className="my-icon" />
                  <p>{address.address}</p>
                </div>
                <div>
                  <Icon icon="gridicons:phone" className="my-icon" />
                  <p> {address.phone}</p>
                </div>
                <div>
                  <Icon icon="ic:outline-email" className="my-icon" />
                  <p>{address.email}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

export default Contact;
