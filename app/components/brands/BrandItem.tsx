import Link from "next/link";
import React from "react";
import Image from "next/image";

type Brand = {
  brand: string;
  img_url: string;
};

type Data = {
  data: Brand;
};

const BrandItem: React.FC<Data> = ({ data }) => {
  console.log(data.img_url);
  return (
    <Link href={data.brand}>
      <div className="text-center p-4 items-center">
        <Image src={data.img_url} alt={data.brand} />
      </div>
    </Link>
  );
};

export default BrandItem;
