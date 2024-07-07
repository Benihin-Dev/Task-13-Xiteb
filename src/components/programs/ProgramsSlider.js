import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { RiBardFill } from "react-icons/ri";
import { AiFillGitlab } from "react-icons/ai";
import { AiOutlineAntCloud } from "react-icons/ai";
import { AiOutlineDingding } from "react-icons/ai";
import { BiCookie } from "react-icons/bi";
import { BiLogoBaidu } from "react-icons/bi";
import { BiLogoFlutter } from "react-icons/bi";
import { BiLogoVk } from "react-icons/bi";

export default function ProgramsSlider() {
  const programData = [
    {
      name: "Computer Science Bootcamp",
      date: "August 10, 2024",
      type: "Physical",
      organizer: "Tech Institute",
      free: false,
      desc: "An intensive bootcamp covering web development, algorithms, and data structures.algorithms, and data structures.",
      image:
        "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/01/09151859/coding-bootcamp.png",
      logoImg: <AiFillGitlab className=" text-gray-500" />,
    },
    {
      name: "Digital Marketing Workshop",
      date: "September 15, 2024",
      type: "Online",
      organizer: "Marketing Experts",
      free: true,
      desc: "Learn the latest  digital marketing, including SEO, in digital marketing, including SEO, PPC, and social media marketing the latest.",
      image:
        "https://www.dummies.com/wp-content/uploads/digital-marketing-concept.jpg",
      logoImg: <AiOutlineAntCloud className=" text-gray-500" />,
    },
    {
      name: "Data Science with Python",
      date: "October 5, 2024",
      type: "Online",
      organizer: "Data Wizards",
      free: false,
      desc: "A comprehensive course on data analysis, visualization,analysis, visualization, and machine learning using Python.",
      image:
        "https://media.licdn.com/dms/image/D5612AQF-9hHGKmMPSA/article-cover_image-shrink_720_1280/0/1677171470965?e=2147483647&v=beta&t=zBEhF-9ouC6ScFHhCQmLXNr2w3o18UowzzQ6Roa2BrM",
      logoImg: <BiLogoVk className=" text-gray-500" />,
    },
    {
      name: "Graphic Design Fundamentals",
      date: "November 20, 2024",
      type: "Weekend",
      organizer: "Design Hub",
      free: true,
      desc: "Master the basics of graphic design, of graphic design, includinggraphic design, including typography, color  nd software tools.",
      image:
        "https://www.sacredheart.edu/media/shu-media/school-of-communication-media-amp-the-arts/art_design_740x317.jpg",
      logoImg: <BiLogoFlutter className=" text-gray-500" />,
    },
    {
      name: "Entrepreneurship Essentials",
      date: "December 1, 2024",
      type: "Physical",
      organizer: "Startup Academy",
      free: true,
      desc: "A program designed to help aspiring entrepreneurs develop their businessdevelop their business ideas and skills.",
      image:
        "https://lsuonline-static.s3.amazonaws.com/media/images/2021/05/27/Web_2021_Header_LSUS_MBA_EntrepreneurshipFamEnterprise.jpg",
      logoImg: <BiLogoBaidu className=" text-gray-500" />,
    },
    {
      name: "Cybersecurity Essentials",
      date: "January 15, 2025",
      type: "Online",
      organizer: "Security Experts",
      free: false,
      desc: "Learn the fundamentals of cybersecurity, of graphic design, including threat detection, risk management, and network and security.",
      image:
        "https://www.gtkcyber.com/wp-content/uploads/2020/11/Contact-Form-Image@2x-1.jpg",
      logoImg: <BiCookie className=" text-gray-500" />,
    },
    {
      name: "AI & Machine Learning",
      date: "February 10, 2025",
      type: "Physical",
      organizer: "AI Innovators",
      free: true,
      desc: "A deep dive into artificial intelligence and machine learning, covering neural networks, deep learning, and AI ethics.",
      image:
        "https://cdn.intuji.com/2022/06/Artificial-Intelligence-and-machine-learning_comp-scaled-1.jpeg",
      logoImg: <AiOutlineDingding className=" text-gray-500" />,
    },
  ];
  const slides = programData.map((item) => item);
  const sliderRef = useRef(null);

  return (
    <div className="w-full h-full bg-transparent   ">
      <Slider
        ref={sliderRef}
        arrows={false}
        dots={false}
        infinite={true}
        slidesToShow={2}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={4000}
        speed={1000}
        responsive={[
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {slides.map((item, index) => (
          <div key={index} className={`w-full  px-2 sm:px-8  mt-5`}>
            <div className=" border  w-full rounded-md overflow-hidden h-full shadow-md hover:shadow-[#beb2ff] duration-200 border-gray-300 ">
              <div className=" w-full h-[25vh] sm:h-[40vh]   relative overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className=" w-full h-full scale-110 duration-1000 object-cover hover:scale-100"
                />
                <div className=" cursor-default absolute top-5 -left-3 border bg-[#ffffffdd] px-4 rounded-full text-sm">
                  <p>{item.type}</p>
                </div>
                <div className=" cursor-default absolute bottom-3 -right-3 px-5 rounded-full text-sm">
                  {item.free && (
                    <div className=" relative">
                      <div className=" w-full flex items-center justify-end absolute -top-6 -right-5">
                        <div className="text-green-400 w-fit px-5 pt-1 pb-[2px] rounded-full   bg-[#ffffffdd] justify-end flex gap-1">
                          <RiBardFill className=" size-3" />
                          <p className="text-end  text-xs">Free</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <p className=" text-gray-50">{item.date}</p>
                </div>
              </div>
              <div>
                <div className=" py-5 px-3 cursor-default">
                  <p className=" text-3xl leading-8 mt-2 font-semibold">
                    {item.name}
                  </p>
                  <div className=" flex items-center justify-start mt-2 text-lg gap-2">
                    <p className="leading-4 text-[#4534a9]">{item.organizer}</p>
                    {item.logoImg}
                  </div>

                  <p className=" mt-3 leading-5 text-gray-700">{item.desc}</p>
                </div>
                <div className="  flex mt-3 items-center justify-center bg-[#4534a9] cursor-pointer duration-200 hover:bg-[#27187c] text-white">
                  <div className=" flex items-center justify-center gap-2 w-full py-2  ">
                    <LiaExternalLinkAltSolid className=" size-5" />
                    <p>Register now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
