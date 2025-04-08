import React from "react";
import HeroRightColCarsLeft from "./HeroRightColCarsLeft";
import HeroRightColCarsRight from "./HeroRightColCarsRight";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="grid grid-cols-5 md:grid-cols-5 gap-4 my-10 bg-slate-100 justify-between rounded-xl">
      <HeroRightColCarsLeft />
      <SearchBar />
      <HeroRightColCarsRight />
    </div>
  );
};

export default Hero;
