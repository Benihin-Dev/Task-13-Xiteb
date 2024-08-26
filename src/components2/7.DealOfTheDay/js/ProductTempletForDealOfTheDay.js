import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { HiStar } from "react-icons/hi2";
import Timer from "./Timer";
import { CurrencyContext } from "../../CurrencyContext/js/CurrencyContext";

export default function ProductTempletForDealOfTheDay({ item }) {
  const { currencyType } = useContext(CurrencyContext);

  return (
    <div className=" w-full  relative group">
      <img
        src={item.img}
        alt=""
        className="rounded-xl overflow-hidden w-full object-cover"
      />
      <div className=" group-hover:top-[62%] sm:group-hover:top-[43%] duration-200 absolute top-[60%] sm:top-[40%] left-0 w-full h-full bg-transparent  p-4">
        <Timer endDate={item.dealEndDate} />
        <div className=" w-full bg-white rounded-md overflow-hidden p-4 mt-4 border shadow-lg">
          <p></p>
          <p className=" font-montserrat font-semibold leading-5 ">
            {item.title}
          </p>
          <div className=" flex items-end gap-1 ">
            <div className=" flex">
              {Array.from({ length: 5 }, (_, index) =>
                index < item.rating ? (
                  <HiStar
                    key={index}
                    className="text-[#ffad33cb] size-[14px]"
                  />
                ) : (
                  <HiStar key={index} className="text-gray-300  size-[14px]" />
                )
              )}
            </div>
            <p className=" text-xs text-gray-400 pt-2">({item.review})</p>
          </div>
          <p className=" text-sm text-gray-400 pt-1">
            By
            <span className=" text-[#2faf36] font-[400] leading-3">
              {item.manufacture}
            </span>
          </p>
          <div className=" my-1 flex sm:block lg:flex justify-between items-center gap-3">
            <div className=" flex items-end gap-2 mt-2">
              <p className=" text-[#2fad36] font-semibold">
                {currencyType === 0
                  ? `$${item.discountedPrice}`
                  : `Rs${item.discountedPrice * 300}`}
              </p>
              <p className=" text-gray-400 pb-[2px] line-through text-sm font-semibold">
                {currencyType === 0
                  ? `$${item.actualPrice}`
                  : `Rs${item.actualPrice * 300}`}
              </p>
            </div>
            <div className=" mt-2 lg:mt-0 flex justify-center items-end gap-1 bg-gray-200 py-1 cursor-pointer hover:text-white duration-200 hover:bg-[#2faf36] px-3 rounded-sm shadow text-[#2faf36]">
              <IoCartOutline className=" size-5" />
              <p className=" text-xs">Add</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
