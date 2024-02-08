// ContactUs.tsx

import React from "react";
import { icons } from "../constants/assets";

const RightSide: React.FC = () => {
  return (
    <>
      <div className="sm:w-full flex flex-col  ml-[10%] p-6">
        <div className="mb-4">
          <span className="text-primary text-[39px] ">Visit</span>
          <span className="text-secondary text-[39px]"> Us</span>
          <p className="text-primary w-[80%] text-[20px] pb-6 mt-6">
            4-91/1, Penamaluru Vijayawada, Krishna district, Andhra Pradesh,
            521137, India.
          </p>
        </div>
        <div>
          <div className="mb-4">
            <span className="text-primary text-[39px]">Email</span>
            <span className="text-secondary text-[39px]"> Us</span>
            <p className="text-primary text-[20px] pb-6 mt-6">
              sample@example.com
            </p>
          </div>
          <div className="mb-4">
            <span className="text-primary text-[39px]">Call</span>
            <span className="text-secondary text-[39px]"> Us</span>
            <p className="text-primary text-[20px] mt-6 pb-6">
              + 91 7901054999
            </p>
          </div>
          <div className="mb-4">
            <span className="text-primary text-[39px]">Follow</span>
            <span className="text-secondary text-[39px]"> Us</span>
            <div className="flex items-center mt-6 ">
              <span className="h-[34.8px] flex justify-center items-center  rounded-sm bg-[#0076B2] w-[34.8px]">
                <img src={icons.linkedinIcon} alt="linkedin" className=" " />
              </span>

              <a
                href="https://www.linkedin.com/company/viaticum-in/"
                className="text-primary  ml-4 border-b border-solid border-[#000]  text-[20px]"
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
