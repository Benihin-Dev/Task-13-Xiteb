import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TopSectoin from "./TopSectoin";
import BottomSection from "./BottomSection";

export default function Header({ searchBarState, setSearchBarState }) {

  return (
    <>
      <TopSectoin />
      <div className=" bg-white  lg:bg-[#111111]">
        <BottomSection
          setSearchBarState={setSearchBarState}
          searchBarState={searchBarState}
        />
      </div>
      {searchBarState && (
        <div className="slideFromLeft  ">
          <SearchBar setSearchBarState={setSearchBarState} />
        </div>
      )}
    </>
  );
}
