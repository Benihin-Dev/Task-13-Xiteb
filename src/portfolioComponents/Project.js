import React from "react";
import proImg from "../img/project.png";
import { useInView } from "react-intersection-observer";

export default function Project() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <div className={` w-11/12 sm:w-4/5 sm:px-8 mx-auto`}>
      <h1 className=" font-medium text-gray-500 ">
        | My Projects <span className=" text-[#773ec2]">Works</span>
      </h1>
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } pt-10 grid px-10 sm:grid-cols-3 gap-5 w-full`}
      >
        <div
          className={` pt-1 shadow-md hover:shadow-[#773ec266] border border-gray-300 rounded-md overflow-hidden`}
        >
          <h1 className=" w-full text-[#3a225a]  text-center text-xs my-1 font-semibold">
            Project Name
          </h1>
          <p className="px-3 text-xs text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          </p>
          <div className=" w-full pt-2 mx-auto">
            <img src={proImg} alt="" className=" object-contain" />
          </div>
        </div>
        <div
          className={` pt-1 shadow-md hover:shadow-[#773ec266] border border-gray-300 rounded-md overflow-hidden`}
        >
          <h1 className=" w-full text-[#3a225a]  text-center text-xs my-1 font-semibold">
            Project Name
          </h1>
          <p className="px-3 text-xs text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          </p>
          <div className=" w-full pt-2 mx-auto">
            <img src={proImg} alt="" className=" object-contain" />
          </div>
        </div>
        <div
          className={` pt-1 shadow-md hover:shadow-[#773ec266] border border-gray-300 rounded-md overflow-hidden`}
        >
          <h1 className=" w-full text-[#3a225a]  text-center text-xs my-1 font-semibold">
            Project Name
          </h1>
          <p className="px-3 text-xs text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          </p>
          <div className=" w-full pt-2 mx-auto">
            <img src={proImg} alt="" className=" object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
