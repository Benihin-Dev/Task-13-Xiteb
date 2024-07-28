import React, { useEffect, useState } from "react";
import NavBar from "../../components/1.navBar/js/NavBar";
import Hero from "../../components/2.hero/js/Hero";
import Features from "../../components/3.features.js/Features";
import Menu from "../../components/4.menu/js/Menu";
import NewArrivals from "../../components/5.newArrivals/js/NewArrivals";
import FeaturedCollections from "../../components/6.featuredCollections/js/FeaturedCollections";
import CollectionMenu from "../../components/7.collectionMenu/js/CollectionMenu";
import TrendingProducts from "../../components/8.trendingProducts/js/TrendingProducts";
import BestSellingItems from "../../components/10.bestSellingItems/js/BestSellingItems";
import Newsletter from "../../components/11.newsletter/js/Newsletter";
import Lookbook from "../../components/9.lookbook/js/Lookbook";
import Testimonial from "../../components/12.testimonial/js/Testimonial";
import OurBrands from "../../components/13.ourBrands/js/OurBrands";
import LatestNews from "../../components/14.latestNews/js/LatestNews";
import Footer from "../../components/15.footer/js/Footer";

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
      {/* {scrollDirection === "up" ? (
        // <div className="slideDown w-full z-40 fixed top-0 left-0 right-0">
        <div className="slideDown w-full z-40  "> */}
      <NavBar />
      {/* </div>
      ) : (
        ""
      )} */}
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
