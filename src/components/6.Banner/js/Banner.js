import React from "react";
import bannerImg from "../img/img1.jpg";

export default function Banner() {
  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith  overflow-hidden relative ">
        <img
          src={bannerImg}
          className=" absolute top-0 left-0 w-full h-full object-cover  -z-10"
          alt=""
        />
        <div className=" sm:h-fit   w-full sm:w-9/12 md:flex items-center gap-8 px-8 pt-10 py-8">
          <p className=" text-2xl leading-6">
            SHOP AND <span className=" font-semibold">SAVE BIG</span> ON HOTTEST
            TABLETS
          </p>
          <div className=" px-10 mt-3 md:mt-0 py-2 w-fit rounded-md text-white bg-[#e6154b]">
            <p className=" text-[10px] leading-3">STARTING AT</p>
            <p className=" font-semibold leading-7 text-3xl flex items-start justify-center">
              <span className=" text-lg leading-5">$</span>79{" "}
              <span className="  text-lg leading-5">99</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
