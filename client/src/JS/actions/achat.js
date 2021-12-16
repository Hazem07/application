import axios from "axios";
import { COMMANDER, FAIL_ACHAT, GET, LOAD_ACHAT } from "../constants/achat";

export const addCommande = (achat) => async (dispatch) => {
  dispatch({ type: LOAD_ACHAT });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.post("/api/achat/commande", achat, config);
    dispatch({ type: COMMANDER, payload: result.data });
    // navigate("/Store", { replace: true });
  } catch (error) {
    dispatch({ type: FAIL_ACHAT, payload: error.response.data });
  }
};
export const oneCommande = (id) => async (dispatch) => {
  console.log("hello");
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_ACHAT });
  try {
    let result = await axios.get(`/api/achat/${id}`, config);
    dispatch({ type: GET, payload: result.data }); //{msg,contact}
  } catch (error) {
    dispatch({ type: FAIL_ACHAT, payload: error.response.data });
  }
};
