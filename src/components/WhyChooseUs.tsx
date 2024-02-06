


import React from "react";
import { icons } from "./constants/assets";

const WhyChooseUs = () => {
  const services = [
    { icon: icons.expertiseIcon, text: "Expertise" },
    { icon: icons.clientIcon, text: "Client-centric" },
    { icon: icons.qualityIcon, text: "Quality Assurance" },
    { icon: icons.clockIcon, text: "Timely Delivery" },
    { icon: icons.moneyIcon, text: "Costly Effective" },
    { icon: icons.supportIcon, text: "Post-Development Support" },
  ];

  return (
    <div className=" container my-6">
      <div className="m-3 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <h1 className="col-span-full text-4xl py-6 text-center text-secondary">
          Why choose us?
        </h1>
        {services.map((service, index) => (
          <div key={index} className="flex flex-col  items-center">
            <img
              src={service.icon}
              alt={service.text.toLowerCase()}
              className="w-24 h-24 bg-primary rounded-full p-5"
            />
            <h3 className="text-primary">{service.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
