import React from "react";

export default function EmailContact() {
  return (
    <div className=" w-full py-12 mt-10 bg-[#393939] text-white">
      <div className="responsiveWeith md:flex items-center justify-between gap-10">
        <div className=" md:w-1/2 ">
          <p className=" font-semibold pb-2">
            Enter your email address to get $20 off your first order
          </p>
          <p className=" text-xs">
            Get E-mail updates about our latest shop and special offers.
          </p>
        </div>
        <div className=" md:w-1/2 flex items-center gap-4 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Email address"
            className=" py-4 outline-none  w-full rounded-md px-3 text-black"
            name=""
            id=""
          />
          <button className=" bg-[#ffc107] hover:bg-[#393939] duration-200 px-10 py-4 rounded-md">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
