import React, { useState } from "react";

//Product Images
import productImg1 from "../img/ProductImages/product-1-1.jpg";
import productImg2 from "../img/ProductImages/product-1-2.jpg";
import productImg3 from "../img/ProductImages/product-2-1.jpg";
import productImg4 from "../img/ProductImages/product-2-2.jpg";
import productImg5 from "../img/ProductImages/product-3-1.jpg";
import productImg6 from "../img/ProductImages/product-3-2.jpg";
import productImg7 from "../img/ProductImages/product-4-1.jpg";
import productImg8 from "../img/ProductImages/product-4-2.jpg";
import productImg9 from "../img/ProductImages/product-5-1.jpg";
import productImg10 from "../img/ProductImages/product-5-2.jpg";
import productImg11 from "../img/ProductImages/product-6-1.jpg";
import productImg12 from "../img/ProductImages/product-6-2.jpg";
import productImg13 from "../img/ProductImages/product-7-1.jpg";
import productImg14 from "../img/ProductImages/product-7-2.jpg";
import productImg15 from "../img/ProductImages/product-8-1.jpg";
import productImg16 from "../img/ProductImages/product-8-2.jpg";
import productImg17 from "../img/ProductImages/product-9-1.jpg";
import productImg18 from "../img/ProductImages/product-9-2.jpg";
import productImg19 from "../img/ProductImages/product-10-1.jpg";
import productImg20 from "../img/ProductImages/product-10-2.jpg";
import ProductTemplet from "./ProductTemplet";
import SliderForProduct from "../../Sliders/js/SliderForProduct";

