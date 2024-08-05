import React from "react";
import { BiCartDownload } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export default function ProductTemplet({ product, hoverState }) {
  return (
    <>
      <p className="px-3 z-10 text-xs text-gray-400 pr-5  cursor-default">
        {product.category}
      </p>
      <div className="px-3 z-10 w-full border-r border-l border-gray-100 group-hover:border-transparent">
        <p className=" font-bold leading-4 text-[#0872c7] text-[12px] pt-1  h-10 cursor-default">
          {product.name}
        </p>
        <img
          src={product.img}
          className=" pb-5 pt-2 mx-auto duration-200"
          alt=""
        />
        {product.actualPrice && (
          <p className=" cursor-default text-xs line-through text-gray-400">
            ${product.actualPrice}
          </p>
        )}
        {!product.actualPrice && (
          <p className=" cursor-default text-transparent text-xs line-through">
            ${product.actualPrice}
          </p>
        )}
        <p className=" cursor-default">${product.price}</p>
        {hoverState && (
          <div className="  hidden group-hover:flex  items-center slideDown bg-white justify-between gap-5 text-xs text-gray-600 mt-3 border-t pt-3 pb-0">
            <div className=" flex items-end gap-1  cursor-pointer hover:text-[#0872c7] hover:font-semibold ">
              <AiOutlineRetweet className=" size-5" />
              <p>Compare</p>
            </div>
            <div className=" flex items-start cursor-pointer size-6  overflow-hidden  hover:font-semibold    relative">
              <div className="  hover:-translate-y-6">
                <GoHeart className=" size-6" />
                <GoHeartFill className=" size-6 text-[#0872c7]" />
              </div>
            </div>
          </div>
        )}
        <div
          className={` absolute top-[90%] ${
            hoverState && "group-hover:top-[75%]  lg:group-hover:top-[77%]"
          } right-4 group cursor-pointer  size-8 rounded-full bg-[#e6154b] text-white flex items-center justify-center `}
        >
          <BiCartDownload className=" size-5  " />
        </div>
      </div>
    </>
  );
}
