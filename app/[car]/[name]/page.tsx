import React from "react";
import { headers } from "next/headers";
import Competition from "@/app/components/car/Competition";
import CompanyVehicles from "@/app/components/car/CompanyVehicles";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");

  return (
    <div className="w-[1440px] m-auto mt-11 grid grid-cols-2 gap-4">
      <div>
        <Link href="/honda">Honda vehicles</Link>
        <h1 className="capitalize">{name}</h1>
        <h2>Gen. 1</h2>
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
                <td>Compact</td>
              </tr>
              <tr>
                <td>Doors:</td>
                <td>3,4,5</td>
              </tr>
              <tr className="">
                <td className="w-1/2">Engine type</td>
                <td>Turbo charged with VTEC</td>
              </tr>
              <tr>
                <td>Displacment</td>
                <td>2000 cc3</td>
              </tr>
              <tr>
                <td>Power</td>
                <td>329 hp</td>
              </tr>
              <tr>
                <td>Cylinders</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Turbo</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>420 Nm</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h4 className="mt-4">Performance</h4>
            <table>
              <tbody>
                <tr>
                  <td className="w-1/3">Mileage</td>
                  <td></td>
                </tr>
                <tr>
                  <td>0 - 100 km/h</td>
                  <td>5,4 s</td>
                </tr>
                <tr>
                  <td className="align-top">V-max</td>
                  <td>
                    2 minuty 23 sekundy: Type R to najszybszy samochód z napędem
                    na przednie koła, jaki kiedykolwiek pokonał jedno 5,8
                    kilometrowe okrążenie na legendarnym torze Suzuka.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="mt-4">Transmission:</h4>
            <p>6-gears</p>
            <p>manual</p>
          </div>
          <div>
            <h4 className="mt-4">Measurements: </h4>
            <p>wysokość</p>
            <p>szerokość</p>
            <p>długość</p>
            <p>5 drzwi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
