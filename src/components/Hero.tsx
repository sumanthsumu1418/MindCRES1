import React from "react";
import { bgImages } from "./constants/assets";
import Button from "./common/Button/Button";

const Hero: React.FC = () => {
  function handleClick() {
    throw new Error("Function not implemented.");
  }

  return (
    <div
      className=" h-[40vh] flex flex-row items-center justify-around  bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImages.hero_bg})` }}
    >
      <div className="flex flex-col">
        <h1 className="text-secondary font-[4rem] font-bold">
          Welcome to
          <br /> Mindcres Technologies
        </h1>

        <p className="text-white font-[39px]">Innovate the Future</p>
      </div>
      <div className="flex justify-around">
        <Button
          onClick={handleClick}
          children="Lets connect"
          className="button_no_hover"
        />
      </div>
    </div>
  );
};

export default Hero;
