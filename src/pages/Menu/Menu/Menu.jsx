import React from "react";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((items) => items.category === "offered");
  const salad = menu.filter((items) => items.category === "salad");
  const pizza = menu.filter((items) => items.category === "pizza");
  const dessert = menu.filter((items) => items.category === "dessert");
  const soup = menu.filter((items) => items.category === "soup");
  return (
    <div>
      <Cover img={menuImage} title="Our Menu"></Cover>
      {/* main cover */}
      <div className="px-16">
        <SectionTitle heading="Don't Miss" subHeading="Today's Offer">
          {" "}
        </SectionTitle>
        {/* offered menuCategory */}
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory
          items={dessert}
          title="Desserts"
          img={dessertImg}
        ></MenuCategory>
        <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
        <MenuCategory
          items={salad}
          title="Salad"
          img={saladImage}
        ></MenuCategory>
        <MenuCategory items={soup} title="Soup" img={soupImage}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
