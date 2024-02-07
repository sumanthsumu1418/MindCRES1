import React from "react";
import { bgImages } from "./constants/assets";
import Button from "./common/Button/Button";

const Hero: React.FC = () => {
  function handleClick() {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div
        className="h-[500px]  relative flex  flex-col items-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${bgImages.hero_bg})` }}
      >
        <div className="flex container h-[100%] mx-auto w-[44%] lg:flex-col justify-evenly items-start sm:flex-row">
          <div className="flex flex-col ">
            <h1 className="text-secondary  text-[49px] leading-[1.3] font-bold">
              Welcome to
              <br /> Mindcres Technologies
            </h1>
          </div>
          <div className="flex flex-row xl:mt-[-13%] lg:items-center w-[100%] justify-between mt-6 sm:mt-0">
            <p className="text-white lg:text-[39px] text-base sm:text-[19px] ">
              Innovate the Future
            </p>

            <a href="#contact">
              <Button
                onClick={handleClick}
                children="Let's connect"
                className="button_no_hover"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
