import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import Hero from "../hero/Hero";
import About from "../about/About";
import Banner from "../offerBanner/Banner";
import ProductSlider from "../productSlider/ProductSlider";
import Organic from "../organic/Organic";
import Footer from "../footer/Footer";
import Menu1 from "../menu/MenuTemplet1";
import Menu2 from "../menu/MenuTemplet2";
import Menu from "../menu/Menu";

export default function HomePage() {
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

  return (
    <div>
      {scrollDirection === "up" ? (
        <div className="slideDown w-full z-40   fixed top-0 left-0 right-0">
          <NavBar />
        </div>
      ) : (
        ""
      )}
      <Hero />
      <About />
      <Menu />
      <Banner />
      <Organic />
      <ProductSlider />
      <Footer />
    </div>
  );
}
