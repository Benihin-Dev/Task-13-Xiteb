import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import ProgramsSlider from "./ProgramsSlider";

export default function Programs() {
  return (
    <div className=" w-full py-10">
      <div className=" w-full px-2 sm:px-0 sm:w-11/12 mx-auto">
        <div className=" px-3">
          <div className=" flex items-center justify-center">
            <div className=" flex items-center justify-center gap-2">
              <FaGraduationCap className=" size-5 text-[#9588e1]" />
              <p className=" text-gray-400">Events</p>
            </div>
          </div>
          <p className=" w-full text-center text-3xl sm:text-4xl ">
            Ongoning <span className=" text-[#9588e1]">& </span> Upcoming
            Programs
          </p>
          <p className=" w-full text-center sm:w-2/3 mx-auto mt-1 leading-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit
            expedita incidunt nemo vel libero. Recusandae non ratione,
            blanditiis earum dolorum cumque rerum eum
          </p>
        </div>
        <div className=" w-full mt-5">
          <ProgramsSlider />
        </div>
      </div>
    </div>
  );
}
