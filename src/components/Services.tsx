import React from "react";
import { bgImages } from "./constants/assets";
import jsonData from "../data/data.json";

const Services = ({ mindCresContent }: any) => {
  const services = mindCresContent.services || jsonData.services;
  return (
    <div
      id={services.sectionId}
      className="pl-4 pt-8 h-[115%] pb-16 id:#services bg-cover bg-center  relative"
      style={{ backgroundImage: `url(${bgImages.service_bg})` }}
    >
      <div className="absolute inset-0 filter backdrop-blur-sm  bg-opacity-80 bg-[#191919] "></div>
      <div className="relative z-10">
        <div className="container py-8 md:py-16 lg:py-16">
          <ul>
            <div className="lg:flex lg:flex-row justify-between">
              <div className="lg:w-1/4 relative mb-12 md:mb-16 lg:mb-16">
                <p className=" text-secondary font-bold p-0 md:p-6 lg:p-6 w-48 md:-w-24 lg:w-8 text-[41px] md:text-[61px] lg:text-[61px]  unset_display_sm  text-left md:text-center lg:text-left">
                  {services.title}
                </p>
              </div>
              <div className="grid service_sm grid-cols-2 gap-x-20 gap-y-10 md:gap-x-40 md:gap-y-16 lg:gap-x-40 lg:gap-y-16  ">
                <div className="lg:w-[340px]  lg:mb-0">
                  <li className="text-secondary h-[70px] md:h-[165px] lg:h-[165px] list-disc font-bold text-[32px] md:text-[39px] lg:text-[39px] ">
                    {services.content[0].title}
                  </li>
                  <p className="text-[16px] md:text-[20px] lg:text-[20px] text-white">
                    {services.content[0].description}
                  </p>
                </div>
                <div className="lg:w-[340px]  ">
                  <li className="text-secondary h-[115px] md:h-[165px] lg:h-[165px] font-bold  sm:list-disc text-[32px] md:text-[39px] lg:text-[39px] ">
                    {services.content[1].title}
                  </li>
                  <p className="text-[16px] md:text-[20px] lg:text-[20px] text-white">
                    {services.content[1].description}
                  </p>
                </div>
                <div className="lg:w-[340px]  lg:mb-0">
                  <li className="text-secondary h-[70px] md:h-[165px] lg:h-[165px] font-bold list-disc text-[32px] md:text-[39px] lg:text-[39px] ">
                    {services.content[2].title}
                  </li>
                  <ol className="list-decimal text-white text-[16px] md:text-[20px] lg:text-[20px]">
                    {services.content[2].description.map(
                      (item: any, index: any) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ol>
                </div>
                <div className="lg:w-[400px]  ">
                  <li className="text-secondary h-[115px] md:h-[165px] lg:h-[165px] text-[32px] md:text-[39px] lg:text-[39px] font-bold list-disc">
                    {services.content[3].title}
                  </li>
                  <div>
                    <p className="text-[#fff] text-[20px] pb-3">
                      {services.content[3].description}
                    </p>
                  </div>
                </div>
                <div className="lg:w-[340px] ">
                  <li className="text-secondary h-[70px] md:h-[165px] lg:h-[165px] font-bold list-disc text-[32px] md:text-[39px] lg:text-[39px] ">
                    {services.content[4].title}
                  </li>
                  <ol className="list-decimal text-white text-[16px] md:text-[20px] lg:text-[20px]">
                    {services.content[4].description.map(
                      (item: any, index: any) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
