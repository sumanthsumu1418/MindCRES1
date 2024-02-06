



import React from "react";
import { bgImages } from "./constants/assets";

const Services: React.FC = () => {
  return (
    <div
      className="pl-4 pt-8 min-h-[650px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImages.serviceBgImage})` }}
    >
      <div className="container">
        <div className="lg:flex lg:flex-row justify-evenly">
          <div className="lg:w-1/4 mb-6">
            <h1 className="text-secondary p-6 text-3xl text-center lg:text-left">
              Our <br /> Services
            </h1>
          </div>
          <div className="lg:flex lg:flex-col lg:gap-6">
            <div className="lg:w-[340px] h-[190px] mb-6 lg:mb-0">
              <h2 className="text-secondary text-xl h-12">UI/UX Design</h2>
              <p className="text-[13px]">
                Our team of highly skilled designers and developers bring together
                the art of aesthetics and the science of functionality to ensure
                your software stands out from the crowd.
              </p>
            </div>
            <div className="lg:w-[340px] h-[190px] mb-6 lg:mb-0">
              <h2 className="text-secondary text-xl h-12">Web Development</h2>
              <ol className="list-decimal text-[13px]">
                <li>Web Design</li>
                <li>Custom Web Development</li>
                <li>Mobile Optimization</li>
                <li>Content Management</li>
                <li>E-Commerce solutions</li>
                <li>Website Maintenance and Support</li>
              </ol>
            </div>
            <div className="lg:w-[340px] h-[190px]">
              <h2 className="text-secondary text-xl h-12">Digital Marketing</h2>
              <ol className="list-decimal text-[13px]">
                <li>Search Engine Optimization</li>
                <li>Pay-Per-Click Advertising</li>
                <li>Content & Social Media Marketing</li>
                <li>Conversion Rate Optimization</li>
                <li>Online Reputation Management</li>
              </ol>
            </div>
          </div>
         <div className=''>

          <div className="lg:w-[340px] h-[190px] ">
            <h2 className="text-secondary text-xl h-12">Application Development</h2>
            <p className="text-[13px]">
              With 5+ years of experience in the field, we have a team of talented
              developers who specialize in creating functional and user-friendly
              apps for both Android and iOS platforms. Our goal is to provide you
              with a high-quality app that not only meets your business needs but
              also exceeds your expectations.
            </p>
          </div>
          <div className="lg:w-[400px]  h-[190px]">
            <ul>
              <p className="text-secondary text-xl h-12 list-circle">
                Staff Augmentation
              </p>
            </ul>
            <p>Benefits of our Staff Augmentation Software:</p>
            <ol className="list-decimal text-[13px]">
              <li>Streamline communication</li>
              <li>Encourages constructive discussions</li>
              <li>Maintains respectful environment</li>
              <li>Efficient conflict resolution</li>
              <li>Remote-work friendly</li>
            </ol>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

