import {
  ALL_PRODUCT,
  CLEAR_ERRORS,
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
} from "../constants/product";

const initialState = {
  product: null,
  products: null,
  errors: null,
  isLoad: false,
  isAuth: false,
};
const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCT:
      return { ...state, isLoad: true };
    case ALL_PRODUCT:
      // localStorage.getItem("token", payload.token);
      return {
        ...state,
        isLoad: false,
        products: payload.products,
        isAuth: true,
      };
    case ONE_PRODUCT:
      return {
        ...state,
        isLoad: false,
        product: payload.product,
        isAuth: true,
      };

    case FAIL_PRODUCT:
      return { ...state, errors: payload.errors, isLoad: false };
    case CLEAR_ERRORS:
      return { ...state, errors: null };
    default:
      return state;
  }
};
export default productReducers;
