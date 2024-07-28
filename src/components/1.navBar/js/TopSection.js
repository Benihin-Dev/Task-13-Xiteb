import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export default function TopSection() {
  const [activeSection, setActiveSection] = useState("sale");

  return (
    <div className=" w-full bg-black py-2 text-xs">
      <div className=" w-full px-5 sm:px-0 sm:w-10/12 mx-auto   flex justify-between items-center text-white">
        <div className=" flex items-center justify-between w-full sm:w-fit gap-0 sm:gap-3">
          <div className=" hover:text-[#00c5f8] cursor-pointer duration-200   flex  items-center  gap-1">
            <FaPhone className=" rotate-90 size-3" />
            <p>+12 345 6789</p>
          </div>
          <div className=" hover:text-[#00c5f8] cursor-pointer duration-200   flex items-center gap-1 ">
            <CgMail className="  size-5" />
            <p>mail@mail.com</p>
          </div>
        </div>
        <ul className="   items-center hidden md:flex  gap-8">
          <li
            className={` ${
              activeSection === "about" ? "text-[#00c5f8]" : ""
            } hover:text-[#00c5f8] cursor-pointer duration-200 `}
          >
            ABOUT US
          </li>
          <li
            className={` ${
              activeSection === "sale" ? "text-[#00c5f8]" : ""
            } hover:text-[#00c5f8] cursor-pointer duration-200 `}
          >
            SALE
          </li>
          <li
            className={` ${
              activeSection === "contact" ? "text-[#00c5f8]" : ""
            } hover:text-[#00c5f8] cursor-pointer duration-200 `}
          >
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  );
}
