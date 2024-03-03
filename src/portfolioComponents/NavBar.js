import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function NavBar() {
  const [showNavItem, setShowNavItem] = useState(false);
  const [activeSection, setActiveSection] = useState("about-section");
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-10 `}>
      <div className=" relative w-11/12 sm:w-9/12   justify-between items-end mx-auto mt-5 py-[6px] px-0  flex">
        <div className=" flex items-end sm:w-4/6 ">
          <div className=" text-gray-400 pr-5 lg:pr-20 text-xl sm:text-lg  w-1/5 lg:w-1/12 font-bold">
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={handleSetActive}
            >
              <p>
                <span className=" text-[#773ec2]">R</span>imsan
              </p>
            </Link>
          </div>

          <ul className=" hidden text-sm sm:flex justify-around w-4/5  pb-[3px]">
            <li
              className={` ${
                activeSection === "about-section"
                  ? "text-[#773ec2]"
                  : "text-gray-500"
              } hover:text-[#773ec2] font-medium`}
            >
              <Link
                to="about-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={handleSetActive}
              >
                About
              </Link>
            </li>
            <li
              className={` ${
                activeSection === "education-section"
                  ? "text-[#773ec2]"
                  : "text-gray-500"
              } hover:text-[#773ec2] font-medium`}
            >
              <Link
                to="education-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={handleSetActive}
              >
                Education
              </Link>
            </li>
            <li
              className={` ${
                activeSection === "certification-section"
                  ? "text-[#773ec2]"
                  : "text-gray-500"
              } hover:text-[#773ec2] font-medium`}
            >
              <Link
                to="certification-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={handleSetActive}
              >
                Certification
              </Link>
            </li>
            <li
              className={` ${
                activeSection === "skill-section"
                  ? "text-[#773ec2]"
                  : "text-gray-500"
              } hover:text-[#773ec2] font-medium`}
            >
              <Link
                to="skill-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={handleSetActive}
              >
                Skill
              </Link>
            </li>
            <li
              className={` ${
                activeSection === "project-section"
                  ? "text-[#773ec2]"
                  : "text-gray-500"
              } hover:text-[#773ec2] font-medium`}
            >
              <Link
                to="project-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={handleSetActive}
              >
                Project
              </Link>
            </li>
          </ul>
        </div>
        <div className=" sm:hidden w-full flex items-center justify-end">
          <FaBars
            onClick={() => {
              setShowNavItem(!showNavItem);
            }}
            className=" size-6 hover:text-[#773ec2] text-gray-500 cursor-pointer"
          />
        </div>
        <div className="hidden sm:block">
          <button className="  text-sm px-5 py-1 rounded text-white hover:bg-[#7c2ae8] bg-[#773ec2]">
            Let's Talk
          </button>
        </div>
        <ul
          className={` ${
            showNavItem === true ? "block" : "hidden"
          } py-1 absolute sm:hidden text-sm text-center bg-[#dfdfdfb4] rounded  top-12 mx-auto border w-full space-y-1  pb-[3px]`}
        >
          <li
            className={`${
              activeSection === "about-section"
                ? "text-[#773ec2]"
                : "text-gray-800"
            }  hover:text-[#773ec2]  font-medium`}
          >
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={handleSetActive}
            >
              About
            </Link>
          </li>
          <li
            className={`${
              activeSection === "education-section"
                ? "text-[#773ec2]"
                : "text-gray-800"
            }  hover:text-[#773ec2]  font-medium`}
          >
            <Link
              to="education-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={handleSetActive}
            >
              Education
            </Link>
          </li>
          <li
            className={`${
              activeSection === "certification-section"
                ? "text-[#773ec2]"
                : "text-gray-800"
            }  hover:text-[#773ec2]  font-medium`}
          >
            <Link
              to="certification-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={handleSetActive}
            >
              Certification
            </Link>
          </li>
          <li
            className={`${
              activeSection === "skill-section"
                ? "text-[#773ec2]"
                : "text-gray-800"
            }  hover:text-[#773ec2]  font-medium`}
          >
            <Link
              to="skill-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={handleSetActive}
            >
              Skill
            </Link>
          </li>
          <li
            className={`${
              activeSection === "project-section"
                ? "text-[#773ec2]"
                : "text-gray-800"
            }  hover:text-[#773ec2]  font-medium`}
          >
            <Link
              to="project-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={handleSetActive}
            >
              Project
            </Link>
            Project
          </li>
          <li className=" w-full pb-1 flex items-center justify-center">
            <button className=" sm:hidden block text-sm px-5 py-1 rounded text-white bg-[#7c2ae8] hover:bg-[#773ec2]">
              Let's Talk
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
