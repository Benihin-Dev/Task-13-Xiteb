import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import bgImg from "../img/fx_footer_bg.jpg";
import logoImg from "../img/logo_t.svg";

export default function Footer() {
  const socialMedia = [
    { icon: <FaFacebookF className=" size-6" />, link: "www.facebook.com" },
    { icon: <FaXTwitter className=" size-5" />, link: "www.x.com" },
    { icon: <GrLinkedin className=" size-5" />, link: "www.linkedin.com" },
    { icon: <FaInstagram className=" size-6" />, link: "www.instagram.com" },
  ];
  const quickLink = [
    { text: "ABOUT US", link: "www.nothing.com" },
    { text: "OUR SHOP", link: "www.nothing.com" },
    { text: "PRODUCT", link: "www.nothing.com" },
    { text: "CONTACT US", link: "www.nothing.com" },
    { text: "OUR BLOG", link: "www.nothing.com" },
  ];
  const contactData = [
    {
      icon: <IoHomeSharp className=" size-7 md:size-8" />,
      details: "123, Your Street, Your City, Your Country",
    },
    {
      icon: <FaPhoneAlt className=" size-6" />,
      details: "Telephone: +0 11 234 5678",
    },
    {
      icon: <IoMailOpenOutline className=" size-7" />,
      details: "yourmail@mail.com",
    },
    {
      icon: <AiFillClockCircle className=" size-6" />,
      details: "Time: 9.00am-4.00pm",
    },
  ];
  return (
    <div className=" relative w-full pt-10 ">
      <div className=" responsiveWeith grid grid-cols-1 lg:grid-cols-2 gap-5 pb-20">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className=" w-full lg:col-span-2">
            <div className=" flex items-center justify-center sm:justify-start">
              <img src={logoImg} className=" w-24" alt="" />
            </div>
            <p className=" cursor-default mt-5 text-white text-lg text-center sm:text-start">
              Experience the convenience of ordering your favorite frozen foods
              anytime, anywhere At Frozen Forts, we prioritize speedy delivery
              to ensure your products arrive fresher and faster than our
              competitors. With our reliable and efficient service, you can
              enjoy top-quality frozen foods without the wait.
            </p>
            <div className=" flex items-center justify-center sm:justify-start gap-3 mt-6">
              {socialMedia.map((link, index) => (
                <a key={index} href={link.link}>
                  <div className=" size-10 hover:border-solid hover:bg-[#c41f3a] duration-300 hover:border-[#c41f3a] cursor-pointer border border-white text-white flex items-center justify-center border-dashed  rounded">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className=" flex  justify-center sm:justify-start mt-5 md:mt-0">
            <div>
              <p className=" cursor-default text-[22px] pb-5 font-medium text-[#c41f3a]">
                QUICK LINKS
              </p>
              {quickLink.map((qLink, index) => (
                <a key={index} href={qLink.link}>
                  <div className=" cursor-pointer  flex items-center gap-1 text-xl text-white hover:text-[#c41f3a] duration-500 pb-3">
                    <IoIosArrowForward />
                    <p>{qLink.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className=" cursor-default flex justify-center sm:justify-start mt-5 md:mt-0">
            <div>
              <p className="text-center cursor-default sm:text-start text-[22px] pb-5 font-medium text-[#c41f3a]">
                OUR CONTACT
              </p>
              {contactData.map((detail, index) => (
                <div
                  key={index}
                  className=" flex pb-3 items-start gap-3 text-white text-lg"
                >
                  {detail.icon}
                  <p className=" leading-5">{detail.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full lg:col-span-2">
            <p className="  cursor-default text-center sm:text-start text-[22px] pb-5 font-medium text-[#c41f3a]">
              SUBSCRIBE NOW
            </p>
            <p className=" cursor-default text-white text-lg">
              Subscribe our weekly newsletter for get more update about br get
              more update about burger food.
            </p>
            <div className=" flex overflow-hidden  border-white border text-white  mt-4 text-xl bg-transparent rounded-md">
              <input
                type="text"
                placeholder="Your Email"
                className="py-4 bg-transparent w-full pl-5 outline-none"
                name=""
                id=""
              />
              <div className=" bg-[#c41f3a] cursor-pointer text-white px-5 py-4">
                <FaPaperPlane />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full cursor-default py-6 text-white text-center border-t border-white text-xl px-5">
        <p>© Copyrights 2024 All rights reserved. Powered by xCommerz™</p>
      </div>
      <div className=" absolute top-0 left-0 w-full -z-10 h-full">
        <img src={bgImg} className=" object-cover w-full h-full" alt="" />
      </div>
    </div>
  );
}
