import React, { useEffect, useRef, useState } from "react";
import Header from "../../1.Header/js/Header";
import Hero from "../../2.Hero/js/Hero";
import BgImg from "../../assets/js/BgImg";
import WeeklyOffer from "../../3.WeeklyOffer/js/WeeklyOffer";
import NearbyStores from "../../4.NearbyStores/js/NearbyStores";
import Delivery from "../../5.Delivery/js/Delivery";
import FastestDelivery from "../../6.FastestDelivery/js/FastestDelivery";
import FindRestaurant from "../../7.FindRestaurant/js/FindRestaurant";
import WeHateLate from "../../8.WeHateLate/js/WeHateLate";
import Brand from "../../9.Brand/js/Brand";
import Subscribe from "../../10.Subscribe/js/Subscribe";
import Footer from "../../11.Footer/js/Footer";
import TopSpacial from "../../2.TopSpacial/js/TopSpacial";
import SlideUpBtn from "../../assets/js/SlideUpBtn";

export default function HomePage() {
  const [showSlideUpBtn, setShowSlideUpBtn] = useState(false);
  const topSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSlideUpBtn(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (topSectionRef.current) {
      observer.observe(topSectionRef.current);
    }

    return () => {
      if (topSectionRef.current) {
        observer.unobserve(topSectionRef.current);
      }
    };
  }, []);
  return (
    <div>
      <div ref={topSectionRef} name="top-section">
        <Header showSlideUpBtn={showSlideUpBtn} />
      </div>
      <Hero />
      <BgImg />
      <WeeklyOffer />
      <TopSpacial />
      <NearbyStores />
      <Delivery />
      <FastestDelivery />
      <FindRestaurant />
      <WeHateLate />
      <Brand />
      <Subscribe />
      <Footer />
      {showSlideUpBtn && <SlideUpBtn />}
    </div>
  );
}
