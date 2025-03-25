import React from "react";

interface Car {
  name: string;
  imageUrl: string;
}

type Data = {
  data: Car;
};

const HeroRightColCarItem: React.FC<Data> = ({ data }) => {
  return <div>HeroRightColCarItem</div>;
};

export default HeroRightColCarItem;
