import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TopSectoin from "./TopSectoin";
import BottomSection from "./BottomSection";
import NavItemsForSmallScreen from "./NavItemsForSmallScreen";

export default function Header({
  searchBarState,
  setSearchBarState,
  navItemStateForSmSc,
  setnavItemStateForSmSc,
  navLinks,
  setnavLinks,
}) {
 
  return (
    <>
      <TopSectoin />
      <div className=" bg-white  lg:bg-[#111111]">
        <BottomSection
          navLinks={navLinks}
          setSearchBarState={setSearchBarState}
          searchBarState={searchBarState}
          navItemStateForSmSc={navItemStateForSmSc}
          setnavItemStateForSmSc={setnavItemStateForSmSc}
        />
      </div>
      {searchBarState && (
        <div className="slideFromLeft  ">
          <SearchBar setSearchBarState={setSearchBarState} />
        </div>
      )}
      {navItemStateForSmSc && (
        <NavItemsForSmallScreen
          navLinks={navLinks}
          setnavLinks={setnavLinks}
          setnavItemStateForSmSc={setnavItemStateForSmSc}
        />
      )}
    </>
  );
}
