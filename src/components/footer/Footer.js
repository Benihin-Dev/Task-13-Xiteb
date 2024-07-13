import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import sideImg from "../assets/img/1.png";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className=" w-full py-20 relative  px-5 sm:px-0 bg-[#2c2c2c] text-white">
      <div>
        <div className="  pb-1 relative  ">
          <p className="   font-allura mx-auto text-center text-4xl lg:text-6xl text-[#5e5e5e]">
            beauTy
          </p>
          <p className=" left-0 w-full absolute top-6 sm:top-8 text-center text-2xl lg:text-4xl  text-[#e8e8e8]">
            {" "}
            AURA
          </p>
          <p className=" w-full text-center mt-8">
            Subscribe for our newsletter! Be in trend!
          </p>
          <div className=" mx-3  w-full sm:flex gap-5 justify-center mt-8 items-center">
            <div>
              <input
                type="text"
                placeholder="Your Email"
                className="    w-11/12 mx-auto sm:w-fit  bg-transparent outline-none border-b pt-3 pb-2"
              />
            </div>
            <button className="  hover:bg-[#c1916d] duration-200 hover:text-black  w-11/12 sm:w-fit text-sm pt-3 mt-2 sm:mt-0 sm:ml-3 pb-2 px-5 border">
              SUBSCRIBE
            </button>
          </div>
          <div className=" flex items-center justify-center mt-10">
            <ul className=" text-sm text-gray-200 flex items-center gap-5">
              <li className=" cursor-pointer hover:text-[#c1916d] duration-200">
                HOME
              </li>
              <li className=" cursor-pointer hover:text-[#c1916d] duration-200">
                COMPANY
              </li>
              <li className=" cursor-pointer hover:text-[#c1916d] duration-200">
                BLOG
              </li>
              <li className=" cursor-pointer hover:text-[#c1916d] duration-200">
                SHOP
              </li>
            </ul>
          </div>
          <p className=" text-xs  text-center mt-10 leading-4 sm:w-full mx-auto w-11/12">
            Copyright © 2024 AURA by WebGenius. All Rights Reserved.
          </p>
          <div className=" w-full flex items-center gap-5 justify-center mt-5">
            <div className=" border rounded-full p-2  text-gray-200 duration-200 hover:bg-white hover:text-black">
              <FaFacebookF className=" size-4 " />
            </div>
            <div className=" border rounded-full p-2  text-gray-200 duration-200 hover:bg-white hover:text-black">
              <FaXTwitter className=" size-4 " />
            </div>
            <div className=" border rounded-full p-2  text-gray-200 duration-200 hover:bg-white hover:text-black">
              <FaLinkedinIn className=" size-4 " />
            </div>
            <div className=" border rounded-full p-2  text-gray-200 duration-200 hover:bg-white hover:text-black">
              <FaInstagram className=" size-4 " />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={`animated-componentFromRight ${
          inView ? "is-visible" : ""
        } absolute bottom-[80%] sm:bottom-[40%] left-[70%] sm:left-[85%] size-[70vw] rotate-12 sm:w-[30vw] `}
      >
        <img
          src={sideImg}
          alt=""
          className=" size-full object-contain rotate-45"
        />
      </div>
    </div>
  );
}
