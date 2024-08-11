import React from "react";
import logoImg from "../img/logo.svg";
import appStoreImg from "../img/app-store.jpg";
import googlePlayImg from "../img/google-play.jpg";
import clockIcon from "../img/icon-clock.svg";
import contactIcon from "../img/icon-contact.svg";
import emailIcon from "../img/icon-email-2.svg";
import locationIcon from "../img/icon-location.svg";
import paymentImg from "../img/payment-method.png";
import BottomSection from "./BottomSection";

export default function Footer() {
  const companyInfo = [
    { icon: locationIcon, title: "Address", data: "Your Streen, Your City" },
    { icon: contactIcon, title: "Call Us", data: "+1 234 5678" },
    { icon: emailIcon, title: "Email", data: "mail@mail.com" },
    { icon: clockIcon, title: "Hours", data: "10.00 - 18.00, Mon - Sat" },
  ];
  const footerLink = [
    {
      head: "Account",
      links: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Contitions",
        "Contact Us",
        "Support Center",
        "Careers",
      ],
    },
    {
      head: "Account",
      links: [
        "Sign in",
        "View Cart",
        "My Wishlist",
        "Track My Order",
        "Help Ticket",
        "Shipping",
        "Compare Products",
      ],
    },
    {
      head: "Corporate",
      links: [
        "Suppliers",
        "Affiliate Prtzræn",
        "Farm Business",
        "Farm Careers",
        "Accessbility",
        "Our Suppliers",
        "Promotions",
      ],
    },
    {
      head: "Popular",
      links: [
        "Flavoured Milk",
        "Butter & Margarine",
        "Egg Subtitles",
        "Marmalades",
        "Sour Cream & Dips",
        "Tea & Kombucha",
        "Cheese",
      ],
    },
  ];
  return (
    <div className=" w-full relative font-montserrat">
      <div className=" responsiveWeith border-b py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className=" w-full cursor-default">
          <img src={logoImg} alt="" />
          <p className="leading-5 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            quibusdam, velitdam, velit
          </p>
          <div className=" mt-5 space-y-2">
            {companyInfo.map((item, index) => (
              <div key={index} className=" flex items-center gap-2">
                <div>
                  <img src={item.icon} alt="" />
                </div>
                <p className=" text-sm">
                  <span className=" font-semibold">{item.title}:</span>{" "}
                  {item.data}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-4">
          {footerLink.map((fLink, index) => (
            <div key={index} className={` ${index > 1 ? "hidden" : "block"}`}>
              <p className=" font-bold cursor-default text-xl     text-[#2a3948]">
                {fLink.head}
              </p>
              <div className=" mt-4 space-y-3">
                {fLink.links.map((link, i) => (
                  <p
                    key={i}
                    className=" text-gray-500 text-sm font-medium  cursor-pointer duration-200 hover:pl-2 hover:text-[#2faf36] "
                  >
                    {link}
                  </p>
                ))}
              </div>{" "}
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-2 gap-4">
          {footerLink.map((fLink, index) => (
            <div key={index} className={` ${index < 2 ? "hidden" : "block"}`}>
              <p className=" font-bold cursor-default  text-[#2a3948]  text-xl">
                {fLink.head}
              </p>
              <div className=" mt-4 space-y-3">
                {fLink.links.map((link, i) => (
                  <p
                    key={i}
                    className=" text-gray-500 text-sm font-medium  cursor-pointer duration-200 hover:pl-2 hover:text-[#2faf36] "
                  >
                    {link}
                  </p>
                ))}
              </div>{" "}
            </div>
          ))}
        </div>
        <div className=" cursor-default">
          <p className=" font-bold cursor-default  text-[#2a3948]  text-xl">
            Install App
          </p>
          <p className=" mt-3 text-gray-500 text-sm font-medium    ">
            From App Store or Google Play
          </p>
          <div className=" mt-4 flex items-center gap-3">
            <img src={appStoreImg} className=" w-32" alt="" />
            <img src={googlePlayImg} className=" w-32" alt="" />
          </div>
          <p className=" mt-8 text-gray-500 text-sm font-medium    ">
            Secured Payment Gateways
          </p>
          <img src={paymentImg} className=" mt-3" alt="" />
        </div>
      </div>
      <BottomSection />
    </div>
  );
}
