import React from "react";
import Navbar from "../../Shared/Navbar";
import Banner from "../Banner";
import Category from "../Category";
import PopulerItem from "../PopulerItem";
import Featured from "../Featured";
import Testimonial from "../Testimonial";
import MenuItems from "../MenuItems";
import FeaturedFoods from "../FeaturedFoods";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Featured></Featured>
      <MenuItems></MenuItems>
      <FeaturedFoods></FeaturedFoods>
      <Testimonial></Testimonial>
      <PopulerItem></PopulerItem>
    </div>
  );
};

export default Home;
