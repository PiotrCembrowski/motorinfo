import React from "react";
import { fetchData } from "@/app/utils/fetch.ts";
import HeroRightColCarItem from "./HeroRightColCarItem";

interface Car {
  name: string;
  imageUrl: string;
}

const HeroRightColCars = async () => {
  let carsList: Car[] = [];

  await fetchData<Car[]>("https://motoinfo.online/api/brands/cars")
    .then((cars) => {
      console.log("Fetched brands:", cars);
      carsList = cars;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const content = carsList?.map((el: Car, index: number) => {
    return <HeroRightColCarItem data={el} key={index} />;
  });

  return <div>{content}</div>;
};

export default HeroRightColCars;
