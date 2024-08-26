import React, { useContext } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CurrencyContext } from "../../CurrencyContext/js/CurrencyContext";

export default function TopSection() {
  const { currencyList, currencyType, setCurrencyType } =
    useContext(CurrencyContext);
  return (
    <div className=" w-full py-2 relative border-b text-xs">
      <div className=" responsiveWeith  sm:flex items-center space-y-2 sm:space-y-0 justify-between gap-8">
        <ul className="  flex gap-2 items-center w-full sm:w-fit justify-between sm:justify-start text-gray-500">
          <li className=" hover:text-black duration-200 cursor-pointer">
            About Us
          </li>
          <li className="   cursor-default">|</li>
          <li className=" hover:text-black duration-200 cursor-pointer">
            My Account
          </li>
          <li className="  cursor-default">|</li>
          <li className=" hover:text-black duration-200 cursor-pointer">
            Wishlist
          </li>
          <li className="  cursor-default">|</li>
          <li className=" hover:text-black duration-200 cursor-pointer">
            Order Tracking
          </li>
        </ul>
        <p className=" hidden lg:block   text-gray-500 w-full text-center sm:w-fit cursor-default">
          100% Secure delivery without contacting the courier
        </p>
        <ul className=" flex items-center justify-between gap-2 text-gray-600">
          <li className=" cursor-default">
            Need Help? Call Us:{" "}
            <span className=" text-[#2faf36] ">+1 234 5678</span>
          </li>
          <li className="   cursor-default hidden sm:block">|</li>
          <li className=" flex items-center  gap-1 justify-center w-[55px] py-[1px] group relative ">
            <p className=" cursor-pointer">{currencyList[currencyType]}</p>
            <MdKeyboardArrowDown className=" size-3 mb-[2px]" />
            <div className=" z-10 bg-white border-t-transparent w-full border absolute top-[100%] left-0  hidden group-hover:block ">
              {currencyList.map((currency, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setCurrencyType(index);
                  }}
                  className=" w-full text-center py-1 hover:bg-[#3eb944] cursor-pointer hover:text-white duration-200"
                >
                  {currency}
                </p>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
