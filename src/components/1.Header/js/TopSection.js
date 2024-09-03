import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function TopSection() {
  const [state, setState] = useState(true);

  return (
    <div
      className={` ${
        !state && "hidden"
      } w-full bg-[#66bc89] text-[#103178] py-2 px-8 relative `}
    >
      <p
        className=" w-full text-sm  
   text-center"
      >
        Due to the <span className=" font-bold text-sm">COVID 19</span>{" "}
        epidemic, orders may be processed with a slight delay
      </p>
      <RxCross2
        onClick={() => {
          setState(false);
        }}
        className=" absolute top-3 right-1 sm:right-3 size-5 cursor-pointer hover:text-red-500"
      />
    </div>
  );
}
