
import React from "react";
import { bgImages } from "./constants/assets";

const AboutUs = () => {
  return (
    <>
      <div id="about" className="container">
        <div className="my-7 id ">
          <span className="bg-secondary h-[70px] w-[34%] absolute left-0"></span>
          <h1 className=" font-bold relative z-9  text-[26px] text-primary h-[70px] flex items-center   text-left">
            About Us
          </h1>
        </div>

        <div className="flex   flex-col items-center sm:flex-row justify-between ">
          <p className="w-full sm:w-3/5   pt-12 sm:text-left">
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
            className="h-8 mr-4 bg-center bg-no-repeat relative h-72 bg-cover"
            src={bgImages.aboutImage}
            alt="about"
          />
        </div>
      </div>

    </>
  );
};

export default AboutUs;
