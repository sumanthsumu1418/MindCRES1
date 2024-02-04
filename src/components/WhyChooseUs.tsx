// import React from 'react'
// import { icons } from './constants/assets'
// const WhyChooseUs = () => {
//   return (
//     <div className="m-3">
//       <h1>Why choose us?</h1>
//       <div>
//         <div className="flex flex-col items-center">
//           <img
//             src={icons.expertiseIcon}
//             alt="expertise"
//             className="w-[100px] h-[84px] bg-primary rounded-full"
//           />
//           <h3 className="text-primary ">Expertise</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <img
//             src={icons.clientIcon}
//             alt="client"
//             className="w-[100px] h-[84px] bg-primary rounded-full"
//           />
//           <h3 className="text-primary ">Client-centric</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <img
//             src={icons.qualityIcon}
//             alt="quality"
//             className="w-[100px] h-[84px] bg-primary rounded-full"
//           />
//           <h3 className="text-primary ">Quality Assurance</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <img
//             src={icons.clockIcon}
//             alt="clock"
//             className="w-[100px] h-[84px] bg-primary rounded-full"
//           />
//           <h3 className="text-primary ">Timely Delivery</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <img
//             src={icons.moneyIcon}
//             alt="money"
//             className="w-[100px] h-[84px] bg-primary rounded-full"
//           />
//           <h3 className="text-primary ">Costly Effective</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <img
//             src={icons.supportIcon}
//             alt="support"
//             className="w-[100px] h-[84px] bg-primary rounded-full"
//           />
//           <h3 className="text-primary ">Post-Development Support</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhyChooseUs


import React from "react";
import { icons } from "./constants/assets";

const WhyChooseUs = () => {
  const services = [
    { icon: icons.expertiseIcon, text: "Expertise" },
    { icon: icons.clientIcon, text: "Client-centric" },
    { icon: icons.qualityIcon, text: "Quality Assurance" },
    { icon: icons.clockIcon, text: "Timely Delivery" },
    { icon: icons.moneyIcon, text: "Costly Effective" },
    { icon: icons.supportIcon, text: "Post-Development Support" },
  ];

  return (
    <div className="m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <h1 className="col-span-full text-center text-secondary">
        Why choose us?
      </h1>
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={service.icon}
            alt={service.text.toLowerCase()}
            className="w-24 h-24 bg-primary rounded-full p-5"
          />
          <h3 className="text-primary">{service.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
