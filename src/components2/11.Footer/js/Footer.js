import React from "react";
import { Link } from "react-scroll";
import { FiPhone } from "react-icons/fi";
import { MdFacebook } from "react-icons/md";
import { BiLogoInstagram } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { RxLinkedinLogo } from "react-icons/rx";

export default function Footer() {
  const footerLinks = [
    {
      head: "Information",
      links: [
        "About us",
        "Contact us",
        "Privacy Policy",
        "Terms & Condition",
        "Brands",
        "Faq",
      ],
    },
    {
      head: "Categories   ",
      links: [
        "Mobile & tablets",
        "Laptop & Computers",
        "Home & Kitchen Appliances",
        "TV, Home Audio Video",
        "Music & Video Games",
        "Refrigerators & AC",
      ],
    },
    {
      head: "Brands",
      links: ["Samsung", "Panasonic", "LG", "Sony", "Toshiba", "Philips"],
    },
  ];
  return (
    <>
      <div className=" w-full  relative py-20 bg-[#f7f8fc]">
        <div className="responsiveWeith">
          <div className=" w-full lg:flex ">
            <div className=" w-full lg:w-1/4 lg:pr-10">
              <div className=" flex items-center gap-1">
                <FiPhone className=" size-10" />
                <div>
                  <p className=" text-sm">HOTLINE FREE</p>
                  <p className=" text-[#ffc107] text-lg font-semibold">
                    (+1) 234 5678
                  </p>
                </div>
              </div>
              <p className=" text-sm py-4 hover:text-[#ffc107] duration-200 cursor-pointer ">
                <span className=" font-semibold">Address:</span> A123, Your
                Street, Your City, Your Country.
              </p>
              <p className=" text-sm pb-8 border-b hover:text-[#ffc107] duration-200 cursor-pointer">
                <span className=" font-semibold">Email:</span>
                mail@mail.com
              </p>
              <div className=" flex items-center gap-3 text-gray-800 pt-4">
                <MdFacebook className=" size-7 cursor-pointer" />
                <BiLogoInstagram className=" size-7 cursor-pointer" />
                <AiFillYoutube className=" size-7 cursor-pointer" />
                <RxLinkedinLogo className=" size-6 cursor-pointer" />
              </div>
            </div>
            <div className=" w-full lg:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 lg:mt-0 ">
              {footerLinks.map((item, index) => (
                <div key={index} className=" w-full">
                  <p className=" font-semibold text-xl">{item.head}</p>
                  <div className=" space-y-4 text-sm mt-10">
                    {item.links.map((link, i) => (
                      <p
                        key={i}
                        className="  hover:text-[#ffc107] duration-300 cursor-pointer"
                      >
                        {link}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <p className=" font-semibold text-2xl pb-10">Download App</p>
                <p className=" text-sm text-gray-700 pb-6">
                  Download our Apps and get extra 15% Discount on your first
                  Order…!
                </p>
                <img
                  src="https://themes.xcommerz.com/electronics-store-5/Images/google-play.png"
                  alt=""
                />
                <img
                  src="https://themes.xcommerz.com/electronics-store-5/Images/appstore.png"
                  alt=""
                  className=" py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full py-7">
        <div className=" responsiveWeith md:flex items-center justify-between gap-10">
          <div className=" w-full lg:w-4/5">
            <ul className=" text-xs space-y-2 sm:space-y-0 sm:flex items-center gap-5  ">
              <li className="w-fit hover:text-[#ffc107] duration-200 border-b border-black">
                Privacy Policy
              </li>
              <li className="w-fit hover:text-[#ffc107] duration-200 border-b border-black">
                Notice at Collection
              </li>
              <li className="w-fit hover:text-[#ffc107] duration-200 border-b border-black">
                Terms of Use
              </li>
              <li className="w-fit hover:text-[#ffc107] duration-200 border-b border-black">
                Accessibility
              </li>
              <li className="w-fit hover:text-[#ffc107] duration-200 border-b border-black">
                Supply Chain Transparency
              </li>
            </ul>
            <p className=" text-sm mt-4">
              © Copyrights 2024 All rights reserved. Powered by{" "}
              <span className=" text-blue-700">xCommerz™</span>
            </p>
          </div>
          <div className=" mt-4 lg:mt-0">
            <img
              src="https://themes.xcommerz.com/electronics-store-5/Images/payment-method.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
