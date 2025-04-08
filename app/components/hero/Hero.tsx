import React from "react";
import HeroRightColCars from "./HeroRightColCars";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="grid grid-cols-5 md:grid-cols-5 gap-4 my-10 bg-slate-100 justify-between">
      <HeroRightColCars />
      <SearchBar />
      <HeroRightColCars />
    </div>
  );
};

export default Hero;
