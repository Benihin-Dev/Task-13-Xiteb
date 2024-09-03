import React, { useState } from "react";
import { PiUser } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import logoImg from "../img/logo.png";
import productImg1 from "../img/001.jpg";
import productImg2 from "../img/055.jpg";

export default function MiddleSection() {
  const [userIsVisible, setUserIsVisible] = useState(false);
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [dataForCart, setDataForCart] = useState([
    {
      img: productImg2,
      name: "Somersung Sonic X2500 Pro White",
      price: "389.99",
    },
    {
      img: productImg1,
      name: "Digital Thermometer X30-Pro",
      price: "80.00",
      discountPrice: "77.85",
    },
  ]);

  return (
    <div className=" w-full relative py-5 px-5  border-b lg:px-10  ">
      <div className=" w-full flex items-center justify-between gap-5">
        <div>
          <img src={logoImg} className=" w-28 sm:w-32" alt="" />
        </div>
        <div className=" w-2/5 px-4 hidden font-poppins text-lg xl:flex items-center rounded-full bg-[#f0f2f5]">
          <input
            type="text"
            className=" py-3 outline-none text-sm w-full bg-transparent"
            name=""
            placeholder="Search for products"
            id=""
          />
          <PiMagnifyingGlassBold className=" cursor-pointer size-7 text-[#66bc89]" />
        </div>
        <ul className=" flex gap-5 items-center">
          <li className=" flex items-center cursor-pointer text-gray-600 hover:text-black duration-200">
            <p>USD</p>
            <MdKeyboardArrowDown />
          </li>
          <li>
            <p className=" text-2xl text-gray-300">|</p>
          </li>
          <li className=" xl:hidden relative">
            <PiMagnifyingGlassLight className=" size-6 text-gray-500 duration-300 hover:text-[#66bc89] cursor-pointer" />
          </li>
          <li className=" ">
            <PiUser
              className="size-6 user text-gray-500 duration-300 hover:text-[#66bc89] cursor-pointer"
              onMouseEnter={() => {
                setUserIsVisible(true);
              }}
              onMouseLeave={() => {
                setUserIsVisible(false);
              }}
            />
            <div
              className={`absolute userComponent z-10   right-5 top-[80%]  ${
                userIsVisible ? "mini-scale" : "max-scale"
              }`}
              onMouseEnter={() => {
                setUserIsVisible(true);
              }}
              onMouseLeave={() => {
                setUserIsVisible(false);
              }}
            >
              <div className=" h-2 bg-transparent "></div>

              <div className="  bg-white border z-10 w-80 py-10 px-5  shadow-sm border-gray-200 rounded-sm">
                <div>
                  <p className="text-[#103178] cursor-default">
                    Username or Email Address
                  </p>
                  <input
                    type="text"
                    className="bg-[#f0f2f5] border border-[#c9d9f2] mt-2 py-2 w-full outline-none rounded-full px-4"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#103178]  cursor-default  ">Password</p>
                  <input
                    type="text"
                    className="bg-[#f0f2f5] border border-[#c9d9f2] mt-2 py-2 w-full outline-none rounded-full px-4"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[#103178]  pb-2  cursor-default">
                    Remember Me
                  </p>
                  <button className="w-full rounded-full border text-white duration-300 hover:text-[#103178] bg-[#103178] border-[#103178] py-3 hover:bg-white font-semibold">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className=" relative  ">
            <BsHeart className=" size-[22px] text-gray-500 duration-300 hover:text-[#66bc89] cursor-pointer" />
            <div className=" cursor-pointer absolute -top-3 -right-2 size-6 rounded-full flex items-center justify-center bg-[#66bc88cf] text-white text-sm font-semibold">
              7
            </div>
          </li>
          <li className=" relative">
            <PiShoppingCartLight
              onMouseEnter={() => {
                setCartIsVisible(true);
              }}
              onMouseLeave={() => {
                setCartIsVisible(false);
              }}
              className="  size-6 text-gray-500 duration-300 hover:text-[#66bc89] cursor-pointer"
            />
            <div
              onMouseEnter={() => {
                setCartIsVisible(true);
              }}
              onMouseLeave={() => {
                setCartIsVisible(false);
              }}
              className=" cursor-pointer absolute -top-3 -right-2 size-6 rounded-full flex items-center justify-center bg-[#66bc88cf] text-white text-sm font-semibold"
            >
              5
              <div
                className={`absolute userComponent  z-10 top-[200%] -right-3  ${
                  cartIsVisible ? "mini-scale" : "max-scale"
                }`}
                onMouseEnter={() => {
                  setCartIsVisible(true);
                }}
                onMouseLeave={() => {
                  setCartIsVisible(false);
                }}
              >
                <div className=" h-2 bg-transparent "></div>

                <div className="  bg-white border z-10  w-screen sm:w-96 py-10 px-5  shadow-sm border-gray-200 rounded-sm">
                  {dataForCart.map((item, index) => (
                    <div
                      key={index}
                      className=" w-full relative flex items-center py-3"
                    >
                      <img src={item.img} className=" w-20" alt="" />
                      <div className=" text-[#66bc89]">
                        <p className=" hover:text-[#103178] cursor-pointer pr-2 duration-300 text-base leading-5 mt-1">
                          {item.name}
                        </p>
                        {!item.discountPrice && (
                          <p className=" leading-5 mt-2 text-xl cursor-default">
                            ${item.price}
                          </p>
                        )}
                        {item.discountPrice && (
                          <div className=" flex items-center gap-1 mt-2">
                            <p className=" leading-5 text-xl mt-1 text-[#103178] cursor-default">
                              ${item.discountPrice}
                            </p>
                            <p className=" leading-5 text-lg mt-1 line-through text-gray-400 cursor-default">
                              ${item.price}
                            </p>
                          </div>
                        )}
                      </div>
                      <RxCross2 className=" absolute top-2 right-2 size-4 text-gray-500 hover:text-red-500 duration-300" />
                    </div>
                  ))}
                  <div className=" w-full text-lg mt-3 text-[#66bc89] font-semibold flex items-center justify-between gap-10">
                    <p>SubTotal</p>
                    <p className=" leading-5 mt-2  cursor-default">$458.99</p>
                  </div>
                  <button className=" mt-4 w-full rounded-full hover:text-white py-3 text-base bg-[white] hover:bg-[#103178] border border-[#103178] duration-300 text-[#103178]">
                    View Cart
                  </button>
                  <button className=" mt-2 w-full rounded-full text-white py-3 text-base hover:bg-[white] bg-[#103178] border border-[#103178] duration-300 hover:text-[#103178]">
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
