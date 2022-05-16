import React from 'react'
import './Writers.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import WritersBloc from './WritersBloc';

export default function Writers() {

  const swiperRef = React.useRef(SwiperCore);

  const handleMouseEnter = () => {
    swiperRef.current.stopAutoplay();
  };

  const handleMouseLeave = () => {
    swiperRef.current.autoplay.start();
  };

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
        <SwiperSlide><WritersBloc id="1"/></SwiperSlide>
        <SwiperSlide><WritersBloc id="2"/></SwiperSlide>
        <SwiperSlide><WritersBloc id="3"/></SwiperSlide>
        <SwiperSlide><WritersBloc id="1"/></SwiperSlide>
        <SwiperSlide><WritersBloc id="2"/></SwiperSlide>
        <SwiperSlide><WritersBloc id="3"/></SwiperSlide>
        <SwiperSlide><WritersBloc id="1"/></SwiperSlide>
        <SwiperSlide><WritersBloc id="2"/></SwiperSlide>
        <SwiperSlide><WritersBloc id="3"/></SwiperSlide>
      </Swiper>
    </>
  )
}