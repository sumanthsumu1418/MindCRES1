

import React, { useState } from "react";
import { icons } from "./constants/assets";
import Button from "./common/Button/Button";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="my-8">
        <div className="flex justify-end my-6">
          <h1 className="bg-secondary text-primary w-2/5 text-center p-4">
            Get in touch
          </h1>
        </div>
        <div className="container flex w-3/4 flex-col sm:flex-row justify-around">
          <div className="sm:w-full pt-4 flex flex-col">
            <p className="text-icongold pb-4 w-4/5">
              Contact us today to discuss your digital transformation goals and
              let us help you grow your business.
            </p>

            <div className="max-w-md bg-white">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 px-6 py-2 w-full border rounded-2xl"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 py-2 px-6 w-full border rounded-2xl"
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={parseInt("4")}
                    className="mt-1 py-2 px-6 w-full border rounded-4xl"
                    required
                  ></textarea>
                </div>

                {/* <button
                  type="submit"
                  className="bg-primary text-white p-2 rounded-lg hover:bg-secondary"
                >
                  Submit
                </button> */}
                <div className="flex justify-end">
                  <Button className="button_shadow" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="sm:w-full flex flex-col lg:justify-between mx-auto p-6">
            <div >
              <span className="text-primary text-[28px] ">Visit</span>
              <span className="text-secondary text-[28px]"> Us</span>
              <p className="text-primary text-[15px]">
                4-91/1, Penamaluru Vijayawada, Krishna district, Andhra Pradesh,
                521137, India.
              </p>
            </div>
            <div>
              <span className="text-primary text-[28px]">Email</span>
              <span className="text-secondary text-[28px]"> Us</span>
              <p className="text-primary text-[15px]">sample@example.com</p>
            </div>
            <div>
              <span className="text-primary text-[28px]">Call</span>
              <span className="text-secondary text-[28px]"> Us</span>
              <p className="text-primary text-[15px]">+ 91 7901054999</p>
            </div>
            <div>
              <span className="text-primary text-[28px]">Follow</span>
              <span className="text-secondary text-[28px]"> Us</span>
              <div className="flex">
                <img src={icons.linkedinIcon} alt="linkedin" />
                <a
                  href="https://www.linkedin.com/company/viaticum-in/"
                  className="text-primary underline text-[15px]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div> */}
          <div className="sm:w-full flex flex-col lg:justify-between mx-auto p-6">
            <div className="mb-4">
              <span className="text-primary text-[28px] ">Visit</span>
              <span className="text-secondary text-[28px]"> Us</span>
              <p className="text-primary text-[15px]">
                4-91/1, Penamaluru Vijayawada, Krishna district, Andhra Pradesh,
                521137, India.
              </p>
            </div>
            <div className="mb-4">
              <span className="text-primary text-[28px]">Email</span>
              <span className="text-secondary text-[28px]"> Us</span>
              <p className="text-primary text-[15px]">sample@example.com</p>
            </div>
            <div className="mb-4">
              <span className="text-primary text-[28px]">Call</span>
              <span className="text-secondary text-[28px]"> Us</span>
              <p className="text-primary text-[15px]">+ 91 7901054999</p>
            </div>
            <div className="mb-4">
              <span className="text-primary text-[28px]">Follow</span>
              <span className="text-secondary text-[28px]"> Us</span>
              <div className="flex">
                <img src={icons.linkedinIcon} alt="linkedin" />
                <a
                  href="https://www.linkedin.com/company/viaticum-in/"
                  className="text-primary underline text-[15px]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
