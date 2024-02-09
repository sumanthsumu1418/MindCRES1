import React from "react";
import { bgImages } from "./constants/assets";
import Button from "./common/Button/Button";

const Hero: React.FC = () => {
  function handleClick() {
    throw new Error("Function not implemented.");
  }

  return (
<<<<<<< Updated upstream
    <>

    <div className="h-[40vh] relative flex flex-col items-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${bgImages.hero_bg})` }}>
  <div className="flex container flex-col justify-evenly items-center sm:flex-row">
    <div className="flex flex-col ">
      <h1 className="text-secondary text-3xl sm:text-5xl line-height font-bold">
        Welcome to
        <br /> Mindcres Technologies
      </h1>

      <p className="text-white text-base sm:text-[19px] pt-6">
        Innovate the Future
      </p>
=======
    <div className="container">
      <div
        className=" h-[40vh] flex flex-row items-center justify-around  relative"
        style={{ backgroundImage: `url(${bgImages.hero_bg})` }}
      >
        <div className="flex justify-around">
          <h1 className="text-secondary font-[4rem] font-bold">
            Welcome to
            <br /> Mindcres Technologies
          </h1>

          <p className="text-white font-[39px]">Innovate the Future</p>
        </div>
        <div className="">
          <Button
            onClick={handleClick}
            children="Lets connect"
            className="button_no_hover"
          />
        </div>
      </div>
>>>>>>> Stashed changes
    </div>

    <div className="flex flex-col mt-6 sm:mt-0">
      <Button onClick={handleClick} children="Let's connect" className="button_no_hover" />
    </div>
  </div>
</div>
</>
  );
};

export default Hero;
