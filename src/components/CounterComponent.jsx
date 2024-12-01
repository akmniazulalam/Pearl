import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import CountUp from 'react-countup';
import ProjectsDone from '../assets/ProjectsDone.png'
import WorldWide from '../assets/WorldWide.png'
import Vehicles from '../assets/Vehicles.png'
import Peoples from '../assets/Peoples.png'
import Image from './Image';
import Flex from './Flex';
import CounterHeading from './CounterHeading';
import Paragraph from './Paragraph';
import { VscProject } from "react-icons/vsc";

function CounterComponent() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger when it comes into view the first time
        threshold: 1,     // Trigger when 50% of the element is visible
    });
    return (
        <>
            <Flex className={'justify-between'}>
                <div>
                    <Flex>
                        <Image src={ProjectsDone} alt={ProjectsDone} className={'h-[100%]'} />
                        <div className='pl-7 pt-2'>
                            <div ref={ref}>
                                {inView && (
                                    <CountUp start={0} end={320} duration={3} separator="," decimals={0} className={'text-dropdownColor font-black font-rubik text-[42px]'} />
                                )}
                            </div>
                            {/* <CounterHeading startNumber={0} endNumber={320} duration={3} className={'text-dropdownColor font-black font-rubik text-[42px]'} /> */}
                            <Paragraph ptext={'Projects Done'} className={'text-dropdownColor font-rubik text-[16px]'} />
                        </div>
                    </Flex>
                </div>
                <div>
                    <Flex>
                        <Image src={WorldWide} alt={WorldWide} className={'h-[100%]'} />
                        <div className='pl-7 pt-2'>
                            <div ref={ref}>
                                {inView && (
                                    <CountUp start={0} end={72} duration={3} separator="," decimals={0} className={'text-dropdownColor font-black font-rubik text-[42px]'} />
                                )}
                            </div>
                            {/* <CounterHeading startNumber={0} endNumber={72} duration={3} className={'text-dropdownColor font-black font-rubik text-[42px]'} /> */}
                            <Paragraph ptext={'Clients Worldwide'} className={'text-dropdownColor font-rubik text-[16px]'} />
                        </div>
                    </Flex>
                </div>
                <div>
                    <Flex>
                        <Image src={Vehicles} alt={Vehicles} className={'h-[100%]'} />
                        <div className='pl-7 pt-2'>
                            <div ref={ref}>
                                {inView && (
                                    <CountUp start={0} end={153} duration={3} separator="," decimals={0} className={'text-dropdownColor font-black font-rubik text-[42px]'} />
                                )}
                            </div>
                            {/* <CounterHeading startNumber={0} endNumber={153} duration={3} className={'text-dropdownColor font-black font-rubik text-[42px]'} /> */}
                            <Paragraph ptext={'Owned Vehicles'} className={'text-dropdownColor font-rubik text-[16px]'} />
                        </div>
                    </Flex>
                </div>
                <div>
                    <Flex>
                        <Image src={Peoples} alt={Peoples} className={'h-[100%]'} />
                        <div className='pl-7 pt-2'>
                            <div ref={ref}>
                                {inView && (
                                    <CountUp start={0} end={114} duration={3} separator="," decimals={0} className={'text-dropdownColor font-black font-rubik text-[42px]'} />
                                )}
                            </div>
                            {/* <CounterHeading startNumber={0} endNumber={114} duration={3} className={'text-dropdownColor font-black font-rubik text-[42px]'} /> */}
                            <Paragraph ptext={'People in Team'} className={'text-dropdownColor font-rubik text-[16px]'} />
                        </div>
                    </Flex>
                </div>
            </Flex>
        </>
    );
}

export default CounterComponent;
