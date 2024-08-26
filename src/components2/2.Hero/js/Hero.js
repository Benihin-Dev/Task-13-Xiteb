import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import sliderImg1 from "../img/slider-7.png";
import sliderImg2 from "../img/slider-8.png";
import heroImg1 from "../img/banner-14.png";
import heroImg2 from "../img/banner-15.png";
import SliderForHeroBanner from "../../Sliders/js/SliderForHeroBanner";
import TrendingCategory from "../../1.Header/js/TrendingCategory";

export default function Hero() {
  const bannerData = [
    {
      title: "Don't Miss Amazing Grocery Deals",
      subText: "Sign up for the daily newsletter",
      img: sliderImg1,
    },
    {
      title: "Fresh Vegetables Big Discount",
      subText: "Save up to 50% off on your first order",
      img: sliderImg2,
    },
  ];

  return (
    <div className=" w-full relative py-5 bg-white">
      <div className=" lg:flex responsiveWeith gap-5">
        <div className=" hidden lg:block w-full lg:w-[18%] h-full  relative">
          <div className=" z-20 w-full absolute top-0 left-0 p-5 border border-[#e4eeeb] shadow-md rounded bg-white ">
            <TrendingCategory gridSize={1} />
          </div>
        </div>
        <div className=" w-full  lg:w-[82%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className=" w-full h-60 sm:h-80 md:h-full   rounded-lg   overflow-hidden shadow-md border border-gray-100   md:col-span-2 md:row-span-2 relative">
            <SliderForHeroBanner data={bannerData} />
          </div>
          <div className=" w-full  rounded-lg overflow-hidden shadow-md relative ">
            <img
              src={heroImg1}
              alt=""
              className=" w-full h-full object-cover"
            />
            <div className=" w-[90%] sm:w-[80%] lg:w-[85%]  h-full absolute top-0 left-0 p-8 flex items-end  ">
              <div>
                <p className="  text-3xl md:text-xl font-semibold md:leading-6 text-[#393a3a] cursor-default">
                  EveryDay Fresh & Clean with Our Products
                </p>
                <div className=" cursor-pointer flex items-center gap-2 text-white hover:bg-[#ffb100] duration-200 shadow-md my-4 bg-[#31ae37] px-4 rounded-sm w-fit py-[6px]">
                  <p className=" md:text-xs ">Shop Now</p>
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full rounded-lg overflow-hidden shadow-md relative">
            <img
              src={heroImg2}
              alt=""
              className=" w-full h-full object-cover"
            />
            <div className=" ml-auto w-[90%] sm:w-[80%] lg:w-[85%] h-full absolute top-0 right-0 p-8 flex items-end  ">
              <div>
                <p className=" text-3xl md:text-xl font-semibold md:leading-6 text-[#393a3a] cursor-default">
                  The Best Organic Products Online
                </p>
                <div className=" ml-auto cursor-pointer flex items-center gap-2 text-white hover:bg-[#ffb100] duration-200 shadow-md mt-4 bg-[#31ae37] px-4 rounded-sm w-fit py-[6px]">
                  <p className=" md:text-xs ">Shop Now</p>
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
