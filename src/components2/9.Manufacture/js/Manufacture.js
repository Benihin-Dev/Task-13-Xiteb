import React from "react";
import brandImg1 from "../img/brand/1.png";
import brandImg2 from "../img/brand/2.png";
import brandImg3 from "../img/brand/3.png";
import brandImg4 from "../img/brand/4.png";
import brandImg5 from "../img/brand/5.png";
import brandImg6 from "../img/brand/6.png";
import brandImg7 from "../img/brand/7.png";
import brandImg8 from "../img/brand/8.png";
import brandImg9 from "../img/brand/9.png";
import SliderForBrand from "../../productSlider/js/SliderForBrand";

export default function Manufacture() {
  const brands = [
    brandImg1,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6,
    brandImg7,
    brandImg8,
    brandImg9,
  ];
  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith border rounded-md overflow-hidden">
        <SliderForBrand data={brands} />
      </div>
    </div>
  );
}
