import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
const ExploreMore = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 400,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <span></span>,
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    // <section className="mb-16 py-11 bg-[#FCF8F3] explore ">
    //   <div className="container flex gap-10 items-center">
    //     <div className="w-2/5">
    //       <h2 className="text-4xl font-bold font-primary text-[#3A3A3A] w-[410px]">
    //         50+ Beautiful rooms inspiration
    //       </h2>
    //       <p className="text-base text-secondary font-medium font-primary w-[368px] pt-[7px] pb-6 ">
    //         Our designer already made a lot of beautiful prototipe of rooms that
    //         inspire you
    //       </p>
    //       <button className="text-base font-semibold font-primary bg-brand text-white py-[12px] px-9">
    //         Explore More
    //       </button>
    //     </div>
    //     <div className="w-3/5">
    //       <Slider {...settings}>
    //         <div className="slide_items">
    //           <img src="/slide1.png" className="w-full h-full" alt="" />
    //         </div>
    //         <div className="slide_items">
    //           <img src="/slide2.png" className="w-full h-full" alt="" />
    //         </div>
    //         <div className="slide_items">
    //           <img src="/slide3.png" className="w-full h-full" alt="" />
    //         </div>
    //       </Slider>
    //     </div>
    //   </div>
    // </section>
    <section className="mb-16 py-11 bg-[#FCF8F3] explore">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center px-5 lg:px-0">
        <div className="w-full lg:w-2/5">
          <h2 className="text-3xl lg:text-4xl font-bold font-primary text-[#3A3A3A] lg:w-[410px]">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-base lg:text-lg text-secondary font-medium font-primary lg:w-[368px] pt-3 lg:pt-6 pb-6">
            Our designers have created a variety of beautiful room prototypes to
            inspire you.
          </p>
          <button className="text-base lg:text-lg font-semibold font-primary bg-brand text-white py-3 lg:py-[12px] px-9 lg:px-12">
            Explore More
          </button>
        </div>
        <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
          <Slider {...settings}>
            <div className="slide_items">
              <img
                src="/slide1.png"
                className="w-full h-auto lg:h-full rounded-lg"
                alt=""
              />
            </div>
            <div className="slide_items">
              <img
                src="/slide2.png"
                className="w-full h-auto lg:h-full rounded-lg"
                alt=""
              />
            </div>
            <div className="slide_items">
              <img
                src="/slide3.png"
                className="w-full h-auto lg:h-full rounded-lg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
