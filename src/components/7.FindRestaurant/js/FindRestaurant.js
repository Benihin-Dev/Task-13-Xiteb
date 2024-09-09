import React from "react";
import { CiShop } from "react-icons/ci";

export default function FindRestaurant() {
  return (
    <div className=" w-full py-28 text-white relative bg-[#000000dc]">
      <div className=" flex w-full items-center justify-center">
        <p className=" font-thin  bg-[#0cbe85] py-[2px] px-5">FREE DELIVERY</p>
      </div>
      <p className=" my-6 font-bold text-4xl md:text-6xl  text-center">
        Cheese Pizza Available
      </p>
      <p className=" text-center px-5 w-full">
        That he high longer even sitting more the was agency; Law, does thin for
        That he high longer even sitting = Law, does thin for a details warp
      </p>
      <div className=" flex items-center justify-center w-full mt-8 cursor-pointer">
        <div className=" relative w-fit py-2 px-6 flex items-center gap-2 overflow-hidden bg-[#ffa101] findRestaurantBtnParent">
          <CiShop className=" size-6" />
          <p className=" text-lg font-semibold mt-1">FIND RESTAURANT</p>
          <div className=" w-3 h-20 rounded-full absolute -top-5 duration-300   rotate-12 findRestaurantBtnChild"></div>
        </div>
      </div>
    </div>
  );
}
