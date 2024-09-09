import React from "react";
import SliderForBrand from "./SliderForBrand";

export default function Brand() {
  const brandImgs = [
    "https://themes.xcommerz.com/pizza-shop/assets/images/2.png",
    "https://themes.xcommerz.com/pizza-shop/assets/images/2.png",
    "https://themes.xcommerz.com/pizza-shop/assets/images/2.png",
    "https://themes.xcommerz.com/pizza-shop/assets/images/2.png",
    "https://themes.xcommerz.com/pizza-shop/assets/images/2.png",
    "https://themes.xcommerz.com/pizza-shop/assets/images/2.png",
    "https://themes.xcommerz.com/pizza-shop/assets/images/2.png",
  ];
  return (
    <div className=" w-full py-10 relative bg-[#fdfbf9]">
      <div className="responsiveWeith">
        <SliderForBrand data={brandImgs} />
      </div>
    </div>
  );
}
