import React from "react";
import brandImg1 from "../img/fx_brand_1.png";
import brandImg2 from "../img/fx_brand_2.png";
import brandImg3 from "../img/fx_brand_3.png";
import brandImg4 from "../img/fx_brand_4.png";
import brandImg5 from "../img/fx_brand_5.png";
import SliderForBrand from "./SliderForBrand";
import { useInView } from "react-intersection-observer";

export default function Brand() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const data = [brandImg1, brandImg2, brandImg3, brandImg4, brandImg5];
  return (
    <div className=" w-full py-16  bg-[#f1fbff] ">
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } responsiveWeith `}
      >
        <SliderForBrand data={data} />
      </div>
    </div>
  );
}
