// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import './Posts.css'
import PostBloc from "./PostBloc";

export default function LatestPosts() {
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
      >
        <SwiperSlide><PostBloc /></SwiperSlide>
        <SwiperSlide><PostBloc /></SwiperSlide>
        <SwiperSlide><PostBloc /></SwiperSlide>
        <SwiperSlide><PostBloc /></SwiperSlide>
        <SwiperSlide><PostBloc /></SwiperSlide>
        <SwiperSlide><PostBloc /></SwiperSlide>
        <SwiperSlide><PostBloc /></SwiperSlide>
        <SwiperSlide><PostBloc /></SwiperSlide>
      </Swiper>
    </>
  )
}