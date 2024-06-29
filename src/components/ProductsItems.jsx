import React from "react";
import { CiShoppingBasket } from "react-icons/ci";

const ProductsItems = () => {
  return (
    <div className="mt-8 relative group  lg:w-full w-2/3 mx-auto ">
      <img
        loading="lazy"
        className="w-full"
        src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        alt=""
      />
      <div className="font-primary px-[18px] pt-4 pb-8 bg-gray-100">
        <h2 className="lg:text-2xl text-xl text-primary font-semibold">
          Syltherine
        </h2>
        <p className="lg:text-base text-sm font-medium text-[#898989] py-1 pb-4">
          Stylish cafe chair
        </p>
        <div className=" flex justify-between items-center lg:gap-0 ">
          <h3 className=" text-primary text-lg  font-semibold">
            BDT 2.500.000
          </h3>
          <p className="text-[#B0B0B0] font-normal  text-base line-through ">
            BDT 3.500.000
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.31)] flex items-center justify-center scale-0 group-hover:scale-100 transition-al ease-linear duration-500">
        <button className="text-brand text-base font-primary font-bold lg:py-3 lg:px-[52px] py-1 px-2 rounded-sm bg-[#f1f1f1da] inline-block">
          <CiShoppingBasket className="lg:text-3xl text-5xl overflow-hidden" />
        </button>
      </div>
    </div>
  );
};

export default ProductsItems;
