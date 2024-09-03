import React from "react";
import ProductTemplet from "../../../assets/js/ProductTemplet";

export default function Collection({ details }) {
  return (
    <div className=" w-full px-5 md:px-12 py-10 bg-white">
      <div className=" grid grid-cols-5  w-full ">
        <div className=" pr-5">
          {details.link.map((l, index) => (
            <p
              key={index}
              className=" text-[#66bc89] font-semibold cursor-pointer duration-200 hover:text-[#103178] text-base"
            >
              {l}
            </p>
          ))}
        </div>
        {details.productDetails.map((detail, index) => (
          <div key={index} className=" border">
            <ProductTemplet productDetails={detail} />
          </div>
        ))}
      </div>
    </div>
  );
}
