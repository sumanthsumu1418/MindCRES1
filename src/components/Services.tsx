// import React from "react";
// import { bgImages } from "./constants/assets";
// const Services = () => {
//   return (
//     <div
//       className="m-6 h-[90vh] flex flex-row "
//       style={{ backgroundImage: `url(${bgImages.serviceBgImage})` }}
//     >
//       <h1 className="text-secondary p-6">
//         Our <br /> Services
//       </h1>
//       <div className="flex flex-wrap">
//         <ul className="list-disc ">
//           <div className="w-[350px]  h-[200px] ">
//             <li className="text-secondary">UI/UX Design</li>
//             <p>
//               Our team of highly skilled designers and developers bring together
//               the art of aesthetics and the science of functionality to ensure
//               your software stands out from the crowd.
//             </p>
//           </div>
//           <div className="w-[350px]  h-[200px]">
//             <li className="text-secondary">Web Development</li>
//             <ol className="list-decimal">
//               <li>Web Design</li>
//               <li>Custom Web Development</li>
//               <li>Mobile Optimisation</li>
//               <li>Content Management</li>
//               <li> E-Commerce solutions</li>
//               <li>Website Maintenance and Support</li>
//             </ol>
//           </div>
//           <div className="w-[350px]  h-[200px]">
//             <li className="text-secondary">Digital Marketing</li>
//             <ol className="list-decimal">
//               <li>Search Engine Optimisation</li>
//               <li>Pay-Per-Click Advertising</li>
//               <li>Content & Social media Marketing</li>
//               <li>Conversion Rate Optimisation</li>
//               <li>Online Reputation Management</li>
//             </ol>
//           </div>
//           <div className="w-[350px]  h-[200px]">
//             <li className="text-secondary">Application Development</li>
//             <p>
//               With 5 +years of experience in the field, we have a team of
//               talented developers who specialize in creating functional and
//               user-friendly apps for both Android and iOS platforms. Our goal is
//               to provide you with a high-quality app that not only meets your
//               business needs but also exceeds your expectations.
//             </p>
//           </div>
//           <div className="w-[350px]  h-[200px]">
//             <li className="text-secondary">Staff Augumentation</li>
//             <p>Benefits of our Staff Augmentation Software:</p>
//             <ol className="list-decimal">
//               <li>Streamline communication </li>
//               <li>Encourages constructive discussions</li>
//               <li>Maintains respectful environment</li>
//               <li>Efficient conflict resolution</li>
//               <li>Remote-work friendly</li>
//             </ol>
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import { bgImages } from "./constants/assets";

const Services = () => {
  return (
    <div
      className="m-6 h-[90vh] hidden flex flex-row flex-wrap"
      style={{ backgroundImage: `url(${bgImages.serviceBgImage})` }}
    >
      <h1 className="text-secondary p-6">
        Our <br /> Services
      </h1>
      <div className="flex flex-col  gap-6">
        <div className="w-[350px] h-[200px] ">
          <h2 className="text-secondary">UI/UX Design</h2>
          <p>
            Our team of highly skilled designers and developers bring together
            the art of aesthetics and the science of functionality to ensure
            your software stands out from the crowd.
          </p>
        </div>
        <div className="w-[350px] h-[200px]">
          <h2 className="text-secondary">Web Development</h2>
          <ol className="list-decimal">
            <li>Web Design</li>
            <li>Custom Web Development</li>
            <li>Mobile Optimisation</li>
            <li>Content Management</li>
            <li> E-Commerce solutions</li>
            <li>Website Maintenance and Support</li>
          </ol>
        </div>
        <div className="w-[350px] h-[200px]">
          <h2 className="text-secondary">Digital Marketing</h2>
          <ol className="list-decimal">
            <li>Search Engine Optimisation</li>
            <li>Pay-Per-Click Advertising</li>
            <li>Content & Social media Marketing</li>
            <li>Conversion Rate Optimisation</li>
            <li>Online Reputation Management</li>
          </ol>
        </div>
        <div className="w-[350px] h-[200px]">
          <h2 className="text-secondary">Application Development</h2>
          <p>
            With 5 +years of experience in the field, we have a team of talented
            developers who specialize in creating functional and user-friendly
            apps for both Android and iOS platforms. Our goal is to provide you
            with a high-quality app that not only meets your business needs but
            also exceeds your expectations.
          </p>
        </div>
        <div className="w-[350px] h-[200px]">
          <h2 className="text-secondary">Staff Augmentation</h2>
          <p>Benefits of our Staff Augmentation Software:</p>
          <ol className="list-decimal">
            <li>Streamline communication</li>
            <li>Encourages constructive discussions</li>
            <li>Maintains respectful environment</li>
            <li>Efficient conflict resolution</li>
            <li>Remote-work friendly</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Services;
