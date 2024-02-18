// RightSide.tsx

import React from "react";
import { icons } from "../constants/assets";
import jsonData from "../../data/data.json";

interface SocialMedia {
  platform: string;
  url: string;
}

interface ContactInfo {
  visit?: {
    heading: string;
    address: string;
  };
  email?: {
    heading: string;
    address: string;
  };
  call?: {
    heading: string;
    phoneNumber: string;
  };
  follow?: {
    heading: string;
    socialMedia: SocialMedia;
  };
}

const RightSide = ({contactUs}:any) => {
  const contactInfo: ContactInfo = contactUs.rightSide ;

  return (
    <>
      <div className="sm:w-full flex flex-col ml-0 md:ml-[10%] lg:ml-[10%] mt-4 md:mt-0 lg:mt-0  p-6">
        {contactInfo.visit && (
          <div className="mb-2 md:mb-4 lg:mb-4">
            <span className="text-primary text-[32px] md:text-[39px] lg:text-[39px] ">
              {contactInfo.visit.heading}
            </span>
            <span className="text-secondary text-[32px] md:text-[39px] lg:text-[39px] ">
              {" "}
              Us
            </span>
            <p className="text-primary w-[100%] md:w-[80%] lg:w-[80%] text-[16px] md:text-[20px] lg:text-[20px] pb-2 md:pb-6 lg:pb-6 mt-2 md:mt-6 lg:mt-6">
              {contactInfo.visit.address}
            </p>
          </div>
        )}
        {contactInfo.email && (
          <div className="mb-2 md:mb-4 lg:mb-4">
            <span className="text-primary text-[32px] md:text-[39px] lg:text-[39px] ">
              {contactInfo.email.heading}
            </span>
            <span className="text-secondary text-[32px] md:text-[39px] lg:text-[39px] ">
              {" "}
              Us
            </span>
            <p className="text-primary  text-[16px] md:text-[20px] lg:text-[20px] pb-2 md:pb-6 lg:pb-6 mt-2 md:mt-6 lg:mt-6">
              {contactInfo.email.address}
            </p>
          </div>
        )}
        {contactInfo.call && (
          <div className="mb-2 md:mb-4 lg:mb-4">
            <span className="text-primary text-[32px] md:text-[39px] lg:text-[39px] ">
              {contactInfo.call.heading}
            </span>
            <span className="text-secondary text-[32px] md:text-[39px] lg:text-[39px] ">
              {" "}
              Us
            </span>
            <p className="text-primary text-[16px] md:text-[20px] lg:text-[20px]  mt-2 md:mt-6 lg:mt-6 pb-2 md:pb-6 lg:pb-6">
              {contactInfo.call.phoneNumber}
            </p>
          </div>
        )}
        {contactInfo.follow && (
          <div className="mb-4">
            <span className="text-primary text-[32px] md:text-[39px] lg:text-[39px] ">
              {contactInfo.follow.heading}
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
                href={contactInfo.follow.socialMedia.url}
                className="text-primary  ml-4 border-b border-solid border-[#000]  text-[16px] md:text-[20px] lg:text-[20px]"
              >
                {contactInfo.follow.socialMedia.platform}
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RightSide;
