import React from "react";
import BrandItem from "./BrandItem";
import { promises as fs } from "fs";

type Brand = {
  name: string;
  url: string;
};

const Brands = async () => {
  const brand = await fs.readFile(process.cwd() + "data/brands.json", "utf-8");
  const data = JSON.parse(brand);

  return (
    <div className="w-[1200px] mx-auto my-12">
      <h1>Brands</h1>
      <div className="grid grid-cols-10">
        {data.map((el: Brand) => {
          <BrandItem brand={el} />;
        })}
      </div>
    </div>
  );
};

export default Brands;
