export const SET_FORM_DATA = "SET_FORM_DATA";
export const setFormData = (formData: any) => {
    console.log("Dispatching setFormData action:", formData);
    return {
      type: SET_FORM_DATA,
      payload: formData,
    };
  };
  