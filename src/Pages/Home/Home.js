import React from "react";
import Advertise from "../../Components/Advertise/Advertise";
import Banner from "./Banner";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Advertise></Advertise>
    </div>
  );
};

export default Home;
