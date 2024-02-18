import React from "react";
import { icons } from "../constants/assets";
import jsonData from "../../data/data.json"; 

const Footer: React.FC = () => {

  return (
    <footer className="bg-primary">
      <div className="container h-[180px] md:h-[300px] lg:h-[300px] h-[240px] flex  ">
        <div className="flex w-[100%] flex-row items-center justify-between  ">
          <h3 className="text-secondary w-[40%] text-23px md:text-[31px] lg:text-[31px]">
            {jsonData.footer.content}
          </h3>

          <img
            src={icons.footer_logo}
            alt="footerLogo"
            className="w-[182px] lg:h-[103px] md:w-[482px] lg:h-[233px] lg:w-[482px] lg:h-[233px] object-contain "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
