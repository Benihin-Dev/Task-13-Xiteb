import React, { useState } from "react";
import "../css/Header.css";
import { BsCart2 } from "react-icons/bs";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import SearchBox from "./SearchBox";
import CartSection from "./CartSection";
import NavLinksForSmScreen from "./NavLinksForSmScreen";

export default function Header({ showSlideUpBtn }) {
  const navLinks = [
    { title: "Home", subLinks: false },
    {
      title: "Pages",
      subLinks: [
        { title: "About", subLinks: false },
        {
          title: "Restaurants",
          subLinks: ["Restaurant", "Restaurant", "Restaurant"],
        },
        { title: "FAQ", subLinks: false },
        { title: "Gallery", subLinks: false },
        { title: "Our Chefs", subLinks: false },
        { title: "Privacy Policy", subLinks: false },
        { title: "Trems & Contitions", subLinks: false },
        { title: "404", subLinks: false },
      ],
    },
    { title: "Shop", subLinks: false },
    { title: "OFFERS", subLinks: false },
    {
      title: "Contact",
      subLinks: false,
    },
  ];
  const [pagesIsVisible, setPagesIsVisible] = useState(false);
  const [restaurantIsVisible, setRestaurantIsVisible] = useState(false);
  const [searchBoxState, setSearchBoxState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [smallScreenNavLinkState, setSmallScreenNavLinkState] = useState(false);

  return (
    <>
      <div
        className={` w-full ${
          showSlideUpBtn ? "bg-white   border-b" : "bg-transparent"
        }   py-6 fixed top-0 left-0 z-30 `}
      >
        <div className=" relative responsiveWeith flex justify-between gap-10">
          <img
            src="https://themes.xcommerz.com/pizza-shop/assets/images/logo.png"
            className=" w-36 object-contain"
            alt=""
          />
          <ul className=" hidden lg:flex gap-6 items-center  text-xl font-medium">
            {navLinks.map((navLink, index) => (
              <li
                onClick={() => setActiveSection(navLink.title)}
                key={index}
                onMouseEnter={() => {
                  if (navLink.subLinks) {
                    setPagesIsVisible(true);
                  }
                }}
                onMouseLeave={() => {
                  if (navLink.subLinks) {
                    setPagesIsVisible(false);
                  }
                }}
                className=" relative group cursor-pointer "
              >
                <div className="cursor-pointer flex items-center gap-0">
                  <p
                    className={`${
                      activeSection === navLink.title ? "text-[#ffa101]" : ""
                    } ${
                      navLink.title === "OFFERS"
                        ? "text-red-400 hover:text-red-400"
                        : "text-[#787c81]  hover:text-[#ffa101]"
                    }   duration-300 `}
                  >
                    {navLink.title}
                  </p>
                  {navLink.subLinks && (
                    <MdOutlineKeyboardArrowDown className=" size-4 text-gray-400" />
                  )}
                </div>
                <LiaPizzaSliceSolid
                  className={` ${
                    activeSection === navLink.title ? "block" : "hidden"
                  }  opacity group-hover:block absolute size-6 -top-5  text-[#ffa2018e]  left-0 `}
                />
                {navLink.subLinks && (
                  <div
                    onMouseEnter={() => {
                      setPagesIsVisible(true);
                    }}
                    onMouseLeave={() => {
                      setPagesIsVisible(false);
                    }}
                    className={` navComponent ${
                      pagesIsVisible ? "slide-up" : "slide-down"
                    } absolute bg-white top-[110%] left-0 py-5 px-4 w-fit   border `}
                  >
                    {navLink.subLinks.map((subLink, i) => (
                      <div
                        className="  flex items-center gap-6 cursor-pointer text-gray-400 text-base duration-200 hover:text-[#ffa101] py-[3px] border-b border-transparent hover:border-b-[#ffa101] font-normal"
                        key={i}
                        onMouseEnter={() => {
                          if (subLink.subLinks) {
                            setRestaurantIsVisible(true);
                          }
                        }}
                        onMouseLeave={() => {
                          if (subLink.subLinks) {
                            setRestaurantIsVisible(false);
                          }
                        }}
                      >
                        <p className=" pr-5 text-lg "> {subLink.title}</p>
                        {subLink.subLinks && (
                          <>
                            <MdOutlineKeyboardArrowDown className=" -rotate-90 size-4 text-gray-400" />
                            <div
                              onMouseEnter={() => {
                                setRestaurantIsVisible(true);
                              }}
                              onMouseLeave={() => {
                                setRestaurantIsVisible(false);
                              }}
                              className={` restaurantComponent ${
                                restaurantIsVisible ? "slide-up" : "slide-down"
                              } absolute left-[101%] top-12 bg-white  w-fit p-5 border `}
                            >
                              {subLink.subLinks.map((link, index1) => (
                                <p
                                  key={index1}
                                  className=" text-gray-600 duration-200 pr-5 cursor-pointer hover:text-[#ffa101]"
                                >
                                  {link}
                                </p>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className=" flex items-center  gap-5">
            <div className="  hidden lg:block cursor-default">
              <p className=" text-sm text-gray-400">Call for Order</p>
              <p className=" text-[#ffa101] font-semibold text-lg">
                (+1)-234-5678
              </p>
            </div>
            <p className=" hidden lg:flex text-4xl border-l border-[#ffa101] text-transparent">
              {" "}
              |
            </p>
            <div className=" flex text-center gap-2">
              <div className=" relative">
                <BsCart2
                  onClick={() => {
                    setCartState(!cartState);
                  }}
                  className=" size-6 text-gray-600 duration-200 hover:text-gray-400 cursor-pointer"
                />
                <div className=" absolute -top-4 w-full flex items-center justify-center text-xs  py-[1px] left-0 bg-[#ffa101] text-white">
                  5
                </div>
              </div>
              <div className="">
                <PiMagnifyingGlassLight
                  onClick={() => {
                    setSearchBoxState(true);
                  }}
                  className=" size-6 text-gray-700 duration-200 hover:text-gray-400 cursor-pointer"
                />
              </div>
              <div
                onClick={() => {
                  setSmallScreenNavLinkState(!smallScreenNavLinkState);
                }}
                className=" block lg:hidden"
              >
                {smallScreenNavLinkState ? (
                  <RxCross2 className=" size-6 text-gray-700 duration-200 hover:text-gray-400 cursor-pointer" />
                ) : (
                  <HiMiniBars3CenterLeft className=" size-6 text-gray-700 duration-200 hover:text-gray-400 cursor-pointer" />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* {smallScreenNavLinkState && ( */}
        <div
          className={` absolute navLinkComponent  top-[90%] flex items-center justify-center w-screen  left-0  ${
            smallScreenNavLinkState ? "slide-downS" : "slide-upS"
          }`}
        >
          <NavLinksForSmScreen navLinks={navLinks} />
        </div>
        {/* )} */}
      </div>
      {searchBoxState && (
        <SearchBox
          searchBoxState={searchBoxState}
          setSearchBoxState={setSearchBoxState}
        />
      )}

      <div
        className={` fixed top-0 w-screen h-screen overflow-y-scroll customScrollbar right-0 z-50 bg-[#0000002c] ${
          !cartState && "hideCartComponent"
        }`}
      >
        <div
          className={`${
            cartState ? "slide-left" : "slide-right"
          } w-full cartComponent ml-auto sm:w-96 `}
        >
          <CartSection setCartState={setCartState} />
        </div>
      </div>
    </>
  );
}
