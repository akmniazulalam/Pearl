import React, { useState } from 'react';
import { HiDownload } from "react-icons/hi";
import Trucks from '../assets/Fotolia_43887394_Subscription_Monthly_M-77x77.jpg'
import biGTrucks from '../assets/Fotolia_43887394_Subscription_Monthly_M.jpg'

const FourImage = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    // Function to toggle fullscreen mode
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };
  return (
    <div className="relative group w-[86%] cursor-pointer">
            {/* Normal Image Display */}
            <img
                src={Trucks} // Replace with your image URL
                alt="Sample"
                className=" object-cover"
            />
            <div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                onClick={toggleFullScreen}
            ></div>
            {/* Fullscreen Overlay */}
            {isFullScreen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
                    <img
                        src={biGTrucks} // Same image URL
                        alt="Fullscreen"
                        className="h-[350px] w-[600px]"
                    />
                    {/* Close Button */}
                    <button
                        onClick={toggleFullScreen}
                        className="absolute top-4 right-4 text-white text-lg"
                    >
                        Close
                    </button>
                    {/* Download Button */}
                    <a
                        href={biGTrucks} // Same image URL for download
                        download
                        className="absolute top-[22px] right-[80px] text-white text-lg"
                    >
                        <HiDownload />
                    </a>
                </div>
            )}
        </div>
  );
};

export default FourImage