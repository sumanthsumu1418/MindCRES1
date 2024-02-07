import React from "react";
import { bgImages } from "./constants/assets";

const Services: React.FC = () => {
  return (
    <div id="services"
      className="pl-4 pt-8 min-h-[650px] id:#services bg-cover  bg-center  relative"
      style={{ backgroundImage: `url(${bgImages.service_bg})` }}
    >
      <div className="absolute inset-0 filter blur-[17.1px] bg-opacity-50 bg-[#191919] "></div>
      <div className="relative z-10">
        <div className="container">
          <ul>
            <div className="lg:flex lg:flex-row justify-evenly">
              <div className="lg:w-1/4 mb-6">
                <p className="text-secondary font-bold p-6 w-8  text-3xl text-center lg:text-left">
                  Our Services
                </p>
              </div>
              <div className="lg:flex lg:flex-col lg:gap-6">
                <div className="lg:w-[340px] h-[190px] mb-6 lg:mb-0">
                  <li className="text-secondary list-disc font-bold text-xl h-12">
                    UI/UX Design
                  </li>
                  <p className="text-[13px] list-none text-white">
                    Our team of highly skilled designers and developers bring
                    together the art of aesthetics and the science of
                    functionality to ensure your software stands out from the
                    crowd.
                  </p>
                </div>
                <div className="lg:w-[340px] h-[190px] mb-6 lg:mb-0">
                  <li className="text-secondary font-bold list-disc text-xl h-12">
                    Web Development
                  </li>
                  <ol className="list-decimal text-white text-[13px]">
                    <li>Web Design</li>
                    <li>Custom Web Development</li>
                    <li>Mobile Optimization</li>
                    <li>Content Management</li>
                    <li>E-Commerce solutions</li>
                    <li>Website Maintenance and Support</li>
                  </ol>
                </div>
                <div className="lg:w-[340px] h-[190px]">
                  <li className="text-secondary font-bold list-disc text-xl h-12">
                    Digital Marketing
                  </li>
                  <ol className="list-decimal text-white text-[13px]">
                    <li>Search Engine Optimization</li>
                    <li>Pay-Per-Click Advertising</li>
                    <li>Content & Social Media Marketing</li>
                    <li>Conversion Rate Optimization</li>
                    <li>Online Reputation Management</li>
                  </ol>
                </div>
              </div>
              <div className="">
                <div className="lg:w-[340px] h-[190px] ">
                  <li className="text-secondary font-bold  sm:list-disc text-xl h-12">
                    Application Development
                  </li>
                  <p className="text-[13px] text-white">
                    With 5+ years of experience in the field, we have a team of
                    talented developers who specialize in creating functional
                    and user-friendly apps for both Android and iOS platforms.
                    Our goal is to provide you with a high-quality app that not
                    only meets your business needs but also exceeds your
                    expectations.
                  </p>
                </div>
                <div className="lg:w-[400px]  h-[190px]">
                  
                    <li className="text-secondary text-xl h-12 font-bold list-disc">
                      Staff Augmentation
                    </li>
                  
                  <p className="text-[#fff] pb-3">
                    Benefits of our Staff Augmentation Software:
                  </p>
                  <ol className="list-decimal text-[13px] text-white">
                    <li>Streamline communication</li>
                    <li>Encourages constructive discussions</li>
                    <li>Maintains respectful environment</li>
                    <li>Efficient conflict resolution</li>
                    <li>Remote-work friendly</li>
                  </ol>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;

