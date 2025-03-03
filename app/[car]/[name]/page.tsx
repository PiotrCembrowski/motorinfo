import React from "react";
import { headers } from "next/headers";
import Competition from "@/app/components/car/Competition";
import CompanyVehicles from "@/app/components/car/CompanyVehicles";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/honda.jpg";
import { fetchData } from "@/app/utils/fetch.ts";

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
  const carName = pathname?.split("/")[1];

  let carList: Car[] = [];
  let car: Car;

  await fetchData<Car[]>(
    `https://motorinfo-piotrcembrowskis-projects.vercel.app/api/${carName}`
  )
    .then((car) => {
      console.log("Fetched brands:", car);
      carList = car;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  await carList.forEach((element: Car) => {
    if (element.model == name) {
      car = element;
    }
  });

  return (
    <div className="w-[1440px] m-auto mt-11 grid grid-cols-2 gap-4">
      <div>
        <Link href={`/${car!.company}`}>
          <h5>Back to {car!.company} vehicles</h5>
        </Link>
        <h1 className="capitalize">{name}</h1>
        <Image
          src={car!.imageUrl ? car!.imageUrl : img}
          alt="car"
          width={500}
          height={200}
        />
        <div className="grid grid-cols-1 gap-4 mt-4">
          {/* <div className="bg-white py-4 px-8 shadow-sm">
            <Competition />
          </div>
          <div className="bg-white py-4 px-8 shadow-sm">
            <CompanyVehicles />
          </div> */}
        </div>
      </div>
      <div>
        <div className="bg-white py-4 px-8 shadow-sm">
          <table>
            <tbody>
              <tr>
                <td>Segment</td>
                <td>{car!.segment}</td>
              </tr>
              <tr>
                <td>Doors options:</td>
                <td>{car!.door_options}</td>
              </tr>
              <tr>
                <td>Engine type:</td>
                {car!.benzyna_engine ? (
                  <td>Petrol: {car!.benzyna_engine}</td>
                ) : (
                  <td>Petrol: not available</td>
                )}
              </tr>
              <tr>
                <td></td>
                {car!.electric_engine ? (
                  <td>Electric: {car!.electric_engine}</td>
                ) : (
                  <td>Electric: not available</td>
                )}
              </tr>
              <tr>
                <td></td>
                {car!.diesel_engine ? (
                  <td>car!.diesel_engine</td>
                ) : (
                  <td>Diesel: not available</td>
                )}
              </tr>
              <tr className="">
                <td className="w-1/3"></td>
                {car!.hybrid_engine ? (
                  <td>Hybrid: {car!.hybrid_engine}</td>
                ) : (
                  <td>Hybrid: not available</td>
                )}
              </tr>
              <tr>
                <td>Power</td>
                <td>
                  {car!.benzyna_moc
                    ? `Petrol: ${car!.benzyna_moc}`
                    : "Petrol: not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {car!.electric_moc
                    ? `Electric: ${car!.electric_moc}`
                    : "Electric: not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {car!.diesel_moc
                    ? `Diesel: ${car!.diesel_moc}`
                    : "Diesel: not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {car!.hybrid_moc
                    ? `Hybrid: ${car!.hybrid_moc}`
                    : "Hybrid: not available"}
                </td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>
                  Petrol:{" "}
                  {car!.benzyna_moment_obrotowy
                    ? car!.benzyna_moment_obrotowy
                    : "not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Diesle:{" "}
                  {car!.diesel_moment_obrotowy
                    ? car!.diesel_moment_obrotowy
                    : "not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Electric:{" "}
                  {car!.electric_moment_obrotowy
                    ? car!.electric_moment_obrotowy
                    : "not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Hybrid:{" "}
                  {car!.hybrid_moment_obrotowy
                    ? car!.hybrid_moment_obrotowy
                    : "not available"}
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <h4 className="mt-4">Performance</h4>
            <table>
              <tbody>
                <tr>
                  <td className="w-1/2">Mileage</td>
                  <td>{car!.mileage}</td>
                </tr>
                <tr>
                  <td>Acceleration</td>
                  <td>{car!.acceleration}</td>
                </tr>
                <tr>
                  <td className="align-top">Petrol V-max:</td>
                  <td>{car!.benzyna_v_max}</td>
                </tr>
                <tr>
                  <td className="align-top">Electric V-max:</td>
                  <td>{car!.electric_v_max}</td>
                </tr>
                <tr>
                  <td className="align-top">Diesel V-max:</td>
                  <td>{car!.diesel_v_max}</td>
                </tr>
                <tr>
                  <td className="align-top">Hybrid V-max:</td>
                  <td>{car!.hybrid_v_max}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="mt-4">Transmission:</h4>
            <p>{car!.transmission_type}</p>
          </div>
          <div>
            <h4 className="mt-4">Measurements: </h4>
            <p>wysokość: {car!.height}</p>
            <p>długość: {car!.length}</p>
            <p>waga: {car!.weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
