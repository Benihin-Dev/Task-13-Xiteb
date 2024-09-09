import React from "react";
import antiVirusImg from "../../img/virus-navy.png";
import bacteriaImg from "../../img/bacteria-navy.png";
import bgimg2 from "../../img/slide3.png";
import roundImg1 from "../../img/round5.png";

export default function Banner3() {
  return (
    <div className=" w-full md:flex  sm:pl-10 relative text-[#66bc89] overflow-hidden bg-[#f0f2f5]">
      <div className=" w-full  md:w-1/2 py-20 md:py-24 lg:py-36 cursor-default ">
        <p className=" w-full px-5 sm:px-0 text-center md:text-start text-4xl lg:text-6xl font-semibold">
          Antibacterial Medical Mask
        </p>
        <p className=" w-full text-center md:text-start text-lg md:text-2xl mt-4">
          Just a few seconds to measure your body temperature.
        </p>
        <div className=" flex items-center justify-center md:justify-start gap-5 mt-5">
          <div className=" flex items-center gap-1">
            <img src={bacteriaImg} className=" w-6" alt="" />
            <p className=" text-xs">Anti-Bacteria</p>
          </div>
          <div className=" flex items-center gap-1">
            <img src={antiVirusImg} className=" w-6" alt="" />
            <p className=" text-xs">Anti-Virus</p>
          </div>
        </div>
        <div className=" flex items-center justify-center md:justify-start">
          <button className="  border border-[#103178] mt-5 font-semibold bg-[#103178] py-[7px] text-white px-12 rounded-full duration-200 text-lg hover:text-[#103178] hover:bg-[#ffffff]">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" md:w-1/2 w-full relative  ">
        <img src={bgimg2} className=" w-full object-cover h-full" alt="" />
        <div className=" rounded-full size-24 sm:size-28 bg-[#103178] text-[#66bc89] flex items-center justify-center absolute -top-[5%] md:top-[50%] right-[20%]  ">
          <p className=" text-2xl sm:text-3xl font-bold">
            Only
            <br />
            $25
          </p>
        </div>
        <div className=" absolute w-full h-full  top-0 -left-[30%] flex items-center justify-center  ">
          <img src={roundImg1} className=" h-[150%]  object-contain" alt="" />
        </div>
      </div>
    </div>
  );
}
