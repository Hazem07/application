import {
  ALL_PRODUCT,
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
  REGISTER_PRODUCT,
} from "../constants/product";
import axios from "axios";

export const oneProduct = (id) => async (dispatch) => {
  console.log("hello");
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get(`/api/product/${id}`, config);
    dispatch({ type: ONE_PRODUCT, payload: result.data }); //{msg,contact}
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
  }
};

export const addProduct = (product, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.post("/api/product/addproduct", product, config);
    dispatch({ type: REGISTER_PRODUCT, payload: result.data });
    navigate("/Store", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
  }
};
// ********************************************************************************
// export const productlists = () => async (dispatch) => {
//   dispatch({ type: LOAD_PRODUCT });
//   const config = {
//     headers: {
//       authorization: localStorage.getItem("token"),
//     },
//   };
//   try {
//     let result = await axios.get("/api/product/allProducts", config);
//     dispatch({ type: ALL_PRODUCT, payload: result.data });
//     // Navigate("/profile", { replace: true });
//   } catch (error) {
//     dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
//   }
// };
// *************************************************************************
export const productlist = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/api/product/allProductme", config);
    dispatch({ type: ALL_PRODUCT, payload: result.data });
    // Navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
  }
};
// *****************************************************************************
export const productHome = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/api/product/allProduct", config);
    dispatch({ type: ALL_PRODUCT, payload: result.data });
    // Navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
  }
};
// ************************************************************************************
// **********************************************************************************
export const editProduct = (id, product, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/product/${id}`, product, config);
    dispatch(productlist());
    navigate("/Store", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT });
  }
};
// ************************************************************************:
// *********************************************************************
export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/product/delete/${id}`, config);
    dispatch(productlist());
    // navigate("/Store", { replace: true });
    // navigate("/profile", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response.data });
  }
};
