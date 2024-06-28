import React from "react";
const Browse = () => {
  return (
    <section className="py-[56px] ">
      <div className="container font-primary">
        <div className="pb-16">
          <h2 className="text-[32px] text-primary font-bold text-center">
            Browse The Range
          </h2>
          <p className=" lg:text-xl text-secondary font-normal text-center sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-5">
          <div className="w-1/3">
            <img src="/public/Dining.png" className="w-full" alt="Dining" />
            <p className=" text-2xl text-primary text-center font-semibold mt-8">
              Dining
            </p>
          </div>
          <div className="w-1/3">
            <img src="/public/Living.png" className="w-full" alt="Living" />
            <p className=" text-2xl text-primary text-center font-semibold mt-8">
              Living
            </p>
          </div>
          <div className="w-1/3">
            <img src="/public/Bedroom.png" className="w-full" alt="Bedroom" />
            <p className=" text-2xl text-primary text-center font-semibold mt-8">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
