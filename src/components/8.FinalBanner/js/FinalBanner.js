import React from "react";
import bannerImg from "../img/banner-10.png";
import SubscribeSearchBar from "../../SubscribeSearchBar/js/SubscribeSearchBar";

export default function FinalBanner() {
  return (
    <div className=" w-full py-16 relative  cursor-default">
      <div className=" responsiveWeith relative overflow-hidden">
        <img
          src={bannerImg}
          className=" w-full object-cover rounded-lg overflow-hidden h-64  md:h-[120%] lg:h-fit"
          alt=""
        />
        <div className=" absolute top-0 left-0 w-full h-full flex items-center p-10  md:p-10 lg:p-16">
          <div className=" w-full md:w-3/4 lg:w-3/5 ">
            <p className=" text-2xl lg:text-4xl leading-6 font-medium lg:pr-20   text-[#2a3948]">
              Stay home & get your daily needs from our shop
            </p>
            <p className=" text-gray-400 mt-2 lg:mt-4">
              Start You'r Daily Shopping with
              <span className=" text-[#2faf36]"> Super Market</span>
            </p>
            <div className=" lg:w-3/4 lg:pr-10 mt-2 lg:mt-4">
              <SubscribeSearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
