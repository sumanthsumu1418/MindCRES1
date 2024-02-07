import React from "react";
import LeftSide from "./ContactUs/LeftSide";
import RightSide from "./ContactUs/RightSide";

const ContactUs: React.FC = () => {
  return (
    <div id="contact" className="my-8">
      <div className="flex justify-end my-6">
        <span className="bg-secondary h-[70px] flex w-[44%] absolute right-0"></span>
        <h1 className=" font-bold text-center sm:mr-16 relative z-9 items-center text-center text-[26px] text-primary h-[70px] flex">
          Get in touch
        </h1>
      </div>
      <div className="container flex w-3/4 flex-col sm:flex-row justify-around">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default ContactUs;
