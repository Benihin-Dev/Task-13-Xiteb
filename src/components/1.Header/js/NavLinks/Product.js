import React from "react";
import brandImg1 from "../../img/brandImg/brand-1.jpg";
import brandImg2 from "../../img/brandImg/brand-2.jpg";
import brandImg3 from "../../img/brandImg/brand-3.jpg";
import brandImg4 from "../../img/brandImg/brand-4.jpg";
import brandImg5 from "../../img/brandImg/brand-5.jpg";
import brandImg6 from "../../img/brandImg/brand-6.jpg";
import brandImg7 from "../../img/brandImg/brand-7.jpg";
import brandImg8 from "../../img/brandImg/brand-8.jpg";
import brandImg9 from "../../img/brandImg/brand-9.jpg";
import brandImg10 from "../../img/brandImg/brand-10.jpg";

export default function Product({ details }) {
  const brandImgs = [
    brandImg1,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6,
    brandImg7,
    brandImg8,
    brandImg9,
    brandImg10,
  ];
  return (
    <div className=" w-full px-5 md:px-10 pb-10 bg-white">
      <div className=" w-full grid grid-cols-6 gap-5 pt-10">
        {details.map((item, index) => (
          <div key={index} className=" ">
            <p className=" font-semibold cursor-default text-[#66bc89] pb-2">
              {item.title}
            </p>
            {item.links.map((link, i) => (
              <p
                key={i}
                className="text-sm cursor-pointer pt-[3px] pb-[3px] hover:pt-[5px] hover:pb-[1px] hover:text-[#103178] duration-200 text-[#66bc89]"
              >
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className=" w-full grid grid-cols-5 mt-16 ">
        {brandImgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className=" w-full object-contain border p-5 border-gray-100"
          />
        ))}
      </div>
    </div>
  );
}
