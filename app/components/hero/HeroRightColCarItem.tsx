import React from "react";
import Image from "next/image";

interface Car {
  model: string;
  imageUrl: string;
}

type Data = {
  data: Car;
};

const HeroRightColCarItem: React.FC<Data> = ({ data }) => {
  return (
    <div className="col-span-1 flex flex-col items-center justify-center p-3">
      <Image src={data.imageUrl} alt={data.model} width={150} height={100} />
      <h5>{data.model}</h5>
    </div>
  );
};

export default HeroRightColCarItem;
