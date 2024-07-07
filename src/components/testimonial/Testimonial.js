import React from "react";
import "./testimonial.css";
import { GoCommentDiscussion } from "react-icons/go";
import SliderForTestimonial from "./SliderForTestimonial";

export default function Testimonial() {
  return (
    <div className=" w-full py-12">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto">
        <div className=" flex justify-center items-center gap-2">
          <GoCommentDiscussion className=" text-[#22c55e] size-6" />
          <p className=" text-gray-600 cursor-default">Testimonial</p>
        </div>
        <p className=" w-full px-5 text-center text-4xl cursor-default ">
          <span className=" text-[#4534a9]  "> What Says</span> Our Students
        </p>
        <SliderForTestimonial />
      </div>
    </div>
  );
}
