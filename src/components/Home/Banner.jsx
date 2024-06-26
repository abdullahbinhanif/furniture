import React from "react";
import Button from "../../Button";

const Banner = () => {
  return (
    <section className="py-[150px] bg-[url('/banner.jpg')]">
      <div className="container">
        <div className="py-16 px-12 w-1/2 bg-[#FFF3E3] ml-auto rounded-xl font-primary">
          <h2 className=" text-lg font-semibold text-primary">New Arrival</h2>
          <h3 className="text-[52px] text-brand font-bold w-[410px] leading-[65px] pt-[4px] pb-[27px]">
            Discover Our New Collection
          </h3>
          <p className="text-lg text-primary font-medium pb-[46px]">
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
