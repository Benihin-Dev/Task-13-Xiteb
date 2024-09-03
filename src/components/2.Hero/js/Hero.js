import React from "react";
import Banner1 from "./banners/Banner1";
import Banner2 from "./banners/Banner2";
import Banner3 from "./banners/Banner3";
import SliderForHero from "./SliderForHero";

export default function Hero() {
  const banners = [<Banner1 />, <Banner2 />, <Banner3 />];
  return (
    <>
      <SliderForHero data={banners} />
    </>
  );
}
