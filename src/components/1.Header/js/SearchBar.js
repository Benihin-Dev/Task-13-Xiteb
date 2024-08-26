import React from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export default function SearchBar({ setSearchBarState }) {
  return (
    <div className=" z-20 w-screen slideFromLeft fixed top-0 left-0 bg-[#111111dc] h-screen flex items-center justify-center">
      <div className=" w-full">
        <div className=" w-8/12 mx-auto border h-20 flex items-center justify-between bg-white pt-12  pb-10 shadow shadow-[#ffffff81] rounded-2xl px-10">
          <input
            type="text"
            placeholder="Type Your KeyWord"
            className=" text-3xl w-11/12 outline-none"
          />
          <div className=" w-1/12 flex items-center justify-end cursor-pointer">
            <PiMagnifyingGlassLight className=" size-10 hover:scale-105 duration-200" />
          </div>
        </div>
        <div
          onClick={() => {
            setSearchBarState(false);
          }}
          className=" size-10 rounded-full text-black hover:text-red-500 duration-200 bg-white mx-auto mt-5 flex items-center justify-center"
        >
          <RxCross2 className=" size-7" />
        </div>
      </div>
    </div>
  );
}
