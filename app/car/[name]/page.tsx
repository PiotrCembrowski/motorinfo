import React from "react";
import { headers } from "next/headers";

const page = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");

  return (
    <div className="w-[1440px] m-auto mt-11">
      <h1 className="capitalize">{name}</h1>
      <h2>Gen. 1</h2>
      <div>
        <div>
          <h3>Engine: </h3>
          <p>Turbo charged with VTEC</p>
          <p>2000 cc3</p>
          <p>Cylinder: 4 cylinders</p>
          <p>Turbo</p>
          <p>329 KM</p>
          <p>torque: 420 Nm</p>
        </div>
      </div>
    </div>
  );
};

export default page;
