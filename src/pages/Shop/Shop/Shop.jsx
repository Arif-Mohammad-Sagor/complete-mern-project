import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";

import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodTab from "../../Shared/FoodTab/FoodTab";

export const Shop = () => {
  const categories = ["Salad", "Soup", "pizza", "Desserts", "drinks"];
  const { category } = useParams();

  const initailIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initailIndex);
  const [menu] = useMenu();

  const drinks = menu.filter((items) => items.category === "drinks");
  const salad = menu.filter((items) => items.category === "salad");
  const pizza = menu.filter((items) => items.category === "pizza");
  const dessert = menu.filter((items) => items.category === "dessert");
  const soup = menu.filter((items) => items.category === "soup");

  return (
    <div>
      <Cover img={shopImg} title="Our Shop"></Cover>
      <div className="px-16">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab> Salad</Tab>
            <Tab> Soup</Tab>
            <Tab> Pizza</Tab>
            <Tab> Dessert</Tab>
            <Tab> Drinks</Tab>
          </TabList>

          <TabPanel>
            <FoodTab items={salad}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={soup}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={pizza}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={dessert}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={drinks}></FoodTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
