import React from "react";
import { FaBars } from "react-icons/fa6";
import { BiHomeAlt2 } from "react-icons/bi";

import { PiUser } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";

export default function FooterNavSectionForSmallScreen() {
  return (
    <div className=" fixed bottom-0 left-0 z-40 w-full py-4 sm:hidden border grid grid-cols-5 bg-white text-[#103178] ">
      <div className=" w-full flex items-center justify-center">
        <div className=" cursor-pointer">
          <FaBars className=" size-5" />
        </div>
      </div>
      <div className=" w-full flex items-center justify-center">
        <div className=" cursor-pointer">
          <BiHomeAlt2 className=" size-7" />
        </div>
      </div>
      <div className=" w-full flex items-center justify-center">
        <div className=" cursor-pointer">
          <PiUser className=" size-7" />
        </div>
      </div>
      <div className=" w-full flex items-center justify-center">
        <div className=" cursor-pointer relative">
          <BsHeart className=" size-[23px]   duration-300  text-[#103178] cursor-pointer" />
          <div className=" cursor-pointer absolute -top-3 -right-2 size-5 rounded-full flex items-center justify-center bg-[#66bc88cf] text-white text-[11px] font-semibold">
            7
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center">
        <div className=" cursor-pointer relative">
          <PiShoppingCartLight className=" size-[25px] duration-300  text-[#103178] cursor-pointer" />
          <div className=" cursor-pointer absolute -top-3 -right-2 size-5 rounded-full flex items-center justify-center bg-[#66bc88cf] text-white text-[11px] font-semibold">
            3
          </div>
        </div>
      </div>
    </div>
  );
}
