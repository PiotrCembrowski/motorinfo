import React from "react";
import { headers } from "next/headers";
import Competition from "@/app/components/car/Competition";
import CompanyVehicles from "@/app/components/car/CompanyVehicles";
import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "fs";
import img from "@/public/images/honda.jpg";
import { fetchData } from "@/app/utils/fetch.ts";

type Specification = {
  acceleration: string;
  mileage: string;
  v_max: string;
  transmission_type: string;
  height: string;
  weight: string;
  length: string;
};

type Benzynowe = {
  typy: string[];
  moc: string;
  moment_obrotowy: string;
};
type Electric = {
  typy: string[];
  moc: string;
  moment_obrotowy: string;
};
type Diesel = {
  typy: string[];
  moc: string;
  moment_obrotowy: string;
};
type Hybrid = {
  typy: string[];
  moc: string;
  moment_obrotowy: string;
};

type Silniki = {
  benzynowe: Benzynowe;
  elektryczne: Electric;
  diesel: Diesel;
  hybrydowe: Hybrid;
  specyfikacja: Specification;
};

type Car = {
  model: string;
  image_url: string;
  charakterystyka: string;
  door_options: string[];
  segment: string;
  silniki: Silniki;
  specyfikacja: Specification;
};

const page = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");
  const brandName = pathname?.split("/")[1];

  const data = await fs.readFile(
    process.cwd() + `/data/${brandName}.json`,
    "utf-8"
  );

  fetchData<Brand[]>(`http://localhost:3000/api/${brandName}`)
    .then((brands) => {
      console.log("Fetched brands:", brands);
      brandsList = brands;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  let car: Car;

  const cars: Car[] = JSON.parse(data);
  await cars.forEach((element: Car) => {
    if (element.model == name) {
      car = element;
    }
  });

  const benzynowe = car!.silniki.benzynowe;
  const electric = car!.silniki.elektryczne;
  const diesle = car!.silniki.diesel;
  const hybrid = car!.silniki.hybrydowe;

  return (
    <div className="w-[1440px] m-auto mt-11 grid grid-cols-2 gap-4">
      <div>
        <Link href={`/${brandName}`}>
          <h5>Back to {brandName} vehicles</h5>
        </Link>
        <h1 className="capitalize">{name}</h1>
        <Image
          src={car!.image_url ? car!.image_url : img}
          alt="car"
          width={500}
          height={200}
        />
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="bg-white py-4 px-8 shadow-sm">
            <Competition />
          </div>
          <div className="bg-white py-4 px-8 shadow-sm">
            <CompanyVehicles />
          </div>
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
                {benzynowe ? (
                  benzynowe.typy.map((silnik, index) => {
                    return <td key={index}>Gasoline: {silnik}, </td>;
                  })
                ) : (
                  <td>Gasoline: not available</td>
                )}
              </tr>
              <tr>
                <td></td>
                {electric ? (
                  electric?.typy.map((silnik, index) => {
                    return <td key={index}>Electric: {silnik}, </td>;
                  })
                ) : (
                  <td>Electric: not available</td>
                )}
              </tr>
              <tr>
                <td></td>
                {diesle ? (
                  diesle?.typy.map((silnik, index) => {
                    return <td key={index}>Diesel: {silnik}, </td>;
                  })
                ) : (
                  <td>Diesel: not available</td>
                )}
              </tr>
              <tr className="">
                <td className="w-1/3"></td>
                {hybrid ? (
                  hybrid?.typy.map((silnik, index) => {
                    return <td key={index}>Hybrid: {silnik}, </td>;
                  })
                ) : (
                  <td>Hybrid: not available</td>
                )}
              </tr>
              <tr>
                <td>Power</td>
                <td>
                  {benzynowe
                    ? `Gasoline: ${benzynowe.moc}`
                    : "Gasoline: not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {electric
                    ? `Electric: ${electric.moc}`
                    : "Electric: not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {diesle ? `Diesel: ${diesle.moc}` : "Diesel: not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {hybrid ? `Hybrid: ${hybrid.moc}` : "Hybrid: not available"}
                </td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>
                  Gasoline:{" "}
                  {benzynowe ? benzynowe.moment_obrotowy : "not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Diesle: {diesle ? diesle.moment_obrotowy : "not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Electric:{" "}
                  {electric ? electric.moment_obrotowy : "not available"}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Hybrid: {hybrid ? hybrid.moment_obrotowy : "not available"}
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
                  <td>{car!.specyfikacja.mileage}</td>
                </tr>
                <tr>
                  <td>Acceleration</td>
                  <td>{car!.specyfikacja.acceleration}</td>
                </tr>
                <tr>
                  <td className="align-top">V-max</td>
                  <td>{car!.specyfikacja.v_max}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="mt-4">Transmission:</h4>
            <p>{car!.specyfikacja.transmission_type}</p>
          </div>
          <div>
            <h4 className="mt-4">Measurements: </h4>
            <p>wysokość: {car!.specyfikacja.height}</p>
            <p>długość: {car!.specyfikacja.length}</p>
            <p>waga: {car!.specyfikacja.weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
