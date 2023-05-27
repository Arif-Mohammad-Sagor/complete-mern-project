import React, { useContext } from "react";
import Banner from "../Banner";
import Category from "../Category";
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
    </div>
  );
};

export default Home;
