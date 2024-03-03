import React from "react";
import eduImg from "../img/edu.jpg";
import { useInView } from "react-intersection-observer";


export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div className=" w-11/12 sm:w-4/5 mx-auto my-20 p-5 sm:p-10">
      <div>
        <h1 className=" w-full text-end px-2 font-semibold text-gray-500">
          <span className="text-[#773ec2]">| E</span>DUCATION INFO
        </h1>
        <div className=" pt-10 grid  sm:grid-cols-3 gap-5 w-full">
          <div
            ref={ref}
            className={`animated-component ${
              inView ? "is-visible" : ""
            }  shadow-lg border border-gray-300 rounded-md pb-5 overflow-hidden`}
          >
            <div className=" w-full mx-auto">
              <img src={eduImg} alt="" className=" object-contain" />
            </div>
            <h1 className=" w-full  text-center text-xs my-1 font-semibold">
              Project Name
            </h1>
            <p className=" text-xs text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              voluptate officia
            </p>
          </div>
          <div
            ref={ref}
            className={`animated-component ${
              inView ? "is-visible" : ""
            }  shadow-lg border border-gray-300 rounded-md pb-5 overflow-hidden`}
          >
            <div className=" w-full mx-auto">
              <img src={eduImg} alt="" className=" object-contain" />
            </div>
            <h1 className=" w-full  text-center text-xs my-1 font-semibold">
              Project Name
            </h1>
            <p className=" text-xs text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              voluptate officia
            </p>
          </div>
          <div
            ref={ref}
            className={`animated-component ${
              inView ? "is-visible" : ""
            } shadow-lg border border-gray-300 rounded-md pb-5 overflow-hidden`}
          >
            <div className=" w-full mx-auto">
              <img src={eduImg} alt="" className=" object-contain" />
            </div>
            <h1 className=" w-full  text-center text-xs my-1 font-semibold">
              Project Name
            </h1>
            <p className=" text-xs text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              voluptate officia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
