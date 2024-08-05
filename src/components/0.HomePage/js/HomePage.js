import React from "react";
import Header from "../../1.Header/js/Header";
import Menu from "../../2.Menu/js/Menu";
import BigDeals from "../../3.BigDeals/js/BigDeals";
import SpecialOfferProducts from "../../4.SpecialOffer&Products/js/SpecialOfferProducts";
import BestSellers from "../../5.BestSellers/js/BestSellers";
import Banner from "../../6.Banner/js/Banner";
import RecentlyViewedProducts from "../../7.RecentlyViewedProdcus/js/RecentlyViewedProducts";
import Manufacture from "../../8.Manufacture/js/Manufacture";
import Footer from "../../9.Footer/js/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Menu />
      <BigDeals />
      <SpecialOfferProducts />
      <BestSellers />
      <Banner />
      <RecentlyViewedProducts />
      <Manufacture />
      <Footer />
    </div>
  );
}
