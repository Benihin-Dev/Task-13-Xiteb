import React from "react";
import cretificate from "../img/cretificate.png";
import { useInView } from "react-intersection-observer";

export default function CourseCertifications() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    // triggerOnce: true,
  });
  return (
    <div className={` w-11/12 sm:w-4/5 mx-auto sm:px-5 my-20`}>
      <h1 className=" w-full text-end text-gray-500 px-4 font-medium pb-5">
        <span className=" text-[#773ec2] ">| Courses</span> and Certifications
      </h1>
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } w-11/12 sm:w-8/12 space-y-5 mx-auto mt-5`}
      >
        <div
          className={`w-full bg-[#773ec2ab]   border border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate}
                alt=""
                className=" w-full h-full border border-gray-300"
              />
            </a>
          </div>
          <div className=" w-3/4">
            <p className=" text-white py-2 w-full text-center">
              Network Engineer
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicingctetur
              adipisicing
            </p>
          </div>
        </div>
        <div
          className={` w-full bg-[#773ec2ab]   border border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-3/4">
            <p className=" text-white py-2 w-full text-center">
              Network Engineer
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicingctetur
              adipisicing
            </p>
          </div>
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate}
                alt=""
                className=" w-full h-full border border-gray-300"
              />
            </a>
          </div>
        </div>
        <div
          className={`w-full bg-[#773ec2ab]   border border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate}
                alt=""
                className=" w-full h-full border border-gray-300"
              />
            </a>
          </div>
          <div className=" w-3/4">
            <p className=" text-white py-2 w-full text-center">
              Network Engineer
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicingctetur
              adipisicing
            </p>
          </div>
        </div>
        <div
          className={` w-full bg-[#773ec2ab]   border border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-3/4">
            <p className=" text-white py-2 w-full text-center">
              Network Engineer
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicingctetur
              adipisicing
            </p>
          </div>
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate}
                alt=""
                className=" w-full h-full border border-gray-300"
              />
            </a>
          </div>
        </div>
        <div
          className={`w-full bg-[#773ec2ab]   border border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate}
                alt=""
                className=" w-full h-full border border-gray-300"
              />
            </a>
          </div>
          <div className=" w-3/4">
            <p className=" text-white py-2 w-full text-center">
              Network Engineer
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicingctetur
              adipisicing
            </p>
          </div>
        </div>
        <div
          className={` w-full bg-[#773ec2ab]   border border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-3/4">
            <p className=" text-white py-2 w-full text-center">
              Network Engineer
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicingctetur
              adipisicing
            </p>
          </div>
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate}
                alt=""
                className=" w-full h-full border border-gray-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
