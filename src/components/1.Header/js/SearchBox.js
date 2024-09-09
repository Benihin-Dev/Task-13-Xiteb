import React from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export default function SearchBox({ setSearchBoxState }) {
  return (
    <div className=" fixed z-50 top-0 left-0 w-screen h-screen bg-[#0000003d]">
      <div className={` w-full slideDown py-6 bg-white `}>
        <div className="responsiveWeith  flex items-center gap-5">
          <div className=" w-1/12 flex items-center justify-center">
            <PiMagnifyingGlassLight className=" size-8 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className=" w-10/12 outline-none py-2 px-5 text-2xl"
            name=""
            id=""
          />
          <div className=" w-1/12 flex items-center justify-center">
            <RxCross2
              onClick={() => {
                setSearchBoxState(false);
              }}
              className="  size-8    text-gray-500 hover:text-red-500 duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
