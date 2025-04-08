"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const CreatableSelect = dynamic(() => import("react-select"), {
  ssr: false,
});

interface Option {
  model: string;
}

const SearchBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then((data) => {
        const options = data.map((item: Option) => ({
          value: item.model,
          label: item.model,
        }));
        setData(options);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="col-span-3">
      <h2 className="text-center my-10">Find your vehicle.</h2>
      <div className="flex flex-row justify-center items-center">
        <CreatableSelect options={data} className="w-9/12" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
