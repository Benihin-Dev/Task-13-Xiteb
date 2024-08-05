import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

export default function TopSection() {
  const currencyList = ["USD", "LKR", "IR", "EURO", "AUD"];
  const [selectedCurrenctIndex, setSelectedCurrenctIndex] = useState(0);

  return (
    <div className=" w-full relative pt-2 pb-1 border-b text-xs">
      <div className=" responsiveWeith">
        <div className=" w-full flex justify-between gap-10 items-center">
          <p>Welcome to Singer</p>
          <ul className=" flex items-center  gap-2 lg:gap-3">
            <li className="  flex items-center gap-1 cursor-pointer">
              <IoLocationOutline className=" size-3" />
              <p className="hover:text-[#e6154b] duration-200 hidden md:block pt-1">
                {" "}
                Store Location
              </p>
            </li>
            <li className=" text-gray-300 text-lg cursor-default">|</li>
            <li className=" hover:text-[#e6154b] duration-200 hidden md:flex items-center gap-1  cursor-pointer">
              <TbTruckDelivery className=" size-4 text-gray-600 " />
              <p className=" pt-1">Track Your Order</p>
            </li>
            <li className="hidden md:flex text-gray-300 text-lg cursor-default">
              |
            </li>
            <li className="group flex items-center justify-center gap-1 w-[70px]  cursor-pointer px-2 pb-1 relative">
              <div className=" flex items-center ">
                <p className="  pt-1">{currencyList[selectedCurrenctIndex]}</p>
                <MdOutlineKeyboardArrowDown className=" mt-1 text-gray-500 size-4" />
              </div>
              <div className=" slideDown group-hover:block hidden bg-white z-20  w-[130%] absolute top-[90%] -left-[15%]  ">
                {currencyList.map((currency, i) => (
                  <p
                    onClick={() => {
                      setSelectedCurrenctIndex(i);
                    }}
                    key={i}
                    className="hover:text-white duration-200 hover:bg-[#e6154b] w-full text-center py-1 "
                  >
                    {currency}
                  </p>
                ))}
              </div>
            </li>
            <li className=" text-gray-300 text-lg cursor-default">|</li>
            <li className=" flex items-center gap-1  cursor-pointer">
              <AiOutlineUser className=" size-4 text-gray-700" />
              <p className="hover:text-[#e6154b] duration-200 hidden md:block pt-1">
                Regiser or Sing in
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
