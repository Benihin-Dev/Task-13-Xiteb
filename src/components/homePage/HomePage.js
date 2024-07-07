import React, { useRef, useState, useEffect } from "react";
import NavBar from "../navBar/NavBar";
import Hero from "../heroSection/Hero";
import Courses from "../courses/Courses";
import AboutUs from "../aboutUs/AboutUs";
import Programs from "../programs/Programs";
import MakeATour from "../makeATour/MakeATour";
import OurAchievements from "../ourAchievements/OurAchievements";
import Footer from "../footer/Footer";
import Testimonial from "../testimonial/Testimonial";

export default function HomePage() {
  const heroRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollDirection("no");
        } else if (scrollDirection === "no") {
          setScrollDirection("up");
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [heroRef, scrollDirection]);

  return (
    <div className=" w-full overflow-hidden">
      {scrollDirection === "up" ? (
        <div className="slideDown w-full z-40 bg-[#ffffffe1] fixed top-0 left-0 right-0">
          <NavBar />
        </div>
      ) : (
        ""
      )}
      <div ref={heroRef}>
        <Hero />
      </div>
      <Courses />
      <AboutUs />
      <Programs />
      <OurAchievements />
      <MakeATour />
      <Testimonial />
      <Footer />
    </div>
  );
}
