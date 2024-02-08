import React from "react";
import LeftSide from "./ContactUs/LeftSide";
import RightSide from "./ContactUs/RightSide";

const ContactUs: React.FC = () => {
  return (
    <div id="contact" className="my-8 container">
      <div className="mt-24 id flex flex-col-reverse items-end  ">
        <span className="bg-secondary  h-[70px] w-[34%] absolute right-0"></span>
        <h1 className=" font-medium relative z-9   text-[39px] text-primary h-[70px] flex items-center text-left">
          Get in touch
        </h1>
      </div>
      <div className=" flex w-3/4 my-36 flex-col w-[100%] sm:flex-row justify-around">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default ContactUs;
