import React from "react";
import { bgImages } from "./constants/assets";
import jsonData from "../data/data.json";

const AboutUs = () => {
  return (
    <>
      <div  id={jsonData.aboutUs.sectionId} className="container">
        <div className="mt-24 id  ">
          <span className="bg-secondary  h-[70px] w-[52%] md:w-[34%] lg:w-[34%] absolute left-0"></span>
          <h1 className=" font-medium relative z-9 text-[29px]  lg:text-[39px] text-primary h-[70px] flex items-center text-left">
          {jsonData.aboutUs.title}
          </h1>
        </div>

        <div className="flex lg:flex-row about_col mx-auto lg:w-[90%] sm:w-[84%] pb-[1%]  items-center justify-between ">
          <p className="w-full sm:w-[110%]  text-[20px] pt-12 sm:text-left">
          {jsonData.aboutUs.content}
          </p>

          <img
            className="lg:h-[392px] mt-10 md:mt-4 h-auto  lg:mr-4  bg-center bg-no-repeat relative  bg-cover"
            src={bgImages.aboutImage}
            alt="about"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
