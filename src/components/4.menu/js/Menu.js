import React from "react";
import menuImg1 from "../img/banner-01.jpg";
import menuImg2 from "../img/banner-02.jpg";
import menuImg3 from "../img/banner-03.jpg";
import menuImg4 from "../img/banner-04.jpg";
import menuImg5 from "../img/banner-05.jpg";
import menuImg6 from "../img/banner-06.jpg";

export default function Menu() {
  const menuData = [
    { img: menuImg1, title: "Women Accessories" },
    { img: menuImg3, title: "Women Store" },
    { img: menuImg4, title: "Spacial Discount" },
    { img: menuImg5, title: "Man Accessories" },
    { img: menuImg2, title: "Winter Collection" },
    { img: menuImg6, title: "Man's Store" },
  ];
  return (
    <div className=" w-full relative py-20">
      <div className=" w-full px-5 sm:px-0 sm:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
        {menuData.map((item, index) => (
          <div
            key={index}
            className={` ${
              item.title === "Women Store"
                ? "row-span-2 sm:row-span-1 md:row-span-2 sm:aspect-square md:aspect-auto "
                : item.title === "Man's Store"
                ? "   sm:col-span-1 md:col-span-2 sm:aspect-square md:aspect-auto"
                : "aspect-squar  "
            } border w-full   overflow-hidden rounded-sm shadow-sm relative `}
          >
            <img
              src={item.img}
              alt=""
              className=" w-full h-full object-cover hover:scale-105 duration-500"
            />
            <p
              className={` ${
                item.title === "Man's Store" ? "right-0" : "left-0"
              } absolute  bottom-0  bg-[#262626] hover:bg-[#00b9f5] duration-200 cursor-pointer font-semibold text-white py-2 px-5  text-xs`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
