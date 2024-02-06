// import React from "react";
// import { bgImages } from "./constants/assets";
// const AboutUs = () => {
//   return (
//     <>
//       <div className="  my-3">
//         <h1 className="bg-secondary text-primary w-1/4 p-3 text-center">
//           About Us
//         </h1>
//       </div>

//       <div className="flex container flex-row justify-evenly">
//         <p className="w-3/5 pt-12">
//           At Mindcres Technologies , we are a leading provider of professional
//           software development services. With 5+ years of experience in the
//           industry, we have established ourselves as a reliable and trusted
//           partner for businesses of all sizes.
//           <br />
//           <br />
//           Our team of highly skilled and experienced developers is dedicated to
//           delivering quality software solutions that meet our clients' unique
//           requirements. We specialise in developing custom software
//           applications, web and mobile applications, and software integrations.
//         </p>
//         <img
//           className="h-8 mr-4 bg-center bg-no-repeat relative h-72 bg-cover"
//           src={bgImages.aboutImage}
//           alt="about"
//         />
//       </div>
//     </>
//   );
// };

// export default AboutUs;
import React from "react";
import { bgImages } from "./constants/assets";

const AboutUs = () => {
  return (
    <>
      <div className="my-3">
        <h1 className="bg-secondary text-primary w-1/4 p-3 text-center">
          About Us
        </h1>
      </div>

      <div className="flex flex-col items-center sm:flex-row justify-evenly container">
        

        <p className="w-full sm:w-3/5  pt-12 sm:text-left">
          At Mindcres Technologies, we are a leading provider of professional
          software development services. With 5+ years of experience in the
          industry, we have established ourselves as a reliable and trusted
          partner for businesses of all sizes.
          <br />
          <br />
          Our team of highly skilled and experienced developers is dedicated to
          delivering quality software solutions that meet our clients' unique
          requirements. We specialize in developing custom software
          applications, web and mobile applications, and software integrations.
        </p>

        <img
           className="h-8 mr-4 bg-center bg-no-repeat relative h-72 bg-cover"
           src={bgImages.aboutImage}
           alt="about"
         />
      </div>
    </>
  );
};

export default AboutUs;
