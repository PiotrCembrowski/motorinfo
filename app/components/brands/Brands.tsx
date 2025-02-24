import React from "react";
import { fetchData } from "@/app/utils/fetch.ts";
import BrandItem from "./BrandItem.tsx";

interface Brand {
  name: string;
  imageUrl: string;
}

const Brands = async () => {
  let brandsList: Brand[] = [];

  await fetchData<Brand[]>(
    "https://motorinfo-piotrcembrowskis-projects.vercel.app/api/AllBrands"
  )
    .then((brands) => {
      console.log("Fetched brands:", brands);
      brandsList = brands;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const content = brandsList?.map((el: Brand, index: number) => {
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
