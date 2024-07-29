import React, { useEffect, useState } from "react";
import NavBar from "../../1.navBar/js/NavBar";
import Hero from "../../2.hero/js/Hero";
import Features from "../../3.features.js/Features";
import Menu from "../../4.menu/js/Menu";
import NewArrivals from "../../5.newArrivals/js/NewArrivals";
import FeaturedCollections from "../../6.featuredCollections/js/FeaturedCollections";
import CollectionMenu from "../../7.collectionMenu/js/CollectionMenu";
import TrendingProducts from "../../8.trendingProducts/js/TrendingProducts";
import BestSellingItems from "../../10.bestSellingItems/js/BestSellingItems";
import Newsletter from "../../11.newsletter/js/Newsletter";
import Lookbook from "../../9.lookbook/js/Lookbook";
import Testimonial from "../../12.testimonial/js/Testimonial";
import OurBrands from "../../13.ourBrands/js/OurBrands";
import LatestNews from "../../14.latestNews/js/LatestNews";
import Footer from "../../15.footer/js/Footer";

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
    <div className=" ">
      {scrollDirection === "up" ? (
        <div className="slideDown w-full z-40 fixed top-0 left-0 right-0">
        {/* // <div className="slideDown w-full z-40  "> */}
          <NavBar />
        </div>
      ) : (
        ""
      )}
      <NavBar />
      <Hero />
      <Features />
      <Menu />
      <NewArrivals />
      <FeaturedCollections />
      <CollectionMenu />
      <TrendingProducts />
      <Lookbook />
      <BestSellingItems />
      <Newsletter />
      <Testimonial />
      <OurBrands />
      <LatestNews />
      <Footer />
    </div>
  );
}
