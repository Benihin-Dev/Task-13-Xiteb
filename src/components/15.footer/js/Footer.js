import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import logoImg from "../img/logo.png";
import googlePlayImg from "../img/google-play.png";
import appStoreImg from "../img/app-stor.png";
import paymentImg from "../img/payment.png";

export default function Footer() {
  const footerLinks = [
    {
      title: "COMPANY",
      links: [
        "About Us",
        "Career",
        "Awards",
        "CSR",
        "Corporate Sale",
        "Our Branches",
      ],
    },
    {
      title: "SHOP",
      links: [
        "Women",
        "Men",
        "Shoes",
        "Bags & Accessories",
        "Kids & Baby",
        "Sale",
      ],
    },
    {
      title: "QUICK LINKS",
      links: [
        "Terms of Use",
        "My Account",
        "Return & Refund",
        "Payment Policy",
        "Size Guide ",
      ],
    },
  ];
  return (
    <div className=" w-full bg-[#f6f6f6] lg:bg-transparent relative">
      <div className=" relative">
        <div className=" w-full px-5 sm:px-0 mx-auto sm:w-10/12 ">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   w-full ">
            <div className=" space-y-4 py-8">
              <img src={logoImg} alt="" />
              <p className="  font-semibold">Question or feedback?</p>
              <div className=" space-y-1">
                <div className=" flex items-center hover:text-[#4d9cd9] duration-200  gap-2 cursor-pointer">
                  <FaPhoneAlt className=" size-4" />
                  <p className=" text-sm">+1 234 5678</p>
                </div>
                <div className=" flex items-center hover:text-[#4d9cd9] duration-200  gap-2 cursor-pointer">
                  <MdOutlineMail className=" size-5" />
                  <p className=" text-sm">mail@mail.com</p>
                </div>
              </div>
              <div className=" w-full flex items-center   gap-2">
                <img src={appStoreImg} alt="" />
                <img src={googlePlayImg} alt="" />
              </div>
            </div>
            {footerLinks.map((item, index) => (
              <div
                key={index}
                className=" text-sm w-full lg:bg-[#f6f6f6] py-5 lg:py-10 px-3  "
              >
                <div className=" border-b">
                  <p className=" font-semibold">{item.title}</p>
                  <p className="  border-b-2 w-fit px-7 border-[#4d9cd9] pt-3 ">
                    {" "}
                  </p>
                </div>
                <div className=" space-y-2 mt-4">
                  {item.links.map((link, i) => (
                    <p
                      key={i}
                      className=" hover:pl-2 cursor-pointer duration-300 hover:text-[#4d9cd9]"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" hidden lg:flex w-full absolute top-0 h-full left-0 -z-10 items-center justify-center">
          <div className=" w-1/2 h-full bg-[#efefef]"></div>
          <div className=" w-1/2 h-full bg-[#f6f6f6]"></div>
        </div>
      </div>
      <div className=" bg-[#e4e4e4]">
        <div className="  py-6 w-full px-5 sm:px-0 mx-auto sm:w-10/12  grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
          <div className=" w-full">
            <p className=" text-gray-600 text-center lg:text-left text-xs">
              © Copyrights 2024 All rights reserved. Powered by{" "}
              <span className=" text-black border-b border-black">
                {" "}
                xCommerz™
              </span>
            </p>
          </div>
          <div className=" flex items-end justify-center gap-2">
            <FaFacebookF className=" size-4 duration-200 text-gray-600 cursor-pointer hover:text-[#4d9cd9]" />
            <FaInstagram className=" size-4 duration-200 text-gray-600 cursor-pointer hover:text-[#4d9cd9]" />
            <FaLinkedinIn className=" size-4 duration-200 text-gray-600 cursor-pointer hover:text-[#4d9cd9]" />
          </div>
          <div className=" pt-3 flex items-center justify-center">
            <img src={paymentImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
