import React, { useContext } from "react";
import { HiStar } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoShuffle } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import QuantityBar from "./QuantityBar";
import { CurrencyContext } from "../../CurrencyContext/js/CurrencyContext";

export default function ProductTempletForBestSells({ productDetails }) {
  const { currencyType } = useContext(CurrencyContext);

  return (
    <div
      //   key={key}
      className=" border border-gray-100 shadow hover:border-gray-300 duration-200 px-4 py-5 rounded-xl overflow-hidden group relative"
    >
      <div className=" relative ">
        <img
          src={productDetails.img[0]}
          alt=""
          className=" group-hover:hidden duration-300"
        />
        <div className="hidden group-hover:block">
          <img
            src={productDetails.img[1]}
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
        <p className=" text-xs text-gray-400">{productDetails.type}</p>
        <p className=" font-montserrat font-semibold leading-5  h-10   mt-2">
          {productDetails.name}
        </p>
        <div className=" flex items-end gap-1 ">
          <div className=" flex">
            {Array.from({ length: 5 }, (_, index) =>
              index < productDetails.rating ? (
                <HiStar key={index} className="text-[#ffad33cb] size-[18px]" />
              ) : (
                <HiStar key={index} className="text-gray-300" />
              )
            )}
          </div>
          <p className=" text-xs text-gray-400 pt-2">
            ({productDetails.review})
          </p>
        </div>

        <div className=" flex items-end gap-2 my-3">
          <p className=" text-[#2fad36] font-semibold">
            {currencyType === 0
              ? `$${productDetails.discountedPrice}`
              : `Rs${productDetails.discountedPrice * 300}`}
          </p>
          <p className=" text-gray-400 pb-[2px] line-through text-sm font-semibold">
            {currencyType === 0
              ? `$${productDetails.actualPrice}`
              : `Rs${productDetails.actualPrice * 300}`}
          </p>
        </div>
        <QuantityBar totalQty={20} balanceQty={10} />
        <p className=" text-xs text-gray-600 font-semibold mt-2  font-montserrat">
          Sold: {productDetails.balanceQty}/{productDetails.qty}
        </p>
        <div className="  flex justify-center items-end gap-1  mt-3 hover:mb-2 hover:mt-1  py-3 cursor-pointer hover:text-white duration-200  bg-[#2faf36] hover:bg-[#ffb100]  px-3 rounded shadow text-white">
          <IoCartOutline className=" size-5" />
          <p className=" text-sm">Add To Cart</p>
        </div>
      </div>
      {productDetails.status === "Best Sale" ? (
        <div className=" absolute top-0 left-0 text-sm  rounded-ss-xl rounded-ee-2xl bg-[#f59656] text-white py-[5px] px-5">
          {productDetails.status}
        </div>
      ) : productDetails.status === "Sale" ? (
        <div className=" absolute top-0 left-0 text-sm  rounded-ss-xl rounded-ee-2xl bg-[#67bbf3] text-white py-[5px] px-5">
          {productDetails.status}
        </div>
      ) : productDetails.status === "Save" ? (
        <div
          className={` ${
            productDetails.savingAmount > 30 ? "bg-[#31ae36]" : "bg-[#f14c7b]"
          } absolute top-0 left-0 text-sm  rounded-ss-xl rounded-ee-2xl  text-white py-[5px] px-5 `}
        >
          Save {productDetails.savingAmount}%
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
