import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Details({ setDetailsState }) {
  return (
    <div className="  text-white absolute top-[100%] w-full h-screen bg-[#2c2c2c7f] flex items-start justify-end">
      <div
        onClick={() => {
          setDetailsState(false);
        }}
        className=" sm:w-7/12 md:9/12 h-full "
      ></div>
      <div className=" slideFromRight2 w-full sm:w-5/12 md:w-3/12 bg-[#2c2c2c] h-full ">
        <div className="   mt-3 pb-1 relative  ">
          <p className="   font-allura mx-auto text-center text-3xl text-[#5e5e5e]">
            beauTy
          </p>
          <p className=" absolute w-full top-4 text-center text-xl pl-1 text-[#e8e8e8]">
            {" "}
            AURA
          </p>
        </div>
        <div className=" text-sm   w-full p-5 sm:p-8 md:p-10">
          <p>Get styled with organic and natural cosmetic products</p>
          <div>
            <p className=" mt-10">CONTACTS </p>
            <p className=" px-10 border-b border-white w-fit my-3"></p>
            <div className=" flex gap-2 items-start py-3 w-full">
              <div className=" w-1/4">
                <MdOutlineLocationOn className=" size-6 " />
              </div>
              <p className=" w-3/4 cursor-pointer hover:text-[#e1afa1] duration-200">
                27 Division St, Colombo, SriLanka
              </p>
            </div>
            <div className=" flex gap-2 items-start py-3 w-full">
              <div className=" w-1/4">
                <MdAlternateEmail className=" size-6" />
              </div>
              <p className=" w-3/4 cursor-pointer hover:text-[#e1afa1] duration-200">
                auracontacts@mail.com
              </p>
            </div>
            <div className=" flex gap-2 items-start py-3 w-full">
              <div className=" w-1/4">
                <FaPhoneAlt className=" size-5 " />
              </div>
              <p className=" w-3/4 cursor-pointer hover:text-[#e1afa1] duration-200">
                (+94) 011 454 5859
              </p>
            </div>
            <div className=" flex gap-5 items-start py-3">
              <p className=" cursor-pointer hover:text-[#e1afa1] duration-200"></p>
            </div>

            <div className=" w-full flex items-center gap-5 justify-center mt-5">
              <div className=" border rounded-full p-2  text-gray-200 duration-200 hover:bg-white hover:text-black">
                <FaFacebookF className=" size-3 " />
              </div>
              <div className=" border rounded-full p-2  text-gray-200 duration-200 hover:bg-white hover:text-black">
                <FaXTwitter className=" size-3 " />
              </div>
              <div className=" border rounded-full p-2  text-gray-200 duration-200 hover:bg-white hover:text-black">
                <FaLinkedinIn className=" size-3 " />
              </div>
              <div className=" border rounded-full p-2  text-gray-200 duration-200 hover:bg-white hover:text-black">
                <FaInstagram className=" size-3 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
