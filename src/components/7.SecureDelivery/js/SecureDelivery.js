import React from "react";
import bgImg from "../img/banner-delivery-2.jpg";
import { LuShieldCheck } from "react-icons/lu";

export default function SecureDelivery() {
  return (
    <div className="mt-10 smx-5 md:mx-10 relative h-40 sm:h-24  overflow-hidden ">
      <img src={bgImg} className=" h-full w-full  object-cover" alt="" />
      <div className=" absolute w-full top-0 left-0 h-full  sm:flex items-center justify-between gap-5 ">
        <div className=" mt-5 sm:mt-0 flex items-center gap-2 px-5 text-[#12a05c] ">
          <LuShieldCheck className=" size-12" />
          <p className=" text-xl ">
            <span className=" font-semibold"> 100% Secure delivery</span>{" "}
            without contacting the courier
          </p>
        </div>
        <button className=" mt-2 sm:mt-0 text-white bg-[#12a05c] py-1 px-8 border border-transparent hover:bg-white hover:text-[#12a05c] duration-300 hover:border-[#12a05c] rounded-full mx-5 sm:mx-10">
          More
        </button>
      </div>
    </div>
  );
}
