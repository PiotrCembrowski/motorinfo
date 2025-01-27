import Link from "next/link";
import React from "react";
import Image from "next/image";

const BrandItem = ({ brand }) => {
  console.log(brand.img_url);
  return (
    <Link href={brand.brand}>
      <div className="text-center p-4 items-center">
        <Image src={brand.img_url} alt={brand.brand} width={100} height={100} />
      </div>
    </Link>
  );
};

export default BrandItem;
