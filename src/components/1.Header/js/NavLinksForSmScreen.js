import React from "react";

export default function NavLinksForSmScreen({ navLinks }) {
  return (
    <div className="w-screen sm:w-[400px]  shadow-md bg-white ">
      {navLinks.map((nLink, index) => (
        <div className=" w-full flex  px-5 py-2 text-base font-medium text-gray-500 hover:text-[#ffa101]  duration-200 cursor-pointer border-t items-center gap-2">
          <p className=" text-center">{nLink.title}</p>
        </div>
      ))}
    </div>
  );
}
