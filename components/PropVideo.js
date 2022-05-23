import React from "react";

const PropVideo = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          
        

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Property in Video</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">Immerse yourself with this realistic walkthrough the property and its ammeneties</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">Immerse yourself with this realistic walkthrough the property and its ammeneties</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                    <img className="lg:block hidden w-full" src="../p_video.jpg" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" src="../p_video.jpg" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="../p_video.jpg" alt="people discussing on board" />
                </div>
            </div>
        </div>
    );
};

export default PropVideo;
