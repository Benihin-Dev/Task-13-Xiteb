import React from "react";
import lineDeviderImg from "../img/curveDevider.png";
import SliderForWeeklyOffer from "./SliderForWeeklyOffer";
import { useInView } from "react-intersection-observer";

export default function WeeklyOffer() {
  const pizzaDetails = [
    {
      name: "Chiken Pizza",
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/5e79989b1b4a9bb44a859ab85ea943ad8e157ff4/320b2/assets/images/product/4.png",
      price: 9.99,
      qty: 1,
    },
    {
      name: "Mushroom Pizza",
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/9f9eaa7b9848f047074ec78c5a7227563a568813/b46ce/assets/images/product/5.png",
      price: 12.55,
      qty: 1,
    },
    {
      name: "Olive Pizza",
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/aa4961f23abfafbcc1cfa508ecd1e6bdc3d84dd8/e9ccc/assets/images/product/6.png",
      price: 11.75,
      qty: 1,
    },
    {
      name: "Sauce Pizza",
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/ebf934cda04538873748e74e2765f4b830aa7370/57252/assets/images/product/7.png",
      price: 18.69,
      qty: 1,
    },
    {
      name: "Mushroom Pizza",
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/760a15fa9d463f69ab4cc137fc1d5c1ed4b6f9fa/b57a0/assets/images/product/1.png",
      price: 12.99,
      qty: 1,
    },
    {
      name: "Olive Pizza",
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/d081fe27b3780910e989778070416018673c090d/b924b/assets/images/product/2.png",
      price: 11.58,
      qty: 1,
    },
    {
      name: "Sauce Pizza",
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/096906bd881f7e005b35ebc4d7b70531bdf61589/c1e7e/assets/images/product/3.png",
      price: 18.25,
      qty: 1,
    },
  ];
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className=" w-full py-16  bg-[#fdfbf9]">
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } responsiveWeith `}
      >
        <div>
          <p className=" text-center text-4xl md:text-6xl font-medium">
            Weekly Pizza Offer
          </p>
          <div className=" flex items-center justify-center">
            <img src={lineDeviderImg} alt="" className=" w-52 object-contain" />
          </div>

          <div className=" w-full mt-8">
            <SliderForWeeklyOffer data={pizzaDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
