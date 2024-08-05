import React from "react";
import { LiaTelegram } from "react-icons/lia";

export default function TopSection() {
  return (
    <div className=" w-full pt-10">
      <div className=" w-full py-3 bg-[#e6154b] text-white">
        <div className=" responsiveWeith md:flex items-center justify-between gap-10">
          <div className=" md:flex items-center gap-3 md:w-1/2 lg:w-7/12 space-y-2 md:space-y-0">
            {" "}
            <div className=" flex items-center justify-center cursor-pointer  gap-1">
              <LiaTelegram className="size-7" />
              <p className=" text-sm "> Sign up to Newsletter</p>
            </div>
            <p className=" text-xs cursor-default text-center w-full md:w-fit pb-2 md:pb-0">
              ...and receive{" "}
              <span className=" font-semibold">
                {" "}
                S20 coupon for first shopping.
              </span>
            </p>
          </div>
          <div className=" md:w-1/2 lg:w-5/12 flex items-center rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Email Address"
              className=" text-xs outline-none px-4 py-2 bg-white text-black w-9/12"
            />
            <p className=" cursor-pointer hover:bg-gray-800 duration-200 bg-black px-4 py-2 text-white text-xs w-3/12 text-center">
              Sign up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
