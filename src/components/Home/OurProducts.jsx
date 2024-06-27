import React from "react";
import ProductsItems from "../ProductsItems";
import { Link } from "react-router-dom";
const OurProducts = () => {
  return (
    <section className="pb-16 font-primary ">
      <div className="container">
        <h2 className=" text-[32px] text-primary font-bold text-center">
          Our Products
        </h2>
        <div className=" grid grid-cols-4 gap-8 ">
          <ProductsItems />
          <ProductsItems />
          <ProductsItems />
          <ProductsItems />
          <ProductsItems />
          <ProductsItems />
          <ProductsItems />
          <ProductsItems />
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/shop"
            className=" text-base text-brand font-semibold border border-brand py-3 px-14"
          >
            SHOW MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
