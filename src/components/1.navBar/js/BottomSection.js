import React, { useState } from "react";
import logoImg from "../img/logo.png";
import menuImg from "../img/menu-image.jpg";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiUserThin } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";

export default function BottomSection({ setStateForNavLinkOnSmallScreen }) {
  const [stateForShopContent, setStateForShopContent] = useState(false);
  const dataForPages = [
    "Page 01",
    "Page 02",
    "Page 03",
    "Page 04",
    "Page 05",
    "Page 06",
  ];
  return (
    <div className=" w-full bg-white  relative py-3   border-b">
      <div className="w-full  sm:w-10/12   mx-auto  ">
        <div className=" w-full flex items-center px-5 sm:px-0 justify-between gap-10">
          <div className="  pb-1 relative  ">
            <img src={logoImg} alt="" className=" object-cover" />
          </div>
          <div className=" hidden lg:block">
            <ul className="  flex items-center gap-10 text-sm justify-center">
              <li className=" navLink hover:text-[#00b9f5] duration-200 ">
                HOME
              </li>
              <li className="hover:text-[#00b9f5] group duration-200 navLink flex items-center justify-center relative">
                <p>PAGE</p>
                <MdKeyboardArrowDown className=" size-5  text-gray-600" />
                <div className=" hidden group-hover:block slideDown  z-50 absolute w-[250%] top-[200%] shadow-md -left-[75%] h-52  bg-[#efefef] space-y-3 p-3">
                  {dataForPages.map((item, index) => (
                    <p className=" hover:pl-2 duration-200 text-black hover:text-[#00b9f5] ">
                      {item}
                    </p>
                  ))}
                </div>
              </li>
              <li
                onMouseOverCapture={() => {
                  setStateForShopContent(true);
                }}
                onClick={() => {
                  setStateForShopContent(!stateForShopContent);
                }}
                className="hover:text-[#00b9f5] duration-200 navLink flex  items-center justify-center"
              >
                <p>SHOP</p>
                <MdKeyboardArrowDown className=" size-5 text-gray-600" />
              </li>
              <li className="hover:text-[#00b9f5] duration-200 navLink">
                SALE
              </li>
              <li className="hover:text-[#00b9f5] duration-200 navLink">
                CONTACT
              </li>
            </ul>
          </div>
          <div className=" flex items-center justify-center gap-3">
            <PiMagnifyingGlassThin className=" hidden lg:block size-6   hover:scale-125 duration-200" />
            <PiUserThin className=" size-6   hover:scale-125 duration-200" />
            <div className=" relative">
              <BsHeart className=" size-5   hover:scale-125 duration-200" />
              <div className=" absolute left-3 -top-3 bg-[#00c5f8] text-xs rounded-full size-4 flex items-center justify-center">
                0
              </div>
            </div>
            <div className=" flex  items-end gap-1">
              <HiOutlineShoppingBag className=" text-gray-800 size-6 hover:scale-125 duration-200" />
              <p className="lg:block hidden  text-sm">$0.00</p>
            </div>
            <HiMiniBars3
              onClick={() => {
                setStateForNavLinkOnSmallScreen(true);
              }}
              className=" lg:hidden size-6"
            />
          </div>
        </div>
      </div>
      {stateForShopContent && (
        <div className=" absolute top-[100%] slideDown hidden lg:block left-0 w-full bg-[#efefef]  z-50">
          <div className=" flex w-full sm:w-10/12 mx-auto">
            <div className=" w-3/4 p-8 grid grid-cols-3 gap-5">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index}>
                  <p className=" font-semibold">Lorem, ipsum.</p>
                  <div className=" mt-3 space-y-1">
                    {Array.from({ length: 8 }, (_, i) => (
                      <p
                        key={i}
                        className=" cursor-pointer hover:pl-2 duration-200 hover:text-[#00b9f5]"
                      >
                        lorem lorem as
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className=" w-1/4">
              <img src={menuImg} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
