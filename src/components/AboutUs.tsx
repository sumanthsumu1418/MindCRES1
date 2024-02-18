import React from "react";
import { bgImages } from "./constants/assets";

const AboutUs = () => {
  return (
    <>
      <div id="about" className="container">
        <div className="mt-24 id  ">
          <span className="bg-secondary  h-[70px] w-[52%] md:w-[34%] lg:w-[34%] absolute left-0"></span>
          <h1 className=" font-medium relative z-9 text-[29px]  lg:text-[39px] text-primary h-[70px] flex items-center text-left">
            About Us
          </h1>
        </div>

        <div className="flex lg:flex-row about_col mx-auto lg:w-[90%] sm:w-[84%] pb-[1%]  items-center justify-between ">
          <p className="w-full sm:w-[110%]  text-[20px] pt-12 sm:text-left">
            At Mindcres Technologies, we are a leading provider of professional
            software development services. With 5+ years of experience in the
            industry, we have established ourselves as a reliable and trusted
            partner for businesses of all sizes.
            <br />
            <br />
            Our team of highly skilled and experienced developers is dedicated
            to delivering quality software solutions that meet our clients'
            unique requirements. We specialize in developing custom software
            applications, web and mobile applications, and software
            integrations.
          </p>

          <img
            className="lg:h-[392px] mt-10 md:mt-4 h-auto  lg:mr-4  bg-center bg-no-repeat relative  bg-cover"
            src={bgImages.aboutImage}
            alt="about"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
