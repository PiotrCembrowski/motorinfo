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
  const [inputValue, setInputValue] = useState("");

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

  const changeHandler = (selectedOption: any) => {
    setInputValue(selectedOption.value);
    console.log("Selected option:", selectedOption);
  };

  const onClickHandler = () => {
    if (inputValue) {
      window.location.href = `/cars/${inputValue}`;
    } else {
      alert("Please select a vehicle model.");
    }
  };

  return (
    <div className="col-span-3 flex flex-col justify-center">
      <h2 className="self-center basis-[20%]">Find your vehicle.</h2>
      <div className="flex flex-row justify-center items-start basis-[50%]">
        <CreatableSelect
          options={data}
          className="w-9/12"
          onChange={(e) => changeHandler(e)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClickHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
