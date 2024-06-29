import React from "react";
import Banner from "../components/Home/Banner";
import Browse from "../components/Home/Browse";
import OurProducts from "../components/Home/OurProducts";
import ExploreMore from "../components/Home/ExploreMore";
import SetUp from "../components/Home/SetUp";

const Home = () => {
  return (
    <>
      <Banner />
      <Browse />
      <OurProducts />
      <ExploreMore />
      <SetUp />
    </>
  );
};

export default Home;
