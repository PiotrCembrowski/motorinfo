import React from "react";
import { headers } from "next/headers";

const page = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default page;
