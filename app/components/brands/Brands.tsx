import React from "react";
import { fetchData } from "@/app/utils/fetch.ts";
import BrandItem from "./BrandItem.tsx";

interface Brand {
  name: string;
  imageUrl: string;
}

const Brands = async () => {
  let brandsList: Brand[] = [];

  await fetchData<Brand[]>("https://motoinfo.online/api/AllBrands")
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
    <div className="w-full mx-auto my-12">
      <h1>Brands</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,125px))] items-center w-full">
        {content}
      </div>
    </div>
  );
};

export default Brands;
