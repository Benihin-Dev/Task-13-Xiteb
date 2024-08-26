import React from "react";
import logoImg from "../img/logo_t.svg";
import { FaBars } from "react-icons/fa";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import NavItemsForSmallScreen from "./NavItemsForSmallScreen";

export default function BottomSection({ searchBarState, setSearchBarState }) {
  const navLinks = [
    { link: "HOME", subLink: false },
    { link: "ABOUT", subLink: false },
    { link: "SHOP", subLink: ["SHOP", "CART", "MY ACCOUNT", "CHECKOUT"] },
    { link: "PRODUCT", subLink: false },
    {
      link: "PAGES",
      subLink: [
        "MENU",
        "OUR CHEF",
        "PRICING",
        "PROTFOLIO",
        "TESTIMONIAL",
        "FAQ",
      ],
    },
    { link: "BLOGS", subLink: false },
    { link: "CONTACT", subLink: false },
  ];
  return (
    <div className=" py-1 px-5  font-khand text-[20px] relative  ">
      <div className=" flex items-center justify-between">
        <div>
          <img src={logoImg} className=" size-[50px] lg:size-[100px]" alt="" />
        </div>
        <div className=" lg:hidden">
          <FaBars className=" size-6 " />
        </div>
        <div className="hidden lg:flex gap-12 items-center text-white font-medium">
          {navLinks.map((navLink, index) => (
            <div
              key={index}
              className="relative group hover:text-[#c41f3a] duration-200 cursor-pointer flex items-center gap-0"
            >
              {navLink.link}
              <MdOutlineKeyboardArrowDown
                className={`${
                  navLink.subLink === false ? "hidden" : "block"
                } size-6`}
              />
              {navLink.subLink && (
                <div className="slideUp  hidden group-hover:block  text-gray-600 absolute w-[400%] top-[100%]">
                  <p className=" h-10 bg-[#11111100]"></p>
                  <div className="  px-2 py-4 space-y-3 bg-white">
                    {navLink.subLink.map((link, i) => (
                      <p
                        key={i}
                        className=" hover:pl-2 duration-200 hover:text-[#c41f3a]"
                      >
                        {link}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className=" hidden lg:flex items-center gap-5">
          <div
            onClick={() => {
              setSearchBarState(!searchBarState);
            }}
            className=" p-2 rounded-full cursor-pointer duration-300 hover:bg-[#c41f3a]"
          >
            <PiMagnifyingGlassLight className="  size-7 text-white" />
          </div>
          <button className=" py-3 text-2xl rounded-md font-semibold text-white duration-500 px-7 bg-[#c41f3a] hover:bg-[#1e1e1e]">
            ORDER NOW
          </button>
        </div>
      </div>
      <NavItemsForSmallScreen />
    </div>
  );
}
