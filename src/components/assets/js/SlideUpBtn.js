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
      <div className=" fixed top-[88%] z-50  sm:top-[88%] slideUp cursor-pointer duration-200 right-5 sm:right-8">
        <div className=" bg-[#9c96989b]   text-white   p-2 rounded flex items-center justify-center">
          <RiArrowUpDoubleLine className="size-6 sm:size-5  text-white" />
        </div>
      </div>
    </Link>
  );
}
