import React from "react";
import { BiCartDownload } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { GoHeart } from "react-icons/go";

export default function ProductTempletForBS({ Top20ProductList }) {
  return (
    <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 ">
      {Top20ProductList.map((product, index) => (
        <div
          key={index}
          className=" hover:shadow-xl  hover:border-gray-300  hover:z-20 z-10  overflow-hidden shadow-gray-900 py-2 px-2 border-r border-l border-gray-200  my-2   mt-10    relative group "
        >
          <div className="flex  items-center justify-between">
            <div className=" w-1/2">
              <img
                src={product.img}
                className=" w-full pr-5  object-contain"
                alt=""
              />
            </div>
            <div className=" w-1/2">
              <p className="  z-10 text-[11px] text-gray-400 cursor-default">
                {product.category}
              </p>
              <p className=" font-bold leading-3 text-[#0872c7] text-[12px] pt-1  h-10 cursor-default">
                {product.name}
              </p>
              <div className=" flex items-center  ">
                <p className="text-gray-800 cursor-default">${product.price}</p>
              </div>
            </div>
          </div>
          <div
            className={` absolute top-[60%] right-3 cursor-pointer  size-7 rounded-full bg-[#e6154b] text-white flex items-center justify-center `}
          >
            <BiCartDownload className=" size-5" />
          </div>
          <div className=" absolute top-0 hidden bg-[#f1f1f1a1]  left-0  px-2 shadow-md  py-1 group-hover:flex slideFromLeft   items-center gap-1">
            <div className=" flex items-center justify-center   p-1 cursor-pointer  ">
              <AiOutlineRetweet className="  text-gray-400 size-6  hover:text-[#0872c7] duration-200" />
            </div>
            <div className=" flex items-center p-[2px]   justify-center cursor-pointer">
              <GoHeart className=" size-7 text-gray-400 hover:text-[#0872c7] duration-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
