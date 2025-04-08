import React from "react";
import { Car } from "@/app/[car]/page";

type Data = {
  name: string;
  array: Car[];
};

const Segment: React.FC<Data> = ({ name, array }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div className="flex flex-wrap">
        {array.map((car) => (
          <div key={car.model} className="w-1/6 p-2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src={car.imageUrl}
                alt={car.model}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold">{car.model}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Segment;
