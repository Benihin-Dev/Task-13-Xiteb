import React from "react";
import { RxCross2 } from "react-icons/rx";
import logoImg from "../img/logo_t.svg";

export default function NavItemsForSmallScreen({
  setnavItemStateForSmSc,
  navLinks,
  setnavLinks,
}) {
  return (
    <div className="slideFromRight fixed top-0 left-0 z-30 w-screen  lg:hidden h-screen bg-[#ffffff00]">
      <div className=" ml-12 h-full bg-white">
        <div className=" px-5 pt-5 flex items-start justify-between">
          <img src={logoImg} className=" w-20" alt="" />
          <RxCross2
            onClick={() => {
              setnavItemStateForSmSc(false);
            }}
            className=" size-6 text-gray-600 hover:text-red-500 duration-300"
          />
        </div>
        <div className="  px-5 ">
          {navLinks.map((nlink, index) => (
            <div className=" duration-500 ">
              <div className="border-b cursor-pointer hover:text-[#aa0e28] duration-300   flex items-center justify-between">
                <p className=" py-3 " key={index}>
                  {nlink.link}
                </p>
                {nlink.subLink && (
                  <p
                    onClick={() => {
                      setnavLinks(
                        navLinks.map((nlink, i) =>
                          i === index
                            ? {
                                ...nlink,
                                stateOfSubLink: !nlink.stateOfSubLink,
                              }
                            : nlink
                        )
                      );
                    }}
                    className=" text-xl p-4 leading-4 bg-gray-100"
                  >
                    {nlink.stateOfSubLink === false ? "+" : "-"}
                  </p>
                )}
              </div>
              {nlink.subLink && (
                <>
                  {nlink.stateOfSubLink && (
                    <div className="slideDown1">
                      {nlink.subLink.map((link, i) => (
                        <p
                          key={i}
                          className=" cursor-pointer hover:bg-gray-50 hover:text-red-500 ml-8 border-b py-3 "
                        >
                          {link}
                        </p>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
