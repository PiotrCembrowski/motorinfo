import Link from "next/link";
import React from "react";
import Image from "next/image";

type Brand = {
  name: string;
  imageUrl: string;
};

type Data = {
  data: Brand;
};

const BrandItem: React.FC<Data> = ({ data }) => {
  console.log(data.imageUrl);
  return (
    <Link href={data.name}>
      <div className="text-center p-4 items-center">
        <Image src={data.imageUrl} alt={data.name} width={150} height={100} />
      </div>
    </Link>
  );
};

export default BrandItem;
