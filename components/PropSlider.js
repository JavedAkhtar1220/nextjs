import React, { useRef, useState } from "react";
// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

export default function PropSlider() {
  return (
    <div >
      <div className="flex p-5 flex-col items-start lg:items-center justify-between ">
        
        <div className="mainDiv pl-4 md:pl-6 ">
          <div className="h-5 mt-6 mb-4 md:mt-0 lg:mb-0 flex justify-end items-end space-x-6 ">
            <button aria-label="back"  className=" swiper-button-prev">
              <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/content_9_svg1.svg" alt="back" />
            </button>
            <button aria-label="next"  className=" swiper-button-next">
              <img className=" transform rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/content_9_svg1.svg" alt="next" />
            </button>
          </div>
          <Swiper
            slidesPerView={'auto'} slidesPerGroupSkip={3} grabCursor={true} loopFillGroupWithBlank={true} loop={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}

          breakpoints={{
            // when window width is >= 320px
            "320": {
            slidesPerView: "2",
            spaceBetween: 24,
            },
            // when window width is >= 480px
            "480": {
            slidesPerView: "2",
            spaceBetween: 24,
            },
            // when window width is >= 640px
            "640": {
            slidesPerView: "3",
            spaceBetween: 24,
            },
            "1024": {
                slidesPerView: "4",
            spaceBetween: 32,
            },
            "1336": {
            slidesPerView: 4,
            spaceBetween: 32
            }
          }}
           className="swiper mySwiper">
              <SwiperSlide className="swiper-slide shadow-xl mb-10 mt-5  rounded-xl ">
                <div className="flex flex-col max-h-64 space-y-5">
                  <div className="rounded-xl  group cursor-pointer relative flex justify-center items-center">
                    <img className="rounded-xl max-h-64 min-h-64" src="p1.jpg" alt="man" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide shadow-xl mb-10 mt-5 rounded-xl ">
                <div className="flex flex-col max-h-64 space-y-4">
                  <div className="rounded-xl  group cursor-pointer relative flex justify-center items-center">
                    <img className="rounded-xl max-h-64 min-h-64" src="../p2.jpg" alt="Barmond Ave" />
                  </div>
                 
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide shadow-xl mb-10 mt-5  rounded-xl ">
                <div className="flex flex-col max-h-64 space-y-4">
                  <div className="rounded-xl  group cursor-pointer relative flex justify-center items-center">
                    <img className="rounded-xl max-h-64 min-h-64 " src="../p3.jpg" alt="Sheppered St" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide shadow-xl mb-10 mt-5  rounded-xl ">
                <div className="flex flex-col max-h-64 min-h-64 space-y-4">
                  <div className="rounded-xl  group cursor-pointer relative flex justify-center items-center">
                    <img className="rounded-xl max-h-64 min-h-64" src="../p4.jpg" alt="Sheppered St" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <style>
{`
.mainDiv {
position: relative;
width: 100%
}

.swiper-button-next::after,
.swiper-button-prev::after {
    content: "";
}

.swiper-wrapper{
    display: flex;
    align-items: center;
} 

.swiper-button-next,
.swiper-button-prev {
    position: relative;
    height: 24px;
    width: 24px;
}

.swiper {
  
    height: 100%;
}
.swiper-slide:nth-child(n) {
width: 70%;
}

.swiper-slide:nth-child(2n) {
width: 70%;
}

@media (min-width: 768px) { 

.swiper-slide:nth-child(n) {
width: 35%;
}

.swiper-slide:nth-child(2n) {
width: 35%;
}
}
@media (min-width: 1024px) { 
.mainDiv {
position: relative;
height: 100%;
padding: 20px;
width: 70%
} 

.swiper-button-next,
.swiper-button-prev {
    position: relative;
    height: 32px;
    width: 32px;
}
.swiper-slide:nth-child(n) {
width: 40%;
}

.swiper-slide:nth-child(2n) {
width: 40%;
}
.swiper-slide:nth-child(3n) {
width: 40%;
}
}

@media (min-width: 1536px) { 
.mainDiv {
position: relative;
height: 100%;
padding: 40px;
width: 75%
} 

.swiper-button-next,
.swiper-button-prev {
    height: 40px;
    width: 40px;
}

.swiper-slide:nth-child(n) {
width: 30%;
}

.swiper-slide:nth-child(2n) {
width: 30%;
}
.swiper-slide:nth-child(3n) {
width: 30%;
}
.swiper-slide:nth-child(4n) {
width: 30%;
}
}   

.swiper-slide {
    
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide img {
   
    width: 660px;
    object-fit: cover;
}


`}

</style>
</div>



  )
}
