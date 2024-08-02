import React from "react";
import { Element } from "react-scroll";
import Header from "../../1.Header/js/Header";
import Menu from "../../2.Menu/js/Menu";
import Features from "../../3.Features/js/Features";
import NewProduct from "../../4.NewProduct/js/NewProduct";
import SaleItem from "../../5.SaleItems/js/SaleItem";
import Deals from "../../6.Deals/js/Deals";
import HotDeals from "../../7.HotDeals/js/HotDeals";
import Categories from "../../8.Categories/js/Categories";
import Manufacture from "../../9.Manufacture/js/Manufacture";
import EmailContact from "../../10.EmailContact/js/EmailContact";
import Footer from "../../11.Footer/js/Footer";
import ScrollUpArrow from "../../ScrollUpArrow/js/ScrollUpArrow";

export default function Home() {
  return (
    <div className=" bg-white">
      <Element name="header-section">
        <Header />
      </Element>
      <Menu />
      <Features />
      <NewProduct />
      <SaleItem />
      <Deals />
      <HotDeals />
      <Categories />
      <Manufacture />
      <EmailContact />
      <Footer />
      <ScrollUpArrow />
    </div>
  );
}
