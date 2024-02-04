import React from "react";
import { bgImages } from "./constants/assets";
const AboutUs = () => {
  return (
    <>
      <div className=" my-3">
        <h1 className="bg-secondary text-primary w-[200px] text-center">
          About Us
        </h1>
      </div>
      <div className="flex justify-evenly">
        <p>
          At Mindcres Technologies , we are a leading provider of professional
          software development services. With 5+ years of experience in the
          industry, we have established ourselves as a reliable and trusted
          partner for businesses of all sizes.
          <br />
          <br />
          Our team of highly skilled and experienced developers is dedicated to
          delivering quality software solutions that meet our clients' unique
          requirements. We specialise in developing custom software
          applications, web and mobile applications, and software integrations.
        </p>
        <img className="h-8 mr-4 bg-cover" src={bgImages.aboutImage} alt="about" />
      </div>
    </>
  );
};

export default AboutUs;
