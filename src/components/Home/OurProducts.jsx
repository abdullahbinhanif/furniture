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
        <div className="grid lg:grid-cols-4 lg:gap-8">
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
            className=" text-base text-brand font-semibold border border-brand lg:py-3 lg:px-14 py-2 px-5 hover:bg-brand hover:text-white transition-all ease-linear duration-300"
          >
            SHOW MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
