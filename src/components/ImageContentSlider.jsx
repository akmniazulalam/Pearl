import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from './Heading'
import Paragraph from './Paragraph'
import { FaArrowRight } from "react-icons/fa6";
import { FaHeart, FaStar, FaCheck, FaUser } from "react-icons/fa";
import Button from './Button'
import Flex from './Flex'
import Container from './Container'
import myImage from '../assets/slide_1.jpg'
import myImageTwo from '../assets/slider_1.jpg'
import myImageThree from '../assets/slider_3.jpg'
import myImageFour from '../assets/slider_4.jpg'
import Plane from '../assets/plane.png'
import Boat from '../assets/boat.png'
import Forklift from '../assets/forklift.png'
import Truck from '../assets/truck.png'
const ImageContentSlider = ({ className }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    let sliderRef = React.useRef();
    let progressIntervalRef = useRef();
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => { setActiveSlide(newIndex); setProgress(0); },
    };

    useEffect(() => {
        // Clear any existing interval
        clearInterval(progressIntervalRef.current);

        // Calculate the interval step for a smooth progress bar
        const intervalDuration = 3000; // Match the autoplaySpeed in milliseconds
        const step = 100 / (intervalDuration / 30); // Calculate step size

        // Start a new interval to update the progress
        progressIntervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressIntervalRef.current); // Stop the interval when progress reaches 100%
                    return 100;
                }
                return prev + 1; // Increment progress
            });
        }, 30); // Adjust this value to control the speed of the progress bar

        // Cleanup interval on component unmount or slide change
        return () => clearInterval(progressIntervalRef.current);
    }, [activeSlide]);

    const handleDotClick = (index) => {
        setActiveSlide(index);
        sliderRef.current.slickGoTo(index); // Go to the selected slide
    };
    const textsAndImages = [
        { text: "Fullfilled & Shipped Fast", image: Plane, paragraph: "Air Freight", },
        { text: "Delivery, Move & Relocation", image: Boat, paragraph: "Sea Freight", },
        { text: "Transatlantic  Delivery", image: Forklift, paragraph: "Road Freight", },
        { text: "Secure  Warehousing", image: Truck, paragraph: "Warehousing", },
    ];
    const [isHovered, setIsHovered] = useState(false);
    // Slider content
    const slides = [
        {
            image: myImage,
            title: "Fullfilled & Shipped Fast",
            description: "Air Freight services include Next Flight Out (NFO), Next Day Early a.m., Next Day by 12PM, Next Day by 5PM, Second Day Air and Economy (General Freight).",
            buttonText: "Discover More",
        },
        {
            image: myImageThree,
            title: "Delivery, Move & Relocation ",
            description: " Logistic is a FMC licensed, as a NVOC carrier bonded, an ocean freight service contract holder, & ocean consolidator providing services to and from world destinations. ",
            buttonText: "Discover More",
        },
        {
            image: myImageTwo,
            title: "Transatlantic  Delivery ",
            description: "Express Trucking services for expedited freight delivery. We  feature rapid vehicle response times and direct service to all points across the U.S. and Canada.",
            buttonText: "Discover More",
        },
        {
            image: myImageFour,
            title: "Secure  Warehousing",
            description: "Warehousing and Distribution is at the core of 18 Wheels  Logistics and our expertise allows us to cut costs, improve performance and free up capital.",
            buttonText: "Discover More",
        },
    ];

    const buttonStyle = {
        backgroundColor: isHovered ? "#002040" : "#58c746", // Change color on hover
        transition: "background-color 0.3s ease", // Smooth transition
        marginTop: "48px",
        padding: "20px 35px",
        color: "#fff",
        fontFamily: "oxygen",
        fontWeight: "bold",
        fontSize: "16px",
        textDecoration: "none",


    };

    return (
        <div className={`slider-container ${className}`} style={{ width: "100%" }}>
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <div
                            className="slide-content"
                            style={{
                                position: "relative",
                                textAlign: "center",
                                color: "#fff",
                            }}
                            slick-next={{
                                right: '0px',
                            }}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="slider-image"
                                style={{ width: "100%", height: "900px" }}
                            />
                            <div
                                className="overlay"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.50)", // Adjust opacity for effect
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "#fff",
                                    textAlign: "center",
                                }}
                            >


                                <Container>
                                    <h1
                                        style={{
                                            fontFamily: "oxygen",
                                            fontWeight: "bold",
                                            fontSize: "90px",
                                            color: "#fff",
                                            lineHeight: "90px",
                                            marginTop: "70px",
                                            width: "62%",
                                            textAlign: "left",
                                        }}
                                    >{slide.title}</h1>
                                    <p
                                        style={{
                                            color: "#FFF",
                                            marginTop: "55px",
                                            width: index === 2 || index === 3 ? "50%" : "57%",
                                            fontFamily: "rubik",
                                            fontSize: "18px",
                                            lineHeight: "32px",
                                            textAlign: "left",
                                        }}
                                    >{slide.description}</p>
                                    <Flex>
                                        <a
                                            style={buttonStyle}
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        >
                                            {slide.buttonText}
                                        </a>
                                        <div className='bg-white mt-[48px] py-[18px] px-[22px]'><FaArrowRight className='text-btnColor mt-1 text-[19px]' /></div>
                                    </Flex>
                                </Container>

                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* Custom Divs for Navigation with Text and Icons */}
            <div className="custom-dots">
                {textsAndImages.map((item, index) => (
                    <div
                        key={index}
                        className={`custom-dot ${activeSlide === index ? "active" : ""}`}
                        onClick={() => handleDotClick(index)} // Handle click event
                    >
                        {/* Progress Bar */}
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{
                                    width: activeSlide === index ? `${progress}%` : "0%",
                                }}
                            ></div>
                        </div>
                        <img
                            src={item.image}
                            alt={item.text}
                            className={`custom-image ${activeSlide === index ? "image-active" : ""
                                }`}
                        /> {/* Render the image */}
                        <div className="text-items">
                            <p className="custom-paragraph">{item.paragraph}</p>
                            <span>{item.text}</span>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
        .slide {
          position: relative;
        }
        .custom-dots {
          display: flex;
          justify-content: center;
          margin-top: 0px;
          position: absolute;
          bottom: -58px;
          left: 156px;
        //   transform: translateX(-50%);
        }
        .custom-dot {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row; /* Icons and text stacked vertically */
          padding: 29px 0px 30px 25px; /* Set custom height */
          width: 260px;
          background-color: #002040;
          border: 1px solid transparent; /* Make all sides transparent initially */
          border-right: 1px solid rgba(230,230,230,.25);
          cursor: pointer;
          transition: background-color 0.3s;
          text-align: left;
          font-size: 18px;
          line-height: 24px;
          font-weight: 300;
          font-family: 'Rubik';
          color: #fff;
          position: relative;
        }
        .progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: transparent;
        }
        .progress {
          height: 100%;
          background-color: orangered;
          width: 0;
          transition: width .03s linear;
        }
        .custom-dot.active {
          background-color: #58c746;
          color: #fff;
        }
        .custom-dot img.custom-image {
          width: 79px; /* Set custom image width */
          height: 53px; /* Set custom image height */
          object-fit: cover; /* Adjust image fit */
          margin-bottom: 5px; /* Space between image and text */
          margin-right: 20px;
          filter: none; /* Default image color */
          transition: filter 0.3s;
        }
        .custom-dot img.custom-image.image-active {
          filter: brightness(0) invert(1); /* Make the image white */
        }
        .custom-dot span {
          margin-top: 5px; /* Space between image and text */
        }
        .custom-paragraph {
          font-size: 12px; /* Customize font size */
          color: #fff; /* Customize color */
          text-transform: uppercase;
          font-family: 'Rubik';
          letter-spacing: 3px;
        }
        .text-items {
          display: block;
        }  
      `}</style>

        </div>
    );
};

export default ImageContentSlider;
