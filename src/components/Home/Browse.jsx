import React from "react";
import browse1 from "../../../public/Dining.png";
import browse2 from "../../../public/Living.png";
import browse3 from "../../../public/Bedroom.png";
const Browse = () => {
  return (
    <section className="py-[56px] ">
      <div className="container font-primary">
        <div className="lg:pb-16 pb-6">
          <h2 className="lg:text-[32px] text-xl sm:text-2xl text-primary font-bold text-center">
            Browse The Range
          </h2>
          <p className="lg:text-xl text-lg   text-secondary font-normal text-center sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="lg:flex gap-5 ">
          <div className="lg:w-1/3 w-2/3 mx-auto">
            <img loading="lazy" src={browse1} className="w-full" alt="Dining" />
            <p className=" lg:text-2xl text-primary text-xl  text-center font-semibold  mb-4 lg:mt-8">
              Dining
            </p>
          </div>
          <div className="lg:w-1/3 w-2/3 mx-auto">
            <img
              loading="lazy"
              src={browse2}
              className="w-full "
              alt="Living"
            />
            <p className=" lg:text-2xl text-primary text-xl text-center font-semibold mb-4  lg:mt-8 ">
              Living
            </p>
          </div>
          <div className="lg:w-1/3 w-2/3 mx-auto">
            <img
              loading="lazy"
              src={browse3}
              className="w-full"
              alt="Bedroom"
            />
            <p className=" lg:text-2xl text-primary text-xl text-center font-semibold  lg:mt-8">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
