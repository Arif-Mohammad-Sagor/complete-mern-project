import React from "react";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title }) => {
  return (
    <>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {/* <Link to={`/order/${title}`}></Link> */}
      <div className="text-center">
        <Link to={`/shop/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 my-4">
            Order Your Favourite Food
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
