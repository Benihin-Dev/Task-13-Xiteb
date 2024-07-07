import React from "react";
import { TiArrowRight } from "react-icons/ti";
import bachelorImg from "../assets/icons/bachelor.png";
import educationImg from "../assets/icons/education.png";
import InternationalImg from "../assets/icons/International.png";

export default function Courses() {
  const courseCardData = [
    {
      icon: educationImg,
      heading: "Education Services",
      description:
        " There are many variations of passages Lorem Ipsum avaiabJe but the majority hav suffered alteration in some form",
    },
    {
      icon: InternationalImg,
      heading: "International Hubs",
      description:
        " There are many variations of passages Lorem Ipsum avaiabJe but the majority hav suffered alteration in some form",
    },
    {
      icon: bachelorImg,
      heading: "Bachelor's and Master's",
      description:
        " There are many variations of passages Lorem Ipsum avaiabJe but the majority hav suffered alteration in some form",
    },
  ];
  return (
    <div className=" w-full pt-20 pb-16  ">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto">
        {/* <div className=" w-full sm:flex items-center gap-8 lg:gap-16">
          <div className=" sm:w-1/2   p-5 rounded-sm shadow bg-[#2dc97e] text-white">
            <div className=" flex items-center justify-between gap-4 text-sm ">
              <p className=" font-semibold text-center">Undergraduate</p>
              <p className=" cursor-pointer underline text-xs text-center hover:text-black duration-200">
                {" "}
                Leran more
              </p>
              <p className=" cursor-pointer px-3 py-1 duration-200 hover:bg-[#e0aed1] rounded-full overflow-hidden text-center bg-[#a264ff]">
                Find your course
              </p>
            </div>
          </div>
          <div className=" sm:w-1/2   p-5 rounded-sm shadow bg-[#756ab6] text-white">
            <div className=" flex items-center justify-between gap-4 text-sm ">
              <p className=" font-semibold text-center">Postgraduate</p>
              <p className=" cursor-pointer underline text-xs text-center hover:text-black duration-200">
                {" "}
                Leran more
              </p>
              <p className=" cursor-pointer px-3 py-1 duration-200 hover:bg-[#e0aed1] rounded-full overflow-hidden text-center bg-[#2dc97e]">
                Find your course
              </p>
            </div>
          </div>
        </div> */}
        <div className=" w-full px-5 sm:px-16 pt-5">
          <p className=" text-xl w-full text-center text-[#ab87c5]">
            Start Learning
          </p>
          <p className=" w-full text-center font-semibold text-4xl">
            Build Better skills, Faster From Today.
          </p>
          <p className=" text-sm sm:w-1/2 mx-auto text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed
            do eiusmod tempor incididunt ut ldipisicing elit sed do eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
        <div className=" w-full grid md:grid-cols-3 gap-5 sm:gap-16 lg:gap-20 mt-10  ">
          {courseCardData.map((item, inedx) => (
            <div key={inedx} className=" w-full   p-5">
              <div className=" flex items-center justify-center">
                <img src={item.icon} alt="" />
              </div>
              <p className=" font-semibold text-center px-5 mt-3">
                {item.heading}
              </p>
              <p className=" w-full px-3 mt-3 text-xs text-center text-gray-400">
                {item.description}
              </p>
              <div className=" flex items-center justify-center gap-1 hover:text-[#756ab6] text-[#2dc97e] cursor-pointer hover:translate-x-1 duration-200 text-xs mt-5">
                <p className=" ">Learn more</p>
                <TiArrowRight className=" size-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
