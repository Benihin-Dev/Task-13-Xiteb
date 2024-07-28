import React from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { GrPowerCycle } from "react-icons/gr";
import { GoZoomIn } from "react-icons/go";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { HiShoppingCart } from "react-icons/hi2";

export default function TempletForProducrPreview({ item }) {
  return (
    <div className=" m-2 scale-95 bg-white  group  overflow-hidden relative cursor-pointer">
      <img
        src={item.img}
        alt=""
        className="  duration-300 w-full object-cover"
      />
      <div className="  w-full gap-3 grid grid-cols-2 items-end justify-between mt-4">
        <p className=" font-semibold text-sm leading-4 ">{item.title}</p>
        <div className="flex items-center justify-end gap-1">
          <div className="flex items-center ">
            {Array.from({ length: 5 }, (_, index) =>
              index < item.rating.rate ? (
                <HiStar key={index} className="text-[#00b9f5] size-4" />
              ) : (
                <HiOutlineStar key={index} className="text-gray-400 size-4" />
              )
            )}
          </div>
          <p className=" text-gray-700 text-xs">({item.rating.reviews})</p>
        </div>
      </div>
      <div className=" flex items-end mt-4 pb-1 gap-3 justify-between ">
        <div className=" h-5 overflow-hidden  ">
          <p className=" group-hover:-translate-y-5 duration-200   text-sm leading-4 pt-1">
            <span
              className={` ${item.discount && "line-through"}  text-gray-500  `}
            >
              $ {item.price}
            </span>
            <br />
            <span className=" border-b text-xs text-gray-900 font-semibold border-black mx-1 flex items-center  gap-1">
              {" "}
              <HiShoppingCart /> Add to Cart
            </span>
          </p>
        </div>
        <div className=" flex items-center gap-1 justify-center">
          {item.availableColors.map((color, i) => (
            <div
              key={i}
              className={` size-5   relative   cursor-pointer hover:scale-105 duration-200 text-[${color}] rounded-full border shadow-sm `}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
      {item.newProduct && (
        <p className=" absolute top-0 left-0 text-sm py-1 px-5 text-white bg-[#00a808]">
          New
        </p>
      )}
      {item.offer && (
        <>
          {item.offer.status && (
            <p className=" absolute top-0 left-0 text-sm py-1 px-3 text-white bg-[#d34b56]">
              {item.offer.offerPercentage}% Off
            </p>
          )}
        </>
      )}
      <div className="absolute top-0   right-0 p-2 flex items-start justify-end    ">
        <div className=" space-y-1">
          <CiHeart className="size-7 hover:scale-110  text-gray-600  hover:text-red-600 duration-300" />
          <GrPowerCycle className="size-7 hover:scale-110 text-gray-600 p-[3px] hover:text-[#00b9f5] opacity-0 group-hover:opacity-100 duration-500" />
          <GoZoomIn className="size-7 hover:scale-110 text-gray-600 p-1 opacity-0  hover:text-[#00b9f5] group-hover:opacity-100 duration-500" />
        </div>
      </div>
    </div>
  );
}
