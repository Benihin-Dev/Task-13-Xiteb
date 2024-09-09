import React from "react";
import { GoStarFill } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";

export default function Templet({ details }) {
  return (
    <div className=" bg-white  group border overflow-hidden hover:shadow-md shadow-sm duration-200">
      <div className=" w-full relative duration-300">
        <img
          src={details.img}
          className=" group-hover:scale-[104%] w-full object-cover duration-300"
          alt=""
        />

        {details.offer === "Free Delivery" ? (
          <div className=" flex items-center justify-center gap-1 absolute top-[94%] group-hover:top-[80%] duration-200 right-5 text-white bg-[#0cbe85] py-1 px-3">
            <TbTruckDelivery className=" size-4" />
            <p className=" font-thin"> FREE DELIVERY</p>
          </div>
        ) : (
          <div className=" flex items-center justify-center gap-1 absolute top-[94%] group-hover:top-[80%] duration-200 right-5 text-white bg-[#ffa101] py-1 px-3">
            <CiDiscount1 className=" size-5" />
            <p className=" font-thin">{details.offer}</p>
          </div>
        )}
      </div>
      <div className=" p-4">
        <p className=" text-lg duration-200 cursor-pointer hover:text-[#ffa101] md:text-3xl font-semibold">
          {details.title}
        </p>
        <p className=" text-gray-400 text-lg mt-4">
          {details.items.map((item, index) => (
            <span key={index}>{item}, </span>
          ))}
        </p>

        <div className=" mt-4 flex items-center justify-between gap-5">
          <p className=" text-lg  font-semibold text-gray-500">
            Delivery Fee: ${details.deliveryFee}
          </p>
          <div className="  text-[#ffa101] flex items-center gap-1 justify-center">
            <GoStarFill className=" size-4" />
            <p className=" leading-4 text-lg">{details.rating} /5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
