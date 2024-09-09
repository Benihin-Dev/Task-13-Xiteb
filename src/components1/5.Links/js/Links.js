import React from "react";

export default function Links() {
  const data = [
    {
      title: "Wound Care",
      links: [
        "Accessories",
        "Bandages",
        "Gypsum foundations",
        "Patches and tapes",
        "Surgical sutures",
        "Swabs",
        "Wound healing",
      ],
    },
    {
      title: "Higiene",
      links: [
        "Disinfectants",
        "Disposable products",
        "Face Masks - protective",
        "Gloves",
        "Protective clothing",
        "Sterilization",
        "Surgical foils",
      ],
    },
    {
      title: "Laboratory",
      links: [
        "Accessories",
        "Devices",
        "Diagnostic tests",
        "Dyes",
        "Pipettes",
        "Tubes",
        "Test-tubes",
      ],
    },
    {
      title: "Tools",
      links: [
        "Care products",
        "Claws and forceps",
        "Electrosurgery",
        "Needles",
        "Plaster tools",
        "Scalpels, blades",
        "Scissors",
      ],
    },
    {
      title: "Diagnosis",
      links: [
        "Accessories",
        "Biopsy tools",
        "Endoscopes",
        "Monitoring",
        "Otoscopes",
        "Oxygen concentrators",
        "Thermometers",
      ],
    },
    {
      title: "Equipment",
      links: [
        "Blades",
        "Education",
        "Germicidal lamps",
        "Infusion stands",
        "Lighting",
        "Machines",
        "Tables and assistants",
      ],
    },
  ];
  return (
    <div className=" w-full py-10 px-5 md:px-10">
      <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data.map((item, index) => (
          <div key={index} className=" mt-2 w-full">
            <p className=" font-semibold pb-4 text-[#103178] cursor-default">
              {item.title}
            </p>
            {item.links.map((link, i) => (
              <p
                className=" mb-3 w-fit hover:underline text-sm cursor-pointer  text-[#103178]   "
                key={i}
              >
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
