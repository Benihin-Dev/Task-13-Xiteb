import React from "react";
import { FaRegEye } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeart } from "react-icons/io";
import { HiStar } from "react-icons/hi2";
import shopImg1 from "../img/fx_shop_9.jpg";
import shopImg2 from "../img/fx_shop_12.jpg";
import shopImg3 from "../img/fx_shop_6.jpg";
import shopImg4 from "../img/fx_shop_7.jpg";
import shopImg5 from "../img/fx_shop_10.jpg";
import shopImg6 from "../img/fx_shop_11.jpg";
import shopImg7 from "../img/fx_shop_12.jpg";
import shopImg8 from "../img/fx_shop_120.jpg";
import CustomBtn from "../../assets/js/CustomBtn";

export default function BestDessterts() {
  const data = [
    { img: shopImg1, name: "Marshmallows Smores", price: 91, ratine: 4 },
    { img: shopImg2, name: "Chocolate Moose", price: 65, ratine: 3 },
    { img: shopImg3, name: "Blueberry ice-cream", price: 45, ratine: 5 },
    { img: shopImg4, name: "Blackcurrant", price: 82, ratine: 2 },
    { img: shopImg5, name: "Marshmallows Smores", price: 25, ratine: 4 },
    { img: shopImg6, name: "Raspberry ice-cream", price: 36, ratine: 5 },
    { img: shopImg7, name: "Chocolate Cone ice-cream", price: 19, ratine: 3 },
    { img: shopImg8, name: "Oreo ice-cream", price: 99, ratine: 5 },
  ];
  return (
    <div className=" w-full relative py-20 bg-[#f1fbff]">
      <div className=" responsiveWeith">
        <p className=" text-center text-4xl font-medium uppercase">
          OUR
          <span className=" text-[#c41f3a]"> BEST </span> DESSERTS
        </p>
        <div className=" grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 ">
          {data.map((item, index) => (
            <div
              key={index}
              className=" group bg-white px-3 mx-1 py-6 duration-200 hover:mt-2 mt-5 hover:mb-3 rounded-md shadow-md overflow-hidden"
            >
              <div className=" relative w-full">
                <img src={item.img} alt="" />
                <div className=" -z-10   group-hover:z-10  group-hover:top-[75%] duration-500 absolute w-full top-[100%] left-0">
                  <div className="flex items-center gap-5 justify-center text-gray-600">
                    <div className="size-10 flex items-center justify-center cursor-pointer bg-[#ffffff] hover:text-white hover:bg-[#c41f3a] duration-300 rounded-full ">
                      <FaRegEye className=" size-5" />
                    </div>
                    <div className=" size-10 flex items-center justify-center cursor-pointer bg-[#ffffff] hover:text-white hover:bg-[#c41f3a] duration-300 rounded-full ">
                      <TiShoppingCart className=" size-6" />
                    </div>
                    <div className="size-10 flex items-center justify-center cursor-pointer bg-[#ffffff] hover:text-white hover:bg-[#c41f3a] duration-300 rounded-full ">
                      <IoIosHeart className=" size-5" />
                    </div>
                  </div>
                </div>
              </div>
              <p className=" cursor-default mt-5 text-gray-800 text-xl w-full text-center font-medium">
                {item.name}
              </p>
              <p className=" cursor-default text-center w-full text-[#c41f3a] font-semibold text-2xl   pt-1">
                ${item.price}
              </p>
              <div className=" flex gap-[2px] mt-2 mb-6 items-center justify-center">
                {Array.from({ length: 5 }, (_, index) =>
                  index < item.ratine ? (
                    <HiStar key={index} className="text-[#ffad33cb] size-5" />
                  ) : (
                    <HiStar key={index} className="text-gray-300 size-5" />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <div className=" flex items-center justify-center">
          <CustomBtn text={"LOAD MORE"} />
        </div>
      </div>
    </div>
  );
}
