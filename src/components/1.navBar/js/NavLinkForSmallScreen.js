import React, { useState } from "react";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi2";

export default function NavLinkForSmallScreen() {
  const [subLinksForNavItems, setSubLinksForNavItems] = useState([
    {
      state: false,
      head: "HOME",
      links: ["Home-v1", "Home-v2", "Home-v3"],
    },
    {
      state: false,
      head: "PAGE",
      links: [
        "Shop Page1",
        "Shop Page2",
        "Shop Page3",
        "Product Page1",
        "Product Page2",
      ],
    },
    {
      head: "BLOG",
      state: false,
      links: ["Shop", "Page", "Blog", "Shop Pages"],
    },
  ]);

  return (
    <ul className="  w-full  text-sm  text-white ">
      <li className="    mx-4  bg-white flex items-center justify-center px-3 mb-5 border-red border-b ">
        <input
          type="text"
          placeholder="Search Here..."
          name=""
          className="  text-black w-full outline-none py-3"
          id=""
        />
        <div className=" w-7 flex items-center justify-center">
          <PiMagnifyingGlassThin className="  text-black size-6   hover:scale-125 duration-200" />
        </div>
      </li>

      {subLinksForNavItems.map((item, index) => (
        <li
          className={` ${
            item.state === true ? "pt-3" : "py-3"
          } px-4 navLink border-b border-gray-200`}
        >
          <div className="  flex justify-between items-center">
            <p>{item.head}</p>
            <p
              onClick={() => {
                setSubLinksForNavItems((prevState) => {
                  return prevState.map((item, i) =>
                    i === index ? { ...item, state: !item.state } : item
                  );
                });
              }}
              className=" text-2xl text-gray-300"
            >
              {item.state === false ? (
                <HiPlus className=" size-5" />
              ) : (
                <HiMinus className=" size-5" />
              )}
            </p>
          </div>
          {item.state && (
            <div className=" mt-4  ">
              {item.links.map((link, i) => (
                <p className=" w-full py-2 pl-3 text-gray-200 hover:text-[#00b9f5] duration-200 border-t border-b border-gray-300">
                  {link}
                </p>
              ))}
            </div>
          )}
        </li>
      ))}
      
      <li className=" px-4 navLink border-b border-gray-200 py-3 flex justify-between items-center">
        SHOP
      </li>
      <li className=" px-4 navLink border-b border-gray-200 py-3 flex justify-between items-center">
        CONTACT
      </li>
      <li className=" px-4 navLink border-b border-gray-200 py-3 flex justify-between items-center">
        MY ACCOUNT
      </li>
    </ul>
  );
}
