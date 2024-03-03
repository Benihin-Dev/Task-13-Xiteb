import React from "react";
import { BsChatDots } from "react-icons/bs";

export default function Contact() {
  return (
    <div className=" w-11/12 md:w-3/5 lg:w-2/5 mx-auto mt-32 mb-20 border border-gray-400 rounded-md shadow-md">
      <h1 className=" w-full text-center py-5 text-gray-500 font-medium">
        Get in Touch with <span className=" text-[#773ec2]">Me</span>
      </h1>
      <div className="  w-full  p-5 mx-auto sm:flex">
        {/* <div className=" w-full sm:w-1/4">
          <BsChatDots className=" w-full px-20 sm:px-10 text-[#773ec27b] h-full" />
        </div> */}
        <div className=" w-full ">
          <form action="#" className=" space-y-2">
            <input
              type="text"
              placeholder="Full Name"
              className=" w-full px-2 py-1 border bg-gray-50 focus:border-[#773ec2] hover:border-[#773ec2]  border-gray-400 outline-none text-sm rounded-md"
            />
            <input
              type="email"
              placeholder="Email addresa"
              className=" w-full px-2 py-1 border bg-gray-50 focus:border-[#773ec2] hover:border-[#773ec2]  border-gray-400 outline-none text-sm rounded-md"
            />
            <input
              type="text"
              placeholder="Message"
              className=" w-full px-2 py-1 border bg-gray-50 focus:border-[#773ec2] hover:border-[#773ec2]  border-gray-400 outline-none text-sm rounded-md"
            />
            <button className=" py-1 w-full rounded-md bg-[#773ec2] text-white hover:bg-[#723fb4]">
              Sent
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
