import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import bgImg from "../img/img1.jpg";
import bannerImg1 from "../img/img1.png";
import bannerImg2 from "../img/img2.png";
import bannerImg3 from "../img/img3.png";
import SliderForBannerProducts from "../../Sliders/SliderForBannerProducts";
import menuImg1 from "../img/menuImgs/img1.png";
import menuImg2 from "../img/menuImgs/img2.png";
import menuImg3 from "../img/menuImgs/img3.png";
import menuImg4 from "../img/menuImgs/img4.png";
import menuImg5 from "../img/menuImgs/img5.png";
import menuImg6 from "../img/menuImgs/img6.png";
import menuImg7 from "../img/menuImgs/img7.png";
import menuImg8 from "../img/menuImgs/img8.png";

export default function Menu() {
  const navLinks = [
    {
      name: "Brand",
      subContentState: true,
      subContent: [
        {
          head: "lorem sodjfdf",
          links: [
            "InnerLink1",
            "InnerLink2",
            "InnerLink4",
            "InnerLink5",
            "InnerLink6",
            "InnerLink7",
            "InnerLink8",
          ],
        },
        {
          head: "odjfdf lorem",
          links: [
            "InnerLink1",
            "InnerLink2",
            "InnerLink3",
            "InnerLink4",
            "InnerLink5",
            "InnerLink6",
            "InnerLink7",
          ],
        },
        {
          head: "lodjfdf sd",
          links: [
            "InnerLink1",
            "InnerLink2",
            "InnerLink3",
            "InnerLink4",
            "InnerLink5",
            "InnerLink5",
            "InnerLink6",
          ],
        },
        {
          head: "lodjfdf sd",
          links: [
            "InnerLink1",
            "InnerLink5",
            "InnerLink5",
            "InnerLink2",
            "InnerLink3",
            "InnerLink7",
            "InnerLink8",
          ],
        },
      ],
    },
    {
      name: "Duty Free",
      subContentState: false,
    },
    {
      name: "Added Service",
      subContentState: true,
      subContent: [
        {
          head: "lorem sodjfdf",
          links: [
            "InnerLink1",
            "InnerLink2",
            "InnerLink6",
            "InnerLink6",
            "InnerLink7",
            "InnerLink8",
          ],
        },
        {
          head: "odjfdf lorem",
          links: [
            "InnerLink1",
            "InnerLink4",
            "InnerLink5",
            "InnerLink6",
            "InnerLink7",
            "InnerLink8",
          ],
        },
        {
          head: "lodjfdf sd",
          links: [
            "InnerLink1",
            "InnerLink2",
            "InnerLink3",
            "InnerLink4",
            "InnerLink5",
            "InnerLink6",
          ],
        },
        {
          head: "lodjfdf sd",
          links: [
            "InnerLink1",
            "InnerLink2",
            "InnerLink3",
            "InnerLink7",
            "InnerLink8",
            "InnerLink8",
          ],
        },
      ],
    },
    {
      name: "Gift Cards",
      subContentState: false,
    },
    {
      name: "Omni Cart",
      subContentState: false,
    },
    {
      name: "Hot Deals",
      subContentState: false,
    },
    {
      name: "Singer Red Loyalty Program",
      subContentState: false,
    },
  ];
  const [productListState, setProductListState] = useState(false);
  const [selectedMenuListIndex, setSelectedMenuListIndex] = useState(-1);
  const productList = [
    {
      category: "Mobiles & Tablets, Computers, Printers, Gadgets & Accessories",
      img: menuImg1,
      subItems: [
        {
          itemHead: "Mobile Phone",
          items: ["Smart Phones", "Tablets", "All Electronics"],
        },
        {
          itemHead: "Laptop / NoteBooks",
          items: ["2 in 1 Detachable", "Gaming Laptops", "Laptops"],
        },
      ],
    },
    {
      category: "Home & Kitchen Appliances",
      img: menuImg2,

      subItems: [
        {
          itemHead: "Kitchen Appliances",
          items: ["Microwaves", "Refrigerators", "Dishwashers"],
        },
        {
          itemHead: "Home Appliances",
          items: ["Vacuum Cleaners", "Air Purifiers", "Water Heaters"],
        },
      ],
    },
    {
      category: "TV, Home Audio Video & Interactive Flat Panel Smart Boards",
      img: menuImg3,

      subItems: [
        {
          itemHead: "TV",
          items: ["LED TV", "Smart TV", "OLED TV"],
        },
        {
          itemHead: "Audio Video",
          items: ["Home Theater", "Sound Bars", "Bluetooth Speakers"],
        },
      ],
    },
    {
      category:
        "Refrigerator, Freezer, Coolers, Air Conditioner & Washing Machines",
      img: menuImg4,

      subItems: [
        {
          itemHead: "Cooling Appliances",
          items: ["Refrigerators", "Freezers", "Coolers"],
        },
        {
          itemHead: "Air Conditioning",
          items: ["Air Conditioners", "Portable AC", "Split AC"],
        },
        {
          itemHead: "Laundry",
          items: ["Washing Machines", "Dryers", "Laundry Accessories"],
        },
      ],
    },
    {
      category:
        "Fitness Equipment, Musical Instruments, Medical & Other Products",
      img: menuImg5,

      subItems: [
        {
          itemHead: "Fitness Equipment",
          items: ["Treadmills", "Dumbbells", "Exercise Bikes"],
        },
        {
          itemHead: "Musical Instruments",
          items: ["Guitars", "Keyboards", "Drums"],
        },
        {
          itemHead: "Medical Products",
          items: ["Thermometers", "Blood Pressure Monitors", "First Aid Kits"],
        },
      ],
    },
    {
      category: "Furniture",
      img: menuImg6,

      subItems: [
        {
          itemHead: "Living Room",
          items: ["Sofas", "Coffee Tables", "TV Units"],
        },
        {
          itemHead: "Bedroom",
          items: ["Beds", "Wardrobes", "Nightstands"],
        },
      ],
    },
    {
      category: "Argo Products, Bicycles, Motorbikes & Automobiles",
      img: menuImg7,
      subItems: [
        {
          itemHead: "Argo Products",
          items: ["Tractors", "Plows", "Harvesters"],
        },
        {
          itemHead: "Bicycles",
          items: ["Mountain Bikes", "Road Bikes", "Hybrid Bikes"],
        },
        {
          itemHead: "Motorbikes",
          items: ["Sports Bikes", "Cruisers", "Scooters"],
        },
      ],
    },
    {
      category: "Gift Vouchers, Gift Packages & Bundle Offers",
      img: menuImg8,
      subItems: [
        {
          itemHead: "Gift Vouchers",
          items: [
            "E-Gift Cards",
            "Physical Gift Cards",
            "Personalized Vouchers",
          ],
        },
        {
          itemHead: "Gift Packages",
          items: ["Holiday Packages", "Spa Packages", "Adventure Packages"],
        },
        {
          itemHead: "Bundle Offers",
          items: [
            "Electronics Bundles",
            "Home Appliance Bundles",
            "Fitness Bundles",
          ],
        },
      ],
    },
  ];
  const [selectedContentIndex, setSelectedContentIndex] = useState(-1);
  const bannerData = [
    {
      img: bannerImg1,
      saleText: " THE NEW STANDRAD",
      price: 79.68,
      name: "1",
    },
    {
      img: bannerImg2,
      saleText: " THE NEW FASHION",
      price: 1749.99,
      name: "2",
    },
    { img: bannerImg3, saleText: " THE NEW TRAND", price: 945.49, name: "3" },
  ];
  return (
    <div className=" w-full relative pt-2 ">
      <div className="responsiveWeith  flex items-center justify-start lg:justify-between gap-3  ">
        <div
          onClick={() => {
            setProductListState(!productListState);
          }}
          className=" relative w-4/5 lg:w-1/4 border text-sm px-3 flex items-center gap-2 bg-[#e6154b] text-white cursor-pointer rounded-lg py-2"
        >
          <AiOutlineBars />
          <p>Products</p>
          <div
            className={` ${productListState && "block"} ${
              !productListState && "hidden lg:block"
            }  absolute px-4 pb-5 w-full z-10  top-[90%] bg-white left-0 text-black`}
          >
            <div className=" w-full relative">
              {productList.map((product, index) => (
                <div
                  onMouseOver={() => {
                    setSelectedMenuListIndex(index);
                  }}
                  onClick={() => {
                    setSelectedMenuListIndex(-1);
                  }}
                  key={index}
                  className="hover:text-black  text-gray-600 flex items-center justify-between gap-2 text-xs hover:border-b-gray-700 py-2 border-b  duration-200 group"
                >
                  <p>{product.category}</p>
                  <div className=" ">
                    <MdOutlineKeyboardArrowDown className=" -rotate-90 size-4   text-gray-600 group-hover:text-black" />
                  </div>
                </div>
              ))}
              {selectedMenuListIndex > -1 ? (
                <div className=" hidden lg:block p-8 absolute border-t border-[#e6154b] top-0 w-[250%]  bg-white h-[105%] left-[100%]">
                  <div className=" w-full grid grid-cols-2 gap-3 ">
                    {productList[selectedMenuListIndex].subItems.map(
                      (menuLink, i) => (
                        <div key={i} className=" mt-2 z-20 ">
                          <p className=" font-semibold text-sm text-[#e6154b]">
                            {menuLink.itemHead}
                          </p>
                          <div className=" mt-3 space-y-1 text-xs">
                            {menuLink.items.map((item, i) => (
                              <p
                                key={i}
                                className=" text-gray-500 hover:font-bold hover:text-black duration-200 text-sm"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                    <img
                      src={productList[selectedMenuListIndex].img}
                      className=" absolute bottom-0 right-0 z-0"
                      alt=""
                    />
                    <p
                      onClick={() => {
                        setSelectedMenuListIndex(-1);
                      }}
                      className=" text-3xl text-gray-500 hover:text-red-500 leading-3 duration-200 rotate-45 absolute top-2 right-2"
                    >
                      +
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-3/4  ">
          <div className=" hidden md:flex  w-full pt-2 items-center text-xs font-semibold relative">
            {navLinks.map((link, index) => (
              <div
                onMouseOver={() => {
                  if (link.subContentState === true) {
                    setSelectedContentIndex(index);
                  } else setSelectedContentIndex(-1);
                }}
                onClick={() => {
                  if (link.subContentState === true) {
                    setSelectedContentIndex(index);
                  } else setSelectedContentIndex(-1);
                }}
                key={index}
                className=" flex items-center hover:text-black text-gray-400 duration-200 cursor-pointer border border-transparent hover: px-2 py-1"
              >
                <p className=" pr-1">{link.name}</p>
                {link.subContentState && <MdOutlineKeyboardArrowDown />}
              </div>
            ))}
            {selectedContentIndex >= 0 ? (
              <div className=" absolute top-[115%] w-full z-10 pb-8 shadow border  bg-white border-t-[#e6154b] left-0">
                <div className=" relative w-full p-5">
                  <p
                    onClick={() => {
                      setSelectedContentIndex(-1);
                    }}
                    className=" text-2xl absolute top-2 text-gray-400 hover:text-[#e6154b] duration-200 cursor-pointer leading-3 right-2 rotate-45"
                  >
                    +
                  </p>
                  <div className=" grid grid-cols-4 gap-8">
                    {navLinks[selectedContentIndex].subContent.map(
                      (subLink, i) => (
                        <div>
                          <p className=" text-sm text-[#eb457a] px-3 pb-3">
                            {subLink.head}
                          </p>
                          {subLink.links.map((li, ind) => (
                            <p
                              className=" cursor-pointer text-gray-400 hover:text-black duration-200 px-3 pb-2"
                              key={ind}
                            >
                              {li}
                            </p>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className=" w-full overflow-hidden relative mt-4 sm:mt-0">
        <div className="w-full absolute top-0 left-0 h-full -z-10  cursor-pointer ">
          <img src={bgImg} alt="" className=" w-full h-full object-cover" />
        </div>
        <div className=" responsiveWeith">
          <SliderForBannerProducts data={bannerData} />
        </div>
      </div>
    </div>
  );
}
