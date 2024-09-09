import React from "react";
import logoImg from "../img/logo.png";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function MiddleSection() {
  const navLinks = [
    {
      title: "Information",
      links: [
        "About us",
        "Delivery information",
        "Privacy Policy",
        "Sales",
        "Terms & Conditions",
      ],
    },
    {
      title: "Account",
      links: ["My account", "My orders", "Returns", "Shipping", "Wishlist"],
    },
    {
      title: "Store",
      links: [
        "Affiliate",
        "Bestsellers",
        "Discount",
        "Latest products",
        "Sale",
      ],
    },
  ];
  return (
    <div className=" w-full bg-white border-b px-5 mt-5 sm:px-10 pb-10">
      <div className=" w-full md:grid grid-cols-2 gap-5">
        <div className=" sm:grid-cols-2 grid gap-4">
          <div className=" w-full border-r px-4">
            <img src={logoImg} className=" w-32" alt="" />
            <p className=" leading-4 my-5 text-gray-600 cursor-default">
              Your Street, Your City <br /> Your Country
            </p>
            <p className=" text-gray-800 text-sm underline pb-4">Show on Map</p>
            <div className=" flex items-center gap-2 text-[#9e9999]">
              <FaFacebookF className=" size-5 cursor-pointer hover:text-blue-600 duration-200" />
              <IoLogoInstagram className=" size-5 cursor-pointer hover:text-[#d95766] duration-200" />
              <BsYoutube className=" size-5 cursor-pointer hover:text-[red] duration-200" />
              <FaPinterestP className=" size-5 cursor-pointer hover:text-red-500 duration-200" />
              <FaLinkedinIn className=" size-5 cursor-pointer hover:text-blue-500 duration-200" />
            </div>
          </div>
          <div className=" w-full px-4  mt-7 md:mt-0  ">
            <p className=" text-[#66bc89] font-semibold pb-5">NEED HELP</p>
            <div className=" flex items-center pb-4 gap-4">
              <FiPhone className=" size-7 text-[#103178]" />
              <p className=" text-[#66bc89] font-semibold text-lg">
                +1 234 5678
              </p>
            </div>
            <p className=" text-xs text-[#103178]">
              Monday - Friday: 9:00 - 20:00
            </p>
            <p className=" text-xs text-[#103178]">Saterday: 11:00 - 15:00</p>
            <p className=" w-full pt-6 border-b"></p>
            <div className=" flex items-center gap-2  py-5 text-[#66bc89]">
              <HiOutlineMail className=" size-6" />
              <p className=" cursor-pointer text-sm font-semibold">
                contact@example.com
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
          {navLinks.map((item, index) => (
            <div key={index} className=" w-full ">
              <p className=" text-[#66bc89] font-semibold pb-6">{item.title}</p>
              {item.links.map((link, i) => (
                <p
                  key={i}
                  className=" text-[#103178] text-xs cursor-pointer hover:font-semibold pb-3"
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
