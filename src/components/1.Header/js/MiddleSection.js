import React, { useState } from "react";
import { GiRecycle } from "react-icons/gi";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import logoImg from "../img/logo.svg";

export default function MiddleSection() {
  const subLinks = [
    {
      icon: <GiRecycle className=" size-5" />,
      name: "Compare",
      notificationCount: 2,
      notification: true,
    },
    {
      icon: <IoHeartOutline className=" size-5" />,
      name: "Wishlist",
      notificationCount: 4,
      notification: true,
    },
    {
      icon: <IoCartOutline className=" size-5" />,
      name: "Cart",
      notificationCount: 1,
      notification: true,
    },
    {
      icon: <FiUser className=" size-5" />,
      name: "Account",
      notificationCount: 0,
      notification: false,
    },
  ];

  const categoryList = [
    "AllCategories",
    "Milk & Dairies",
    "Wines & Alcohol",
    "Pet Foods & Toys",
    "Fast Foods",
    "Beverages",
    "Bakery Items",
    "Snacks & Sweets",
    "Vegetables & Fruits",
    "Meat & Seafood",
  ];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  function SubLink() {
    return (
      <div className=" flex items-center gap-2">
        <TfiLocationPin className=" md:hidden size-5 text-gray-500 hover:text-black cursor-pointer" />
        {subLinks.map((link, index) => (
          <div
            key={index}
            className=" flex items-end cursor-pointer text-gray-500 gap-[2px] hover:text-black duration-200"
          >
            <div className=" relative">
              {link.icon}
              {link.notification && (
                <div className=" size-[14px] flex items-center justify-center rounded-full absolute -top-2 -right-[2px] bg-[#2faf36] text-white">
                  <p className="  text-[9px] leading-3 w-fit">
                    {link.notificationCount}
                  </p>
                </div>
              )}
            </div>
            <p className=" hidden sm:block text-[10px] leading-3">
              {link.name}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className=" w-full relative py-3 sm:py-5 ">
      <div className=" responsiveWeith space-y-2 md:space-y-0 md:flex items-center gap-5 justify-between">
        <div className=" flex md:block items-center justify-between">
          <img src={logoImg} alt="logo" className=" w-28 sm:w-32" />
          <div className=" md:hidden">
            <SubLink />
          </div>
        </div>
        <div className=" flex items-center text-[12px] border-[1px] border-[#77c29f] py-2 w-full md:w-5/12 rounded-sm shadow-md">
          <div className=" group duration-200 relative flex items-center gap-2 w-5/12 lg:w-[30%] px-4 border-r">
            <p className=" cursor-pointer">
              {categoryList[selectedCategoryIndex]}
            </p>
            <MdKeyboardArrowDown />
            <div className=" hidden group-hover:block absolute top-[99%] left-0 w-[130%] z-30 bg-white  border-l border-r border-gray-100 p-3">
              <input
                type="text"
                className=" rounded border-[#e2ebe6] px-2 outline-none w-full py-1 border"
                name=""
                id=""
              />
              <div className=" mt-3 w-full h-40 overflow-y-scroll customScrollbar">
                {categoryList.map((category, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedCategoryIndex(index);
                    }}
                    className={` ${
                      selectedCategoryIndex === index
                        ? "bg-[#ececec]"
                        : "bg-white"
                    } w-full px-2 py-[6px] hover:bg-[#9edbc9] duration-200 cursor-pointer `}
                  >
                    {category}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search for Items"
            className=" outline-none px-3 w-5/12  lg:w-[60%]  "
            name=""
            id=""
          />
          <div className=" flex text-center justify-end pr-3 w-[10%] ">
            <PiMagnifyingGlassLight className=" size-5 text-gray-500 hover:scale-105 duration-200 hover:text-[#2faf36]" />
          </div>
        </div>
        <div className=" cursor-pointer hover:border-[#2faf36] duration-200 hidden lg:flex text-gray-500 shadow items-center justify-center gap-1 border py-2 px-3 text-[12px]">
          <TfiLocationPin className=" size-3" />
          <p className=" text-[#2faf36]">Your Location</p>
          <MdKeyboardArrowDown />
        </div>
        <div className=" hidden md:block">
          <SubLink />
        </div>
      </div>
    </div>
  );
}
