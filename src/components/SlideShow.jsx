import React from "react";
import Slider from "react-slick";
import ReusableDiv from "./ReusableDiv";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container";
import "./Slideshow.css";
import Warehousing from '../assets/3-1-265x170.jpg'
import SeaFreight from '../assets/4-1-265x170.jpg'
import AirFreight from '../assets/5-265x170.jpg'
import RoadFreight from '../assets/Road freight.jpg'
import MultimodalTransportation from '../assets/Multimodal Transportation.jpg'
import CarTransportation from '../assets/Car Transportation.jpg'
import Cargo from '../assets/Cargo.jpg'
import Packaging from '../assets/Packaging.jpg'
import FreightF from '../assets/FreightF.jpg'
import SupplyChain from '../assets/Supply Chain.jpg'
const SlideShow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides visible at once
        slidesToScroll: 3,
    };

    const divsData = [
        { imageSrc: Warehousing, heading: "Warehousing", paragraph: "You can opt for dedicated platforms from the advantages related to shared surfaces, resources and equipment." },
        { imageSrc: SeaFreight, heading: "Sea freight", paragraph: "Sea-Air cargo is the last to be loaded and the first to be unloaded, reducing transshipment times and risk."},
        { imageSrc: AirFreight, heading: "Air freight", paragraph: "Our AIRFAST services have been designed for customers who need their goods delivered urgently."},
        { imageSrc: RoadFreight, heading: "Road Freight", paragraph: "To best support your ever-changing logistics needs, we are continuously evolving our transportation services."},
        { imageSrc: MultimodalTransportation, heading: "Multimodal transport", paragraph: "Combined rail road transport is particularly well suited to the shipping of hazardous goods since it reduces risk."},
        { imageSrc: CarTransportation, heading: "Car transportation", paragraph: "Provides a scalable and customizable solution for customers who have programs to retire outdated IT assets."},
        { imageSrc: Cargo, heading: "Cargo insurance", paragraph: "Provides a scalable and customizable solution for customers who have programs to retire outdated IT assets."},
        { imageSrc: Packaging, heading: "Packaging and Storage", paragraph: "Logistics Ground’s flexible model, using only quality carriers, means you benefit from improved service levels."},
        { imageSrc: FreightF, heading: "Freight Forwarding", paragraph: "Provides a scalable and customizable solution for customers who have programs. Integrated Road networks."},
        { imageSrc: SupplyChain, heading: "Supply Chain Solutions", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada efficitur magna, nec rutrum tellus malesuada eu."},
        { imageSrc: Warehousing, heading: "Warehousing", paragraph: "You can opt for dedicated platforms from the advantages related to shared surfaces, resources and equipment." },
        { imageSrc: SeaFreight, heading: "Sea freight", paragraph: "Sea-Air cargo is the last to be loaded and the first to be unloaded, reducing transshipment times and risk."},
        // Add 7 more divs with different data
    ];

    return (
        <Container>
            <Slider {...settings} className="custom-slick-slider">
                {divsData.map((div, index) => (
                    <ReusableDiv
                        key={index}
                        imageSrc={div.imageSrc}
                        heading={div.heading}
                        paragraph={div.paragraph}
                        buttonText={div.buttonText}
                        icon={div.icon}
                    />
                ))}
            </Slider>

        </Container>
    );
};

export default SlideShow;
