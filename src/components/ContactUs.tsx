import React, { useState } from "react";
import { icons } from "./constants/assets";
const ContactUs = () => {
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
    // You can handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="flex justify-end my-6">
        <h1 className="bg-secondary text-primary w-2/5 text-center p-4">
          Get in touch
        </h1>
      </div>
      <div className="flex flex-row justify-around">
        <div className="w-1/2">
          <p className="text-icongold">
            Contact us today to discuss your digital transformation goals and
            let us help you grow your business.
          </p>
          <div className="max-w-md mx-auto p-6 bg-white ">
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

              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-lg hover:bg-secondary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col mx-auto p-6 justify-between">
          <div>
            <span className="text-primary">Visit</span>
            <span className="text-secondary"> Us</span>
            <p className="text-primary">
              4-91/1, Penamaluru Vijayawada, Krishna district, Andhra Pradesh,
              521137, India.
            </p>
          </div>
          <div>
            <span className="text-primary">Email</span>
            <span className="text-secondary"> Us</span>
            <p className="text-primary">sample@example.com</p>
          </div>
          <div>
            <span className="text-primary">Call</span>
            <span className="text-secondary"> Us</span>
            <p className="text-primary">+ 91 7901054999</p>
          </div>
          <div>
            <span className="text-primary">Follow</span>
            <span className="text-secondary"> Us</span>
            <div className="flex">
              <img src={icons.linkedinIcon} alt="linkedin" />
              <a
                href="https://www.linkedin.com/company/viaticum-in/"
                className="text-primary underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
