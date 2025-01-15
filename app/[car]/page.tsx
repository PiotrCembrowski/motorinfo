import React from "react";
import { headers } from "next/headers";
import { promises as fs } from "fs";
import Link from "next/link";

const page = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");

  const car = await fs.readFile(process.cwd() + "/data/cars.json", "utf-8");
  const data = JSON.parse(car);

  return (
    <div>
      <h1>{name}</h1>
      <Link href={`honda/${data.name}`}>{data.name}</Link>
    </div>
  );
};

export default page;
