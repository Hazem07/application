import axios from "axios";
import {
  CLEAR_ERRORS,
  EDIT_COMPANY,
  FAIL_COMPANY,
  LOAD_COMPANY,
  ONE_COMPANY,
  REGISTER_COMPANY,
} from "../constants/company";
import { CURRENT_USER, FAIL_USER, LOAD_USER } from "../constants/user";

export const register = (company, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_COMPANY });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.post("/api/company/addcompany", company, config);
    dispatch({ type: REGISTER_COMPANY, payload: result.data });
    navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_COMPANY, payload: error.response.data });
  }
};
// export const edit = (company, navigate) => async (dispatch) => {
//   dispatch({ type: LOAD_COMPANY });
//   try {
//     let result = await axios.put("/api/company/edit/:_id", company);
//     dispatch({ type: EDIT_COMPANY, payload: result.data });
//     navigate("/profile", { replace: true });
//   } catch (error) {
//     dispatch({ type: FAIL_COMPANY, payload: error.response.data });
//   }
// };
export const oneCompany = (company, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_COMPANY });
  // dispatch({ type: LOAD_COMPANY });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/api/company/mycompany", config);
    dispatch({ type: ONE_COMPANY, payload: result.data });
    // navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_COMPANY, payload: error.response.data });
  }
};
export const oneCompanyy = (id, company, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_COMPANY });
  // dispatch({ type: LOAD_COMPANY });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get(`/api/company/${id}`, config);
    dispatch({ type: ONE_COMPANY, payload: result.data });
    // navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_COMPANY, payload: error.response.data });
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
