import React from "react";
import OfferSlider from "./OfferSlider";
import OfferSlider1 from "./OfferSlider1";

export default function Banner() {
  const offerProductData = [
    {
      image:
        "https://png.pngtree.com/png-vector/20240421/ourmid/pngtree-lipstick-shades-in-a-row-png-image_12302738.png",
      offerRate: "30%",
      styleDesc: "New",
      heading: "TRY NEW FOUNDATION",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://www.trestique.com/cdn/shop/files/brow-pencil-02_9f77c9ae-d2de-4abd-ae87-58602819f539.png?v=1715090492",
      offerRate: "25%",
      styleDesc: "Shine",
      heading: "SHINE LIKE A DIAMOND",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://ibacosmetics.com/cdn/shop/files/MustHaveMakeupSet-Dusky_1_881633d6-fa51-4bb1-9e60-b36e260cd852.webp?v=1691404684&width=533",
      offerRate: "15%",
      styleDesc: "Classic",
      heading: "ENHANCE YOUR BEAUTY",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://jasonwubeauty.com/cdn/shop/files/HF06_800x.png?v=1700607749",
      offerRate: "40%",
      styleDesc: "Bright",
      heading: "MAKE YOUR LIPS CREAMY",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://sdcdn.io/mac/in/mac_sku_NX6404_1x1_0.png?width=1080&height=1080",
      offerRate: "20%",
      styleDesc: "Elegant",
      heading: "EXPERIENCE THE ELEGANCE",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://sdcdn.io/mac/au/mac_sku_SLPK01_1x1_0.png?width=1080&height=1080",
      offerRate: "45%",
      styleDesc: "Luxury",
      heading: "GET THE PERFECT LOOK",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://images.ctfassets.net/wlke2cbybljx/6mPk5fQdHG1kigUEwHDozx/9e2930e8ac4b6f83a6e94b60e2f5b44a/PILLOW_TALK_MAKEUP_SECRETS-PT_Dreams-Packshot.png",
      offerRate: "35%",
      styleDesc: "Dream",
      heading: "NEW SECRETS REVEALED",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://www.trestique.com/cdn/shop/files/shadow-crayon-01_09292726-1c1a-4bf6-a78c-e04b01fc985c.png?v=1715090747",
      offerRate: "50%",
      styleDesc: "Daily",
      heading: "ALL DAY, EVERY DAY",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://images.ctfassets.net/wlke2cbybljx/5cY9kCWU2wFWa2uR7eJlOF/4fb40dcc8d78515fe961610197f116f9/BEAUTYCHECKINKIT-BUNDLE.png",
      offerRate: "10%",
      styleDesc: "Bundle",
      heading: "BEAUTY CHECK-IN KIT",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://m.clinique.com/media/export/cms/products/600x750/cl_sku_V5P801_600x750_0.png",
      offerRate: "30%",
      styleDesc: "Skincare",
      heading: "REFRESH YOUR SKIN",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://buxomcosmetics.com/cdn/shop/files/BX_HO23_Bonus_Points_Kit_Product_Silo_3000x3000_R150.png?v=1697206707&width=493",
      offerRate: "25%",
      styleDesc: "Bonus",
      heading: "BONUS POINTS KIT",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
  ];
  const offerProductData1 = [
    {
      image:
        "https://buxomcosmetics.com/cdn/shop/files/BX_HO23_Bonus_Points_Kit_Product_Silo_3000x3000_R150.png?v=1697206707&width=493",
      offerRate: "25%",
      styleDesc: "Bonus",
      heading: "BONUS POINTS KIT",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20240421/ourmid/pngtree-lipstick-shades-in-a-row-png-image_12302738.png",
      offerRate: "30%",
      styleDesc: "New",
      heading: "TRY NEW FOUNDATION",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://www.trestique.com/cdn/shop/files/brow-pencil-02_9f77c9ae-d2de-4abd-ae87-58602819f539.png?v=1715090492",
      offerRate: "25%",
      styleDesc: "Shine",
      heading: "SHINE LIKE A DIAMOND",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://ibacosmetics.com/cdn/shop/files/MustHaveMakeupSet-Dusky_1_881633d6-fa51-4bb1-9e60-b36e260cd852.webp?v=1691404684&width=533",
      offerRate: "15%",
      styleDesc: "Classic",
      heading: "ENHANCE YOUR BEAUTY",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://jasonwubeauty.com/cdn/shop/files/HF06_800x.png?v=1700607749",
      offerRate: "40%",
      styleDesc: "Bright",
      heading: "MAKE YOUR LIPS CREAMY",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://sdcdn.io/mac/in/mac_sku_NX6404_1x1_0.png?width=1080&height=1080",
      offerRate: "20%",
      styleDesc: "Elegant",
      heading: "EXPERIENCE THE ELEGANCE",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://sdcdn.io/mac/au/mac_sku_SLPK01_1x1_0.png?width=1080&height=1080",
      offerRate: "45%",
      styleDesc: "Luxury",
      heading: "GET THE PERFECT LOOK",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://images.ctfassets.net/wlke2cbybljx/6mPk5fQdHG1kigUEwHDozx/9e2930e8ac4b6f83a6e94b60e2f5b44a/PILLOW_TALK_MAKEUP_SECRETS-PT_Dreams-Packshot.png",
      offerRate: "35%",
      styleDesc: "Dream",
      heading: "NEW SECRETS REVEALED",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://www.trestique.com/cdn/shop/files/shadow-crayon-01_09292726-1c1a-4bf6-a78c-e04b01fc985c.png?v=1715090747",
      offerRate: "50%",
      styleDesc: "Daily",
      heading: "ALL DAY, EVERY DAY",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://images.ctfassets.net/wlke2cbybljx/5cY9kCWU2wFWa2uR7eJlOF/4fb40dcc8d78515fe961610197f116f9/BEAUTYCHECKINKIT-BUNDLE.png",
      offerRate: "10%",
      styleDesc: "Bundle",
      heading: "BEAUTY CHECK-IN KIT",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
    {
      image:
        "https://m.clinique.com/media/export/cms/products/600x750/cl_sku_V5P801_600x750_0.png",
      offerRate: "30%",
      styleDesc: "Skincare",
      heading: "REFRESH YOUR SKIN",
      decs: "Inspired by apothecary know-how, we always strive to source.",
    },
  ];
  return (
    <div className=" w-full  py-12 sm:py-20 relative">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto">
        <div className=" w-full relative">
          <p className=" absolute top-[-70%] sm:top-[-120%] pr-10  w-full text-end font-allura text-[#f4e4de]  -z-10 text-6xl lg:text-7xl">
            Offer
          </p>
          <p className=" text-2xl w-full text-end pb-5 lg:pb-0 ">
            GET YOUR FAVUORITE with DISCOUNT
          </p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-0">
          <OfferSlider1 data={offerProductData1} />
          <div className=" w-full overflow-hidden h-full lg:mt-0 lg:pt-10   ">
            <img
              src="https://img.freepik.com/premium-photo/cosmetics-natural-makeup-highlighter-powder-toner-fluffy-makeup-brush-top_373520-590.jpg?w=740"
              alt=""
              className=" w-full h-full object-cover shadow-md "
            />
          </div>
          <OfferSlider data={offerProductData} />
        </div>
      </div>
      <div className=" absolute bottom-[90%] sm:bottom-[70%] right-[65%] sm:right-[85%]  sm:w-[25vw] w-[60vw] ">
        <img
          src="https://lamelcosmetics.com/cdn/shop/files/bb_blush_tea_rose_401_swatch.webp?v=1718357240&width=480"
          alt=""
          className=" size-full object-contain rotate-"
        />
      </div>
    </div>
  );
}
