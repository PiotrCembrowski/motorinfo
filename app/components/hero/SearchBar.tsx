"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const CreatableSelect = dynamic(() => import("react-select"), {
  ssr: false,
});

const SearchBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://motoinfo.online/api/brands/cars")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
        setData(data);
      });
  }, []);

  return (
    <div className="col-span-3">
      <h2 className="text-center my-10">Find your vehicle.</h2>
      <CreatableSelect options={data} className="w-9/12 justify-self-center" />
    </div>
  );
};

export default SearchBar;
