import React from "react";
import { icons } from "./constants/assets";
import { bgImages } from "./constants/assets";
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
    <div
      className="  mt-32   w-[100%] bg-cover bg-repeat bg-no-repeat "
      style={{ backgroundImage: `url(${bgImages.whychooseus_bg})` }}
    >
      <h1 className="col-span-full text-[49px] mb-28 font-bold text-4xl text-center text-secondary">
        Why choose us?
      </h1>
      <div className="m-auto w-[85%] pb-56 container grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-x-16 gap-y-40">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="rounded-full flex justify-center w-[228px] h-[228px] bg-primary ">
              <img
                src={service.icon}
                alt={service.text.toLowerCase()}
                className=""
              />
            </span>
            <h3 className="text-primary w-[80%] text-center text-[25px]  pt-6 ">
              {service.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
