import { useForm, Controller } from "react-hook-form";
import React from "react";
import Button from "../common/Button/Button";
import { useDispatch } from "react-redux";
import { resetFormData, setFormData } from "../../Redux/Action/contactUsActions";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsonData from "../../data/data.json";

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
    setValue,
    formState: { errors },
  } = useForm<FormInput>();
  const { introText, formFields, submitButtonLabel } = jsonData.contactUs.leftSide;

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

      // Show success toast
      toast.success("Submitted successfully!");

      // Manually reset form values
      setValue("name", "");
      setValue("email", "");
      setValue("message", "");

      dispatch(resetFormData()); // Dispatch the resetFormData action

      console.log("Form reset");
    } catch (error) {
      // Show error toast if sending email fails
      toast.error("Error sending email. Please try again.");
    }
  };


  return (
    <div className="pt-12 ml-2 md:ml-12 lg:ml-8 md:pt-10 lg:pt-8 flex w-[100%] md:w-[110%] lg:w-[110%] flex-col">
      <p className="text-icongold text-[18px] md:text-[25px] lg:text-[25px]  pb-4 ">
      {introText}
      </p>

      <div className="max-w-[95%] md:max-w-md lg:max-w-md mt-8 bg-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[100%] form_md lg:w-[170%]  "
        >
          <div className="mb-4 md:mb-8 lg:mb-8 ">
            {/* <label htmlFor="name">Name</label> */}
            <Controller
              render={({ field }) => (
                <input
                type={formFields[0].type}
                id={formFields[0].label}
                  placeholder={formFields[0].placeholder}
                  {...field}
                  className={`mt-1 md:mt-1 lg:mt-1 px-6 py-1 md:px-6 md:py-2 lg:px-6 lg:py-2 text-[19px] md:text-[25px] lg:text-[25px] border-[1.5px] md:border-[3px] lg:border-[3px] border-[#B0B0B0] h-[60px] w-full rounded-full ${
                    errors.name && "border-red-500"
                  }`}
                />
              )}
              control={control}
              name="name"
              rules={{ required: true }}
            />
          </div>

          <div className="mb-4 md:mb-8 lg:mb-8 ">
            {/* <label htmlFor="email">Email Address</label> */}
            <Controller
              render={({ field }) => (
                <input
                  type={formFields[1].type}
                  id={formFields[1].label}
                  placeholder={formFields[1].placeholder}
                  {...field}
                  className={`mt-1 px-6 py-1 md:px-6 md:py-2 lg:px-6 lg:py-2 text-[19px] w-full h-[60px] border-[1.5px] md:border-[3px] lg:border-[3px] border-[#B0B0B0] rounded-full ${
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

          <div className="mb-4 md:mb-8 lg:mb-8 ">
            {/* <label htmlFor="message">Message</label> */}
            <Controller
              render={({ field }) => (
                <textarea
                  id={formFields[2].label}
                  placeholder={formFields[2].placeholder}
                  {...field}
                  rows={4}
                  className={`mt-1 px-6 py-1 md:px-6 md:py-2 lg:px-6 lg:py-2 text-[19px]  border-[1.5px] md:border-[3px] lg:border-[3px] border-[#B0B0B0] h-[126px] md:h-[276px] lg:h-[276px] w-full resize-none rounded-xl ${
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
            <Button className="button_shadow   " type="submit">
            {submitButtonLabel}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeftSide;
