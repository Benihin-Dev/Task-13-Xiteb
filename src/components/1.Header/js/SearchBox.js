import React from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export default function SearchBox({ setSearchBoxState }) {
  return (
    <div
      className={`  slideDown  w-full fixed h-screen bg-[#31303058] top-0 left-0 z-50 `}
    >
      <div className=" relative w-full py-7  px-5 sm:px-10 bg-white">
        <p className=" w-full text-center text-[#66bc89] font-semibold text-xl">
          Search
        </p>
        <div className="   my-5 pl-8 pr-5 font-poppins text-lg xl:hidden flex items-center rounded-full bg-[#f0f2f5]">
          <input
            type="text"
            className=" py-3 outline-none text-sm w-full bg-transparent"
            name=""
            placeholder="Search for products"
            id=""
          />
          <PiMagnifyingGlassBold className=" cursor-pointer size-7 text-[#66bc89]" />
        </div>
        <RxCross2
          onClick={() => {
            setSearchBoxState(false);
          }}
          className=" size-5 hover:text-red-500 duration-200 text-gray-300 cursor-pointer absolute top-5 right-8"
        />
      </div>
    </div>
  );
}
