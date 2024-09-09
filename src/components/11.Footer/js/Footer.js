import React from "react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Quick links",
      links: ["Pizza", "Burger", "Cake", "Chocolate", "Ice Cream"],
    },
    {
      title: "Important Links",
      links: ["About", "Blog", "Shop", "FAQ", "Contact"],
    },
  ];
  return (
    <div className=" pt-10 relative w-full bg-[#fdfbf9]">
      <div className="responsiveWeith pb-8 md:grid grid-cols-2 gap-10">
        <div className=" mt-5 w-full">
          <img
            src="https://themes.xcommerz.com/pizza-shop/assets/images/logo.png"
            alt=""
          />
          <ul className=" mt-5 text-lg font-medium flex items-center gap-3 text-gray-500 pb-16">
            <li className=" hover:text-[#ffa101] duration-200 cursor-pointer">
              Facebook
            </li>
            <li className=" hover:text-[#ffa101] duration-200 cursor-pointer">
              Instagram
            </li>
            <li className=" hover:text-[#ffa101] duration-200 cursor-pointer">
              Linkedin
            </li>
          </ul>
          <p className=" font-semibold text-4xl">Ready to get started?</p>
          <div className=" flex items-center gap-2 mt-8 pr-5">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/e7a3497a883cd2fba055276bb72a7f072281af55/89d2a/assets/images/play-store.svg"
              alt=""
              className="object-contain w-fit h-12"
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/c8c52c11752708aa58dba13ffe5420ffb24ac6f3/842c5/assets/images/apps-store.svg"
              alt=""
              className="object-contain  w-fit h-12"
            />
          </div>
        </div>
        <div className=" w-full grid  mt-10 md:mt-0 grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10">
          {footerLinks.map((fLink, index) => (
            <div key={index}>
              <p className=" text-lg font-semibold cursor-default pb-5">
                {fLink.title}
              </p>
              {fLink.links.map((link, i) => (
                <p
                  key={i}
                  className=" pb-3 text-lg duration-200 cursor-pointer text-gray-500 hover:text-[#ffa101]"
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
          <div className=" space-y-3">
            <p className=" text-lg font-semibold cursor-default pb-5">
              Oppning Hours
            </p>

            <p className=" text-lg  text-gray-500 cursor-default">
              Sat : 8AM - 5PM
            </p>
            <p className=" text-lg  text-gray-500 cursor-default">
              Sun - Thu : 12PM - 8PM
            </p>
            <p className=" text-lg  text-gray-500 cursor-default">
              Friday: <span className=" text-red-500">Closed</span>
            </p>
          </div>
        </div>
      </div>
      <div className="responsiveWeith md:flex justify-between items-center py-5">
        <p className=" text-center md:text-start cursor-default">
          © Copyrights 2024 All rights reserved. Powered by{" "}
          <span className=" text-[#ffa101]">xCommerz™</span>
        </p>
        <ul className=" flex items-center justify-center md:justify-end mt-3 md:mt-0 gap-5">
          <p className=" text-gray-500 cursor-pointer hover:text-[#ffa101]  ">
            Privacy Policy{" "}
          </p>
          <p className=" text-gray-500 cursor-pointer hover:text-[#ffa101] ">
            Terms of service
          </p>
        </ul>
      </div>
    </div>
  );
}
