import React from "react";

import { FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const ExploreMore = () => {
  return (
    <section className="mb-16 py-11 bg-[#FCF8F3] ">
      <div className="container flex gap-10 items-center">
        <div className="w-2/5">
          <h2 className="text-4xl font-bold font-primary text-[#3A3A3A] w-[410px]">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-base text-secondary font-medium font-primary w-[368px] pt-[7px] pb-6 ">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="text-base font-semibold font-primary bg-brand text-white py-[12px] px-9">
            Explore More
          </button>
        </div>
        <div className="w-3/5">
          <Swiper
            spaceBetween={24}
            slidesPerView={2.3}
            onSlideChange={() => "slide change"}
            onSwiper={(swiper) => swiper}
          >
            <SwiperSlide>
              <img src="/slide1.png" className="h-[582px] w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slide1.png" className="h-[486px] w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slide1.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
