import React from "react";
import footerImg1 from "../img/img1.jpg";
import footerImg2 from "../img/img2.jpg";
import footerImg3 from "../img/img3.jpg";
import footerImg4 from "../img/img4.jpg";
import footerImg5 from "../img/img5.jpg";
import footerImg6 from "../img/img6.jpg";
import footerImg7 from "../img/img7.jpg";
import footerImg8 from "../img/img8.jpg";
import footerImg9 from "../img/img9.jpg";

export default function BottomSection() {
  const footerImgs = [
    footerImg1,
    footerImg2,
    footerImg3,
    footerImg4,
    footerImg5,
    footerImg6,
    footerImg7,
    footerImg8,
    footerImg9,
  ];
  return (
    <div className=" w-full py-2 bg-[#eaeaea]">
      <div className=" responsiveWeith  md:flex items-center justify-between gap-10">
        <p className=" text-[10px] w-full text-center md:text-start md:w-1/2">
          Copyrights 2024 All rights reserved. Powered by{" "}
          <span className=" text-[#e6154b]"> xCommerz</span>
        </p>
        <div className=" w-full mt-3 md:mt-0 md:w-1/2 flex items-center justify-center md:justify-end gap-1">
          {footerImgs.map((img, index) => (
            <img
              key={index}
              src={img}
              className=" h-5  object-contain"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}
