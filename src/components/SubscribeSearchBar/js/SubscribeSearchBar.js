import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";


export default function SubscribeSearchBar() {
  return (
    <div className=" flex bg-white rounded-full w-full  lg:mt-3">
      <div className=" flex py-3 md:py-4 w-2/3">
        <div className=" w-1/5 pl-4">
          <FaRegPaperPlane className=" size-4 text-[#adadad]" />
        </div>
        <input
          type="text"
          className="  w-4/5 outline-none text-xs"
          placeholder="Your Email Address"
        />
      </div>
      <button className=" text-sm w-1/3 text-white hover:bg-[#ffb100] duration-200 bg-[#31ae37] px-3 rounded-full">
        Subscribe
      </button>
    </div>
  );
}
