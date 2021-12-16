import {
  CLEAR_ERRORS,
  CURRENT_COMPANY,
  FAIL_COMPANY,
  LOAD_COMPANY,
  ONE_COMPANY,
  REGISTER_COMPANY,
} from "../constants/company";

const initialState = {
  company: null,
  errors: null,
  isLoad: false,
  isAuth: false,
  isOwner: false,
};
const contactReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_COMPANY:
      return { ...state, isLoad: true };
    case REGISTER_COMPANY:
      // localStorage.getItem("token", payload.token);
      return {
        ...state,
        isLoad: false,
        company: payload.company,
        isAuth: true,
        isOwner: true,
      };
    case ONE_COMPANY:
      return { ...state, isLoad: false, company: payload.company };
    // case EDIT_COMPANY:
    //   localStorage.setItem("token", payload.token);
    //   return {
    //     ...state,
    //     isLoad: false,
    //     company: payload.company,
    //     isAuth: true,
    //   };
    case CURRENT_COMPANY:
      return {
        ...state,
        company: payload.company,
        isLoad: false,
        isAuth: true,
      };
    case FAIL_COMPANY:
      return { ...state, errors: payload.errors, isLoad: false };
    case CLEAR_ERRORS:
      return { ...state, errors: null };
    default:
      return state;
  }
};
export default contactReducers;
