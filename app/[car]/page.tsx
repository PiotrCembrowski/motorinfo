import React from "react";
import { headers } from "next/headers";
import { promises as fs } from "fs";
import Link from "next/link";

const page = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");

  const car = await fs.readFile(process.cwd() + `/data/${name}.json`, "utf-8");
  const data = JSON.parse(car);

  return (
    <div>
      <h1>{name}</h1>
      {data.map((car, index: number) => {
        return (
          <Link href={`${name}/${car.model}`} key={index}>
            {car.model}
          </Link>
        );
      })}
    </div>
  );
};

export default page;
