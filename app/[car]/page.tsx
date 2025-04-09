import React from "react";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/images/honda.jpg";
import { fetchData } from "../utils/fetch.ts";
import Segment from "../components/car/Segment.tsx";

export type Car = {
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
  let cars: Car[] = [];
  let cCars: Car[] = [];
  let coupeCars: Car[] = [];
  let suvCars: Car[] = [];
  let sedanCars: Car[] = [];
  let HatchbackCars: Car[] = [];
  let SportsCars: Car[] = [];
  let superCars: Car[] = [];
  let GrandTourerCars: Car[] = [];
  let minivanCars: Car[] = [];
  let electricCars: Car[] = [];
  let convertibleCars: Car[] = [];

  await fetchData<Car[]>(`https://motoinfo.online/api/${name}`)
    .then((brand) => {
      cars = brand;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  await cars.forEach((car) => {
    if (car.segment === "SUV") {
      suvCars.push(car);
    }
    if (car.segment === "Sedan") {
      sedanCars.push(car);
    }
    if (car.segment === "Hatchback") {
      HatchbackCars.push(car);
    }
    if (car.segment === "Sports") {
      SportsCars.push(car);
    }
    if (car.segment === "Grand Tourer") {
      GrandTourerCars.push(car);
    }
    if (car.segment === "C") {
      cCars.push(car);
    }
    if (car.segment === "Coupe") {
      coupeCars.push(car);
    }
    if (car.segment === "Minivan") {
      minivanCars.push(car);
    }
    if (car.segment === "Electric SUV") {
      electricCars.push(car);
    }
    if (car.segment === "Convertible GT") {
      convertibleCars.push(car);
    }
    if (car.segment === "Supercar") {
      superCars.push(car);
    }
  });

  return (
    <div>
      <h1>{name}</h1>
      <Segment name="SUV" array={suvCars} />
      <Segment name="Sedan" array={sedanCars} />
      <Segment name="Hatchback" array={HatchbackCars} />
      <Segment name="C" array={cCars} />
      <Segment name="Electric" array={electricCars} />
      <Segment name="Coupe" array={coupeCars} />
      <Segment name="Convertible" array={convertibleCars} />
      <Segment name="Sports" array={SportsCars} />
      <Segment name="Super sport" array={superCars} />
      <Segment name="Grand Tourer" array={GrandTourerCars} />
      <Segment name="Minivan" array={minivanCars} />
    </div>
  );
};

export default page;
