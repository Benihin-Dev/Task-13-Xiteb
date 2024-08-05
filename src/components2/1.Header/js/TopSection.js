import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function TopSection() {
  return (
    <div className=" w-full relative bg-[#ffc107] text-white hidden lg:block py-5 text-sm">
      <div className="responsiveWeith  grid grid-cols-3 gap-10">
        <div className=" flex items-center gap-2 ">
          <div>
            <IoCheckmarkOutline className=" size-5" />
          </div>
          <p className=" leading-4">
            We’re offering free shipping on all orders$ 50+
          </p>
        </div>
        <div className=" flex items-center gap-2 ">
          <div>
            <IoCheckmarkOutline className=" size-5" />
          </div>
          <p className=" leading-4">
            Save 20% on your first order. Code: ELE123
          </p>
        </div>
        <div className=" flex items-center gap-2 ">
          <div>
            <IoCheckmarkOutline className=" size-5" />
          </div>
          <p className=" leading-4">Free exchange of products within 30 days</p>
        </div>
      </div>
    </div>
  );
}
