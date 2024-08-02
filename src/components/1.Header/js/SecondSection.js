import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function SecondSection() {
  const currencyList = ["USD", "Rs", "Euro"];
  const [SelectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0);
  const [currencyType, setCurrencyType] = useState(
    currencyList[SelectedCurrencyIndex]
  );
  const [stateForCurrencyList, setStateForCurrencyList] = useState(false);

  return (
    <div className=" w-full relative py-3 border-b">
      <div className=" responsiveWeith flex items-center justify-center md:justify-between">
        <ul className=" md:flex items-center justify-center text-sm gap-5 hidden ">
          <li className=" cursor-pointer hover:text-[#ffc107] duration-200">
            About Us
          </li>
          <li className=" text-gray-400">|</li>
          <li className=" cursor-pointer hover:text-[#ffc107] duration-200">
            FAQ
          </li>
          <li className=" text-gray-400">|</li>
          <li className=" cursor-pointer hover:text-[#ffc107] duration-200">
            Contact Us
          </li>
        </ul>
        <div
          onMouseEnter={() => {
            setStateForCurrencyList(!stateForCurrencyList);
          }}
          onMouseLeave={() => {
            setStateForCurrencyList(!stateForCurrencyList);
          }}
          className=" w-fit flex cursor-pointer hover:bg-gray-50
             items-center justify-center gap-1 px-4 border py-1 relative"
        >
          <p>$ {currencyList[SelectedCurrencyIndex]}</p>
          <MdOutlineKeyboardArrowUp className=" text-gray-600 size-5 rotate-180" />
          {stateForCurrencyList && (
            <div className=" w-full border top-[100%] left-0 absolute items-center">
              {currencyList.map((item, index) => (
                <p
                  onClick={() => {
                    setSelectedCurrencyIndex(index);
                  }}
                  key={index}
                  className=" w-full text-center p-1 border-b hover:bg-gray-200  duration-100 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
