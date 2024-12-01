import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiSolidQuoteRight } from "react-icons/bi";
import Flex from './Flex'
import Paragraph from './Paragraph'
import Nicole from '../assets/taneli-lahtinen-P3S-dCcKnzI-unsplash-scaled-64x64.jpg'
import Clients from '../assets/staff_1-64x64.jpg'
import Samuel from '../assets/Layer-719-64x64.jpg'
import Jonathan from '../assets/Снимок-экрана-2017-04-06-в-18.53.04-64x64.png'
import Heading from './Heading'
import Image from './Image'
import "./Slideshow.css";
import Container from './Container';

function MySlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex), // Update dot before the slide changes
        appendDots: (dots) => (
            <div
                style={{
                    position: 'absolute', // Use absolute positioning to place the dots
                    bottom: '-70px', // Adjust this value to move the dots up or down
                    left: '-30%', // Center the dots horizontally
                }}
            >
                {dots}
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: i === activeIndex ? '1px solid orangered' : '2px solid transparent', // Active dot border
                    backgroundColor: i === activeIndex ? '#58c746' : 'gray', // Active dot color
                    transition: 'all 0.3s ease', // Smooth border transition
                }}
            ></div>
        ),

    };

    return (
        <Container className={'w-[545px] m-0'}>
            <Slider {...settings}>
                {/* Section 1 */}
                <Flex>
                    <BiSolidQuoteRight className='pt-[42px] text-btnColor text-[72px]' />
                    <div className="textClient pt-2 pl-[8px]">
                        <Paragraph ptext={'I will recommend you to my colleagues. Without Transportation, we would have gone bankrupt by now. We have no regrets!'} className={'pt-9 w-[500px] font-rubik italic text-[22px] leading-36  text-italicFontColor'} />
                        <Flex className={'pt-7'}>
                            <Image src={Clients} alt={Clients} className={'h-[64px] w-[64px] rounded-full'} />
                            <div className="clientInfo pl-5 pt-2">
                                <Heading h6Text={'Kristin K.'} h6Class={'font-oxygen font-bold text-[14px] text-dropdownColor'} />
                                <Paragraph ptext={'Marketing Manager, MMedia LTD.'} className={'font-rubik pt-1 text-[13px] text-linkColor'} />
                            </div>
                        </Flex>
                    </div>
                </Flex>

                {/* Section 2 */}
                <Flex>
                    <BiSolidQuoteRight className='pt-[42px] text-btnColor text-[72px]' />
                    <div className="textClient pt-2 pl-[8px]">
                        <Paragraph ptext={'Considers problems as a challenge and enjoys finding creative yet appropriate solutions. Nicole is able to work out her own solutions, but also works well with a group to solve problems.'} className={'pt-9 w-[500px] font-rubik italic text-[22px] leading-36  text-italicFontColor'} />
                        <Flex className={'pt-7'}>
                            <Image src={Nicole} alt={Nicole} className={'h-[64px] w-[64px] rounded-full'} />
                            <div className="clientInfo pl-5 pt-2">
                                <Heading h6Text={'Nicole Matt'} h6Class={'font-oxygen font-bold text-[14px] text-dropdownColor'} />
                                <Paragraph ptext={'Founder, Matt&Others LTD.'} className={'font-rubik pt-1 text-[13px] text-linkColor'} />
                            </div>
                        </Flex>
                    </div>
                </Flex>

                {/* Section 3 */}
                <Flex>
                    <BiSolidQuoteRight className='pt-[42px] text-btnColor text-[72px]' />
                    <div className="textClient pt-2 pl-[8px]">
                        <Paragraph ptext={'This is due to their excellent service, competitive pricing and customer support. That’s becoming so distant and digital, it’s throughly refreshing to get such a personal touch.'} className={'pt-9 w-[500px] font-rubik italic text-[22px] leading-36  text-italicFontColor'} />
                        <Flex className={'pt-7'}>
                            <Image src={Jonathan} alt={Jonathan} className={'h-[64px] w-[64px] rounded-full'} />
                            <div className="clientInfo pl-5 pt-2">
                                <Heading h6Text={'Jonathan Adams'} h6Class={'font-oxygen font-bold text-[14px] text-dropdownColor'} />
                                <Paragraph ptext={'Founder, Great Wall Ltd.'} className={'font-rubik pt-1 text-[13px] text-linkColor'} />
                            </div>
                        </Flex>
                    </div>
                </Flex>

                <Flex>
                    <BiSolidQuoteRight className='pt-[42px] text-btnColor text-[72px]' />
                    <div className="textClient pt-2 pl-[8px]">
                        <Paragraph ptext={'We challenged to complete the project in just over five months. This was an incredibly fast-track schedule, given that retrofits of this scale, as we were told by our own advisors.'} className={'pt-9 w-[500px] font-rubik italic text-[22px] leading-36  text-italicFontColor'} />
                        <Flex className={'pt-7'}>
                            <Image src={Samuel} alt={Samuel} className={'h-[64px] w-[64px] rounded-full'} />
                            <div className="clientInfo pl-5 pt-2">
                                <Heading h6Text={'Samuel C. Hartnett'} h6Class={'font-oxygen font-bold text-[14px] text-dropdownColor'} />
                                <Paragraph ptext={'Founder & CTO MoveSmart Corp.'} className={'font-rubik pt-1 text-[13px] text-linkColor'} />
                            </div>
                        </Flex>
                    </div>
                </Flex>

                {/* Add more sections as needed */}
            </Slider>
        </Container>
    );
}

export default MySlider;
