import React from "react";
import bgimg1 from "../../img/slide1.png";
import roundImg from "../../img/round2.png";

export default function Banner2() {
  return (
    <div className=" w-full md:flex  sm:pl-10 relative text-[#66bc89] overflow-hidden bg-[#ededed]">
      <div className=" w-full  md:w-1/2 py-20 md:py-24 lg:py-36 cursor-default ">
        <p className=" w-full px-5 sm:px-0 text-center md:text-start text-4xl lg:text-6xl font-semibold">
          Candid <br /> Whitening Kit
        </p>
        <p className=" w-full text-center md:text-start  text-lg md:text-2xl mt-4">
          Only in this week. Don't misss!
        </p>
        <div className=" flex items-start justify-center md:justify-start gap-5 mt-5">
          <p className=" font-bold text-6xl text-[#103178]">$15.40</p>
          <p className="  text-2xl line-through text-[#11388dcf]">$29.40</p>
        </div>
        <div className=" flex items-center justify-center md:justify-start">
          <button className="  border border-[#103178] mt-5 font-semibold bg-[#103178] py-[7px] text-white px-12 rounded-full duration-200 text-lg hover:text-[#103178] hover:bg-[#ffffff]">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" md:w-1/2 w-full relative  ">
        <img src={bgimg1} className=" w-full object-cover sm:h-full" alt="" />
        <div className=" rounded-full size-24 sm:size-28 bg-[#103178] flex items-center justify-center absolute -top-[10%] md:top-[10%] left-[65%] sm:left-[5%] text-white">
          <p className=" text-2xl sm:text-3xl font-bold">-25%</p>
        </div>
        <div className=" absolute w-full h-full  top-0 left-0 sm:-left-[20%] flex items-center justify-center  ">
          <img src={roundImg} className=" h-[150%]  object-contain" alt="" />
        </div>
      </div>
    </div>
  );
}
