import React, { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { PiSquaresFourBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import bannerImg from "../img/banner-menu.png";
import hotImg from "../img/icon-hot-white.svg";
import TrendingCategory from "./TrendingCategory";

export default function BottomSection() {
  const navLinks = [
    { name: "Home", subContent: false },
    { name: "About", subContent: false },
    { name: "Shop", subContent: false },
    {
      name: "Mega Menu",
      subContent: true,
      img: bannerImg,
      subLinks: [
        {
          head: "Fruit & Vegitables",
          links: [
            "Meat & Poultry",
            "Fresh Vegitables",
            "Herbs & Seasonings",
            "Cuts & Sprouts",
            "Exotirc Fruits & Veggies",
            "Packaged Produce",
          ],
        },
        {
          head: "Breakfast & Dairy",
          links: [
            "Milk & Flavoured Milk",
            "Butter and Margarine",
            "Egg Substitutes",
            "Marmalades",
            "Sour Cream",
            "Cheese",
          ],
        },
        {
          head: "Meat & Seafood",
          links: [
            "Breakfast Sause",
            "Dinner Sausage",
            "Chicken",
            "Sliced Dell Meat",
            "Wild Caught Filtets",
            "Crab and Shellfish",
          ],
        },
      ],
    },
    { name: "Blog", subContent: false },
    {
      name: "Pages",
      subContent: true,
      img: bannerImg,
      subLinks: [
        {
          head: "Meat & Seafood",
          links: [
            "Breakfast Sause",
            "Dinner Sausage",
            "Chicken",
            "Sliced Dell Meat",
            "Wild Caught Filtets",
            "Crab and Shellfish",
          ],
        },
        {
          head: "Breakfast & Dairy",
          links: [
            "Milk & Flavoured Milk",
            "Butter and Margarine",
            "Egg Substitutes",
            "Marmalades",
            "Sour Cream",
            "Cheese",
          ],
        },
        {
          head: "Fruit & Vegitables",
          links: [
            "Meat & Poultry",
            "Fresh Vegitables",
            "Herbs & Seasonings",
            "Cuts & Sprouts",
            "Exotirc Fruits & Veggies",
            "Packaged Produce",
          ],
        },
      ],
    },
    { name: "Contact", subContent: false },
  ];
  const [itemIndexForSubContentComponent, setItemIndexForSubContentComponent] =
    useState(-1);
  const [navLinkStateForMobileScreen, setNavLinkStateForMobileScreen] =
    useState(false);
  function NavLink() {
    return (
      <ul className=" md:flex space-y-8  md:space-y-0 items-end  gap-4 block">
        <li className=" flex justify-center md:justify-start items-end gap-[2px] cursor-pointer">
          <img src={hotImg} className=" size-5" alt="" />
          <p className=" leading-3">Deals</p>
        </li>
        {navLinks.map((navLink, index) => (
          <li
            onMouseOver={() => {
              setItemIndexForSubContentComponent(index);
            }}
            key={index}
            className=" relative leading-3 flex items-end justify-center md:justify-star cursor-pointer"
          >
            <p>{navLink.name}</p>
            {navLink.subContent && <MdKeyboardArrowDown className=" size-4" />}
          </li>
        ))}
      </ul>
    );
  }

  const [trendingCategoryListState, setTrendingCategoryListState] =
    useState(false);

  function ComponentForSubContent() {
    return (
      <>
        {itemIndexForSubContentComponent === 3 ||
        itemIndexForSubContentComponent === 5 ? (
          <div
            className={` ${
              itemIndexForSubContentComponent === 3 ||
              itemIndexForSubContentComponent === 5
                ? "md:block slideUp hidden"
                : "slideDown hidden"
            } absolute top-[100%] left-0 w-full z-20  text-gray-500 `}
          >
            <div className=" w-11/12 md:w-10/12  mx-auto  lg:flex  border-gray-200 shadow-md  border p-5 bg-white  relative">
              <div className=" w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {navLinks[itemIndexForSubContentComponent].subLinks.map(
                  (subLink, index) => (
                    <div key={index}>
                      <h1 className=" font-semibold text-[#2faf36] ">
                        {subLink.head}
                      </h1>
                      <div className=" space-y-3 mt-4">
                        {subLink.links.map((link, i) => (
                          <p
                            key={i}
                            className="  text-xs duration-200 hover:text-[#2faf36] cursor-pointer"
                          >
                            {link}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className=" w-full lg:w-1/3 mt-5 lg:mt-0 relative">
                <img
                  src={navLinks[itemIndexForSubContentComponent].img}
                  alt=""
                  className=" w-full object-cover shadow-md"
                />
                <div className=" absolute top-0 left-0 w-full h-full ">
                  <div className=" relative h-full w-full">
                    <div className="  rounded-full text-sm absolute top-4 right-4 shadow-md bg-[#fed557] size-16 flex items-center justify-center font-semibold">
                      <div>
                        <p className=" leading-4">25%</p>
                        <p className=" leading-4">Off</p>
                      </div>
                    </div>
                    <div className=" w-1/2 h-full p-4 flex items-end">
                      <div>
                        <p className=" text-black text-sm pb-2 cursor-default">
                          HOT DEALS
                        </p>
                        <p className=" text-black leading-4 pb-2 cursor-default text-lg font-semibold">
                          Dont't miss Trebding{" "}
                        </p>
                        <p className=" text-lg text-[#93b155] cursor-default font-semibold">
                          Save to 50%
                        </p>
                        <button className=" mb-5 px-5 mt-4 py-1 duration-200 hover:bg-[#fc6e6b] rounded-full bg-[#31ae34] text-white">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                onClick={() => {
                  setItemIndexForSubContentComponent(-1);
                }}
                className=" p-1 text-gray-400 hover:text-red-500 duration-200 rotate-45 absolute top-[2px] right-1 cursor-pointer leading-3 text-2xl"
              >
                +
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }

  return (
    <div className=" w-full py-2 relative bg-[#2faf36] text-white  text-[14px]">
      <div className=" responsiveWeith flex items-center justify-between  gap-4 relative">
        <div className=" w-10/12 sm:w-fit  md:flex items-center gap-3">
          <div className=" w-full md:w-fit relative px-3 py-2 gap-1 bg-[#ffb100] rounded cursor-pointer">
            <div
              onClick={() =>
                setTrendingCategoryListState(!trendingCategoryListState)
              }
              className="  flex  items-center justify-center md:justify-start"
            >
              <PiSquaresFourBold className=" size-5" />
              <p className=" leading-4">Trending Categories</p>
              <MdKeyboardArrowDown
                className={` ${
                  trendingCategoryListState && "rotate-180"
                } size-4 `}
              />
            </div>
            {trendingCategoryListState && (
              <div className=" w-[110%] sm:w-[150%] md:w-[200%] top-[150%] z-20 rounded shadow-md left-0 absolute bg-white border text-black p-5">
                <TrendingCategory gridSize={2} />
              </div>
            )}
          </div>
          <ul className=" hidden md:flex items-end justify-start gap-4">
            <NavLink />
          </ul>
        </div>
        <div className=" hidden lg:flex items-center gap-1">
          <div>
            <BiSupport className=" text-white size-9" />
          </div>
          <div className=" text-white">
            <p className=" text-lg  leading-5">1234 1234</p>
            <p className=" text-[10px] leading-3"> 24/7 Support Center</p>
          </div>
        </div>
        <FaBarsStaggered
          onClick={() => {
            setNavLinkStateForMobileScreen(!navLinkStateForMobileScreen);
          }}
          className=" size-5  cursor-pointer  md:hidden hover:rotate-180"
        />
      </div>
      <ComponentForSubContent />
      {navLinkStateForMobileScreen && (
        <div className=" absolute top-[100%] z-20 left-0 w-full bg-[#2faf36] md:hidden py-8 slideDown1">
          <NavLink />
        </div>
      )}
    </div>
  );
}
