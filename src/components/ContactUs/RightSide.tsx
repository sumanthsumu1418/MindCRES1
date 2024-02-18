// ContactUs.tsx

import React from "react";
import { icons } from "../constants/assets";

const RightSide: React.FC = () => {
  return (
    <>
      <div className="sm:w-full flex flex-col ml-0 md:ml-[10%] lg:ml-[10%] mt-4 md:mt-0 lg:mt-0  p-6">
        <div className="mb-2 md:mb-4 lg:mb-4">
          <span className="text-primary text-[32px] md:text-[39px] lg:text-[39px] ">
            Visit
          </span>
          <span className="text-secondary text-[32px] md:text-[39px] lg:text-[39px] ">
            {" "}
            Us
          </span>
          <p className="text-primary w-[100%] md:w-[80%] lg:w-[80%] text-[16px] md:text-[20px] lg:text-[20px] pb-2 md:pb-6 lg:pb-6 mt-2 md:mt-6 lg:mt-6">
            4-91/1, Penamaluru Vijayawada, Krishna district, Andhra Pradesh,
            521137, India.
          </p>
        </div>
        <div>
          <div className="mb-2 md:mb-4 lg:mb-4">
            <span className="text-primary text-[32px] md:text-[39px] lg:text-[39px] ">
              Email
            </span>
            <span className="text-secondary text-[32px] md:text-[39px] lg:text-[39px] ">
              {" "}
              Us
            </span>
            <p className="text-primary  text-[16px] md:text-[20px] lg:text-[20px] pb-2 md:pb-6 lg:pb-6 mt-2 md:mt-6 lg:mt-6">
              sample@example.com
            </p>
          </div>
          <div className="mb-2 md:mb-4 lg:mb-4">
            <span className="text-primary text-[32px] md:text-[39px] lg:text-[39px] ">
              Call
            </span>
            <span className="text-secondary text-[32px] md:text-[39px] lg:text-[39px] ">
              {" "}
              Us
            </span>
            <p className="text-primary text-[16px] md:text-[20px] lg:text-[20px]  mt-2 md:mt-6 lg:mt-6 pb-2 md:pb-6 lg:pb-6">
              + 91 7901054999
            </p>
          </div>
          <div className="mb-4">
            <span className="text-primary text-[32px] md:text-[39px] lg:text-[39px] ">
              Follow
            </span>
            <span className="text-secondary text-[32px] md:text-[39px] lg:text-[39px] ">
              {" "}
              Us
            </span>
            <div className="flex items-center mt-2 md:mt-6 lg:mt-6 ">
              <span className="h-[34.8px] flex justify-center items-center  rounded-sm bg-[#0076B2] w-[34.8px]">
                <img src={icons.linkedinIcon} alt="linkedin" className=" " />
              </span>

              <a
                href="https://www.linkedin.com/company/viaticum-in/"
                className="text-primary  ml-4 border-b border-solid border-[#000]  text-[16px] md:text-[20px] lg:text-[20px]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSide;
