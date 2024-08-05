import React from "react";
import logoImg from "../img/logo.png";
import { RiCustomerServiceLine } from "react-icons/ri";
import { Link } from "react-scroll";

export default function MiddleSection() {
  const footerLinks = [
    {
      head: "About Singer",
      links: [
        "About us",
        "Milestones",
        "Board Of Directors",
        "Senior Manasement Team",
        "Career Opportunities",
        "Gadgets",
        "Investor Relations",
      ],
    },
    {
      head: "Quick Links",
      links: [
        "Contact us",
        "Location",
        "Hot Deals",
        "Stock Clearance sales",
        "HP Installment Payments",
        "SINGER Finance PLC",
      ],
    },
    {
      head: "Support",
      links: [
        "Products",
        "Brands",
        "Product Verification",
        "Check Loyalty Card Point Balance",
        "Privacy policy",
        "Terrns And Conditions",
      ],
    },
  ];
  return (
    <div className=" w-full relative py-10   bg-[#f8f8f8]">
      <div className="responsiveWeith grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src={logoImg} className=" h-10" alt="" />
          <div className=" flex items-center gap-2 mt-4">
            <RiCustomerServiceLine className=" size-10 text-[#ee6a92]" />
            <div className=" cursor-default">
              <p className=" text-[9px]">Got Question? call 24/7</p>
              <p>+94 115 400 400</p>
            </div>
          </div>
          <div className=" mt-4 ">
            <p className=" font-bold text-gray-600 text-sm">Contact Info</p>
            <p className=" text-[12px] text-gray-600">
              SINGER (Sri Lanka) PLC <br />
              No. 112, Havelock Road, Colombo 5 <br /> Sri Lanka.
            </p>
          </div>
        </div>
        {footerLinks.map((item, index) => (
          <div key={index} className=" w-full">
            <p
              key={index}
              className=" cursor-default text-sm font-semibold text-gray-700 pb-2"
            >
              {item.head}
            </p>
            {item.links.map((link, i) => (
              <p
                className=" my-1 cursor-pointer hover:font-bold hover:text-[#e6154b] duration-200 text-sm text-gray-500 "
                key={i}
              >
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
