import React from "react";
import { Link } from "react-scroll";
import { RiArrowUpDoubleLine } from "react-icons/ri";

export default function SlideUpBtn() {
  return (
    <Link
      to="top-section"
      smooth={true}
      duration={800}
      spy={true}
      offset={-150}
    >
      <div className=" fixed top-[88%] z-50  sm:top-[85%] slideUp cursor-pointer duration-200 right-5 sm:right-8">
        <div className=" bg-[#ffa101] hover:bg-[#1e1d23]  duration-200   text-white   p-2 rounded-full flex items-center justify-center">
          <RiArrowUpDoubleLine className="size-7 sm:size-6  text-white" />
        </div>
      </div>
    </Link>
  );
}
