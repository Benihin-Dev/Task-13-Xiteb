import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompare } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { LiaCartPlusSolid } from "react-icons/lia";

export default function PizzaMenuTemplet({ menuDetails }) {
  const [qty, setQty] = useState(menuDetails.qty);

  const handleIncrease = () => {
    setQty(qty + 1);
  };

  const handleDecrease = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };
  return (
    <div className=" border overflow-hidden group relative  bg-white rounded-sm p-5">
      <img src={menuDetails.img} className=" w-full object-contain" alt="" />
      <p className=" w-full px-4 text-center font-semibold cursor-pointer hover:text-[#ffa101] duration-200 mt-4 text-xl md:text-2xl">
        {menuDetails.name}
      </p>
      <p className=" w-full px-4 text-center font-semibold cursor-default text-[#ffa101] duration-200 text-lg md:text-xl mt-4">
        ${menuDetails.price}
      </p>

      <div className=" flex items-center justify-center mt-4 ">
        <div
          onClick={handleDecrease}
          className=" leading-3 text-4xl  size-8 border-[#ffa101] bg-white hover:bg-gray-200 cursor-pointer duration-200 text-gray-600 flex items-center justify-center border "
        >
          <LuMinus className=" size-4" />
        </div>
        <p className=" text-xl  w-10 text-center">{qty}</p>
        <div
          onClick={handleIncrease}
          className=" leading-3 text-4xl  size-8 border-[#ffa101] bg-white hover:bg-gray-200 cursor-pointer duration-200 text-gray-600 flex items-center justify-center border "
        >
          <LuPlus className=" size-4" />
        </div>
      </div>
      <div className=" relative  text-white items-center justify-center mt-5 flex ">
        <div className=" addToCartParent w-fit bg-[#ffa101] px-5 cursor-pointer pt-1 overflow-hidden pb-1 hover:shadow-md duration-200 relative flex  items-center gap-2">
          <LiaCartPlusSolid className=" size-6" />
          <p className="  font-semibold  text-center pt-1">ADD TO CART</p>

          <div className="addToCartChild absolute -top-3 h-[150%] w-6 rotate-12 bg-[#ffffff5c] duration-200"></div>
        </div>
      </div>
      <div className=" absolute top-6  size-8 flex items-center justify-center bg-[#f8f2e9] duration-500 cursor-pointer hover:text-white text-[#ffa101] hover:bg-black -right-12 group-hover:right-4 shadow-sm">
        <IoIosHeartEmpty className=" size-6" />
      </div>
      <div className=" absolute top-[64px]  size-8 flex items-center justify-center bg-[#f8f2e9] duration-500 cursor-pointer hover:text-white text-[#ffa101] hover:bg-black -right-52 group-hover:right-4 shadow-sm">
        <MdOutlineCompare className=" size-5" />
      </div>
    </div>
  );
}
