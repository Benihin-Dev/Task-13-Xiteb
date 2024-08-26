import React, { useState, useEffect, useRef } from "react";
import Header from "../1.Header/js/Header";
import Hero from "../2.Hero/js/Hero";
import FeaturedCategories from "../3.FeaturedCategories/js/FeaturedCategories";
import PopulerProduc from "../4.PopulerProduct.js/js/PopulerProduc";
import MiddleBanner from "../5.MiddleBanner/js/MiddleBanner";
import DailyBestSell from "../6.DailyBestSell/js/DailyBestSell";
import DealOfTheDay from "../7.DealOfTheDay/js/DealOfTheDay";
import FinalBanner from "../8.FinalBanner/js/FinalBanner";
import Features from "../9.Features/js/Features";
import Footer from "../10.Footer/js/Footer";
import SlideUpBtn from "../SlideUpBtn/js/SlideUpBtn";
import BottomSection from "../1.Header/js/BottomSection";

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
        threshold: 0,
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
    <div className="relative">
      <div ref={topSectionRef} name="top-section">
        <Header />
      </div>

      <Hero />
      <FeaturedCategories />
      <PopulerProduc />
      <MiddleBanner />
      <DailyBestSell />
      <DealOfTheDay />
      <FinalBanner />
      <Features />
      <Footer />
      {showSlideUpBtn && (
        <>
          <div className=" fixed top-0 left-0 right-0 z-40 slideDown">
            <BottomSection />
          </div>
          <SlideUpBtn />
        </>
      )}
    </div>
  );
}
