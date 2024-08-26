import React from "react";
import aboutUsImg from "../img/about-us.png";
import girlImg from "../img/fx_ai_img.png";
import bgImage from "../img/body01.png";
import NumberIncreaser from "./NumberIncreaser";
import CustomBtn from "../../assets/js/CustomBtn";

export default function AboutUs() {
  return (
    <div className=" w-full relative py-20">
      <div className="responsiveWeith md:flex items-start">
        <div className=" w-full md:w-1/2 flex items-center justify-center">
          <img
            src={aboutUsImg}
            className="xAxisMovingAnimation object-contain  "
            alt=""
          />
        </div>
        <div className=" w-full md:w-1/2 relative">
          <div className=" w-full">
            <p className=" font-medium text-xl">
              Know <span className=" text-[#c41f3a]">About</span> Us...
            </p>
            <p className=" text-3xl md:text-5xl font-medium mt-3 md:leading-[50px]">
              We start with the finest ingredients,{" "}
              <span className=" text-[#c41f3a]">
                from fresh, local milk and cream to rich,
              </span>{" "}
              We then a touch of magic
              <span className=" text-[#c41f3a]"> into</span> ice cream that's
              smooth and creamy
            </p>
            <p className=" -z-20  md:text-lg sm:w-4/5 lg:w-2/3 mt-5 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
          <p className=" rounded-md py-3 px-8 text-white w-fit sm:text-xl font-medium mt-5 bg-[#c41f3a]">
            When life gives you magics, trade them for a ice-creams.
          </p>
          <div className=" md:flex items-end gap-5 lg:gap-16 mt-6  ">
            <div className="  flex gap-3 items-end">
              <img src={girlImg} className="  w-16" alt="" />
              <div className="">
                <p className=" font-medium text-xl">Aliena Cai</p>
                <p className=" text-lg leading-4">CEO. of Ice Cream Shop</p>
              </div>
            </div>
            <div className=" mt-5 md:mt-0 flex items-center gap-3">
              <p className=" text-6xl leading-6 font-semibold text-[#c41f3a]">
                <NumberIncreaser targetNumber={20} incrementCount={1} />
              </p>
              <p className=" text-xl  leading-5">
                Years of <br />
                <span className=" font-medium"> Experience</span>
              </p>
            </div>
          </div>
          <CustomBtn text={"KNOW MORE"} />
          <div className=" absolute   sm:-bottom-20 bottom-80 sm:top-auto left-0 -z-10 w-[120vw]   sm:w-full">
            <img
              src={bgImage}
              className=" w-full xAxisMovingAnimation"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" absolute w-full h-full top-0 left-0  bg-[#f1fbff] -z-20"></div>
    </div>
  );
}
