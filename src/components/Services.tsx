import React from "react";
import { bgImages } from "./constants/assets";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="pl-4 pt-8 h-[115%] pb-16 id:#services bg-cover bg-center  relative"
      style={{ backgroundImage: `url(${bgImages.service_bg})` }}
    >
      <div className="absolute inset-0 filter backdrop-blur-sm  bg-opacity-80 bg-[#191919] "></div>
      <div className="relative z-10">
        <div className="container py-8 md:py-16 lg:py-16">
          <ul>
            <div className="lg:flex lg:flex-row justify-between">
              <div className="lg:w-1/4 relative mb-12 md:mb-16 lg:mb-16">
                <p className=" text-secondary font-bold p-0 md:p-6 lg:p-6 w-48 md:-w-24 lg:w-8 text-[41px] md:text-[61px] lg:text-[61px]  unset_display_sm  text-left md:text-center lg:text-left">
                  Our Services
                </p>
              </div>
              <div className="grid service_sm grid-cols-2 gap-x-20 gap-y-10 md:gap-x-40 md:gap-y-16 lg:gap-x-40 lg:gap-y-16  ">
                <div className="lg:w-[340px]  lg:mb-0">
                  <li className="text-secondary h-[70px] md:h-[165px] lg:h-[165px] list-disc font-bold text-[32px] md:text-[39px] lg:text-[39px] ">
                    UI/UX Design
                  </li>
                  <p className="text-[16px] md:text-[20px] lg:text-[20px] text-white">
                    Our team of highly skilled designers and developers bring
                    together the art of aesthetics and the science of
                    functionality to ensure your software stands out from the
                    crowd.
                  </p>
                </div>
                <div className="lg:w-[340px]  ">
                  <li className="text-secondary h-[115px] md:h-[165px] lg:h-[165px] font-bold  sm:list-disc text-[32px] md:text-[39px] lg:text-[39px] ">
                    Application Development
                  </li>
                  <p className="text-[16px] md:text-[20px] lg:text-[20px] text-white">
                    With 5+ years of experience in the field, we have a team of
                    talented developers who specialize in creating functional
                    and user-friendly apps for both Android and iOS platforms.
                    Our goal is to provide you with a high-quality app that not
                    only meets your business needs but also exceeds your
                    expectations.
                  </p>
                </div>
                <div className="lg:w-[340px]  lg:mb-0">
                  <li className="text-secondary h-[70px] md:h-[165px] lg:h-[165px] font-bold list-disc text-[32px] md:text-[39px] lg:text-[39px] ">
                    Web Development
                  </li>
                  <ol className="list-decimal text-white text-[16px] md:text-[20px] lg:text-[20px]">
                    <li>Web Design</li>
                    <li>Custom Web Development</li>
                    <li>Mobile Optimization</li>
                    <li>Content Management</li>
                    <li>E-Commerce solutions</li>
                    <li>Website Maintenance and Support</li>
                  </ol>
                </div>
                <div className="lg:w-[400px]  ">
                  <li className="text-secondary h-[115px] md:h-[165px] lg:h-[165px] text-[32px] md:text-[39px] lg:text-[39px] font-bold list-disc">
                    Staff Augmentation
                  </li>
                  <div>
                    <p className="text-[#fff] text-[20px] pb-3">
                      Benefits of our Staff Augmentation Software:
                    </p>
                    <ol className="list-decimal text-[16px] md:text-[20px] lg:text-[20px] text-white">
                      <li>Streamline communication</li>
                      <li>Encourages constructive discussions</li>
                      <li>Maintains respectful environment</li>
                      <li>Efficient conflict resolution</li>
                      <li>Remote-work friendly</li>
                    </ol>
                  </div>
                </div>
                <div className="lg:w-[340px] ">
                  <li className="text-secondary h-[70px] md:h-[165px] lg:h-[165px] font-bold list-disc text-[32px] md:text-[39px] lg:text-[39px] ">
                    Digital Marketing
                  </li>
                  <ol className="list-decimal text-white text-[16px] md:text-[20px] lg:text-[20px]">
                    <li>Search Engine Optimization</li>
                    <li>Pay-Per-Click Advertising</li>
                    <li>Content & Social Media Marketing</li>
                    <li>Conversion Rate Optimization</li>
                    <li>Online Reputation Management</li>
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
