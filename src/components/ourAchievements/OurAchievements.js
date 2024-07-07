import React, { useState } from "react";
import { GoChecklist } from "react-icons/go";
import { PiStudentLight } from "react-icons/pi";
import { VscFiles } from "react-icons/vsc";
import { BsAward } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import NumberIncrement from "./NumberIncrement";

export default function OurAchievements() {
  const achievementData = [
    {
      title: "Enrolled Students",
      logo: <PiStudentLight className=" text-yellow-300 size-10" />,
      count: 9568,
      incrementCount: 40,
    },
    {
      title: "Academic Programs",
      logo: <VscFiles className=" text-green-500 size-10" />,
      count: 648,
      incrementCount: 3,
    },
    {
      title: "Winning Awards",
      logo: <BsAward className=" text-orange-400 size-10" />,
      count: 207,
      incrementCount: 2,
    },
    {
      title: "Cretified Students",
      logo: <FaGraduationCap className=" text-gray-900 size-10" />,
      count: 113,
      incrementCount: 1,
    },
  ];

  return (
    <div className=" w-full py-10">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto">
        <div className=" flex items-center justify-center">
          <div className=" flex justify-center items-center gap-2">
            <GoChecklist className=" text-[#9588e1] size-6" />
            <p className=" text-gray-600">Some Fun Fact</p>
          </div>
        </div>
        <p className=" w-full px-5 text-center text-4xl ">
          Our Great
          <span className=" text-[#22c55e] "> Achievement</span>
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-4 gap-5 mt-10">
          {achievementData.map((item, index) => (
            <div
              key={index}
              className="p-5 cursor-default bg-[#5e4cc6] hover:shadow-md  shadow-gray-500 border flex items-center justify-center gap-8"
            >
              {item.logo}
              <div>
                <p className=" text-2xl font-semibold text-white">
                  <NumberIncrement
                    targetNumber={item.count}
                    incrementCount={item.incrementCount}
                  />
                </p>
                <p className=" text-gray-50">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
