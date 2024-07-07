import React from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

export default function Design2({ data }) {
  return (
    <div className="border cursor-move shadow rounedBorder  bg-[#f8faff]">
      <div className=" px-4  py-5">
        <div className="flex">
          {Array.from({ length: 5 }, (_, index) =>
            index < data.rating ? (
              <HiStar key={index} className="text-[#4534a9] size-[18px]" />
            ) : (
              <HiOutlineStar
                key={index}
                className="text-gray-400 size-[18px]"
              />
            )
          )}
        </div>
        <p className=" mt-3 leading-5 text-sm text-gray-700">{data.comment}</p>
      </div>
      <div className=" flex px-3 py-4 items-end gap-3 rounedBorder border border-[#fff8ee] bg-[#fff8ee]">
        <div className=" size-[55px]  rounded-full border-4 border-white overflow-hidden">
          <img src={data.image} alt="" className=" size-full object-cover" />
        </div>
        <div>
          <p className=" font-semibold  ">{data.name}</p>
          <p className=" text-xs">- {data.role}</p>
        </div>
      </div>
    </div>
  );
}
