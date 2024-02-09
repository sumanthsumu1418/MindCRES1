import React from "react";
import { icons } from "../constants/assets";
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary">
      <div className="container lg:h-[300px] h-[240px] flex  ">
        <div className="flex w-[100%] flex-row items-center justify-between  ">
          <h3 className="text-secondary w-[40%]  text-21px md:text-[31px] lg:text-[31px]">
            From concept to code,let's bring your code to life.
          </h3>

          <img
            src={icons.footer_logo}
            alt="footerLogo"
            className="scale-[0.3] md:scale-[0.6] lg:scale-[1.2] object-container "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
