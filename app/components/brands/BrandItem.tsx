import Link from "next/link";
import React from "react";
import Image from "next/image";
import img from "@/public/images/honda-logo.png";

const BrandItem = () => {
  return (
    <Link href="Honda">
      <div className="text-center">
        <Image src={img} alt="Honda" />
        <h3>Honda</h3>
      </div>
    </Link>
  );
};

export default BrandItem;
