import React from "react";
import { icons } from "../constants/assets";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container ">
        <div className="flex flex-col sm:flex-row px-12 items-center justify-between bg-primary">
          <h3 className="text-secondary sm:pt-8 w-60 font-[38px]">
            From concept to code,let's bring your code to life.
          </h3>

          <img
            src={icons.footer_logo}
            alt="footerLogo"
            className="w-64 h-32 object-contain m-6 sm:w-72 sm:h-24 "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
