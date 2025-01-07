import React from "react";
import { headers } from "next/headers";

const page = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");

  return (
    <div className="w-[1440px] m-auto mt-11">
      img
      <h1 className="capitalize">{name}</h1>
      <h2>Gen. 1</h2>
      <div className="grid grid-cols-2">
        <div className="bg-white py-4 px-8">
          <div>
            <h3>Engine: </h3>
            <p>Turbo charged with VTEC</p>
            <p>2000 cc3</p>
            <p>Cylinder: 4 cylinders</p>
            <p>Turbo</p>
            <p>329 KM</p>
            <p>torque: 420 Nm</p>
          </div>
          <div>
            <h3>Acceleration and stuff:</h3>
            <p>0-100 km/h - 5,4 s</p>
            <p>
              v-max: 2 minuty 23 sekundy: Type R to najszybszy samochód z
              napędem na przednie koła, jaki kiedykolwiek pokonał jedno 5,8
              kilometrowe okrążenie na legendarnym torze Suzuka.
            </p>
          </div>
          <div>
            <h3>Transmission:</h3>
            <p>6-gears</p>
            <p>manual</p>
          </div>
          <div>
            <h3>Measurements: </h3>
            <p>wysokość</p>
            <p>szerokość</p>
            <p>długość</p>
            <p>5 drzwi</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