export default function PopulerProduc() {
  const productDetails = [
    {
      name: "Mad Angels Snack",
      type: "Snack",
      img: [productImg1, productImg2],
      actualPrice: 45.5,
      discountedPrice: 28.25,
      rating: 5,
      review: 52,
      manufacture: "Food",
      status: "Hot",
    },
    {
      name: "Happlio Omani Dates",
      type: "Made Food",
      img: [productImg3, productImg4],
      actualPrice: 55.99,
      discountedPrice: 52.56,
      rating: 4,
      review: 47,
      manufacture: "Stouffer",
      status: "Sale",
    },
    {
      name: "Happilo California Almonds",
      type: "Snack",
      img: [productImg5, productImg6],
      actualPrice: 28.99,
      discountedPrice: 25.6,
      rating: 3,
      review: 407,
      manufacture: "StarKits",
      status: "New",
    },
    {
      name: "Coated Banana Chips",
      type: "Vegitables",
      img: [productImg7, productImg8],
      actualPrice: 25.0,
      discountedPrice: 17.56,
      rating: 4,
      review: 70,
      manufacture: "Food",
      status: "none",
    },
    {
      name: "Daily Rose Berry Mix",
      type: "Pet Food",
      img: [productImg9, productImg10],
      actualPrice: 23.99,
      discountedPrice: 25.56,
      rating: 5,
      review: 97,
      manufacture: "Food",
      status: "54%",
    },
    {
      name: "Premium Trail Mix",
      type: "MademFood",
      img: [productImg11, productImg12],
      actualPrice: 95.09,
      discountedPrice: 85.5,
      rating: 2,
      review: 99,
      manufacture: "Food",
      status: "none",
    },
    {
      name: "Mom's Superfood Mix",
      type: "Meats",
      img: [productImg13, productImg14],
      actualPrice: 32.0,
      discountedPrice: 28.78,
      rating: 5,
      review: 147,
      manufacture: "Oconer",
      status: "30%",
    },
    {
      name: "Smoked Honey Spaced",
      type: "Snack",
      img: [productImg15, productImg16],
      actualPrice: 35.99,
      discountedPrice: 32.3,
      rating: 3,
      review: 17,
      manufacture: "Food",
      status: "Sale",
    },
    {
      name: "Super Mom's Trail Mix",
      type: "Coffee",
      img: [productImg17, productImg18],
      actualPrice: 95.99,
      discountedPrice: 82.56,
      rating: 4,
      review: 45,
      manufacture: "Old El Paso",
      status: "Hot",
    },
    {
      name: "Healthy Nut Mix",
      type: "Cream",
      img: [productImg19, productImg20],
      actualPrice: 5.99,
      discountedPrice: 12.56,
      rating: 3,
      review: 105,
      manufacture: "Tyson",
      status: "New",
    },
  ];

  // Shuffle the array
  function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }

  const allProducst = productDetails;
  const milkProducst = shuffleArray(productDetails);
  const coffeeProducst = shuffleArray(productDetails);
  const petFoodProducst = shuffleArray(productDetails);
  const meatProducst = shuffleArray(productDetails);
  const vegProducst = shuffleArray(productDetails);
  const furitsProducst = shuffleArray(productDetails);

  const productType = [
    { type: "All", products: allProducst },
    { type: "Milk & Diaries", products: milkProducst },
    { type: "Coffee & Teas", products: coffeeProducst },
    { type: "Pet Food", products: petFoodProducst },
    { type: "Meats", products: meatProducst },
    { type: "Vegitables", products: vegProducst },
    { type: "Furits", products: furitsProducst },
  ];

  const [selectedProductTypeIndex, setSelectedProductTypeIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(false);

  function setShowAnimation() {
    setAnimationClass(true);

    setTimeout(() => {
      setAnimationClass(false);
    }, 10);
  }

  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith">
        <div className=" w-full md:flex gap-10 justify-between">
          <p className=" text-2xl md:text-3xl cursor-default font-semibold font-montserrat w-full text-center md:w-fit">
            Populer Prodcuts
          </p>{" "}
          <div className="font-montserrat sm:flex items-center gap-3 justify-center sm:text-[13px] leading-4 text-sm  md:justify-end mt-3 sm:mt-2 md:mt-0">
            <ul className=" pb-2 sm:pb-0 flex items-center gap-3 font-semibold  justify-center md:justify-end  ">
              {productType.map((product, index) => (
                <li
                  key={index}
                  className={` ${
                    selectedProductTypeIndex === index
                      ? "text-[#2faf36]"
                      : "text-black"
                  } ${
                    index > 2 ? "hidden" : "block"
                  } hover:text-[#2faf36] hover:pb-2  pt-2 hover:pt-0  duration-200 cursor-pointer" `}
                >
                  <p
                    onClick={() => {
                      setSelectedProductTypeIndex(index);
                      setShowAnimation();
                    }}
                    className=" cursor-pointer"
                  >
                    {product.type}
                  </p>
                </li>
              ))}
            </ul>
            <ul className=" flex items-center gap-3 font-semibold  justify-center md:justify-end  ">
              {productType.map((product, index) => (
                <li
                  key={index}
                  className={` ${
                    selectedProductTypeIndex === index
                      ? "text-[#2faf36]"
                      : "text-black"
                  } ${
                    index < 3 ? "hidden" : "block"
                  } hover:text-[#2faf36] hover:pb-2 pt-2 hover:pt-0 duration-200 cursor-pointer" `}
                >
                  <p
                    onClick={() => {
                      setSelectedProductTypeIndex(index);
                      setShowAnimation();
                    }}
                    className=" cursor-pointer"
                  >
                    {product.type}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`hidden sm:grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 ${
            animationClass && "opacity"
          } `}
        >
          {productType[selectedProductTypeIndex].products.map(
            (productDetail, index) => (
              <ProductTemplet productData={productDetail} key={index} />
            )
          )}
        </div>
        <div
          className={` sm:hidden w-full mt-10  ${animationClass && "opacity"} `}
        >
          <SliderForProduct
            data={productType[selectedProductTypeIndex].products}
          />
        </div>
      </div>
    </div>
  );
}
