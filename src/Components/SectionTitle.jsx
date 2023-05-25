import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 mx-auto text-center mb-8 mt-16">
      <h1 className=" text-yellow-500">---{heading}---</h1>
      <h1 className="text-3xl border-0 uppercase  border-y-2 py-3">
        {subHeading}{" "}
      </h1>
    </div>
  );
};

export default SectionTitle;
