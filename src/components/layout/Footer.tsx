import React from "react";
import { icons } from "../constants/assets";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
<<<<<<< Updated upstream
        <div className="flex flex-row px-4 items-center justify-between bg-primary">
          <h3 className="text-secondary text-center font-[31px]">
            From concept to code,let's bring your code to life.
          </h3>

          <img src={icons.footer_logo} alt="footerLogo" />
        </div>
      </div>
=======
      <div className="flex flex-row items-center justify-between bg-primary">
        <h3 className="text-secondary text-center font-[31px]">
          From concept to code,let's bring your code to life.
        </h3>

        <img src={icons.footer_logo} alt="footerLogo" />
        </div>
        </div>
>>>>>>> Stashed changes
    </footer>

  );
};

export default Footer;
