import React from "react";
import LeftSide from "./ContactUs/LeftSide";
import RightSide from "./ContactUs/RightSide";

const ContactUs: React.FC = () => {
  return (
    <div id="contact" className="my-8 container">
      <div className="mt-12 md:mt-24 lg:mt-24 id flex flex-col-reverse items-end  ">
        <span className="bg-secondary  h-[70px] w-[56%] md:w-[34%] lg:w-[34%] absolute right-0"></span>
        <h1 className=" font-medium relative z-9 text-[31px] md:text-[39px]  lg:text-[39px] text-primary h-[70px] flex items-center text-left">
          Get in touch
        </h1>
      </div>
      <div className=" flex  w-[80%] md:w-[100%] lg:w-[100%] my-36 flex-col-reverse md:flex-row lg:flex-row  justify-around">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default ContactUs;
