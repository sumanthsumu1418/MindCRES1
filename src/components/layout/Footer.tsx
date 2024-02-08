import React from "react";
import { icons } from "../constants/assets";
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary">
      <div className="container h-[300px] flex  ">
        <div className="flex w-[100%] flex-col sm:flex-row items-center justify-between  ">
          <h3 className="text-secondary  w-[40%] text-[31px]">
            From concept to code,let's bring your code to life.
          </h3>

          <img
            src={icons.footer_logo}
            alt="footerLogo"
            className=" scale-1.2 object-contain "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
