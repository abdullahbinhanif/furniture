import React from "react";

const ProductsItems = () => {
  return (
    <div className="mt-8">
      <img
        className="w-full"
        src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        alt=""
      />
      <div className="font-primary px-[18px] pt-4 pb-8 bg-gray-100">
        <h2 className="text-2xl text-primary font-semibold">Syltherine</h2>
        <p className="text-base font-medium text-[#898989] py-2">
          Stylish cafe chair
        </p>
        <div className=" flex justify-between items-center gap-8">
          <h3 className=" text-primary text-lg font-semibold">BDT 2.500.000</h3>
          <p className="text-[#B0B0B0] font-normal text-base line-through ">
            BDT 3.500.000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
