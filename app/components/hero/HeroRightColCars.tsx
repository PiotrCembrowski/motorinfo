import React from "react";
import { fetchData } from "@/app/utils/fetch.ts";
import HeroRightColCarItem from "./HeroRightColCarItem";

interface Car {
  model: string;
  imageUrl: string;
}

const HeroRightColCars = async () => {
  let carsList: Car[] = [];
  let newList: Car[] = [];

  await fetchData<Car[]>("https://motoinfo.online/api/brands/cars")
    .then((cars) => {
      console.log("Fetched brands:", cars);
      carsList = cars;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  let i: number = 0;
  do {
    i += 1;
    const randomIndex = Math.floor(Math.random() * (carsList.length - 0) + 0);
    newList.push(carsList[randomIndex]);
  } while (i < 3);

  const content = newList?.map((el: Car, index: number) => {
    return <HeroRightColCarItem data={el} key={index} />;
  });

  return <div className="grid gap-5">{content}</div>;
};

export default HeroRightColCars;
