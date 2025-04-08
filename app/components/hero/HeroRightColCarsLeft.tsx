import React from "react";
import { fetchData } from "@/app/utils/fetch.ts";
import HeroRightColCarItem from "./HeroRightColCarItem";

interface Car {
  model: string;
  imageUrl: string;
}

const HeroRightColCarsLeft = async () => {
  let carsList: Car[] = [];
  const newList: Car[] = [];

  await fetchData<Car[]>("https://motoinfo.online/api/brands/cars")
    .then((cars) => {
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

  return <div className="grid gap-5 m-2 pr-2 border-r-2">{content}</div>;
};

export default HeroRightColCarsLeft;
