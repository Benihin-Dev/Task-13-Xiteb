import React from "react";
import phoneImg from "../img/phone-call.svg";
import facebookImg from "../img/icon-facebook-white.svg";
import instaImg from "../img/icon-instagram-white.svg";
import youtubeImg from "../img/icon-youtube-white.svg";

export default function BottomSection() {
  return (
    <div className=" w-full py-3 cursor-default">
      <div className="responsiveWeith md:flex items-center justify-between gap-10">
        <p className=" text-sm md:text-xs w-full text-center md:text-start md:w-1/2 ">
          Copyrights 2024 All rights reserved. Powered by{" "}
          <span className=" text-[#2faf36]"> xCommerz</span>
        </p>
        <div className=" w-full md:w-fit justify-center flex items-center gap-3 mt-2 md:mt-0">
          <div className=" flex items-center gap-2">
            <img src={phoneImg} className=" w-7" alt="" />
            <div>
              <p className=" text-[#2faf36] font-bold text-lg">+1 234 5678</p>
              <p className=" text-xs leading-3 text-gray-600">
                24/7 Support Center
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-fit justify-center flex items-center gap-3 mt-2 md:mt-0">
          <div className=" flex items-end gap-3">
            <p className=" text-sm font-semibold text-gray-700">Follow Us</p>
            <img
              className=" bg-[#2faf36] hover:bg-[#ffb100] duration-200 cursor-pointer p-1 rounded-full size-7"
              src={facebookImg}
              alt=""
            />
            <img
              className=" bg-[#2faf36] hover:bg-[#ffb100] duration-200 cursor-pointer p-1 rounded-full size-7"
              src={instaImg}
              alt=""
            />
            <img
              className=" bg-[#2faf36] hover:bg-[#ffb100] duration-200 cursor-pointer p-1 rounded-full size-7"
              src={youtubeImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
