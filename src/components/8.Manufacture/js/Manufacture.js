import React from "react";
import SliderForBrand from "../../Sliders/SliderForBrand";
import brandImg1 from "../img/brands/img1.png";
import brandImg2 from "../img/brands/img2.png";
import brandImg3 from "../img/brands/img3.png";
import brandImg4 from "../img/brands/img4.png";
import brandImg5 from "../img/brands/img5.png";
import brandImg6 from "../img/brands/img6.png";

export default function Manufacture() {
  const brands = [
    brandImg1,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6,
  ];
  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith   overflow-hidden">
        <SliderForBrand data={brands} />
      </div>
    </div>
  );
}
