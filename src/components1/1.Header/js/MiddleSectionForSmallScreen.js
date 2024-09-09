import React, { useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import logoImg from "../img/logo.png";
import SearchBox from "./SearchBox";

export default function MiddleSectionForSmallScreen() {
  const [searchBoxState, setSearchBoxState] = useState(false);
  return (
    <>
      <div
        className=" px-5 py-5 bg-white w-full flex item-center
   justify-between "
      >
        <img src={logoImg} className=" w-32" alt="" />
        <PiMagnifyingGlassLight
          onClick={() => {
            setSearchBoxState(!searchBoxState);
          }}
          className=" size-8 hover:text-[#103178] duration-300  text-[#66bc89] cursor-pointer"
        />
      </div>
      {searchBoxState && <SearchBox setSearchBoxState={setSearchBoxState} />}
    </>
  );
}
