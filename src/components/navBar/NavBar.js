import React, { useState } from "react";
import "./navBar.css";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Details from "./Details";

export default function NavBar() {
  const [detailsState, setDetailsState] = useState(false);
  return (
    <div className="w-full  relative  bg-[#2c2c2c]">
      <div className=" w-full   mx-auto flex items-center justify-between gap-10">
        <div className=" pl-5 sm:pl-8 md:pl-16 pb-1 relative  ">
          <p className="   font-allura mx-auto text-center text-4xl text-[#5e5e5e]">
            beauTy
          </p>
          <p className=" absolute top-5 text-center text-2xl pl-1 text-[#e8e8e8]">
            {" "}
            AURA
          </p>
        </div>
        <div className=" hidden sm:block">
          <ul className=" text-white flex items-center gap-10 text-sm justify-center">
            <li className=" navLink">HOME</li>
            <li className=" navLink">PAGES</li>
            <li className=" navLink">BLOG</li>
            <li className=" navLink">SHOP</li>
            <li className=" navLink">CONTACT</li>
          </ul>
        </div>
        <div className=" flex items-center text-white justify-center gap-3">
          <LiaShoppingBagSolid className=" size-5 hover:scale-125 duration-200" />
          <HiMiniMagnifyingGlass className=" size-5   hover:scale-125 duration-200" />
          <div
            onClick={() => {
              setDetailsState(!detailsState);
            }}
            className=" px-6 py-5 cursor-pointer h-full bg-[#222222] text-white "
          >
            <HiBars3BottomLeft className="  size-6 hover:rotate-90 duration-200 " />
          </div>
        </div>
      </div>
      <div className=" sm:hidden block px-5 py-3 border-t border-[#3a3a3a]">
        <ul className=" text-white flex items-center gap-3 text-xs justify-between  ">
          <li className=" navLink">HOME</li>
          <li className=" navLink">PAGES</li>
          <li className=" navLink">BLOG</li>
          <li className=" navLink">SHOP</li>
          <li className=" navLink">CONTACT</li>
        </ul>
      </div>
      {detailsState && <Details setDetailsState={setDetailsState} />}
    </div>
  );
}
