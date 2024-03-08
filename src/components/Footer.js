import React, { useState } from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import footerImg from "../img/footer.png";
import footerImg1 from "../img/footer1.png";
import { FaChevronDown } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { TfiYoutube } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { TfiTwitter } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Footer() {
  const [readState, setReadState] = useState(false);
  return (
    <div className=" w-full mt-16 relative mb-20">
      <img src={footerImg} alt="ooterImg" className=" w-full" />
      <div className=" absolute hidden lg:block top-0 w-full h-20 bg-white"></div>
      <div className=" absolute top-10 right-10 sm:top-24 lg:top-32 sm:right-32 rounded-full size-20 flex justify-center items-center bg-indigo-600">
        <Link
          to="header-section"
          smooth={true}
          duration={800}
          spy={true}
          offset={-70}
        >
          <div className=" w-full text-white">
            <FaChevronDown className=" w-1/2 mx-auto rotate-180" />
            <p className=" cursor-default w-full text-center text-sm hover:pb-2 duration-200  font-medium">
              Scroll Up
            </p>
          </div>
        </Link>
      </div>
      <div className=" w-10/12 mt-10 sm:mt-5 lg:w-8/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-5">
        <div>
          <p className=" font-medium text-purple-500">Corporate information</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>Cinnamon Hotel & Resorts</p>
            </a>
            <a href="https://nothing.com">
              <p>John Keells Group</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-purple-500">News and Awards</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>News</p>
            </a>
            <a href="https://nothing.com">
              <p>Awards</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-purple-500">
            Data Privacy & Security Policy
          </p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>Terms & Conditions</p>
            </a>
            <a href="https://nothing.com">
              <p>Privacy Statement</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-purple-500">Blogs</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>Cinnamon Ublog</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-purple-500">Corporate Governance</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>CSR</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-purple-500">Get in Touch</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>info@cinnamontels.com</p>
            </a>
            <a href="https://nothing.com">
              <p>Hotel Contact Information</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-purple-500">Careers</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>Careers</p>
            </a>
          </div>
        </div>
        <div className=" sm:col-span-2">
          <p className=" font-medium text-purple-500">Follow Us</p>
          <div className=" text-xs mt-2 flex gap-3 text-gray-400 ">
            <a href="https://nothing.com">
              <TfiFacebook className="hover:text-purple-500 size-4" />
            </a>
            <a href="https://nothing.com">
              <TfiTwitter className="hover:text-purple-500  size-4" />
            </a>
            <a href="https://nothing.com">
              {" "}
              <TfiLinkedin className="hover:text-purple-500  size-4" />
            </a>
            <a href="https://nothing.com">
              {" "}
              <TfiInstagram className="hover:text-purple-500  size-4" />
            </a>
            <a href="https://nothing.com">
              {" "}
              <TfiYoutube className="hover:text-purple-500  size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-10/12 lg:w-8/12 mx-auto mt-10">
        <p className="  text-purple-500 text-lg">Get Cinnamon in your inbox</p>
        <div className=" w-11/12 sm:w-5/12 border border-purple-300 flex items-center justify-center">
          <input
            placeholder="Email Address"
            type="email"
            className=" py-4 text-xs px-2 outline-none w-10/12"
          />
          <FaChevronDown className=" cursor-pointer hover:translate-x-[2px] duration-200 text-gray-600 -rotate-90 size-4 w-2/12" />
        </div>
        <div className=" w-11/12 sm:w-5/12 mt-5 flex gap-2">
          <IoIosCheckmarkCircle
            onClick={() => {
              setReadState(!readState);
            }}
            className={`${
              readState === true ? "text-gray-600" : " text-transparent"
            } size-4 border rounded-full border-gray-400 cursor-pointer`}
          />
          <p className=" text-xs w-11/12 text-gray-700">
            By Checking this box, I consent to the processing of my Personal
            Data by Cinnamon for the purpose and within the Conditions set out
            in this form and the Hotel.
          </p>
        </div>
      </div>
      <img
        src={footerImg1}
        alt="footerImg"
        className=" absolute lg:top-[65%] sm:top-[88%]  md:top-[80%]  top-[95%] w-full"
      />
    </div>
  );
}
