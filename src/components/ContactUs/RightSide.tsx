// ContactUs.tsx

import React from "react";
import { icons } from "../constants/assets";

const RightSide: React.FC = () => {
  return (
    <>
      <div className="sm:w-full flex flex-col  mx-auto p-6">
        <div className="mb-4">
          <span className="text-primary text-[28px] ">Visit</span>
          <span className="text-secondary text-[28px]"> Us</span>
          <p className="text-primary text-[15px]">
            4-91/1, Penamaluru Vijayawada, Krishna district, Andhra Pradesh,
            521137, India.
          </p>
        </div>
        <div>
          <div className="mb-4">
            <span className="text-primary text-[28px]">Email</span>
            <span className="text-secondary text-[28px]"> Us</span>
            <p className="text-primary text-[15px]">sample@example.com</p>
          </div>
          <div className="mb-4">
            <span className="text-primary text-[28px]">Call</span>
            <span className="text-secondary text-[28px]"> Us</span>
            <p className="text-primary text-[15px]">+ 91 7901054999</p>
          </div>
          <div className="mb-4">
            <span className="text-primary text-[28px]">Follow</span>
            <span className="text-secondary text-[28px]"> Us</span>
            <div className="flex">
              <img src={icons.linkedinIcon} alt="linkedin" />
              <a
                href="https://www.linkedin.com/company/viaticum-in/"
                className="text-primary underline text-[15px]"
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
