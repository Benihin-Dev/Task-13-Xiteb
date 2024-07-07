import React from "react";
import { BsMagic } from "react-icons/bs";
import { RiMagicLine } from "react-icons/ri";

export default function AboutUs() {
  return (
    <div className=" w-full py-10">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto">
        <div className=" w-full md:flex items-center gap-10 md:gap-16">
          <div className=" md:w-1/2">
            <p className=" text-3xl font-semibold sm:pr-16 ">
              Learn & grow your Skills from anywhere.
            </p>
            <p className=" leading-5 pt-2 text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt ut labore et simply.
            </p>
            <div className=" md:flex items-start gap-10 pt-10  space-y-5 md:space-y-0">
              <div className=" md:w-1/2">
                <div className="   size-fit p-3 bg-[#4534a9] rounded">
                  <BsMagic className=" size-8 text-white" />
                </div>
                <p className=" text-xl font-semibold mt-2">Our Mission</p>
                <p className=" mt-3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
              </div>
              <div className=" md:w-1/2">
                <div className="   size-fit p-3 bg-[#4534a9] rounded">
                  <RiMagicLine className=" size-8 text-white" />
                </div>
                <p className=" text-xl font-semibold mt-2">Our Vision</p>
                <p className=" mt-3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
              </div>
            </div>
            <div>
              <p className=" py-2 px-5 text-sm text-white bg-[#4534a9] hover:bg-[#786bc0] duration-200 cursor-pointer border rounded-full mt-4 w-fit">
                Discover More
              </p>
            </div>
          </div>
          <div className=" md:w-1/2 pl-8 mt-8 md:mt-0">
            <div className=" w-full ">
              <img
                src="https://bestwpware.com/html/tf/yale/assets/images/all-img/about1.png"
                alt=""
                className=" object-cover w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
