import React, { useState, useRef, useEffect } from "react";
import Header from "../1.Header/js/Header";
import Hero from "../2.Hero/js/Hero";
import Menu from "../3.topMenu/js/Menu";
import PopularCategory from "../4.popularCategory/js/PopularCategory";
import Links from "../5.Links/js/Links";
import LatestProducts from "../6.LatestProducts/js/LatestProducts";
import SecureDelivery from "../7.SecureDelivery/js/SecureDelivery";
import BestDeal from "../8.BestDeal/js/BestDeal";
import TopSeller from "../9.TopSeller/js/TopSeller";
import MiddleBanner from "../10.MiddleBanner/js/MiddleBanner";
import FeatureProduct from "../11.FeatureProduct/js/FeatureProduct";
import Testimonial from "../12.Testimonial/js/Testimonial";
import Footer from "../13.Footer/js/Footer";
import SlideUpBtn from "../assets/js/SlideUpBtn";
import MiddleSection from "../1.Header/js/MiddleSection";
import MiddleSectionForSmallScreen from "../1.Header/js/MiddleSectionForSmallScreen";
import FooterNavSectionForSmallScreen from "../1.Header/js/FooterNavSectionForSmallScreen";

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
    <div className="">
      <div ref={topSectionRef} name="top-section">
        <Header />
        <Hero />
      </div>
      <Menu />
      <PopularCategory />
      <Links />
      <LatestProducts />
      <SecureDelivery />
      <BestDeal />
      <TopSeller />
      <MiddleBanner />
      <FeatureProduct />
      <Testimonial />
      <Footer />
      {showSlideUpBtn && <SlideUpBtn />}
      <div
        className={` ${
          showSlideUpBtn ? "slide-down2" : "slide-up2"
        } fixed top-0 left-0 w-full middleComponent hidden sm:block bg-white z-40 `}
      >
        <MiddleSection />
      </div>
      <div
        className={` ${
          showSlideUpBtn ? "slide-down2" : "slide-up2"
        } fixed top-0 left-0 w-full middleComponent sm:hidden block bg-white z-40 `}
      >
        <MiddleSectionForSmallScreen />
      </div>
      <FooterNavSectionForSmallScreen />
    </div>
  );
}
