import React from "react";
import BrandItem from "./BrandItem";
import { promises as fs } from "fs";

const Brands = async () => {
  const brand = await fs.readFile(process.cwd() + "/data/brands.json", "utf-8");
  const data = await JSON.parse(brand);

  const content = data?.map((el, index: number) => {
    return <BrandItem brand={el} key={index} />;
  });

  return (
    <div className="w-[1200px] mx-auto my-12">
      <h1>Brands</h1>
      <div className="grid grid-cols-10">{content}</div>
    </div>
  );
};

export default Brands;
