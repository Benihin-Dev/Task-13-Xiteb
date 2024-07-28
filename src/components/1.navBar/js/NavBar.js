import React, { useState } from "react";
import "../css/navBar.css";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import NavLinkForSmallScreen from "./NavLinkForSmallScreen";

export default function NavBar() {
  const [stateForNavLinkOnSmallScreen, setStateForNavLinkOnSmallScreen] =
    useState(false);
  return (
    <div className=" w-full relative">
      <TopSection />
      <BottomSection
        setStateForNavLinkOnSmallScreen={setStateForNavLinkOnSmallScreen}
      />
      {stateForNavLinkOnSmallScreen && (
        <div className=" z-40 absolute lg:hidden top-0 left-0 h-screen w-full flex  bg-[#e2e2e290] ">
          <div className=" slideFromLeft w-8/12 sm:w-3/5 md:w-1/4 pt-6 bg-[#262626]   h-full">
            <NavLinkForSmallScreen />
          </div>
          <div
            onClick={() => {
              setStateForNavLinkOnSmallScreen(!stateForNavLinkOnSmallScreen);
            }}
            className="  w-4/12 sm:w-2/5 md:w-3/4 h-full "
          ></div>
        </div>
      )}
    </div>
  );
}
