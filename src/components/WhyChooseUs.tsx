import React from "react";
import { icons } from "./constants/assets";
import { bgImages } from "./constants/assets";
import jsonData from "../data/data.json";

const WhyChooseUs = () => {
  const iconArray = [
    { icon: icons.expertiseIcon },
    { icon: icons.clientIcon },
    { icon: icons.qualityIcon },
    { icon: icons.clockIcon },
    { icon: icons.moneyIcon },
    { icon: icons.supportIcon },
  ];
  const {title,  services } = jsonData.whyChooseUs;

  return (
    <div
      className="  mt-32   w-[100%] bg-cover bg-repeat bg-no-repeat "
      style={{ backgroundImage: `url(${bgImages.whychooseus_bg})` }}
    >
      <h1 className="col-span-full text-[49px] mb-28 font-bold text-4xl text-center text-secondary">
      {title}
      </h1>
      <div className="m-auto w-[100%] lg:pb-56 pb-20 container grid grid_sm grid_md grid-cols-3 gap-x-12 gap-y-4 md:gap-x-0 md:gap-y-24  lg:gap-x-16 lg:gap-y-40 ">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="rounded-full flex justify-center w-[160px] h-[160px] md:w-[228px] md:h-[228px] scale-[0.6] md:scale-[1] lg:scale-[1]   lg:w-[228px] lg:h-[228px]  bg-primary  ">
              <img
                src={iconArray[index].icon}
                alt={service.text.toLowerCase()}
                className="scale-[0.6] md:scale-[1] lg:scale-[1]"
              />
            </span>
            <h3 className="text-primary w-[80%]  text-center text-[15px] md:text-[25px] lg:text-[25px] pt-0 md:pt-6 lg:pt-6 ">
              {service.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
