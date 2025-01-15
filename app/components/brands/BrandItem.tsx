import Link from "next/link";
import React from "react";
import Image from "next/image";

const BrandItem = ({ brand }) => {
  console.log(brand.img_url);
  return (
    <Link href={brand.brand}>
      <div className="text-center">
        <Image src={brand.img_url} alt={brand.brand} width={250} height={250} />
      </div>
    </Link>
  );
};

export default BrandItem;
