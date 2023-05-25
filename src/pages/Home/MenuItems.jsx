import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";

const MenuItems = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div className="mx-16">
      <SectionTitle
        heading="Check it Out"
        subHeading="From Our Menu"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 bg-gray-100 p-6 gap-4">
        {menu.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-center my-4 gap-6"
          >
            <img
              src={item.image}
              className="w-[120px] h-[105px] "
              style={{
                borderRadius: "0 200px 200px 200px",
              }}
            />
            <div>
              <p className="text-xl">{item.name}</p>
              <p className="text-sm">{item.recipe}</p>
            </div>
            <div>
              {" "}
              <p className="text-yellow-500 font-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
