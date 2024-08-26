import React, { useState, useEffect, useRef } from "react";
import Header from "../1.Header/js/Header";
import Hero from "../2.Hero/js/Hero";
import VideoBg from "../2.Hero/js/VideoBg";
import Featured from "../3.Featured/js/Featured";
import AboutUs from "../4.AboutUs/js/AboutUs";
import OurDeliciousFood from "../5.OurDeliciousFood/js/OurDeliciousFood";
import VideoBtn from "../6.VideoBtn/js/VideoBtn";
import OnlineOrder from "../7.OnlineOrder/js/OnlineOrder";
import Achivements from "../8.Achivements/js/Achivements";
import BestDessterts from "../9.BestDesserts/js/BestDessterts";
import Satisfy from "../10.Satisfy/js/Satisfy";
import Testimonial from "../11.Testimonial/js/Testimonial";
import Brand from "../12.Brand/js/Brand";
import Footer from "../13.Footer/js/Footer";
import SlideUpBtn from "../assets/js/SlideUpBtn";
import BottomSection from "../1.Header/js/BottomSection";

export default function HomePage() {
  const [showSlideUpBtn, setShowSlideUpBtn] = useState(false);
  const [hideBottomSection, setHideBottomSection] = useState(false);
  const topSectionRef = useRef(null);
  const [searchBarState, setSearchBarState] = useState(false);
  const lastScrollY = useRef(0);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setHideBottomSection(true); // Hide when scrolling down
      } else {
        setHideBottomSection(false); // Show when scrolling up
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className=" w-full  relative overflow-hidden">
        <Header
          setSearchBarState={setSearchBarState}
          searchBarState={searchBarState}
        />
        <div ref={topSectionRef} name="top-section">
          <Hero />
          <VideoBg />
        </div>
      </div>

      {!hideBottomSection && showSlideUpBtn && (
        <div className=" slideDown bg-[#ffffffd5]  lg:bg-[#101010c7]  z-20 fixed top-0  left-0 right-0">
          <BottomSection
            setSearchBarState={setSearchBarState}
            searchBarState={searchBarState}
          />
        </div>
      )}

      <div className="">
        <Featured />
        <AboutUs />
        <OurDeliciousFood />
        <VideoBtn />
        <OnlineOrder />
        <Achivements />
        <BestDessterts />
        <Satisfy />
        <Testimonial />
        <Brand />
        <Footer />
        {showSlideUpBtn && <SlideUpBtn />}
      </div>
    </div>
  );
}
