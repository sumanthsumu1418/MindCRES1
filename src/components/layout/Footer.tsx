import React from "react";
import { icons } from "../constants/assets";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex flex-row justify-between">
        <div>
          <h3 className="text-secondary font-[31px]">
            From concept to code,let's bring a your code to life
          </h3>
        </div>

        <img src={icons.logo} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
