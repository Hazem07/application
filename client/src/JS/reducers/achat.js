import { COMMANDER, FAIL_ACHAT, GET, LOAD_ACHAT } from "../constants/achat";

const initialState = {
  achat: null,
  errors: null,
  isLoad: false,
  isAuth: false,
};
const achatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ACHAT:
      return { ...state, isLoad: true };
    case COMMANDER:
      return { ...state, isLoad: false, achat: payload.achat, isAuth: true };
    case GET:
      return {
        ...state,
        isLoad: false,
        product: payload.product,
        isAuth: true,
      };
    case FAIL_ACHAT:
      return { ...state, errors: null };
    default:
      return state;
  }
};
export default achatReducer;
