import React, { useState } from "react";
import { BsGpuCard } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoMdCard } from "react-icons/io";

const AboutContent = () => {
  return (
    <>
      <div>
        <div className=" grid grid-cols-4">
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">About the Hotel</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Overview</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Expoler Colombo</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Services & Facilities</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li className="">Map & Directions</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
const RoomsSuitesContent = () => {
  return (
    <>
      <div>
        <div className=" grid grid-cols-4">
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">Rooms</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Deluxe Lake View</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Deluxe Ocean View</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Premier Balcony</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li className="">Premier Ocean View</li>
              </a>
            </ul>
          </div>
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">Horizone Club</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Ocean View Club</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Ocean View Club</li>
              </a>
            </ul>
          </div>
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">Suites</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Lorem, ipsum dolor.</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Lorem, dolor.</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Lorem, ipsum doygflor.</li>
              </a>
            </ul>
          </div>
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">Connecting Rooms</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Lorem, ipsum dolor lorem </li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Lorem, ipsum dolor Lorem, ipsum dolor..</li>
              </a>
            </ul>
          </div>
        </div>
        <div className=" border-t text-sm mt-5 pt-3">
          <a
            href="https://nothing.com"
            className=" text-gray-600 hover:text-[#aa974f]"
          >
            {" "}
            Rooms and Suites Overview
          </a>
        </div>
      </div>
    </>
  );
};
const DiningContent = () => {
  return (
    <>
      <div>
        <div className=" grid grid-cols-4">
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">Restaurent</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Cake Temptaion</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Capital Bar</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Tiki Bar</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Centerl</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li className="">Centerl Cafe</li>
              </a>
            </ul>
          </div>
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">Bars and Lodges</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Overview</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Pool Bar</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Beer Bar</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li className="">Bar and Chill</li>
              </a>
            </ul>
          </div>
        </div>
        <div className=" border-t text-sm mt-5 pt-3">
          <a
            href="https://nothing.com"
            className=" text-gray-600 hover:text-[#aa974f]"
          >
            {" "}
            Dining Overview
          </a>
        </div>
      </div>
    </>
  );
};
const ExperienceContent = () => {
  return (
    <>
      <div>
        <div className=" grid grid-cols-4">
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">For Kids</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Overview</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Advanture Zone</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Celebrations</li>
              </a>
            </ul>
          </div>
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">Health and Liesure</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Overview</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Health Club</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Chi, The SPA</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
const EventsContent = () => {
  return (
    <>
      <div>
        <div className=" grid grid-cols-4">
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">Meeting & Events</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Overview</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Experinece It</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Services Facilities</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li className="">Co-Working Options</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li className="">Request for Proposal</li>
              </a>
            </ul>
          </div>
          <div className=" text-sm">
            <h1 className="   font-medium pb-2">Wedding and Celebations</h1>
            <ul className="text-gray-600">
              <a
                href="https:nothing.com"
                className=" w-1 hover:text-[#aa974f] "
              >
                <li>Overview</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Wedding Plan</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li>Services & Facilities</li>
              </a>
              <a href="https:nothing.com" className=" hover:text-[#aa974f] ">
                <li className="">Request for Proposal</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
const MoreContent = () => {
  return (
    <>
      <div className=" text-sm">
        <h1 className="   font-medium pb-2">Apartment</h1>
        <ul className="text-gray-600">
          <a href="https:nothing.com" className=" w-1 hover:text-[#aa974f] ">
            <li>Learn More</li>
          </a>
        </ul>
      </div>
    </>
  );
};

// Main
export default function Header() {
  const [navContent, setNavContent] = useState(null);
  const [navStateForSmallScreen, setNavStateForSmallScreen] = useState(false);

  // Upper Nav items
  const UpperNavItems = () => {
    return (
      <ul className=" sm:flex space-y-3 sm:space-y-0 sm:leading-[8px] justify-center items-center gap-[10px]  text-sm font-medium">
        <li className=" sm:justify-center items-center flex gap-1 cursor-pointer">
          <FaRegUser className="hidden sm:flex text-gray-700" /> Sign In
        </li>
        <li className=" text-xs text-gray-500 hidden sm:flex">|</li>
        <li className=" sm:justify-center items-center flex gap-1 cursor-pointer">
          Join Now
        </li>
        <li className=" text-xs text-gray-500 hidden sm:flex">|</li>

        <li className=" sm:justify-center items-center flex gap-1 cursor-pointer">
          Find Reservations
        </li>
        <li className=" text-xs text-gray-500 hidden sm:flex">|</li>

        <li className=" sm:justify-center  justify-between items-center flex gap-1 cursor-pointer">
          <p className=" sm:hidden">Language</p>
          <AiOutlineGlobal className=" hidden sm:flex text-gray-700" /> English
        </li>
        <li className=" text-xs text-gray-500 hidden sm:flex">|</li>

        <li className=" sm:justify-center justify-between items-center flex gap-1 cursor-pointer">
          <p className=" sm:hidden">Currency</p>
          INR
        </li>
        <li className=" text-xs text-gray-500 hidden sm:flex">|</li>

        <li className="hidden sm:flex justify-center items-center gap-1 cursor-pointer">
          <MdOutlinePhoneAndroid />
        </li>
      </ul>
    );
  };

  // Nav Items
  const NavItems = () => {
    return (
      <ul className=" text-sm sm:text-[12px] lg:text-[13px] sm:font-[600] sm:flex space-y-3 sm:space-y-0">
        <li
          onMouseEnter={() => {
            setNavContent("about");
          }}
          onMouseLeave={() => {
            setNavContent(null);
          }}
          className={`${
            navContent === "about" ? "text-[#333333] bg-white" : ""
          } relative NavItemParent flex sm:justify-center items-center gap-1 cursor-pointer hover:text-[#333333] hover:bg-white px-1 md:px-2  lg:px-3 `}
        >
          <p>ABOUT</p>
          <FaChevronDown className="NavItemChild " />
        </li>
        <li
          onMouseEnter={() => {
            setNavContent("rooms&suites");
          }}
          onMouseLeave={() => {
            setNavContent(null);
          }}
          className={`${
            navContent === "rooms&suites" ? "text-[#333333] bg-white" : ""
          } NavItemParent flex sm:justify-center items-center gap-1 cursor-pointer hover:text-[#333333] hover:bg-white   px-1 md:px-2  lg:px-3 `}
        >
          <p>ROOMES & SUITES</p>
          <FaChevronDown className="NavItemChild " />
        </li>
        <li
          onMouseEnter={() => {
            setNavContent("dining");
          }}
          onMouseLeave={() => {
            setNavContent(null);
          }}
          className={`${
            navContent === "dining" ? "text-[#333333] bg-white" : ""
          } NavItemParent flex sm:justify-center items-center gap-1 cursor-pointer hover:text-[#333333] hover:bg-white   px-1 md:px-2  lg:px-3 `}
        >
          <p>DINING</p>
          <FaChevronDown className="NavItemChild " />
        </li>
        <li
          onMouseEnter={() => {
            setNavContent("experience");
          }}
          onMouseLeave={() => {
            setNavContent(null);
          }}
          className={`${
            navContent === "experience" ? "text-[#333333] bg-white" : ""
          } NavItemParent flex sm:justify-center items-center gap-1 cursor-pointer hover:text-[#333333] hover:bg-white   px-1 md:px-2  lg:px-3 `}
        >
          <p>EXPERIENCE</p>
          <FaChevronDown className="NavItemChild " />
        </li>
        <li
          onMouseEnter={() => {
            setNavContent("events");
          }}
          onMouseLeave={() => {
            setNavContent(null);
          }}
          className={`${
            navContent === "events" ? "text-[#333333] bg-white" : ""
          } NavItemParent flex sm:justify-center items-center gap-1 cursor-pointer hover:text-[#333333] hover:bg-white   px-1 md:px-2  lg:px-3 `}
        >
          <p>EVENTES</p>
          <FaChevronDown className="NavItemChild " />
        </li>
        <li className=" NavItemParent flex sm:justify-center items-center gap-1 cursor-pointer     px-1 md:px-2  lg:px-3 ">
          <p>GALLERY</p>
        </li>
        <li className=" NavItemParent flex sm:justify-center items-center gap-1 cursor-pointer     px-1 md:px-2  lg:px-3 ">
          <p>OFFERS</p>
        </li>
        <li
          onMouseEnter={() => {
            setNavContent("more");
          }}
          onMouseLeave={() => {
            setNavContent(null);
          }}
          className={`${
            navContent === "more" ? "text-[#333333] bg-white" : ""
          } NavItemParent flex sm:justify-center items-center gap-1 cursor-pointer hover:text-[#333333] hover:bg-white   px-1 md:px-2  lg:px-3 `}
        >
          <p>MORE</p>
          <FaChevronDown className="NavItemChild " />
        </li>
      </ul>
    );
  };

  // NavMenu for Small Screens
  const SmallScreenNavItems = () => {
    return (
      <>
        <div className=" w-full px-5 border-b-2 border-[#91814454]">
          <p className=" font-bold pt-1">Main Menu</p>
          <NavItems />
          <div className=" w-full border-b border-[#91814454] py-2 mb-3"></div>
          <UpperNavItems />
          <div className=" w-full border-b py-2"></div>
        </div>
      </>
    );
  };
  return (
    <div className=" relative w-full justify-between">
      <div className="lg:px-16 w-full md:px-5 sm:px-5 px-5  flex justify-between py-3 bg-[#f4f5f6]">
        <div className=" flex">
          <BsGpuCard className=" text-[#aa974f] size-5" />
          <h1 className=" pl-2 font-medium text-gray-700 text-lg sm:text-base">
            SHANGRI-LA
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-3 sm:hidden text-[#aa974f]  ">
          <FaRegUser className=" cursor-pointer hover:text-gray-600" />
          <IoMdCard className=" cursor-pointer hover:text-gray-600 size-5" />
          <FaBars
            onClick={() => {
              setNavStateForSmallScreen(!navStateForSmallScreen);
            }}
            className="hover:text-gray-600 size-5 cursor-pointer"
          />
        </div>
        <div className=" hidden sm:flex">
          <UpperNavItems />
        </div>
      </div>
      <div className="lg:px-16 md:px-3 sm:px-5 text-white hidden sm:flex justify-between bg-[#333333] z-10">
        <NavItems />
        <button className=" py-1 px-2 border text-[13px] my-1">
          FIND A HOTEL
        </button>
      </div>

      <div className=" bg-white absolute top-[100%] z-20 sm:hidden w-full">
        {navStateForSmallScreen && <SmallScreenNavItems />}
      </div>

      {/* Nav Contant Show  */}
      <div
        onMouseEnter={() => {
          setNavContent(navContent);
        }}
        onMouseLeave={() => {
          setNavContent(null);
        }}
        className={` ${
          navContent === null ? "hidden " : " sm:block hidden pt-12 pb-3"
        } absolute top-[84px] left-0  w-screen z-[5] md:px-10 lg:px-16 sm:shadow-sm shadow-none bg-white`}
      >
        {navContent === "about" ? (
          <AboutContent />
        ) : navContent === "rooms&suites" ? (
          <RoomsSuitesContent />
        ) : navContent === "dining" ? (
          <DiningContent />
        ) : navContent === "experience" ? (
          <ExperienceContent />
        ) : navContent === "events" ? (
          <EventsContent />
        ) : navContent === "more" ? (
          <MoreContent />
        ) : null}
      </div>
    </div>
  );
}
