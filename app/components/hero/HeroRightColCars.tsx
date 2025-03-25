import React from "react";
import { fetchData } from "@/app/utils/fetch.ts";
import HeroRightColCarItem from "./HeroRightColCarItem";

interface Car {
  name: string;
  imageUrl: string;
}

const HeroRightColCars = async () => {
  let carsList: Car[] = [];

  await fetchData<Car[]>("https://motoinfo.online/api/AllBrands")
    .then((brands) => {
      console.log("Fetched brands:", brands);
      carsList = brands;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div>
      <HeroRightColCarItem />
    </div>
  );
};

export default HeroRightColCars;
