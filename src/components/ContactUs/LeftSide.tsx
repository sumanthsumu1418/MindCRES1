import { useForm, Controller } from "react-hook-form";
import React from "react";
import Button from "../common/Button/Button";
import { useDispatch } from "react-redux";
import { setFormData } from "../../Redux/Action/contactUsActions";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

const LeftSide: React.FC = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit = async (data: FormInput) => {
    try {
      const serviceId = "service_l73dm23";
      const templateId = "template_282oy5j";
      const userId = "prO3urQq49UeumI1w";

      const templateParams = {
        to_name: data.name,
        from_name: data.email,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);

      dispatch(setFormData(data));

    //   console.log("submitted:", data);

      // Show success toast
      toast.success("Submitted successfully!");

      // Delay the form reset by a short time (e.g., 500 milliseconds)
      setTimeout(() => {
        // Reset the form using the reset method from useForm
        reset();
      }, 500);
    } catch (error) {
    //   console.error("Error sending email:", error);
      // Show error toast if sending email fails
      toast.error("Error sending email. Please try again.");
    }
  };

  return (
    <div className="sm:w-full pt-4 flex flex-col">
      <p className="text-icongold pb-4 w-4/5">
        Contact us today to discuss your digital transformation goals and let us
        help you grow your business.
      </p>

      <div className="max-w-md bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <Controller
              render={({ field }) => (
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...field}
                  className={`mt-1 px-6 py-2 w-full border rounded-2xl ${
                    errors.name && "border-red-500"
                  }`}
                />
              )}
              control={control}
              name="name"
              rules={{ required: true }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <Controller
              render={({ field }) => (
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  {...field}
                  className={`mt-1 py-2 px-6 w-full border rounded-2xl ${
                    errors.email && "border-red-500"
                  }`}
                />
              )}
              control={control}
              name="email"
              rules={{
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message">Message</label>
            <Controller
              render={({ field }) => (
                <textarea
                  id="message"
                  placeholder="Message"
                  {...field}
                  rows={4}
                  className={`mt-1 py-2 px-6 w-full border rounded-4xl ${
                    errors.message && "border-red-500"
                  }`}
                ></textarea>
              )}
              control={control}
              name="message"
              rules={{ required: true }}
            />
          </div>

          <div className="flex justify-end">
            <Button className="button_shadow" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeftSide;
