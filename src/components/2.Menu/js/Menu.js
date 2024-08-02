import React from "react";
import bannerImg1 from "../img/slider-01.jpg";
import bannerImg2 from "../img/banner-01.jpg";
import bannerImg3 from "../img/banner-02.jpg";

export default function Menu() {
  return (
    <div className=" w-full relative py-10">
      <div className=" responsiveWeith grid grid-cols-1  lg:grid-cols-3 lg:gap-6 gap-0 space-y-6 lg:space-y-0">
        <div className="  lg:row-span-2 lg:col-span-2 rounded-md overflow-hidden shadow relative ">
          <img
            src={bannerImg1}
            alt=""
            className=" w-full object-cover h-full"
          />
          <div className=" absolute w-full h-full top-0 left-0 right-0 bottom-0 border p-10 flex items-end">
            <div className=" w-1/2   space-y-3 ">
              <button className=" bg-[#ffc107] text-white text-sm px-3 py-1 rounded">
                DISPLAY SIZE: 2.89
              </button>
              <p className="  text-3xl text-white font-semibold">
                Visor Virtual Reality Headset{" "}
              </p>
              <p className=" text-white text-sm">HDMI 2.0 video output</p>
              <button className=" px-6  rounded-md py-2 text-white bg-[#393939] hover:bg-[#ffc107] duration-200 text-sm">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden shadow relative w-full   ">
          <img
            src={bannerImg2}
            alt=""
            className=" h-full w-full object-cover "
          />
          <div className=" absolute w-full h-full top-0 left-0 right-0 bottom-0   px-5 py-3 flex items-end justify-end">
            <div className=" w-1/2 space-y-2 ">
              <button className=" bg-[#ffc107] text-white text-sm px-3 py-1 rounded">
                Rockerz 650
              </button>
              <p className=" text-3xl lg:text-xl font-semibold">
                boAt Bluetooth <br /> Headphones
              </p>
              <p className=" text-xs">$15 Extra Discount on UPI</p>
            </div>
          </div>
        </div> 
        <div className="rounded-md overflow-hidden shadow relative w-full  ">
          <img
            src={bannerImg3}
            alt=""
            className=" w-full object-cover h-full "
          />
          <div className=" absolute w-full h-full top-0 left-0 right-0 bottom-0   px-5 py-3 flex items-end  ">
            <div className=" w-1/2 space-y-3    ">
              <button className=" bg-[#ffc107] text-white text-sm px-3 py-1 rounded">
                Hot Deals
              </button>
              <p className=" text-3xl  lg:text-xl font-semibold">
                Top Phone Big Sale 50% OFF
              </p>
              <p className=" text-xs text-white">Limited Time : Online Only!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
