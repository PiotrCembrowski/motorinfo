import React from "react";
import { headers } from "next/headers";
import Competition from "@/app/components/car/Competition";
import CompanyVehicles from "@/app/components/car/CompanyVehicles";
import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "fs";

type Car = {
  model: string;
  charakterystyka: string;
  door_options: string[];
  segment: string;
  silniki: object;
  specyfikacja: object;
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

  let car: Car;

  const cars = JSON.parse(data);
  await cars.forEach((element: Car) => {
    if (element.model == name) {
      car = element;
    }
  });

  console.log(car!);

  const benzynowe = car!.silniki.benzynowe;
  const electric = car!.silniki.elektryczne;
  const diesle = car!.silniki.diesel;
  const hybrid = car!.silniki.hybrydowe;

  return (
    <div className="w-[1440px] m-auto mt-11 grid grid-cols-2 gap-4">
      <div>
        <Link href={`/${brandName}`}>{brandName} vehicles</Link>
        <h1 className="capitalize">{name}</h1>
        <Image src="/images/honda.jpg" alt="car" width={500} height={200} />
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
                <td>Gasoline type:</td>
                {benzynowe ? (
                  benzynowe?.typy.map((silnik, index) => {
                    return <td key={index}>{silnik}, </td>;
                  })
                ) : (
                  <td>Not available</td>
                )}
              </tr>
              <tr>
                <td>Electric type:</td>
                {electric ? (
                  electric?.typy.map((silnik, index) => {
                    return <td key={index}>{silnik}, </td>;
                  })
                ) : (
                  <td>Not available</td>
                )}
              </tr>
              <tr>
                <td>Diesel type:</td>
                {diesle ? (
                  diesle?.typy.map((silnik, index) => {
                    return <td key={index}>{silnik}, </td>;
                  })
                ) : (
                  <td>Not available</td>
                )}
              </tr>
              <tr className="">
                <td className="w-1/3">Hybrid type</td>
                {hybrid ? (
                  hybrid?.typy.map((silnik, index) => {
                    return <td key={index}>{silnik}, </td>;
                  })
                ) : (
                  <td>Not available</td>
                )}
              </tr>
              <tr>
                <td>Gasoline Power</td>
                <td>{benzynowe ? benzynowe.moc : "Not available"}</td>
              </tr>
              <tr>
                <td>Eletric Power:</td>
                <td>{electric ? electric.moc : "Not available"}</td>
              </tr>
              <tr>
                <td>Diesel Power:</td>
                <td>{diesle ? diesle.moc : "Not available"}</td>
              </tr>
              <tr>
                <td>Hybrid Power:</td>
                <td>{hybrid ? hybrid.moc : "Not available"}</td>
              </tr>
              <tr>
                <td>Torque</td>
                {benzynowe && <td>Gasoline: {benzynowe.moment_obrotowy}</td>}
                {diesle && <td>Diesle: {diesle.moment_obrotowy}</td>}
                {electric && <td>Electric: {electric.moment_obrotowy}</td>}
                {hybrid && <td>Hybrid: {hybrid.moment_obrotowy}</td>}
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
