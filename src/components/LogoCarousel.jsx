import React from 'react';
import Slider from 'react-slick';
import University from '../assets/logo-smartuniversity-222x93.png'
import Motors from '../assets/logo-motors-222x93.png'
import MasterStudy from '../assets/logo-masterstudy-222x93.png'
import HappyChild from '../assets/logo-happychild-222x93.png'
import Consulting from '../assets/logo-consulting-222x93.png'
import Container from './Container';

function LogoCarousel() {
    // Array of your logo images
    const logos = [
        University,
        Motors,
        MasterStudy,
        HappyChild,
        Consulting,
    ];

    // Slick settings
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5, // Show 5 logos at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <Container>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index}>
                        <img src={logo} alt={`Logo ${index + 1}`} style={{ width: "100%", height: "auto" }} />
                    </div>
                ))}
            </Slider>
        </Container>
    );
}

export default LogoCarousel;
