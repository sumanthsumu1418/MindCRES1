import React from "react";
import { bgImages } from "./constants/assets";
import Button from "./common/Button/Button";
import jsonData from "../data/data.json";

const Hero: React.FC = () => {
  function handleClick() {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div
        className="lg:h-[500px] md:h-[410px] h-[450px] lg:mt-[182px]  md:mt-[135px] mt-[135px] relative flex  flex-col items-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${bgImages.hero_bg})` }}
      >
        <div className="flex container h-[100%] mx-auto lg:w-[44%] lg:w-[60%] w-[75%] flex-col justify-evenly items-start ">
          <div className="flex flex-col ">
            <h1 className="text-secondary w-[644px] text-[36px] md:text-[49px] lg:text-[49px] leading-[1.3] font-bold">
              {jsonData.hero.title}
            </h1>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col mt-[-13%] sm:mt-[-9%] lg:items-center w-[100%] justify-between">
            <p className="text-white lg:text-[39px]  text-[29px] ">
              {jsonData.hero.subtitle}
            </p>

            <a href="#contact">
              <Button
                onClick={handleClick}
                children={jsonData.hero.buttonText}
                className=" button_no_hover text-[16px] md:text-[20px] lg:text-[20px] px-6 py-1 lg:py-0  lg:px-0 scale-[1] mt-8 md:mt-0 lg:mt-0"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
