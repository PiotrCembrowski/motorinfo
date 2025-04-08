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
      <h1 className="text-center">Brands</h1>
      <h4 className="text-center">
        Find a vehicle by brand and learn more about the model that interests
        you.
      </h4>
      <hr className="mt-5 border-gray-300" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,125px))] items-center w-full">
        {content}
      </div>
    </div>
  );
};

export default Brands;
