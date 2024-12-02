import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MapComponent.css'; // Import your custom styles
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import { MdLocationPin } from "react-icons/md";
import IconLocation from './location1.png'
import Paragraph from './Paragraph'
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
const MapComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        // Initialize Map 1 (London, Berlin, Madrid)
        if (L.DomUtil.get('map1') !== null) {
            L.DomUtil.get('map1')._leaflet_id = null;
        }
        const map1 = L.map('map1', {
            center: [51.509865, -0.118092], // Default center on London
            zoom: 4,
            zoomControl: true, // Enable default zoom control
            attributionControl: false,
            worldCopyJump: true, // Allow smooth panning around the world
            maxBoundsViscosity: 1.0, // No boundaries for smooth dragging
            minZoom: 2, // Minimum zoom to explore the world
            maxZoom: 18, // Maximum zoom for detailed map
            crs: L.CRS.EPSG3857, // Standard projection for a global map
        });


        // Add fullscreen control only to top-right
        L.control.fullscreen({
            position: 'topright',
        }).addTo(map1);

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconUrl: IconLocation, // Remove default icon URL
            iconRetinaUrl: '', // Remove retina icon
            shadowUrl: '', // Remove shadow
            iconSize: [60, 60],
        });
        

        // Base Layers for Street View and Satellite
        const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
        });

        const satelliteLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '© Satellite contributors',
        });

        // Initial map view - Street View
        streetLayer.addTo(map1);

        // Locations for the first map
        const locations1 = [
            { lat: 51.509865, lng: -0.118092, name: 'London Branch' },
            { lat: 52.520008, lng: 13.404954, name: 'Berlin Branch' },
            { lat: 40.416775, lng: -3.703790, name: 'Madrid Branch' },
        ];

        locations1.forEach(location => {
            L.marker([location.lat, location.lng])
                .addTo(map1)
                .bindPopup(location.name);
        });

        // Toggle between Street View and Satellite View buttons
        const toggleMapView = (layer) => {
            if (map1.hasLayer(streetLayer) && layer === 'satellite') {
                map1.removeLayer(streetLayer);
                satelliteLayer.addTo(map1);
            } else if (map1.hasLayer(satelliteLayer) && layer === 'street') {
                map1.removeLayer(satelliteLayer);
                streetLayer.addTo(map1);
            }
        };

        // Initialize buttons container with flexbox
        const buttonContainer = L.DomUtil.create('div', 'leaflet-bar');
        buttonContainer.style.position = 'absolute';
        buttonContainer.style.top = '10px';
        buttonContainer.style.left = '60px';
        buttonContainer.style.display = 'flex';
        buttonContainer.style.flexDirection = 'row';
        buttonContainer.style.gap = '0px';
        buttonContainer.style.zIndex = 9999;

        // Map View Button (Street View)
        const mapButton = L.DomUtil.create('button', 'leaflet-bar');
        mapButton.innerHTML = 'Map'; // Initially "Map" button for Street View
        mapButton.onclick = () => toggleMapView('street');
        mapButton.style.backgroundColor = 'white';
        // mapButton.style.border = '1px solid #ccc';
        mapButton.style.padding = '5px';
        mapButton.style.cursor = 'pointer';
        mapButton.style.flex = '1';
        mapButton.title = 'Toggle to Street View';

        // Satellite View Button
        const satelliteButton = L.DomUtil.create('button', 'leaflet-bar');
        satelliteButton.innerHTML = 'Satellite'; // Initially "Satellite" button for Satellite View
        satelliteButton.onclick = () => toggleMapView('satellite');
        satelliteButton.style.backgroundColor = 'white';
        // satelliteButton.style.border = '1px solid #ccc';
        satelliteButton.style.padding = '5px';
        satelliteButton.style.cursor = 'pointer';
        satelliteButton.style.flex = '1';
        satelliteButton.title = 'Toggle to Satellite View';

        buttonContainer.appendChild(mapButton);
        buttonContainer.appendChild(satelliteButton);

        map1.getContainer().appendChild(buttonContainer);




        // Initialize Map 2 (Los Angeles, New York, Miami)
        if (L.DomUtil.get('map2') !== null) {
            L.DomUtil.get('map2')._leaflet_id = null;
        }
        const map2 = L.map('map2', {
            center: [34.052235, -118.243683], // Default center on Los Angeles
            zoom: 4,
            zoomControl: true, // Enable default zoom control
            attributionControl: false,
            worldCopyJump: true, // Allow smooth panning around the world
            maxBoundsViscosity: 1.0, // No boundaries for smooth dragging
            minZoom: 2, // Minimum zoom to explore the world
            maxZoom: 18, // Maximum zoom for detailed map
            crs: L.CRS.EPSG3857, // Standard projection for a global map
        });

        // Add fullscreen control only to top-right
        L.control.fullscreen({
            position: 'topright',
        }).addTo(map2);

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconUrl: IconLocation, // Remove default icon URL
            iconRetinaUrl: '', // Remove retina icon
            shadowUrl: '', // Remove shadow
            iconSize: [60, 60],
        });

        // Base Layers for Street View and Satellite
        const streetLayer2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
        });

        const satelliteLayer2 = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '© Satellite contributors',
        });

        // Initial map view - Street View
        streetLayer2.addTo(map2);

        // Locations for the second map
        const locations2 = [
            { lat: 34.052235, lng: -118.243683, name: 'Los Angeles Branch' },
            { lat: 40.712776, lng: -74.005974, name: 'New York Branch' },
            { lat: 25.761681, lng: -80.191788, name: 'Miami Branch' },
        ];

        locations2.forEach(location => {
            L.marker([location.lat, location.lng])
                .addTo(map2)
                .bindPopup(location.name);
        });

        // Toggle between Street View and Satellite View buttons for Map 2
        const toggleMapView2 = (layer) => {
            if (map2.hasLayer(streetLayer2) && layer === 'satellite') {
                map2.removeLayer(streetLayer2);
                satelliteLayer2.addTo(map2);
            } else if (map2.hasLayer(satelliteLayer2) && layer === 'street') {
                map2.removeLayer(satelliteLayer2);
                streetLayer2.addTo(map2);
            }
        };

        // Initialize buttons container for Map 2 with flexbox
        const buttonContainer2 = L.DomUtil.create('div', 'leaflet-bar');
        buttonContainer2.style.position = 'absolute';
        buttonContainer2.style.top = '10px';
        buttonContainer2.style.left = '60px';
        buttonContainer2.style.display = 'flex';
        buttonContainer2.style.flexDirection = 'row';
        buttonContainer2.style.gap = '0px';
        buttonContainer2.style.zIndex = 9999;

        // Map View Button for Map 2 (Street View)
        const mapButton2 = L.DomUtil.create('button', 'leaflet-bar');
        mapButton2.innerHTML = 'Map'; // Initially "Map" button for Street View
        mapButton2.onclick = () => toggleMapView2('street');
        mapButton2.style.backgroundColor = 'white';
        // mapButton2.style.border = '1px solid #ccc';
        mapButton2.style.padding = '5px';
        mapButton2.style.cursor = 'pointer';
        mapButton2.style.flex = '1';
        mapButton2.title = 'Toggle to Street View';

        // Satellite View Button for Map 2
        const satelliteButton2 = L.DomUtil.create('button', 'leaflet-bar');
        satelliteButton2.innerHTML = 'Satellite'; // Initially "Satellite" button for Satellite View
        satelliteButton2.onclick = () => toggleMapView2('satellite');
        satelliteButton2.style.backgroundColor = 'white';
        // satelliteButton2.style.border = '1px solid #ccc';
        satelliteButton2.style.padding = '5px';
        satelliteButton2.style.cursor = 'pointer';
        satelliteButton2.style.flex = '1';
        satelliteButton2.title = 'Toggle to Satellite View';

        buttonContainer2.appendChild(mapButton2);
        buttonContainer2.appendChild(satelliteButton2);

        map2.getContainer().appendChild(buttonContainer2);
    }, []);

    // Slider settings for displaying maps
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex), // Update dot before the slide changes
        appendDots: (dots) => (
            <div
                style={{
                    position: 'absolute', // Use absolute positioning to place the dots
                    bottom: '100px', // Adjust this value to move the dots up or down
                    right: '130px', // Center the dots horizontally
                    width: '10px',
                    fontSize: '5px',
                }}
            >
                {dots}
            </div>),
        customPaging: (i) => (
            <div
                style={{
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    border: i === activeIndex ? '1px solid orangered' : '2px solid transparent', // Active dot border
                    backgroundColor: i === activeIndex ? 'transparent' : 'gray', // Active dot color
                    transition: 'all 0.3s ease', // Smooth border transition
                }}
            ></div>
        ),
    };

    return (
        
        <Slider {...settings}>
            <div>
                <div id="map1" style={{ height: '750px', width: '100%' }}>
                    {/* Map 1 Implementation */}
                    <div className="gmapOne py-[55px] cursor-auto">
                        <Container>
                            <Flex className={'justify-between'}>
                                <div className="glitchesOne pr-[60px] border-r-[1px] border-addressColor">
                                    <Heading h5Text={'Satellite Office'} h5Class={'font-oxygen uppercase text-[14px] text-white font-bold pb-5'} />
                                    <div className="office pb-3">
                                        <Flex>
                                            <MdLocationPin className='text-[19px] text-addressColor' />
                                            <Paragraph ptext={'14 Tottenham Road, N1 4EP, London, United Kingdom'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="phone pb-3">
                                        <Flex>
                                            <FaMobileScreenButton className='text-[16px] text-addressColor' />
                                            <Paragraph ptext={'+1 212-226-3126'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="email pb-3">
                                        <Flex>
                                            <MdOutlineMailOutline className='text-[19px] pt-[3px] text-addressColor' />
                                            <Link to={'mailto:head@transportation.com'} className='font-rubik pl-2 w-[250px] text-[14px] text-addressColor'>head@transportation.com</Link>
                                        </Flex>
                                    </div>
                                </div>
                                <div className="glitchesOne pr-[60px] border-r-[1px] border-addressColor">
                                    <Heading h5Text={'Germany'} h5Class={'font-oxygen uppercase text-[14px] text-white font-bold pb-5'} />
                                    <div className="office pb-3">
                                        <Flex>
                                            <MdLocationPin className='text-[19px] text-addressColor' />
                                            <Paragraph ptext={'148 Commercity Isola Road, M1 R43 Berlin, Germany'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="phone pb-3">
                                        <Flex>
                                            <FaMobileScreenButton className='text-[16px] text-addressColor' />
                                            <Paragraph ptext={'+3 864-784-4848'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="email pb-3">
                                        <Flex>
                                            <MdOutlineMailOutline className='text-[19px] pt-[3px] text-addressColor' />
                                            <Link to={'mailto:satellite@transportation.com'} className='font-rubik pl-2 w-[250px] text-[14px] text-addressColor'>satellite@transportation.com</Link>
                                        </Flex>
                                    </div>
                                </div>
                                <div className="glitchesOne">
                                    <Heading h5Text={'Spain'} h5Class={'font-oxygen uppercase text-[14px] text-white font-bold pb-5'} />
                                    <div className="office pb-3">
                                        <Flex>
                                            <MdLocationPin className='text-[19px] text-addressColor' />
                                            <Paragraph ptext={'10 Via Della Consordia Road, S3 7ME Madrid, Spain'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="phone pb-3">
                                        <Flex>
                                            <FaMobileScreenButton className='text-[16px] text-addressColor' />
                                            <Paragraph ptext={'+1 212-226-3126'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="email pb-3">
                                        <Flex>
                                            <MdOutlineMailOutline className='text-[19px] pt-[3px] text-addressColor' />
                                            <Link to={'mailto:palmagency@transportation.com'} className='font-rubik pl-2 w-[250px] text-[14px] text-addressColor'>palmagency@transportation.com</Link>
                                        </Flex>
                                    </div>
                                </div>
                            </Flex>
                        </Container>
                    </div>

                </div>
            </div>
            <div>
                <div id="map2" style={{ height: '750px', width: '100%' }}>
                    {/* Map 2 Implementation */}
                    <div className="gmapTwo py-[55px] cursor-auto">
                        <Container>
                            <Flex className={'justify-between'}>
                                <div className="glitchesOne pr-[60px] border-r-[1px] border-addressColor">
                                    <Heading h5Text={'United States - Head Quarter'} h5Class={'font-oxygen uppercase text-[14px] text-white font-bold pb-5'} />
                                    <div className="office pb-3">
                                        <Flex>
                                            <MdLocationPin className='text-[19px] text-addressColor' />
                                            <Paragraph ptext={'14 Mao Road, N1 4EP, Los Angelos, USA'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="phone pb-3">
                                        <Flex>
                                            <FaMobileScreenButton className='text-[16px] text-addressColor' />
                                            <Paragraph ptext={'+1 212-226-3126'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="email pb-3">
                                        <Flex>
                                            <MdOutlineMailOutline className='text-[19px] pt-[3px] text-addressColor' />
                                            <Link to={'mailto:head@transportation.com'} className='font-rubik pl-2 w-[250px] text-[14px] text-addressColor'>head@transportation.com</Link>
                                        </Flex>
                                    </div>
                                </div>
                                <div className="glitchesOne pr-[60px] border-r-[1px] border-addressColor">
                                    <Heading h5Text={'United States'} h5Class={'font-oxygen uppercase text-[14px] text-white font-bold pb-5'} />
                                    <div className="office pb-3">
                                        <Flex>
                                            <MdLocationPin className='text-[19px] text-addressColor' />
                                            <Paragraph ptext={'148 Commercity Isola Road, M1 R43 New York, USA'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="phone pb-3">
                                        <Flex>
                                            <FaMobileScreenButton className='text-[16px] text-addressColor' />
                                            <Paragraph ptext={'+3 864-784-4848'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="email pb-3">
                                        <Flex>
                                            <MdOutlineMailOutline className='text-[19px] pt-[3px] text-addressColor' />
                                            <Link to={'mailto:satellite@transportation.com'} className='font-rubik pl-2 w-[250px] text-[14px] text-addressColor'>satellite@transportation.com</Link>
                                        </Flex>
                                    </div>
                                </div>
                                <div className="glitchesOne">
                                    <Heading h5Text={'Warehousing'} h5Class={'font-oxygen uppercase text-[14px] text-white font-bold pb-5'} />
                                    <div className="office pb-3">
                                        <Flex>
                                            <MdLocationPin className='text-[19px] text-addressColor' />
                                            <Paragraph ptext={'10 Via Della Consordia Road, S3 7ME Miami, USA'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="phone pb-3">
                                        <Flex>
                                            <FaMobileScreenButton className='text-[16px] text-addressColor' />
                                            <Paragraph ptext={'+1 212-226-3126'} className={'font-rubik pl-2 w-[250px] text-[14px] text-addressColor'} />
                                        </Flex>
                                    </div>
                                    <div className="email pb-3">
                                        <Flex>
                                            <MdOutlineMailOutline className='text-[19px] pt-[3px] text-addressColor' />
                                            <Link to={'mailto:warehouse@transportation.com'} className='font-rubik pl-2 w-[250px] text-[14px] text-addressColor'>warehouse@transportation.com</Link>
                                        </Flex>
                                    </div>
                                </div>
                            </Flex>
                        </Container>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default MapComponent;







