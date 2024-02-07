import { SET_FORM_DATA } from "../Action/contactUsActions";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const contactUsReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case SET_FORM_DATA:
        console.log("Reducer updating state with form data:", action.payload);
        return {
          ...state,
          ...action.payload,
        };
      // other cases...
      default:
        return state;
    }
  };
  

export default contactUsReducer;
