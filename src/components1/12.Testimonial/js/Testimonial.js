import React from "react";
import quoteImg from "../img/quote-icon.png";
import bgRoundImg from "../img/roundbg.png";
import SliderForTestimonial from "./SliderForTestimonial";

export default function Testimonial() {
  const customerComment = {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt provident dolore fugiat doloribus consequuntur ",
    name: "Customer",
    rating: 5,
  };
  const customerComments = Array(8).fill(customerComment);

  return (
    <div className=" w-full  py-10 relative  overflow-hidden">
      <div className=" flex items-center justify-center gap-5">
        <img src={quoteImg} alt="" />
        <p className=" text-4xl text-[#66bc89] text-center font-bold ">
          Latest Reviews
        </p>
      </div>
      <div className="  w-full">
        <SliderForTestimonial data={customerComments} />
      </div>
      <div className=" absolute top-0 left-0 w-full h-full -z-10 ">
        <img
          src={bgRoundImg}
          className=" w-[110%] h-full bg-[#fdf6ed] object-cover object-top "
          alt=""
        />
      </div>
    </div>
  );
}
