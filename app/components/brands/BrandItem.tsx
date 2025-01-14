import Link from "next/link";
import React from "react";

const BrandItem = () => {
  return (
    <Link href="Honda">
      <div className="text-center">
        <img src="" alt="Honda" />
        <h3>Honda</h3>
      </div>
    </Link>
  );
};

export default BrandItem;
