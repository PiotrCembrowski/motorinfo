import React from "react";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/images/honda.jpg";
import { fetchData } from "../utils/fetch.ts";

type Car = {
  company: string;
  model: string;
  imageUrl: string;
  segment: string;
  door_options: string[];
  benzyna_engine: string[];
  benzyna_moc: string;
  benzyna_moment_obrotowy: string;
  benzyna_v_max: string;
  diesel_engine: string;
  diesel_moc: string;
  diesel_moment_obrotowy: string;
  diesel_v_max: string;
  hybrid_engine: string;
  hybrid_moc: string;
  hybrid_moment_obrotowy: string;
  hybrid_v_max: string;
  electric_engine: string;
  electric_moc: string;
  electric_moment_obrotowy: string;
  electric_v_max: string;
  charakterystyka: string;
  mileage: string;
  acceleration: string;
  gears: number;
  transmission_type: string;
  height: string;
  weight: string;
  length: string;
};

const page = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");
  let data: Car[] = [];

  fetchData<Car[]>(`http://localhost:3000/api/brands`)
    .then((brands) => {
      console.log("Fetched brands:", brands);
      data = JSON.parse(car);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div>
      <h1>{name}</h1>
      <div className="grid grid-cols-8">
        {data.map((car: Car, index: number) => {
          return (
            <Link href={`${name}/${car.model}`} key={index}>
              <Image
                src={car.image_url ? car.image_url : img}
                alt={car.model}
                width={150}
                height={100}
              />
              <h5 className="mt-2">{car.model}</h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
