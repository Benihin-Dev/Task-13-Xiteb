import React from "react";

export default function TopFooter() {
  const footerLinks = [
    {
      heading: "Programs",
      links: [
        { text: "Undergraduate", url: "/programs/undergraduate" },
        { text: "Postgraduate", url: "/programs/postgraduate" },
        { text: "Online Courses", url: "/programs/online-courses" },
        {
          text: "Professional Development",
          url: "/programs/professional-development",
        },
        { text: "Summer Schools", url: "/programs/summer-schools" },
        { text: "Certificate Programs", url: "/programs/certificate-programs" },
      ],
    },
    {
      heading: "Admissions",
      links: [
        { text: "Undergraduate Admissions", url: "/admissions/undergraduate" },
        { text: "Postgraduate Admissions", url: "/admissions/postgraduate" },
        { text: "International Students", url: "/admissions/international" },
        { text: "Tuition and Fees", url: "/admissions/tuition-fees" },
        { text: "Scholarships and Aid", url: "/admissions/scholarships-aid" },
        { text: "Visit Campus", url: "/admissions/visit-campus" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { text: "Library", url: "/resources/library" },
        { text: "Student Services", url: "/resources/student-services" },
        { text: "Academic Calendar", url: "/resources/academic-calendar" },
        { text: "Career Services", url: "/resources/career-services" },
        { text: "Campus Directory", url: "/resources/campus-directory" },
        { text: "IT Support", url: "/resources/it-support" },
      ],
    },
    {
      heading: "About Us",
      links: [
        { text: "Our Mission", url: "/about/mission" },
        { text: "Leadership", url: "/about/leadership" },
        { text: "Faculty", url: "/about/faculty" },
        { text: "History", url: "/about/history" },
        { text: "News and Events", url: "/about/news-events" },
        { text: "Contact Us", url: "/about/contact" },
      ],
    },
  ];
  return (
    <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto  ">
      <div className=" w-full grid grid-cols-2 lg:grid-cols-4  gap-8 md:gap-12">
        {footerLinks.map((item, index) => (
          <div key={index} className="  ">
            <p className=" text-white cursor-default">{item.heading}</p>
            <ul className=" text-sm text-gray-4800 mt-2 ">
              {item.links.map((link, i) => (
                <li
                  key={i}
                  className=" hover:text-[#40e77d] duration-200 cursor-pointer"
                >
                  {link.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
