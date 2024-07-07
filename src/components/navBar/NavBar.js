import React, { useState } from "react";
import logoImg from "../assets/img/logo.png";
import { CiSearch } from "react-icons/ci";
import { MdMenuOpen } from "react-icons/md";
import NavLinkItems from "./NavLinkItems";
import { PiPhoneCallThin } from "react-icons/pi";

export default function NavBar() {
  const [stateForNavLinkonSmallScreen, setStateForNavLinkonSmallScreen] =
    useState(false);
  return (
    <div className=" w-full  z-20 pt-1 sm:pt-0">
      <div className="  w-full pt-2 pb-2 sm:pb-0  bg-[#ffffff00]   relative">
        <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto justify-between flex items-center gap-3 sm:gap-10">
          <div className=" w-32 md:w-2/12 sm:pr-5  ">
            <img
              src={logoImg}
              alt=""
              className=" w-full h-full   object-contain"
            />
          </div>
          <div className=" w-2/3 hover:sm:w-6/12  sm:w-4/12 duration-300 border bg-[#ffffffbc] hover:bg-white shadow-sm hover:border-[#756ab6]   rounded-full overflow-hidden flex items-center gap-2   ">
            <div className=" bg-transparent flex items-center  pl-3">
              {" "}
              <CiSearch className=" text-gray-900 hover:text-[#756ab6]  duration-200 size-5" />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search here.."
              className=" bg-transparent outline-none pt-2 pb-1 text-sm text-black w-full "
            />
          </div>
          <div className=" sm:hidden  ">
            <MdMenuOpen
              onClick={() => {
                setStateForNavLinkonSmallScreen(!stateForNavLinkonSmallScreen);
              }}
              className={` ${
                stateForNavLinkonSmallScreen === true ? "rotate-180" : ""
              } size-6 text-gray-300`}
            />
          </div>
        </div>{" "}
        <div className=" hidden w-full px-5 sm:px-0 sm:w-11/12 mx-auto py-1  sm:flex items-center justify-between ">
          <NavLinkItems />
          <div className=" hidden lg:flex items-center gap-5 ">
            <div className=" flex items-end  gap-2">
              <div className="bg-yellow-400  rounded-full  p-1 ">
                {" "}
                <PiPhoneCallThin className="  size-5" />
              </div>
              <div className=" text-xs text-yellow-100">
                <p>Need a Help</p>
                <p>0112345678</p>
              </div>
            </div>
            <button className=" text-sm text-white px-5 py-1 bg-[#22c55e] hover:bg-[#ab87c5] duration-200">
              Apply Now
            </button>
          </div>
        </div>
        <div className=" flex sm:hidden w-full px-5 items-center gap-5 mt-2">
          <div className=" flex items-end gap-2 w-1/2">
            <div className="bg-yellow-400  rounded-full  p-1 ">
              {" "}
              <PiPhoneCallThin className=" size-5" />
            </div>
            <div className=" text-xs text-yellow-100">
              <p>Need a Help</p>
              <p>0112345678</p>
            </div>
          </div>
          <button className=" w-1/2 text-sm text-white px-5 py-1 bg-[#22c55e] hover:bg-[#ab87c5] duration-200">
            Apply Now
          </button>
        </div>
        {stateForNavLinkonSmallScreen && (
          <div className=" absolute top-[100%] right-0 h-[90vh] w-2/3 bg-[#fbfbfbe7] sm:hidden border">
            <NavLinkItems />
          </div>
        )}
      </div>
    </div>
  );
}
