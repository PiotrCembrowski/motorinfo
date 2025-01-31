import React from "react";
import BrandItem from "./BrandItem";
import { promises as fs } from "fs";

type Brand = {
  brand: string;
  img_url: string;
};

const Brands = async () => {
  const brand = await fs.readFile(process.cwd() + "/data/brands.json", "utf-8");
  const data = await JSON.parse(brand);

  const content = data?.map((el: Brand, index: number) => {
    return <BrandItem data={el} key={index} />;
  });

  return (
    <div className="w-[1200px] mx-auto my-12">
      <h1>Brands</h1>
      <div className="grid grid-cols-10 items-center">{content}</div>
    </div>
  );
};

export default Brands;
