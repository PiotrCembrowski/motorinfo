import React from "react";
import HeroRightColCarItem from "./HeroRightColCarItem";

interface Car {
  name: string;
  imageUrl: string;
}

const HeroRightColCars = () => {
  return (
    <div>
      <HeroRightColCarItem />
    </div>
  );
};

export default HeroRightColCars;
