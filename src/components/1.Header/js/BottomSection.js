import React, { useState } from "react";
import logoImg from "../img/logo.png";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function SearchBar() {
  return (
    <div className="w-full  flex items-center gap-2 ">
      <HiBars3 className="size-6 cursor-pointer hidden sm:block" />
      <div className=" w-full flex items-center bg-white border border-[#ea3263] rounded-full overflow-hidden  text-xs ">
        <input
          type="text"
          className=" w-5/12 sm:w-8/12 pl-3 pt-[7px] pb-1 outline-none"
          placeholder="Search for Products"
        />
        <div className="  w-5/12 sm:w-3/12 px-2  flex items-center justify-end gap-1 py-1 relative cursor-pointer">
          <p className=" flex gap-1">
            <span className=" hidden lg:block">All </span> Categories
          </p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className=" w-2/12 sm:w-1/12 text-white bg-[#e6154b] border border-[#e6154b] flex  pt-[7px] pb-1 items-center justify-center">
          <PiMagnifyingGlassLight className=" size-5" />
        </div>
      </div>
    </div>
  );
}

export default function BottomSection() {
  const [seachBarStateForSmallDevices, setSeachBarStateForSmallDevices] =
    useState(false);
  return (
    <div className=" w-full relative py-3">
      <div className=" responsiveWeith flex items-center justify-between  gap-3">
        <div className="w-32 cursor-pointer">
          <img src={logoImg} alt="" className=" w-full" />
        </div>
        <div className=" hidden sm:block w-full sm:w-8/12">
          <SearchBar />
        </div>

        <div className=" flex items-center gap-2">
          <PiMagnifyingGlassLight
            onClick={() => {
              setSeachBarStateForSmallDevices(!seachBarStateForSmallDevices);
            }}
            className=" block sm:hidden size-5 text-gray-500 hover:text-[#e6154b]"
          />
          <AiOutlineRetweet className=" size-5 cursor-pointer text-gray-500 hover:text-[#e6154b] duration-200" />
          <CiHeart className=" size-6 cursor-pointer text-gray-600 hover:text-[#e6154b] duration-200" />
          <div className=" relative cursor-pointer text-gray-600 hover:text-[#e6154b] duration-200">
            <BsHandbag className=" size-5" />
            <div className=" absolute top-3 -right-2 size-[14px] flex items-center justify-center rounded-full bg-[#e6154b] text-white">
              <p className=" text-[10px]">0</p>
            </div>
          </div>
        </div>
      </div>
      {seachBarStateForSmallDevices && (
        <div className=" absolute top-[100%] left-0 w-full slideDown  px-5 z-30">
          <SearchBar />
        </div>
      )}
    </div>
  );
}
