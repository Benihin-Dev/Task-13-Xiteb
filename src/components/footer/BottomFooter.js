import React from "react";
import "./footer.css";
import logoImg from "../assets/img/logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function BottomFooter() {
  return (
    <>
      <div className=" border-t  bg-white  mt-10">
        <div className=" w-full  px-5 sm:px-0 sm:w-11/12 mx-auto py-8 sm:flex items-start gap-10">
          <div className=" cursor-default sm:w-1/4 border-b sm:border-b-transparent pb-3 sm:border-r border-gray-400">
            <div>
              <img src={logoImg} alt="" className=" w-40" />
            </div>
            <p className=" text-3xl font-semibold">
              OpenGate <br /> University
            </p>
            <p>
              2nd Lane, New Village,
              <br /> Colombo 7, Srilanka
            </p>
          </div>
          <div className=" sm:w-3/4 mt-3 sm:mt-1">
            <p className=" cursor-default text-sm">Social Connections</p>
            <div className=" flex items-center gap-2 text-gray-400 mt-2">
              <FaSquareFacebook className="socialMedial" />
              <RiTwitterXFill className=" socialMedial" />
              <FaInstagram className=" socialMedial" />
              <IoLogoYoutube className=" socialMedial" />
              <IoLogoWhatsapp className=" socialMedial" />
            </div>
            <p className=" mt-4 text-xs cursor-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
              doloremque, ipsam perferendis ut culpa earum cupiditate. Nisi
              doloribus unde , ipsam perferendis ut culpa earum cupiditate. Nisi
              doloribus unde , ipsam perferendis ut culpa earum cupiditate. Nisi
              doloribus unde distinctio, rem omnis eius neque officiis dolorem
              iusto eos molestiae.
            </p>
            <button className=" px-10 border py-2 mt-3 hover:text-white hover:bg-[#6556b8] duration-200 bg-[#40e77d]">
              Join now
            </button>
          </div>
        </div>
      </div>
      <div className="  w-full px-5 sm:px-0 sm:w-11/12 mx-auto py-2 text-xs">
        <p>
          {" "}
          Copyright © 2024 <span className=" font-semibold">OpenGate</span>, All
          rights reserved. Powered by Nothing
        </p>
      </div>
    </>
  );
}
