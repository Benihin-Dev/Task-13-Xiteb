import React from "react";
import brandImg from "../img/brand1.png";
import SliderForBrand from "./SliderForBrand";

export default function OurBrands() {
  const sliderData = [
    brandImg,
    brandImg,
    brandImg,
    brandImg,
    brandImg,
    brandImg,
  ];
  return (
    <div className=" w-full relative my-20 bg-[#f9f9f9]">
      <div className=" w-full px-5 sm:px-0 mx-auto sm:w-10/12  py-5">
        <div className=" sm:flex item-center justify-between gap-5">
          <div className=" sm:w-3/12 flex items-center">
            <p className=" text-center w-full sm:w-fit pb-2 sm:pb-0 text-2xl font-semibold text-gray-700 cursor-default">
              Our Brands
            </p>
          </div>
          <div className=" sm:w-9/12">
            <SliderForBrand data={sliderData} />
          </div>
        </div>
      </div>
    </div>
  );
}
