import axios from "axios";
import { Navigate } from "react-router-dom";
import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  CLEAR_ERRORS,
  ONE_USER,
} from "../constants/user";
export const oneUser = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.get(`/api/user/${id}`, config);
    dispatch({ type: ONE_USER, payload: result.data }); //{msg,contact}
    Navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
export const register = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/register", user);
    dispatch({ type: REGISTER_USER, payload: result.data });
    navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const Login = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let { data } = await axios.post("api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: data });
    navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let { data } = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: data });
    // navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
export const editContact = (id, user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let { data } = await axios.put(`/api/user/${id}`, user, config);
    dispatch({ type: CURRENT_USER, payload: data });
    navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
