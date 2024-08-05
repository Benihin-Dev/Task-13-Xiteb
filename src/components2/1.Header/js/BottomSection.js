import React from "react";
import { LiaStar } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { PiCube } from "react-icons/pi";

export default function BottomSection() {
  return (
    <div className=" w-full relative py-4 border-b hidden md:block">
      <div className="responsiveWeith flex items-center justify-between gap-10 ">
        <ul className=" flex items-center gap-5  ">
          <li className=" cursor-pointer hover:text-[#ffc107] duration-200">
            Home
          </li>
          <li className=" cursor-pointer hover:text-[#ffc107] duration-200">
            Shop
          </li>
          <li className=" cursor-pointer hover:text-[#ffc107] duration-200">
            Mobile & Tablets
          </li>
          <li className=" cursor-pointer hover:text-[#ffc107] duration-200">
            Laptop & Computers
          </li>
          <li className=" cursor-pointer hover:text-[#ffc107] duration-200">
            Blog
          </li>
        </ul>
        <ul className=" flex items-center gap-5 text-sm ">
          <li className=" flex items-center gap-2 cursor-pointer">
            <LiaStar className=" size-4 mb-1" />
            <p className=" hidden lg:block">Recently Viewed</p>
          </li>
          <li className=" text-gray-500">|</li>
          <li className=" flex items-center gap-2 cursor-pointer">
            <CiHeart className=" size-4 mb-1" />
            <p className=" hidden lg:block"> Order Status</p>
          </li>
          <li className=" text-gray-500">|</li>
          <li className=" flex items-center gap-2 cursor-pointer">
            <PiCube className=" size-4 mb-1" />
            <p className=" hidden lg:block">Save Items</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
