import React from "react";
import Image from "next/image";

interface Car {
  name: string;
  imageUrl: string;
}

type Data = {
  data: Car;
};

const HeroRightColCarItem: React.FC<Data> = ({ data }) => {
  return (
    <div>
      <h5>{data.name}</h5>
      <Image src={data.imageUrl} alt={data.name} width={150} height={100} />
    </div>
  );
};

export default HeroRightColCarItem;
