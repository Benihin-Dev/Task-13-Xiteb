import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Images
import img1 from "../img/destination/1.jpg";
import img2 from "../img/destination/2.jpeg";
import img3 from "../img/destination/3.jpg";
import img4 from "../img/destination/4.jpg";
import img5 from "../img/destination/5.jpg";
import img6 from "../img/destination/6.jpg";
import img7 from "../img/destination/7.jpg";
import img8 from "../img/destination/8.jpeg";
import img9 from "../img/destination/9.jpg";
import img10 from "../img/destination/10.jpg";
import img11 from "../img/destination/11.jpg";
import img12 from "../img/destination/12.jpg";
import img13 from "../img/destination/13.png";
import img14 from "../img/destination/14.jpeg";
import img15 from "../img/destination/15.jpg";
import img16 from "../img/destination/16.png";
import srilankaImg from "../img/destination/SriLanka.png";

export default function Destination() {
  const [destinationSelectionState, setDestinationSelectionState] =
    useState(false);
  const [destinationDetails, setDestinationDetails] = useState([
    {
      name: "Cinnamon Life",
      img: img1,
      desc: "Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options.",
    },
    {
      name: "Cinnamon Grand Colombo",
      img: img2,
      desc: "Our 5-star hotel in the heart of Colombo offers timeless elegance and grandeur. The perfect place to relish global cuisines after a business conference or a memorable rendezvous!",
    },
    {
      name: "Cinnamon Lakeside Colombo",
      img: img3,
      desc: "Spend time with those who matter by a calm, rippling lake at Cinnamon Lakeside, the plush oasis of peace and warmth, right in the middle of Colombo.",
    },
    {
      name: "Cinnamon Red Colombo",
      img: img4,
      desc: "South Asia's first ever lean luxury hotel situated right at the heart of Colombo. The vibrant rooftop bar and serene infinity pool overlooking the Colombo Skyline provides every sense of relaxation and rejuvenation for the adventurous traveller!",
    },
    {
      name: "Cinnamon Bentota Beach",
      img: img5,
      desc: "Choose Cinnamon Bentota Beach for an opulent stay on Sri Lanka's gold coast. Nestled in the groves of coconut trees is a tastefully designed piece of architecture, an ultimate destination for art and culture enthusiasts!",
    },
    {
      name: "Cinnamon Bey Beruwala",
      img: img6,
      desc: "Welcome to a food-lover's most sprawling haven. Here's where our different restaurants become the setting for your most indulgent dreams",
    },
    {
      name: "Hikka Tranz by Cinnamon",
      img: img7,
      desc: "Live around the endless ocean, and feel the rising sun pump adrenaline into every nerve of yours. Let the setting sun cover you with a sense of calmness as it disappears.",
    },
    {
      name: "Cinnamon Wild Yala",
      img: img8,
      desc: "Experience the thrill of living around a forest while you sit by a bar overlooking the pool that is also sometimes the tusker’s choice of water-hole.",
    },
    {
      name: "Trinco Blu by Cinnamon",
      img: img9,
      desc: "How about waking up to a deep blue sea whose crashing waves invite you for a cup of tea or to watch the beautiful dolphins dive for breakfast?",
    },

    {
      name: "Cinnamon Citadel Kandy",
      img: img10,
      desc: "If being close to nature sounds like your perfect holiday, we’re waiting for you in a city, by a lovely river, around misty hills.",
    },
    {
      name: "Cinnamon Lodge Habarana",
      img: img11,
      desc: "A Five-Star nature resort that is rich in history, architecture and biodiversity spanning 27 acres of lush greenery. Located in the epicentre of the cultural triangle; our resort offers an awe-inspiring culture to explore, amidst the numerous wildlife that roam the precincts complete with signature dining experiences.",
    },
    {
      name: "Habarana Village by Cinnamon",
      img: img12,
      desc: "Experience affordable rustic barefoot type elegance, which is designed to reflect the rural environs and simplicity of the local village life surrounded by rich biodiversity.",
    },
    {
      name: "Cinnamon Velifushi Maldives",
      img: img13,
      desc: "Cinnamon Velifushi Maldives, a one-resort island for sun, activity, relaxation and luxury surrounded by exotic marine life and a swimmable lagoon.",
    },
    {
      name: "Cinnamon Hakuraa Huraa Maldives",
      img: img14,
      desc: "Cinnamon Hakuraa Huraa Maldives with its white roofed Water Bungalows set knee-deep in crystal waters of the lagoon is a vision of the stay promised.",
    },
    {
      name: "Cinnamon Dhonveli Maldives",
      img: img15,
      desc: "Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.",
    },
    {
      name: "Ellaidhoo Maldives by Cinnamon",
      img: img16,
      desc: "Dive into the most candid experience with the ocean at our house reef with an awe-inspiring diversity of underwater life.",
    },
  ]);
  const [selectedPlaceIndex, setSelectedPlaceIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } mt-44 sm:mt-0 w-full`}
    >
      <h1 className=" text-xl sm:text-3xl font-medium sm:font-normal text-[#77328b] text-center">
        Our Destinations
      </h1>
      <div className=" mt-4 w-4/5 sm:w-1/2 md:w-2/3 lg:w-4/12 mx-auto relative">
        <p
          onClick={() => {
            setDestinationSelectionState(!destinationSelectionState);
          }}
          className=" w-full py-2 border cursor-default border-purple-300 outline-none px-5"
        >
          {destinationDetails[selectedPlaceIndex].name}
        </p>
        <FaChevronDown
          onClick={() => {
            setDestinationSelectionState(!destinationSelectionState);
          }}
          className={` ${
            destinationSelectionState && "rotate-180"
          } absolute top-[14px] hover:text-gray-800 text-gray-400 right-3`}
        />
        {destinationSelectionState && (
          <div className=" z-10 bg-white absolute w-full top-[100%] border h-48 overflow-y-scroll">
            {destinationDetails.map((desDetail, index) => (
              <p
                onClick={() => {
                  setSelectedPlaceIndex(index);
                  setDestinationSelectionState(!destinationSelectionState);
                }}
                key={index}
                className=" cursor-default w-11/12 mx-auto py-[6px] border-b border-purple-200 outline-none "
              >
                {desDetail.name}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className=" relative w-full px-5  sm:px-0 sm:w-7/12 lg:w-2/5 mt-10   mx-auto">
        <img
          src={destinationDetails[selectedPlaceIndex].img}
          alt=""
          className=" w-full"
        />
        <div className=" sm:absolute mt-10 sm:mt-0 w-9/12 mx-auto sm:w-1/2 sm:top-[10%] sm:left-[80%] pt-8 p-5 bg-[#fffffff5] border shadow-lg ">
          <p className=" text-[#77328b] font-medium  text-xl pb-5">
            {destinationDetails[selectedPlaceIndex].name}
          </p>
          <p className=" text-xs lg:text-sm text-justify text-gray-800">
            {destinationDetails[selectedPlaceIndex].desc}
          </p>
          <button className=" w-full text-xs lg:text-sm text-white bg-indigo-900 sm:w-2/3 py-1 border mt-10">
            Discover More
          </button>
        </div>
        <div className="hidden sm:block absolute w-1/3 top-1 right-[90%]">
          <img src={srilankaImg} alt="" className=" w-full object-cover px-4" />
        </div>
      </div>
      <div className=" w-10/12 mx-auto shadow-lg h-3 rotate-180 mt-16 sm:mt-24"></div>
    </div>
  );
}
