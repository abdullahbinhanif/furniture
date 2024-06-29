import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
const ExploreMore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <span></span>,
  };
  return (
    <section className="mb-16 py-11 bg-[#FCF8F3] explore ">
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
          <Slider {...settings}>
            <div className="slide_items">
              <img src="/slide1.png" className="w-full h-full" alt="" />
            </div>
            <div className="slide_items">
              <img src="/slide2.png" className="w-full h-full" alt="" />
            </div>
            <div className="slide_items">
              <img src="/slide3.png" className="w-full h-full" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
