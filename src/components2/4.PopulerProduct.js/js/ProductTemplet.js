import React, { useContext } from "react";
import { CurrencyContext } from "../../CurrencyContext/js/CurrencyContext";
import { HiStar } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoShuffle } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

export default function ProductTemplet({ productData }) {
  const { currencyType } = useContext(CurrencyContext);
  return (
    <div
      //   key={key}
      className=" border border-gray-100 shadow hover:border-gray-300 duration-200 px-4 py-5 rounded-xl overflow-hidden group relative"
    >
      <div className=" relative ">
        <img
          src={productData.img[0]}
          alt=""
          className=" group-hover:hidden duration-300"
        />
        <div className="hidden group-hover:block">
          <img
            src={productData.img[1]}
            alt=""
            className="  scale-110 zoomIn duration-300"
          />
        </div>
        <div className=" hidden group-hover:flex absolute top-[45%] left-0 right-0 items-center justify-center ">
          <div className=" bg-gray-200 rounded shadow-md text-[#2faf36] border border-[#accfae] flex items-center">
            <div className="favouriteParent relative border-l p-1 hover:text-[#ffb100] duration-200 cursor-pointer ">
              <IoHeartOutline className="size-5" />
              <div className=" favouriteChild slideDown absolute top-[130%] -left-[90%] rounded w-fit bg-[#2faf36] text-white">
                <div className=" relative">
                  <p className=" px-3 py-[4px] text-xs">Favourite</p>
                  <div className=" absolute bottom-[95%] z-10 left-[46%]   bg-transparent size-0 border-l-4  border-r-4 border-b-[8px] border-r-transparent border-l-transparent border-[#2faf36] "></div>
                </div>
              </div>
            </div>
            <div className=" border-l  compareParent border-[#accfae]  p-[5px] hover:text-[#ffb100] duration-200 cursor-pointer relative ">
              <IoShuffle className="size-5 " />
              <div className=" compareChild slideUp absolute bottom-[130%] -left-[90%] rounded w-fit bg-[#2faf36] text-white">
                <div className=" relative">
                  <p className=" px-3 py-[4px] text-xs">Compare</p>
                  <div className=" absolute top-[95%] z-10 left-[46%] rotate-180  bg-transparent size-0 border-l-4  border-r-4 border-b-[8px] border-r-transparent border-l-transparent border-[#2faf36] "></div>
                </div>
              </div>
            </div>
            <div className="previewParent border-l border-[#accfae]  p-1 hover:text-[#ffb100] duration-200 cursor-pointer relative">
              <IoEyeOutline className="size-5" />
              <div className=" previewChild slideDown absolute top-[130%] -left-[90%] rounded w-fit bg-[#2faf36] text-white">
                <div className=" relative">
                  <p className=" px-3 py-[4px] text-xs">Preview</p>
                  <div className=" absolute bottom-[95%] z-10 left-[46%]   bg-transparent size-0 border-l-4  border-r-4 border-b-[8px] border-r-transparent border-l-transparent border-[#2faf36] "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-2  cursor-default ">
        <p className=" text-xs text-gray-400">{productData.type}</p>
        <p className=" font-montserrat font-semibold leading-5 sm:h-10 lg:h-fit mt-2">
          {productData.name}
        </p>
        <div className=" flex items-end gap-1 ">
          <div className=" flex">
            {Array.from({ length: 5 }, (_, index) =>
              index < productData.rating ? (
                <HiStar key={index} className="text-[#ffad33cb] size-[18px]" />
              ) : (
                <HiStar key={index} className="text-gray-300" />
              )
            )}
          </div>
          <p className=" text-xs text-gray-400 pt-2">({productData.review})</p>
        </div>
        <p className=" text-sm text-gray-400 pt-2">
          By
          <span className=" text-[#2faf36] font-[400] leading-3">
            {productData.manufacture}
          </span>
        </p>
        <div className=" mt-1 flex sm:block lg:flex justify-between items-center gap-3">
          <div className=" flex items-end gap-2 mt-3">
            <p className="text-[#2fad36] font-semibold">
              {currencyType === 0
                ? `$${productData.discountedPrice}`
                : `Rs${productData.discountedPrice * 300}`}
            </p>
            <p className=" text-gray-400 pb-[2px] line-through text-sm font-semibold">
              {currencyType === 0
                ? `$${productData.actualPrice}`
                : `Rs${productData.actualPrice * 300}`}
            </p>
          </div>
          <div className=" mt-2 lg:mt-0 flex justify-center items-end gap-1 bg-gray-200 py-1 cursor-pointer hover:text-white duration-200 hover:bg-[#2faf36] px-3 rounded-sm shadow text-[#2faf36]">
            <IoCartOutline className=" size-5" />
            <p className=" text-xs">Add</p>
          </div>
        </div>
      </div>
      {productData.status === "New" ? (
        <div className=" absolute top-0 left-0 text-sm  rounded-ss-xl rounded-ee-2xl bg-[#31ad37] text-white py-[5px] px-5">
          {productData.status}
        </div>
      ) : productData.status === "Sale" ? (
        <div className=" absolute top-0 left-0 text-sm  rounded-ss-xl rounded-ee-2xl bg-[#67bbf3] text-white py-[5px] px-5">
          {productData.status}
        </div>
      ) : productData.status === "Hot" ? (
        <div className=" absolute top-0 left-0 text-sm  rounded-ss-xl rounded-ee-2xl bg-[#f14c7b] text-white py-[5px] px-5">
          Hot
        </div>
      ) : productData.status === "none" ? (
        ""
      ) : (
        <div className=" absolute top-0 left-0 text-sm  rounded-ss-xl rounded-ee-2xl bg-[#f49758] text-white py-[5px] px-4">
          - {productData.status}
        </div>
      )}
    </div>
  );
}
