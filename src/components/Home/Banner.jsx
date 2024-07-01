import React from "react";
import Button from "../../Button";

const Banner = () => {
  return (
    <section className="py-[150px] md:px-0 lg:px-0 px-5 lg:w-full  bg-[url('/banner.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="container  ">
        <div className="pt-14 pb-9 px-10 lg:w-1/2 md:w-1/2   md:mx-80 lg:mx-0 bg-[#FFF3E3] lg:ml-auto rounded-xl font-primary">
          <h2 className=" text-lg  font-semibold text-primary">New Arrival</h2>
          <h3 className="lg:text-[52px]  text-3xl  text-brand font-bold  lg:w-[410px] md:w-[250px]  lg:leading-[65px] pt-[4px] pb-[27px]">
            Discover Our New Collection
          </h3>
          <p className="lg:text-lg md:w-[400px]  lg:w-[546px] text-primary font-medium pb-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button title="BUY NOW" path="/shop" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
