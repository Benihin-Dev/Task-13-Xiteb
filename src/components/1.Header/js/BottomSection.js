import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import NavComponent from "./NavComponent/NavComponent";
import productImg1 from "../img/039.png";
import productImg2 from "../img/048.png";
import bannerImg1 from "../img/bg-banner4.jpg";
import bannerImg2 from "../img/bg-banner5.jpg";
import productImg3 from "../img/productImg/057.jpg";
import productImg4 from "../img/productImg/054.jpg";
import productImg5 from "../img/productImg/028.jpg";
import productImg6 from "../img/productImg/045.jpg";
import productImg7 from "../img/productImg/016.jpg";
import productImg8 from "../img/productImg/021.jpg";
import productImg9 from "../img/productImg/002.jpg";
import productImg10 from "../img/productImg/017.jpg";

export default function BottomSection() {
  const [selectedItemIndexForNavItems, setSelectedItemIndexForNavItems] =
    useState(7);
  const [componentIsVisible, setComponentIsVisible] = useState(false);

  const navData = [
    {
      data: [
        {
          title: "Wound Care",
          links: [
            "Bandages",
            "Gypsum foundations",
            "Patches and tapes",
            "Stomatology",
            "Surgical sutures",
            "Uniforms",
            "Wound healing",
          ],
        },
        {
          title: "Higiene",
          links: [
            "Disposable products",
            "Face masks",
            "Gloves",
            "Protective covers",
            "Sterilization",
            "Surgical foils",
            "Uniforms",
          ],
        },
        {
          title: "Laboratory",
          links: [
            "Devices",
            "Diagnostic tests",
            "Disinfectants",
            "Dyes",
            "Pipettes",
            "Test-tubes",
            "Tubes",
          ],
        },
        {
          title: "Tools",
          links: [
            "Accessories Tools",
            "Blood pressure",
            "Capsules",
            "Dental",
            "Micrscope",
            "Pressure",
            "Sugar level",
          ],
        },
        {
          title: "Diagnosis",
          links: [
            "Biopsy tools",
            "Endoscopes",
            "Monitoring",
            "Otoscopes",
            "Oxygen concentrators",
            "Tables and assistants",
            "Thermometer",
          ],
        },
        {
          title: "Equipment",
          links: [
            "Blades",
            "Education",
            "Germicidal lamps",
            "Heart Health",
            " Infusion stands",
            "Lighting",
            "Machines",
          ],
        },
      ],
      title: "Products",
      component: "Products",
    },
    {
      data: {
        links: [
          "Diagnosis",
          "Accessories Tools",
          "Bandages",
          "Biopsy tools",
          "Blades",
          "Blood pressure",
          "Capsules",
          "Dental",
          "Devices",
          "Diagnostic tests",
          "Disposable products",
          "Education",
          "Endoscopes",
          "Equipment",
          "Show all",
        ],
        banner1: {
          text: "Get rid of bacteria in your home",
          img: bannerImg1,
          btnText: "More",
        },
        banner2: {
          text: "Candid Whitening Kit",
          suBText: "-10%",
          img: bannerImg2,
          btnText: "Shop Now",
        },
        productDetails: {
          timer: "",
          img: [productImg1, productImg2],
          name: "Generic Stethoscope Hearing Heartbeat Tool",
          price: "53.93",
          salePrice: "45.99",
          rate: 5,
          productState: false,
        },
      },
      title: "Home Medical Supplies",
      component: "Medical",
    },
    {
      data: false,
      title: "Shop",
      component: "Shop",
    },
    {
      data: [
        {
          title: "Lorem Griffen",
          links: [
            "Lijnk 1",
            "Lijnk 2",
            "Lijnk 3",
            "Lijnk 4",
            "Lijnk 5",
            "Lijnk 6",
            "Lijnk 4",
            "Lijnk 5",
            "Lijnk 6",
          ],
        },
        {
          title: "Lorem Griffen",
          links: [
            "Lijnk 1",
            "Lijnk 2",
            "Lijnk 3",
            "Lijnk 4",
            "Lijnk 5",
            "Lijnk 4",
            "Lijnk 5",
            "Lijnk 6",
            "Lijnk 6",
          ],
        },
        {
          title: "Lorem Griffen",
          links: [
            "Lijnk 1",
            "Lijnk 2",
            "Lijnk 3",
            "Lijnk 4",
            "Lijnk 5",
            "Lijnk 6",
            "Lijnk 4",
            "Lijnk 5",
            "Lijnk 6",
          ],
        },
        {
          title: "Lorem Griffen",
          links: [
            "Lijnk 1",
            "Lijnk 2",
            "Lijnk 3",
            "Lijnk 4",
            "Lijnk 4",
            "Lijnk 5",
            "Lijnk 6",
            "Lijnk 5",
            "Lijnk 6",
          ],
        },
      ],
      title: "Pages",
      component: "Pages",
    },
    {
      data: {
        link: [
          "Diagnosis",
          "Accessories Tools",
          "Bandages",
          "Biopsy tools",
          "Blades",
          "Blood pressure",
          "Capsules",
          "Dental",
          "Devices",
          "Show all",
        ],
        productDetails: [
          {
            img: [productImg4, productImg3],
            name: "Somersung Sonic X2000 Pro Black",
            price: "298.00",
            salePrice: false,
            rate: 5,
            productState: false,
          },
          {
            img: [productImg5, productImg6],
            name: "Digital Thermometer X30-Pro",
            price: "53.93",
            salePrice: "45.09",
            rate: 5,
            productState: false,
          },
          {
            img: [productImg7, productImg8],
            name: "Oxygen concentrator model KTS-5000",
            price: "13.93",
            salePrice: false,
            rate: 3,
            productState: false,
          },
          {
            img: [productImg9, productImg10],
            name: "Blue Hot Water Bottle, 2 Quart Capacity",
            price: "70.93",
            salePrice: "45.99",
            rate: 5,
            productState: false,
          },
        ],
      },
      title: "Collection",
      component: "Collection",
    },
    {
      data: false,
      title: "Blog",
    },
    {
      data: false,
      title: "Contact",
    },
    {
      data: false,
      title: "none",
    },
  ];
  return (
    <div className=" w-full relative hidden md:block">
      <div className=" w-full flex items-center justify-between">
        <ul className=" px-5 lg:px-10 flex items-center gap-3 text-sm   font-medium">
          {navData.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => {
                setSelectedItemIndexForNavItems(index);
                setComponentIsVisible(true);
              }}
              onMouseLeave={() => {
                setComponentIsVisible(false);
              }}
              className={` ${
                index === 7 ? "hidden" : "flex"
              }  py-3  items-end gap-0 hover:text-[#103178] text-[#66bc89] duration-200   cursor-pointer `}
            >
              <FaBars className={` ${index === 0 ? "block" : "hidden"} `} />
              <p className=" pl-2 leading-3">{item.title}</p>
              {item.data && <MdKeyboardArrowDown />}
            </li>
          ))}
        </ul>
        <p className=" pr-5 md:pr-10 text-sm text-gray-600 lg:block hidden">
          Need help? +1 234 5678
        </p>
      </div>

      <div
        onMouseEnter={() => {
          setSelectedItemIndexForNavItems(selectedItemIndexForNavItems);
          setComponentIsVisible(true);
        }}
        onMouseLeave={() => {
          setSelectedItemIndexForNavItems(7);
          setComponentIsVisible(false);
        }}
        className={` ${
          selectedItemIndexForNavItems === 2 ||
          selectedItemIndexForNavItems === 5 ||
          selectedItemIndexForNavItems === 6
            ? "hidden"
            : ""
        } absolute navComponent left-0 w-full   z-20 navComponent  ${
          componentIsVisible ? "slide-up" : "slide-down"
        }`}
      >
        <NavComponent
          details={navData[selectedItemIndexForNavItems].data}
          index={selectedItemIndexForNavItems}
        />
      </div>
    </div>
  );
}
