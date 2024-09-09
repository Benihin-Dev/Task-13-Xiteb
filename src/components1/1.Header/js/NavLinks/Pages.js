import React from "react";

export default function Pages({ details }) {
  return (
    <div className=" w-full px-5 bg-white md:px-10 py-10 grid grid-cols-4 gap-5">
      {details.map((item, index) => (
        <div key={index}>
          <p className=" cursor-default pb-4 font-semibold text-[#66bc89] w-full">
            {item.title}
          </p>
          {item.links.map((link, i) => (
            <p
              key={i}
              className="  pb-1 cursor-pointer  text-[#66bc89] duration-200 hover:text-[#103178] w-full  "
            >
              {link}none
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
