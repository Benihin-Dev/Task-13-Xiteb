import React from "react";
import newsLetterImg from "../img/newsletter.jpg";

export default function Newsletter() {
  return (
    <div className=" w-full py-40 relative z-20">
      <div className=" px-5 sm:px-0 w-full sm:w-11/12 flex items-center justify-center">
        <div className=" w-full sm:w-9/12 md:w-8/12">
          <p className=" text-white w-full text-center pb-10 text-4xl font-semibold">
            Join Our Newsletter
          </p>
          <p className=" text-white text-center w-10/12 mx-auto leading-5 pb-10">
            Sign up to receive the latest promotional information and get a 20%
            discount on the first online payment
          </p>
          <div className="  mx-auto w-full sm:w-11/12 lg:w-9/12   overflow-hidden rounded-full  border  flex items-center justify-center">
            <input
              type="text"
              placeholder="Your email address"
              className=" outline-none text-white pl-5 text-sm py-2 w-9/12   bg-[#0000005e]  "
            />
            <button className=" w-3/12  duration-200 py-2 bg-[#00b9f5] hover:bg-white hover:text-black">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className=" absolute h-full w-full top-0 left-0 -z-10">
        <img
          src={newsLetterImg}
          className=" object-cover w-full h-full"
          alt=""
        />
      </div>
    </div>
  );
}
