import React, { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import logoImg from "../img/logo.png";
import subContentImg1 from "../img/img1.png";
import subContentImg2 from "../img/img2.png";
import subContentImg3 from "../img/img3.png";
import subContentImg4 from "../img/img4.png";
import subContentImg5 from "../img/img5.png";
import subContentImg6 from "../img/img6.png";

export default function ThirdSection() {
  const [stateForSubLink, setStateForSubLink] = useState(false);
  const subNavLink = [
    { name: "Mobile & Tablets", img: subContentImg1 },
    { name: "Laptop & Computers", img: subContentImg2 },
    { name: "Home & Kitchen Item", img: subContentImg3 },
    { name: "TV | Home Audio", img: subContentImg4 },
    { name: "Music & Video Games", img: subContentImg5 },
    { name: "Air Conditioner", img: subContentImg6 },
    { name: "CCTV" },
    { name: "Sewing Machine" },
    { name: "Agro Product" },
    { name: "Gifts Cards" },
  ];
  const [indexOfSelectedSubItem, setIndexOfSelectedSubItem] = useState(-2);
  return (
    <div className=" w-full relative py-5 border-b">
      <div className=" responsiveWeith ">
        <div className="flex items-center justify-between gap-3 lg:gap-10">
          <div className="flex items-center gap-3">
            <div>
              <img src={logoImg} alt="" />
            </div>
            <div
              onClick={() => {
                setStateForSubLink(!stateForSubLink);
              }}
              className=" cursor-pointer   items-center justify-between gap-1 bg-[#393939] text-white text-sm p-4 rounded hidden md:flex relative"
            >
              <HiMiniBars3 className=" size-5" />
              <p className=" hidden md:block px-3">Shop By Categories</p>
              <MdOutlineKeyboardDoubleArrowDown className=" hidden md:block size-5" />
              {stateForSubLink && (
                <div className=" z-10 absolute top-[98%] left-0 w-full bg-white text-black shadow-md text-base ">
                  <div className=" relative">
                    {subNavLink.map((item, index) => (
                      <div
                        onMouseEnter={() => {
                          setIndexOfSelectedSubItem(index);
                        }}
                        onClick={() => {
                          setIndexOfSelectedSubItem(-2);
                        }}
                        key={index}
                        className=" cursor-pointer px-4 py-2 hover:text-white duration-200 hover:bg-[#393939] flex items-center justify-between"
                      >
                        <p className=" ">{item.name}</p>
                        {item.img && (
                          <IoIosArrowRoundForward className=" size-5" />
                        )}
                      </div>
                    ))}
                    {indexOfSelectedSubItem > -1 &&
                    subNavLink[indexOfSelectedSubItem].img ? (
                      <div className=" absolute top-0 left-[100%] border w-[250%] h-full p-5  ">
                        <div className=" relative grid grid-cols-2 gap-5 p-3">
                          {Array.from({ length: 2 }, (_, index) => (
                            <div>
                              <h1 className=" font-semibold pb-1">
                                Lorem, ipsum dolor.
                              </h1>
                              {Array.from({ length: 5 }, (_, index) => (
                                <p className=" cursor-pointer  hover:pl-2 duration-200">
                                  lorem hjk
                                </p>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className=" absolute bottom-0 right-0 -z-10 w-full h-full bg-white flex items-end justify-end">
                          <img
                            src={subNavLink[indexOfSelectedSubItem].img}
                            alt=""
                            className=" object-cover w-full "
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className=" border   items-center justify-between  pr-4  bg-[#f7f8fc] text-gray-700 text-sm rounded-md hidden md:flex">
              <input
                type="text"
                placeholder="Search for items"
                className=" p-4 bg-transparent outline-none"
                name=""
                id=""
              />
              <div>
                <PiMagnifyingGlassThin className="size-6 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-5">
            <div className=" items-center justify-center gap-1 hidden lg:flex">
              <FiPhone className=" size-7 text-gray-800" />
              <div className=" text-xs">
                <p>NEED HELP?</p>
                <p className=" font-semibold">(+1) 234 5678</p>
              </div>
            </div>
            <div className=" flex items-center justify-center gap-1">
              <FiUser className=" size-7 text-gray-800" />
              <div className=" text-xs hidden lg:block">
                <p>ACCOUNT</p>
                <p className=" font-semibold">Login / Sing Up</p>
              </div>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <div className="relative">
                <FiShoppingCart className=" size-7 text-gray-800" />
                <div className=" size-5 rounded-lg bg-[#ffc107] absolute -top-3 -right-2 flex items-center justify-center text-white text-xs">
                  2
                </div>
              </div>
              <div className=" text-xs">
                <p>CART</p>
                <p className=" font-semibold">$199.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-3 md:hidden gap-3 ">
          <div className=" flex items-center justify-between gap-1 bg-[#393939] text-white text-sm p-4 rounded">
            <HiMiniBars3 className=" size-5" />
            <p className=" hidden md:block px-3">Shop By Categories</p>
            <MdOutlineKeyboardDoubleArrowDown className=" hidden md:block size-5" />
          </div>
          <div className=" border flex items-center justify-between  pr-4 w-full   bg-[#f7f8fc] text-gray-700 text-sm rounded-md">
            <input
              type="text"
              placeholder="Search for items"
              className=" p-4 bg-transparent outline-none w-full"
              name=""
              id=""
            />
            <div>
              <PiMagnifyingGlassThin className="size-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
