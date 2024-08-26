import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function TopSectoin() {
  return (
    <div className=" w-full py-4 px-5 bg-[#c41f3a] text-white font-khand font-medium ">
      <div className=" lg:flex justify-between items-center">
        <div className=" cursor-default md:flex items-center justify-center text-sm lg:text-base lg:justify-normal gap-4">
          <div className=" flex items-center justify-center md:justify-normal gap-1">
            <MdLocationOn className=" size-5" />
            <p className=" ">123, Your Street, Your City, Your Country</p>
          </div>
          <div className=" mt-1 md:mt-0 flex items-center justify-center md:justify-normal gap-4">
            <div className=" flex items-center gap-1">
              <MdCall className=" size-5" />
              <p className="">+0 11 234 5678</p>
            </div>
            <div className=" flex items-center justify-center gap-1">
              <GrMail className=" size-5" />
              <p className="">yourmail@mail.com</p>
            </div>
          </div>
        </div>
        <div className=" mt-2 lg:mt-0 flex items-center justify-center lg:justify-normal gap-2 cursor-default">
          <p className=" text-sm lg:text-base">Monday to Friday 8am to 10pm</p>
          <FaFacebookF className=" cursor-pointer size-[15px] lg:size-4" />
          <RiTwitterXFill className=" cursor-pointersize-4 lg:size-[18px]" />
          <FaInstagram className=" cursor-pointer size-4 lg:size-5" />
          <FaLinkedin className=" cursor-pointer size-4 lg:size-5" />
        </div>
      </div>
    </div>
  );
}
