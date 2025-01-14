import React from "react";
import BrandItem from "./BrandItem";

const Brands = () => {
  return (
    <div className="w-[1200px] mx-auto my-12">
      <h1>Brands</h1>
      <div className="grid grid-cols-10">
        <BrandItem />
      </div>
    </div>
  );
};

export default Brands;
