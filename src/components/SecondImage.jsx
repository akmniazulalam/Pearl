import React, { useState } from 'react';
import { HiDownload } from "react-icons/hi";
import Worker from '../assets/4-1-77x77.jpg'
import BigWorker from '../assets/4-1.jpg'

const SecondImage = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    // Function to toggle fullscreen mode
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    }
    return (
        <div className="relative group w-[86%] cursor-pointer">
            {/* Normal Image Display */}
            <img
                src={Worker} // Replace with your image URL
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
                        src={BigWorker} // Same image URL
                        alt="Fullscreen"
                        className="max-w-full max-h-full"
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
                        href={BigWorker} // Same image URL for download
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

export default SecondImage