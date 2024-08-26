import React from "react";
import { Link } from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";

export default function SlideUpBtn() {
  return (
    <Link
      to="top-section"
      smooth={true}
      duration={800}
      spy={true}
      offset={-150}
    >
      <div className=" fixed top-[92%]  sm:top-[88%] slideUp cursor-pointer duration-200 right-5 sm:right-8">
        <div className=" bg-[#c41f3a]   text-gray-800 border-[#6a6e74]   hover:border-[#2faf36] p-2 rounded flex items-center justify-center">
          <IoIosArrowForward className="size-5 sm:size-8 -rotate-90 text-white" />
        </div>
      </div>
    </Link>
  );
}
