import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function NavLinkItems() {
  const [navData, setNavData] = useState([
    {
      head: "Courses",
      SubItems: [
        "Undergraduate",
        "Graduate",
        "Online Courses",
        "Short Courses",
        "Free Courses",
      ],
      SubItemState: false,
    },
    {
      head: "Admissions",
      SubItems: [
        "How to Apply",
        "Admission Requirements",
        "Deadlines",
        "Scholarships/Financial Aid",
      ],
      SubItemState: false,
    },
    {
      head: "Resources",
      SubItems: [
        "Library",
        "Counseling Services",
        "Career Services",
        "Academic Advising",
      ],
      SubItemState: false,
    },
    {
      head: "Contact",
      SubItems: ["Location", "Email Addresses", "Phone Numbers", "Fax"],
      SubItemState: false,
    },
  ]);

  const changeListState = (index) => {
    setNavData((prevNavData) => {
      const newNavData = [...prevNavData];
      newNavData[index].SubItemState = !newNavData[index].SubItemState;
      return newNavData;
    });
  };
  return (
    <ul className=" text-sm sm:flex items-center justify-start mt-1 gap-3  ">
      <li className="cursor-pointer flex sm:block  sm:text-[#8e8e8f] sm:hover:text-green-500 duration-200  justify-center py-3 sm:py-0 border-b sm:border-none ">
        Home{" "}
      </li>
      {navData.map((item, index) => (
        <li
          onClick={() => {
            changeListState(index);
          }}
          key={index}
          className="py-3 sm:py-1 px-5 sm:text-[#8e8e8f] sm:hover:text-green-500  flex items-center justify-center gap-3 sm:gap-1 cursor-pointer hover:bg-[#756ab6]
          sm:hover:bg-transparent    relative border-b sm:border-none"
        >
          <p className=" ">{item.head}</p>

          {item.SubItems.length === 0 ? (
            ""
          ) : (
            <>
              {" "}
              <div>
                <MdOutlineKeyboardArrowDown
                  className={` ${item.SubItemState && "rotate-180"}`}
                />
              </div>
              {item.SubItemState && (
                <div className="absolute slideDown top-[100%] w-full sm:w-fit text-black  py-3 z-20 text-xs   bg-[#ffffffe6]">
                  {item.SubItems.map((linkItem, i) => (
                    <p
                      key={i}
                      className="text-xs py-2 w-full hover:bg-[#756ab658]   px-4"
                    >
                      {linkItem}
                    </p>
                  ))}
                </div>
              )}
            </>
          )}
        </li>
      ))}
      <li className=" rounded-full sm:text-[#8e8e8f] sm:hover:text-white  hover:bg-[#756ab6ea] duration-200   cursor-pointer flex sm:block    justify-center py-3 sm:py-1 px-7    ">
        Login{" "}
      </li>
    </ul>
  );
}
