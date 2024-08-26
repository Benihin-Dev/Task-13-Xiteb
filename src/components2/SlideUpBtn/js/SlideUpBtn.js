import React from "react";
import { Link } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";

export default function SlideUpBtn() {
  return (
    <Link
      to="top-section"
      smooth={true}
      duration={800}
      spy={true}
      offset={-150}
    >
      <div className=" fixed top-[92%] slideUp  hover:top-[91%] cursor-pointer duration-200 right-3 sm:right-5">
        <div className=" bg-white border-[2px]  text-gray-800 border-[#6a6e74] hover:bg-[#2faf36] hover:text-white hover:border-[#2faf36] p-1 rounded-full flex items-center justify-center">
          <BsArrowUp className="size-4" />
        </div>
      </div>
    </Link>
  );
}
