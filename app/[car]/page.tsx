import React from "react";
import { headers } from "next/headers";
import { promises as fs } from "fs";
import Link from "next/link";
import Image from "next/image";

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
      <div className="grid grid-cols-8">
        {data.map((car, index: number) => {
          return (
            <Link href={`${name}/${car.model}`} key={index}>
              <Image
                src={car.image_url ? car.image_url : null}
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
