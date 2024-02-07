
import React from "react";
import { bgImages } from "./constants/assets";

const AboutUs = () => {
  return (
    <>
      <div id="about" className="container">
        <div className="mt-24 id  ">
          <span className="bg-secondary  h-[70px] w-[34%] absolute left-0"></span>
          <h1 className=" font-medium relative z-9  text-[39px] text-primary h-[70px] flex items-center text-left">
            About Us
          </h1>
        </div>

        <div className="flex mx-auto w-[90%] pb-[1%] flex-col  items-center sm:flex-row justify-between ">
          <p className="w-full sm:w-3/5 xl:text-[20px] pt-12 sm:text-left">
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
            className="h-[392px] mr-4 bg-center bg-no-repeat relative  bg-cover"
            src={bgImages.aboutImage}
            alt="about"
          />
        </div>
      </div>

    </>
  );
};

export default AboutUs;
