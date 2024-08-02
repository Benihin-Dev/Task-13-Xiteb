import React from "react";
import { GoArrowUp } from "react-icons/go";
import { Link } from "react-scroll";

export default function ScrollUpArrow() {
  return (
    <Link
      to="header-section"
      smooth={true}
      duration={800}
      spy={true}
      offset={-150}
    >
      <div className=" z-20 fixed flex items-center justify-center p-2 bg-gray-800 cursor-pointer hover:bg-black duration-200 w-fit top-[90vh] right-[5vw] lg:right-[3vw] rounded-full">
        <GoArrowUp className=" text-white size-7" />
      </div>
    </Link>
  );
}
