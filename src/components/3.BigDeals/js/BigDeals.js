import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import dealImg1 from "../img/img1.png";
import dealImg2 from "../img/img2.jpg";
import dealImg3 from "../img/img3.jpg";
import dealImg4 from "../img/img4.png";

export default function BigDeals() {
  const dealsData = [
    {
      img: dealImg1,
      link: "jk",
    },
    {
      img: dealImg2,
      link: "jk",
    },
    {
      img: dealImg3,
      link: "jk",
    },
    {
      img: dealImg4,
      link: "jk",
    },
  ];

  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:space-y-0 space-y-5">
        {dealsData.map((item, index) => (
          <div
            key={index}
            className=" w-full p-1 pr-3  bg-[#f5f5f5] cursor-pointer hover:border-gray-300  border border-transparent duration-200 flex items-center justify-between gap-5"
          >
            <div className=" w-1/2">
              <img src={item.img} className=" w-full object-cover" alt="" />
            </div>
            <div className=" w-1/2">
              <p className="  text-sm text-gray-600">
                CATCH BIG <span className=" font-semibold">DEALS</span> ON THE
                CAMERAS
              </p>
              <div className=" flex gap-2 items-center group">
                <p className=" text-xs font-bold mt-3">Shop now</p>
                <div className=" rounded-full items-end mt-2 group-hover:ml-1 duration-200 justify-center bg-[#e6154b] text-white">
                  <MdOutlineKeyboardArrowDown className=" size-4 -rotate-90" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
