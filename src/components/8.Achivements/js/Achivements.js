import React from "react";
import customerImg from "../img/rating.png";
import commentImg from "../img/comment.png";
import freeImg from "../img/free-delivery.png";
import onlinechatImg from "../img/online-chat.png";
import bgImg from "../img/fx_counter.jpg";
import NumberIncreaser from "../../4.AboutUs/js/NumberIncreaser";
import { useInView } from "react-intersection-observer";

export default function Achivements() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const data = [
    {
      icon: customerImg,
      text: "CLIENT SATISFACTION",
      count: 20,
      incrementCount: 1,
    },
    {
      icon: commentImg,
      text: "POSITIVE FEEDBACK",
      count: 96,
      incrementCount: 5,
    },
    {
      icon: freeImg,
      text: "EVERYDAY DELEVERY",
      count: 180,
      incrementCount: 9,
    },
    {
      icon: onlinechatImg,
      text: "ONLINE SUPPORT",
      count: 24,
      incrementCount: 4,
    },
  ];
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } w-full relative z-20  overflow-hidden py-10 `}
    >
      <div className=" z-10 responsiveWeith grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.map((item, index) => (
          <div key={index} className=" p-4 flex items-center gap-10 sm:gap-4">
            <img src={item.icon} className=" w-[70px]" alt="" />
            <div>
              <div className=" flex items-center text-white font-semibold text-5xl">
                <NumberIncreaser
                  targetNumber={item.count}
                  incrementCount={item.incrementCount}
                />
                {index === 1 ? "%" : "+"}
              </div>
              <p className=" text-[#c41f3a] text-[20px] font-semibold">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className=" -z-10 absolute top-0 h-full left-0 w-full ">
        <img
          src={bgImg}
          className="w-full
         object-cover h-full"
          alt=""
        />
      </div>
    </div>
  );
}
