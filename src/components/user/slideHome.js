import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slideHome.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCore from 'swiper';
export function SlideShow() {
    SwiperCore.use([Autoplay])
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={2500}
                pagination={{
                    clickable: true,
                }}
                navigation={true}

                modules={[Autoplay, Navigation]}

                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="https://theme.hstatic.net/200000510041/1000879666/14/ms_banner_img2.jpg?v=228"
                    ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://theme.hstatic.net/200000510041/1000879666/14/ms_banner_img3.jpg?v=228"></img>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
